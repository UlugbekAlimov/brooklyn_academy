import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {

  projects = [
    {
      img: 'img/building.avif',
      title: 'The Zenith UI/UX'
    },
    {
      img: 'img/building.avif',
      title: 'The Atlas Interface'
    },
    {
      img: 'img/building.avif',
      title: 'The Serpentine Design'
    },
    {
      img: 'img/building.avif',
      title: 'Heritage Blueprint'
    },
    {
      img: 'img/building.avif',
      title: 'The Vaulted Architecture'
    },
    {
      img: 'img/building.avif',
      title: 'The Vaulted Architecture'
    },
    {
      img: 'img/building.avif',
      title: 'The Urban Experience'
    }
  ];
}
