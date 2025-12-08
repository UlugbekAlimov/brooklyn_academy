import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
  {
    title: 'Real-time collaboration.',
    text: 'An intuitive drag-and-drop interface for easy content management.'
  },
  {
    title: 'Guided tutorials.',
    text: 'A notification system that alerts users about important updates and messages.'
  },
  {
    title: 'User data protection.',
    text: 'A feedback system that allows users to share their thoughts and suggestions.'
  },
  {
    title: 'Third-party integration.',
    text: 'A responsive design that ensures optimal performance on all devices.'
  },
  {
    title: 'Adaptive profiles.',
    text: 'A dashboard that provides real-time analytics and customizable layouts.'
  },
  {
    title: 'Personalized themes.',
    text: 'A robust search tool that helps users find content quickly and efficiently.'
  }
];

}
