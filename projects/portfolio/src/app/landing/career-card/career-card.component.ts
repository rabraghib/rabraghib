import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
  styles: []
})
export class CareerCardComponent {
  @HostBinding('class') readonly HostClasses = `
    block w-full group
    md:odd:ml-auto md:odd:mr-0.5 md:even:ml-0.5 md:w-1/2
  `;
  circularBubble = `
    relative before:block before:absolute
    before:top-0 before:box-content
    before:bg-slate-900 before:rounded-full before:w-2 before:h-2
    before:border-blue-100 before:border-4
  `;
}
