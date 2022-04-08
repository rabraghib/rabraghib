import { Component, HostBinding, Input } from '@angular/core';
import { IProfile } from '@rabraghib/content';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  @Input() links!: IProfile[];
  @HostBinding('class') readonly HostClasses = `
    shadow-lg bg-[#000] z-50 px-6 py-4
    border-[1px] border-l-0 border-blue-100 rounded-r-full
    bg-opacity-50 border-opacity-50
    transition backdrop-blur-lg
  `;
}
