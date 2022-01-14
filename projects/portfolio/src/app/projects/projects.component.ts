import { Component, HostBinding, Input } from '@angular/core';
import { IProject } from '@rabraghib/content';

@Component({
  selector: 'rabraghib-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent {
  @Input() projects!: IProject[];
  @HostBinding('class') get HostClasses() {
    return `grid gap-6 md:gap-10 lg:gap-14`;
  }
}
