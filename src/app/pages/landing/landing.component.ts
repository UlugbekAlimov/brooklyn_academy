import { Component } from '@angular/core';
import { MainComponent } from "../components/main/main.component";
import { WhoweareComponent } from "../components/whoweare/whoweare.component";
import { ClientsComponent } from "../components/clients/clients.component";

@Component({
  selector: 'app-landing',
  imports: [MainComponent, WhoweareComponent, ClientsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
