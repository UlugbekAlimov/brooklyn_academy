import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
 openIndex: number | null = 0;

  faqItems = [
    {
      question: 'What is Brooklyn Academy?',
      answer:
        'Brooklyn Academy is an innovative Learning Management System (LMS) designed to enhance training and workforce development. We provide seamless digital solutions for educational institutions and businesses to manage, track, and improve learning processes.',
    },
    {
      question: 'How do I get started with Brooklyn Academy?',
      answer:
        'Simply sign up on our website to begin your learning journey. Choose a plan that fits your needs, and you’ll get access to all the features necessary to kickstart your educational experience.',
    },
    {
      question: 'What makes Brooklyn Academy different from other LMS providers?',
      answer:
        'Our LMS is tailored to support both students and instructors. With real-time collaboration tools, advanced analytics, AI-driven support, and customizable features, we focus on delivering an engaging and efficient learning experience that is backed by real-world operational expertise.',
    },
    {
      question: 'Can I integrate Brooklyn Academy with other tools or platforms?',
      answer:
        'Yes, our platform supports third-party integrations, allowing you to connect with a wide range of tools and systems. This flexibility ensures you can work seamlessly within your existing workflow.',
    },
    {
      question: 'How does Brooklyn Academy ensure data privacy and security?',
      answer:
        'We take data protection seriously. Our platform uses advanced encryption, secure cloud storage, and regular security audits to ensure that your information is safeguarded at all times. Additionally, we comply with international data protection regulations to provide you with the utmost security.',
    },
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
