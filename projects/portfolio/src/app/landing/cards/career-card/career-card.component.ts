import { Component, HostBinding, Input } from '@angular/core';
import { ICareerItem } from '@rabraghib/content';

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
  styles: []
})
export class CareerCardComponent {
  @Input() item!: ICareerItem;

  @HostBinding('class')
  readonly HostClasses = `group flex gap-6 relative block w-full`;
}
