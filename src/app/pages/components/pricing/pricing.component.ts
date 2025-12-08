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
    name: 'Pricing Starter',
    price: 'Free',
    monthly: false,
    icon: 'var(--free)',
    features: [
      { text: 'Unlimited leads', included: true },
      { text: 'Unlimited emails', included: true },
      { text: "No Aurora's branding", included: true },
      { text: 'Email automation', included: false },
      { text: 'Custom fields', included: false },
      { text: 'Pro templates', included: false },
      { text: 'Export leads and reports', included: false }
    ],
    button: 'Start free trial'
  },

  {
    name: 'Pricing Pro',
    price: '$14.99',
    monthly: true,
    icon: 'var(--pro)',
    best: true,
    features: [
      { text: 'Unlimited leads', included: true },
      { text: 'Unlimited emails', included: true },
      { text: "No Aurora's branding", included: true },
      { text: 'Email automation', included: true },
      { text: 'Custom fields', included: true },
      { text: 'Pro templates', included: true },
      { text: 'Export leads and reports', included: true }
    ],
    button: 'Sign up'
  },

  {
    name: 'Pricing Saver',
    price: '$24.99',
    monthly: true,
    icon: 'var(--saver)',
    features: [
      { text: 'Unlimited leads', included: true },
      { text: 'Unlimited emails', included: true },
      { text: "No Aurora's branding", included: true },
      { text: 'Email automation', included: true },
      { text: 'Custom fields', included: true },
      { text: 'Pro templates', included: true },
      { text: 'Export leads and reports', included: true }
    ],
    button: 'Sign up'
  }
];


}
