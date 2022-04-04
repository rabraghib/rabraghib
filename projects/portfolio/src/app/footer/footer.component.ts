import { Component, HostBinding, Input } from '@angular/core';
import { IProfile } from '@rabraghib/content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  @Input() links!: IProfile[];
  @Input() allowTitleForContacts = false;
  @Input() linkColor = 'hover:text-white text-gray-400';
  @HostBinding('class') readonly HostClasses = `
    flex flex-wrap
    content-center
    bg-black
    justify-center
  `;
}
