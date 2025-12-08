// testimonials.component.ts
import {
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgFor, NgClass, NgStyle } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  current = 0;
  intervalId: any;
  isBrowser: boolean;
  slidesToShow = 3;

  original = [
    {
      img: 'img/building.avif',
      name: 'Jake Peralta',
      role: 'CEO, Limitless Ltd',
      text: 'I absolutely love the package I chose; it fits my needs perfectly!',
      stars: 5,
    },
    {
      img: 'img/building.avif',
      name: 'Charles Boyle',
      role: 'CEO, Limitless Ltd',
      text: 'The best decision for our company. Highly recommended!',
      stars: 4,
    },
    {
      img: 'img/building.avif',
      name: 'Terry Jeffords',
      role: 'CEO, Limitless Ltd',
      text: 'Exceptional service and reliable. Exceeded all expectations.',
      stars: 5,
    },
  ];

  // Дублируем для бесконечности
  testimonials = [...this.original, ...this.original, ...this.original];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.updateSlidesToShow();
      this.resetPosition();
      this.startAutoPlay();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.updateSlidesToShow();
      this.resetPosition();
    }
  }

  // Определяем сколько карточек показывать
updateSlidesToShow() {
  const width = window.innerWidth;

  if (width >= 1024) {
    this.slidesToShow = 3;    // Desktop
  } else {
    this.slidesToShow = 1;    // Tablet + Mobile одинаково
  }
}



  // Сброс позиции при смене количества карточек
  resetPosition() {
    this.current = this.original.length;
    this.updateTransform();
  }

  updateTransform() {
    if (!this.slider?.nativeElement) return;
    const percentage = (100 / this.slidesToShow) * this.current;
    this.slider.nativeElement.style.transform = `translateX(-${percentage}%)`;
  }

// В методе next() и prev() — небольшое исправление для полной ширины
next() {
  this.current++;

  const maxVisibleIndex = this.testimonials.length - this.slidesToShow;
  if (this.current > maxVisibleIndex) {
    setTimeout(() => {
      this.current = this.original.length; // прыжок в середину
      this.slider.nativeElement.style.transition = 'none';
      this.updateTransform();
      // возвращаем transition обратно через reflow
      void this.slider.nativeElement.offsetWidth;
      this.slider.nativeElement.style.transition = 'transform 700ms ease-in-out';
    }, 700);
  } else {
    this.updateTransform();
  }
}

prev() {
  this.current--;

  if (this.current < this.original.length) {
    setTimeout(() => {
      this.current = this.testimonials.length - this.slidesToShow - this.original.length + this.original.length;
      this.slider.nativeElement.style.transition = 'none';
      this.updateTransform();
      void this.slider.nativeElement.offsetWidth;
      this.slider.nativeElement.style.transition = 'transform 700ms ease-in-out';
    }, 700);
  } else {
    this.updateTransform();
  }
}

  startAutoPlay() {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => this.next(), 6000);
  }

  stopAutoPlay() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  // Пауза при наведении/касании
@HostListener('mousedown', ['$event'])
@HostListener('touchstart', ['$event'])
onDragStart(event: MouseEvent | TouchEvent) {
  this.stopAutoPlay();
  this.isDragging = true;
  this.startX = 'touches' in event ? event.touches[0].clientX : event.clientX;
}
private startX = 0;
private isDragging = false;


@HostListener('mousemove', ['$event'])
@HostListener('touchmove', ['$event'])
onDragMove(event: MouseEvent | TouchEvent) {
  if (!this.isDragging) return;
  // Можно добавить визуальный сдвиг — но можно без него
}

@HostListener('mouseup', ['$event'])
@HostListener('touchend', ['$event'])
onDragEnd(event: MouseEvent | TouchEvent) {
  if (!this.isDragging) return;
  this.isDragging = false;

  const endX = 'changedTouches' in event ?
    event.changedTouches[0].clientX :
    event.clientX;

  const diff = endX - this.startX;

  // Порог для свайпа (например 50px)
  if (Math.abs(diff) > 50) {
    if (diff < 0) this.next(); else this.prev();
  }

  this.startAutoPlay();
}

  ngOnDestroy() {
    this.stopAutoPlay();
  }
}