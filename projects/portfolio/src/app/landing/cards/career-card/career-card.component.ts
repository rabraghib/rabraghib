import { Component, HostBinding, Input } from '@angular/core';
import { ICareerItem } from '@rabraghib/content';

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
  styles: []
})
export class CareerCardComponent {
  @Input() item!: ICareerItem;

  @HostBinding('class') readonly HostClasses = `
    group block w-full
    md:odd:ml-auto md:odd:mr-0.5 md:even:ml-0.5 md:w-1/2
  `;
}
