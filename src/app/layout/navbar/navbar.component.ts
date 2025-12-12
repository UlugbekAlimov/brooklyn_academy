import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  mobileMenuOpen = false;
  isAnimating = false;
  pagesOpen = false;

  @ViewChild('pagesDropdown', { read: ElementRef }) dropdown!: ElementRef;
  @ViewChild('pagesBtn', { read: ElementRef }) pagesBtn!: ElementRef;

  togglePages() {
    if (!this.pagesOpen) {
      this.pagesOpen = true;
      this.isAnimating = false;
    } else {
      this.startCloseAnimation();
    }
  }

  private startCloseAnimation() {
    this.isAnimating = true;
    setTimeout(() => {
      this.pagesOpen = false;
      this.isAnimating = false;
    }, 180); 
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    if (!this.pagesOpen) return;

    const target = event.target as Node;

    if (this.pagesBtn?.nativeElement.contains(target)) return;

    if (this.dropdown?.nativeElement.contains(target)) return;

    this.startCloseAnimation();
  }

  toggleTheme() {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'black';

    if (isDark) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'black');
    }
  }

  scrollToSection(sectionId: string, event?: Event) {
    event?.preventDefault();
    const currentPath = (this.router.url.split('?')[0] || '').replace(/\/+$/, '');
    const isHome = currentPath === '' || currentPath === '/';

    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (isHome) {
      scroll();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(scroll, 150);
      });
    }

    this.mobileMenuOpen = false;

    if (this.pagesOpen) {
      this.startCloseAnimation();
    }
  }
}
