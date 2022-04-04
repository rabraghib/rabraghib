import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  @Input() email!: string;
  @HostBinding('class') readonly HostClasses = `
    flex gap-6 justify-between items-center flex-col
  `;
}
