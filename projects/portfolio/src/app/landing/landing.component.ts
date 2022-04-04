import { Component } from '@angular/core';
import { AboutData, ProjectsData } from '@rabraghib/content';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent {
  readonly about = AboutData;
  readonly projects = ProjectsData;
}
