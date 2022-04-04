import { Component, HostBinding, Input } from '@angular/core';
import { IAbout } from '@rabraghib/content';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: [``]
})
export class OverviewComponent {
  @Input() about!: IAbout;
  @HostBinding('class') HostClasses = `
    flex justify-between gap-12 lg:gap-16 flex-col md:flex-row-reverse items-center
  `;
}
