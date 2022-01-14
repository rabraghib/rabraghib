import { Component, HostBinding } from '@angular/core';
import { AboutData, ProjectsData } from '@rabraghib/content';

@Component({
  selector: 'rabraghib-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  @HostBinding('class') get HostClasses() {
    return `grid grid-rows-[auto,1fr] h-screen w-full overflow-x-hidden overflow-y-auto relative bg-gray-900 text-gray-200`;
  }
  readonly data = {
    about: AboutData,
    projects: ProjectsData
  };
  TakeAction(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
