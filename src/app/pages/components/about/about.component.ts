import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  activeTab: 'goal' | 'approach' | 'strength' = 'goal';

  texts = {
    goal: `
    Our goal is simple: to equip remote teams with the tools and skills they need to excel, regardless of location. We’re here to make learning and collaboration effortless, enabling teams to reach their full potential.
 `,
    approach: `
      We take a hands-on, practical approach to workforce development. Through innovative learning methods, seamless integration, and cutting-edge technology, we help remote teams thrive in the digital age. We believe that the right tools can transform learning into an ongoing, engaging experience.  `,
    strength: `
      Our strength lies in our deep understanding of both technology and human potential. We combine industry-leading tools with data-driven insights, ensuring every team member gets the right training at the right time to maximize their impact.
  `,
  };
}
