import { Component, HostBinding, Input } from '@angular/core';
import { IService } from '@rabraghib/content';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styles: []
})
export class ServiceCardComponent {
  @Input() service!: IService;
  @HostBinding('class') readonly HostClasses = `
    text-center p-4
    flex flex-col items-center gap-2
  `;
}
