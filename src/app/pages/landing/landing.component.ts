import { Component } from '@angular/core';
import { MainComponent } from "../components/main/main.component";
import { WhoweareComponent } from "../components/whoweare/whoweare.component";
import { ClientsComponent } from "../components/clients/clients.component";
import { ShowcaseComponent } from "../components/showcase/showcase.component";
import { FeaturesComponent } from "../components/features/features.component";
import { GaleryComponent } from "../components/galery/galery.component";
import { AboutComponent } from "../components/about/about.component";
import { StatsComponent } from "../components/stats/stats.component";
import { PricingComponent } from "../components/pricing/pricing.component";
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";
import { TeamsComponent } from "../components/teams/teams.component";
import { FaqComponent } from "../components/faq/faq.component";
import { QuestionFormComponent } from "../components/question-form/question-form.component";
@Component({
  selector: 'app-landing',
  imports: [MainComponent, WhoweareComponent, ClientsComponent, ShowcaseComponent, FeaturesComponent, GaleryComponent, AboutComponent, StatsComponent, PricingComponent, TestimonialsComponent, TeamsComponent, FaqComponent, QuestionFormComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
