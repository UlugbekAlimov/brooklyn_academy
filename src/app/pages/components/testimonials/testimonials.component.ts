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
      name: 'Farhod Fayzulloev',
      role: 'CEO of FNF Global Inc',
      text: 'Brooklyn Academy’s LMS has been a game-changer for us. Their platform offers seamless integration for workforce development, with tools that support everything from real-time collaboration to analytics for performance tracking. Our team is now better equipped to handle operational challenges, and the training we’ve provided through the LMS has already shown a marked improvement in employee performance. Highly recommend!',
      stars: 5,
    },
    {
      img: 'img/building.avif',
      name: 'David Herrera',
      role: 'CEO of Kainat Transportation',
      text: 'As a logistics company, we face the constant challenge of keeping our workforce sharp and ready for the demands of the industry. Brooklyn Academy’s LMS has provided us with a unique solution—helping us train, manage, and track our drivers and operations with efficiency and clarity. The platform’s customizable features are tailored to our needs, making it an invaluable asset for workforce development',
      stars: 4,
    },
    {
      img: 'img/building.avif',
      name: 'Faizullokhon Yusupov',
      role: 'Co-Founder of B.A LMS',
      text: 'At Brooklyn Academy, we’re on a mission to redefine how logistics training is delivered. The LMS platform we’ve built is designed not just for students, but for real-world professionals who need relevant, up-to-date training. We’ve partnered with industry leaders, and the feedback from those using our system speaks for itself—empowering individuals and teams with the right skills at the right time.',
      stars: 5,
    },
    {
      img: 'img/building.avif',
      name: 'Arsalan Aria',
      role: 'CEO of SpaceX IT',
      text: 'As an IT-focused logistics company, staying ahead of technology and workforce needs is crucial. Brooklyn Academy’s LMS is the perfect fit for SpaceX ITS, helping us train our employees in the latest logistics management software and processes. The platform’s AI-powered tutor and personalized learning features have drastically improved our training efficiency, setting us up for continued success.',
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
      this.slidesToShow = 3; // Desktop
    } else {
      this.slidesToShow = 1; // Tablet + Mobile одинаково
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
        this.slider.nativeElement.style.transition =
          'transform 700ms ease-in-out';
      }, 700);
    } else {
      this.updateTransform();
    }
  }

  prev() {
    this.current--;

    if (this.current < this.original.length) {
      setTimeout(() => {
        this.current =
          this.testimonials.length -
          this.slidesToShow -
          this.original.length +
          this.original.length;
        this.slider.nativeElement.style.transition = 'none';
        this.updateTransform();
        void this.slider.nativeElement.offsetWidth;
        this.slider.nativeElement.style.transition =
          'transform 700ms ease-in-out';
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

    const endX =
      'changedTouches' in event
        ? event.changedTouches[0].clientX
        : event.clientX;

    const diff = endX - this.startX;

    // Порог для свайпа (например 50px)
    if (Math.abs(diff) > 50) {
      if (diff < 0) this.next();
      else this.prev();
    }

    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }
}
