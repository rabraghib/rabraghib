import { Component, Input } from '@angular/core';
import { ICareer } from '@rabraghib/content';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styles: []
})
export class CareerComponent {
  @Input() career: ICareer = [];
}
