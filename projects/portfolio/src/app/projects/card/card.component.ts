import { Component, Input } from '@angular/core';
import { IProject } from '@rabraghib/content';

@Component({
  selector: 'rabraghib-project-card',
  templateUrl: './card.component.html',
  styles: []
})
export class ProjectCardComponent {
  @Input() project!: IProject;
  @Input() switchDirection = false;
  JoinTags(tags: string[]) {
    return tags.join(', ') + '...';
  }
}
