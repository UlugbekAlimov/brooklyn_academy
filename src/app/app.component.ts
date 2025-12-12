import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FooterComponent } from "./layout/footer/footer.component";
import { CookieBannerComponent } from "./layout/cookie-banner/cookie-banner.component";

const ROUTES_WITHOUT_NAVBARS = ['/create-account', '/login', '/forgot-password', '/not-found'];

const matchesRoute = (url: string, route: string): boolean => {
  const normalizedUrl = url.split('?')[0];
  return normalizedUrl === route || normalizedUrl.startsWith(`${route}/`);
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CookieBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly router = inject(Router);

  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
  );

  protected readonly showNavbars = computed(() => {
    const navigationEnd = this.navigationEnd();

    return navigationEnd
      ? !ROUTES_WITHOUT_NAVBARS.some((route) =>
          matchesRoute(navigationEnd.urlAfterRedirects ?? navigationEnd.url, route),
        )
      : true;
  });
}
