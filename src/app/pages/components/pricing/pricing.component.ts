import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

plans = [
  {
    name: 'Basic Plan',
    price: 'Free',
    monthly: false,
    icon: 'var(--free)',
    features: [
      { text: 'Unlimited courses', included: true },
      { text: 'Unlimited students', included: true },
      { text: "Basic access to learning materials", included: true },
      { text: 'Real-time collaboration tools', included: true },
      { text: 'Branding', included: true },
      { text: 'Basic spreadsheet tracking', included: true },
      { text: 'Limited templates and resources', included: true }
    ],
    button: 'Start free trial'
  },
  {
    name: 'Pro Plan',
    price: '$14.99',
    monthly: true,
    icon: 'var(--pro)',
    best: true,
    features: [
      { text: 'All features in Basic Plan', included: true },
      { text: 'Email automation for notifications and updates', included: true },
      { text: "Custom fields for personalized content", included: true },
      { text: 'Pro templates for creating professional courses', included: true },
      { text: 'Advanced reporting and export options', included: true },
      { text: 'Full access to customized spreadsheets', included: true },
      { text: 'No branding', included: true }
    ],
    button: 'Sign up'
  },

  {
    name: 'Pricing Saver',
    price: '$24.99',
    monthly: true,
    icon: 'var(--saver)',
    features: [
      { text: 'All features in Pro Plan', included: true },
      { text: 'Full access to AI-powered tutor for personalized learning', included: true },
      { text: "Advanced analytics suite for tracking student and employee performance", included: true },
      { text: 'Fully customizable dashboards and profiles for users', included: true },
      { text: 'Mobile app access for teachers and students', included: true },
      { text: 'Enhanced third-party integrations', included: true },
      { text: 'Priority support', included: true }
    ],
    button: 'Sign up'
  },
  {
    name: ' Enterprise Plan',
    price: '$39.99',
    monthly: true,
    icon: 'var(--enterprice)',
    features: [
      { text: 'All features in Advanced Plan', included: true },
      { text: 'Fully customizable LMS platform', included: true },
      { text: "Unlimited third-party integrations and extended tool access", included: true },
      { text: 'Full analytics and real-time performance tracking', included: true },
      { text: 'Custom mobile apps and integrations tailored for your needs', included: true },
      { text: 'Premium support and training', included: true },
      { text: 'Priority support', included: true }
    ],
    button: 'Sign up'
  },
];


}
