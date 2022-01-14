import { Component, HostBinding, Input } from '@angular/core';
import { IProfile } from '@rabraghib/content';

@Component({
  selector: 'rabraghib-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  @Input() links!: IProfile[];
  @HostBinding('class') get HostClasses() {
    return `pl-4 flex md:justify-end w-full app_container`;
  }
}
