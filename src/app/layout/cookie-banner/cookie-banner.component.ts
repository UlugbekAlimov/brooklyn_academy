import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

const CONSENT_KEY = 'cookie_consent_v1';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css',
})
export class CookieBannerComponent {
  protected readonly isVisible = signal(false);

  constructor() {
    if (this.isBrowser()) {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      this.isVisible.set(stored !== 'accepted');
    }
  }

  protected accept(): void {
    if (this.isBrowser()) {
      window.localStorage.setItem(CONSENT_KEY, 'accepted');
    }
    this.isVisible.set(false);
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
