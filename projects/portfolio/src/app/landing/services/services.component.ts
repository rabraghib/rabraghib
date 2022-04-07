import { Component, Input } from '@angular/core';
import { IServices } from '@rabraghib/content';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: []
})
export class ServicesComponent {
  @Input() services: IServices = [];
}
