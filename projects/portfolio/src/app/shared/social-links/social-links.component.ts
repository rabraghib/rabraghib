import { Component, HostBinding, Input } from '@angular/core';
import { IProfile } from '@rabraghib/content';

@Component({
  selector: 'rabraghib-social-links',
  templateUrl: './social-links.component.html',
  styles: []
})
export class SocialLinksComponent {
  @Input() links!: IProfile[];
  @Input() allowTitleForContacts = false;
  _hostClasses = `
    flex flex-wrap
    content-center
    bg-dark-gray
    justify-center
  `;
  @Input() set class(value: string) {
    this._hostClasses += value;
  }
  @HostBinding('class') get HostClasses() {
    return this._hostClasses;
  }
}
