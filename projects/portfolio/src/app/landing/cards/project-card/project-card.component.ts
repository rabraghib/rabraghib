import { Component, Input } from '@angular/core';
import { IProject } from '@rabraghib/content';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styles: []
})
export class ProjectCardComponent {
  @Input() project!: IProject;
  @Input() switchDirection = false;
}
