import { Component, signal, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit, OnDestroy {
  words = ['first', 'descong', 'third', 'fourth'];
  
  displayedText = signal('');
  cursorVisible = signal(true);

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  private typeSpeed = 100;
  private deleteSpeed = 60;
  private pauseAfterType = 1800;
  private pauseAfterDelete = 400;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAnimation();
      this.startCursor();
    } else {
      this.displayedText.set(this.words[0]);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private startAnimation() {
    this.typeNext();
  }

  private typeNext() {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      this.displayedText.set(currentWord.substring(0, this.charIndex + 1));
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        this.isDeleting = true;
        this.timer = setTimeout(() => this.typeNext(), this.pauseAfterType);
      } else {
        this.timer = setTimeout(() => this.typeNext(), this.typeSpeed);
      }
    } else {
      this.displayedText.set(currentWord.substring(0, this.charIndex));
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.timer = setTimeout(() => this.typeNext(), this.pauseAfterDelete);
      } else {
        this.timer = setTimeout(() => this.typeNext(), this.deleteSpeed);
      }
    }
  }

  private startCursor() {
    setInterval(() => {
      this.cursorVisible.update(v => !v);
    }, 500);
  }
}