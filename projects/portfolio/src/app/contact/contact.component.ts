import { Component, Input } from '@angular/core';
import { IProfile } from '@rabraghib/content';

@Component({
  selector: 'rabraghib-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  @Input() links!: IProfile[];
  @Input() email!: string;
}
