import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    { value: '4,000+', label: 'Users and still counting' },
    { value: '$25,000', label: 'In revenue and still generating' },
    { value: '3%', label: 'Flat platform fee' },
    { value: '5,152', label: 'Transactions this year' }
  ];
}
