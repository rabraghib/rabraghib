import { Component, HostBinding, Input } from '@angular/core';
import { IProfile } from '@rabraghib/content';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  @Input() links!: IProfile[];
  @Input() email!: string;
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() handle!: string;
  @Input() cliPackageName!: string;
  @HostBinding('class') get HostClasses() {
    return `
      flex gap-4 justify-between items-center
    `;
  }
}
