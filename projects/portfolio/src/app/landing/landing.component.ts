import { Component } from '@angular/core';
import {
  AboutData,
  CareerData,
  ProjectsData,
  ServicesData
} from '@rabraghib/content';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent {
  readonly about = AboutData;
  readonly services = ServicesData;
  readonly projects = ProjectsData;
  readonly career = CareerData;
}
