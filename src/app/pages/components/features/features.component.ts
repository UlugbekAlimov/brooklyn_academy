import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  features = [
    {
      title: 'AI-Powered Content Creation & Personalization',
      text: 'Automatically generate customized training modules that are tailored to the learner’s role, skill level, and learning pace. AI technology enhances content creation, ensuring employees receive training that is both relevant and efficient.',
    },
    {
      title: 'Real-Time Progress Tracking & Analytics',
      text: 'Our platform provides detailed insights into learner performance. Managers and instructors can track progress, identify skill gaps, and provide targeted feedback in real time, ensuring better learning outcomes',
    },
    {
      title: 'Adaptive Learning Paths',
      text: 'Brooklyn Academy LMS offers personalized learning journeys for each employee, adapting the content to meet their evolving needs. This ensures that all learners progress at their own pace, receiving the right level of challenge at every stage',
    },
    {
      title: 'Mobile-First & Multi-Device Access',
      text: 'Employees can access the LMS from any device—smartphones, tablets, or desktops—ensuring that learning happens anytime, anywhere. Mobile-first design allows learners to continue their education while on the go, making training more flexible and accessible',
    },
    {
      title: 'Interactive Tools & Collaboration Features',
      text: 'Our LMS includes chat, forums, and group work features that encourage collaboration among learners. These interactive tools help students engage with their peers and instructors, enhancing their learning experience and fostering teamwork',
    },
    {
      title: 'Seamless Integration & Scalability',
      text: 'The Brooklyn Academy LMS integrates smoothly with existing systems like HR platforms, CRMs, and other corporate software. It’s scalable to fit businesses of all sizes, ensuring your company can grow without outgrowing the system.',
    },
  ];
}
