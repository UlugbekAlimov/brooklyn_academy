import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
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
}
