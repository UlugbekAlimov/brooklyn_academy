// parallax-image.directive.ts
import {
  Directive,
  ElementRef,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[parallaxImg]',
  standalone: true
})
export class ParallaxImageDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver;
  private visible = false;
  private rafId = 0;
  private lastY = 0;
  private ticking = false;
  private scrollHandler = this.onScroll.bind(this);

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // защита на случай, если элемент ещё не в DOM
    const node = this.el.nativeElement;
    if (!node) return;

    // fallback, если IntersectionObserver отсутствует
    const supportsIO = 'IntersectionObserver' in window;

    if (supportsIO) {
      this.io = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          const nowVisible = e.isIntersecting;
          if (nowVisible && !this.visible) {
            this.visible = true;
            window.addEventListener('scroll', this.scrollHandler, { passive: true });
            this.requestTick(); // один вызов для стартового положения
          } else if (!nowVisible && this.visible) {
            this.visible = false;
            window.removeEventListener('scroll', this.scrollHandler);
            cancelAnimationFrame(this.rafId);
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
      );
      this.io.observe(node);
    } else {
      // fallback: просто слушаем скролл всегда (редко требуется)
      this.visible = true;
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.requestTick();
    }

    // debug — временно включи, если хочешь видеть запускается ли директива
    // console.log('ParallaxImageDirective initialized for', node);
  }

  private onScroll() {
    // throttle через rAF
    this.requestTick();
  }

  private requestTick() {
    if (this.ticking) return;
    this.ticking = true;
    this.rafId = requestAnimationFrame(() => {
      this.ticking = false;
      this.update();
    });
  }

  private update() {
    if (!this.visible) return;
    const el = this.el.nativeElement;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;

    // вариант прогресса: центр изображения относительно центра viewport
    const elCenter = rect.top + rect.height / 2;
    const viewportCenter = vh / 2;
    const distance = (elCenter - viewportCenter) / viewportCenter; // -1 .. 1

    // ограничим и оттенок параллакса
    const clamped = Math.max(Math.min(distance, 1), -1);
    const maxShift = 40; // px
    const shift = clamped * maxShift * -1; // инвертировать направление если нужно

    el.style.setProperty('--shift', `${shift}px`);
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.io?.disconnect();
    window.removeEventListener('scroll', this.scrollHandler);
    cancelAnimationFrame(this.rafId);
  }
}
