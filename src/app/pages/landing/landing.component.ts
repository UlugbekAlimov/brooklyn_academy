import { Component } from '@angular/core';
import { MainComponent } from "../components/main/main.component";
import { WhoweareComponent } from "../components/whoweare/whoweare.component";
import { ClientsComponent } from "../components/clients/clients.component";
import { ShowcaseComponent } from "../components/showcase/showcase.component";

@Component({
  selector: 'app-landing',
  imports: [MainComponent, WhoweareComponent, ClientsComponent, ShowcaseComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
