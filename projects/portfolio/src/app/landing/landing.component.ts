import { Component } from '@angular/core';
import {
  AboutData,
  CareerData,
  ProjectsData,
  SkillsData
} from '@rabraghib/content';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent {
  readonly about = AboutData;
  readonly skills = SkillsData;
  readonly projects = ProjectsData;
  readonly career = CareerData;
}
