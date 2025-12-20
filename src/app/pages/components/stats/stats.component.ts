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
    { value: '4,00+', label: 'Applicants' },
    { value: '100+', label: ' Interview Reports' },
    { value: '30+', label: 'Graduates' },
    { value: 'Real-time', label: 'Track progress & performance with real-time data' }
  ];
}
