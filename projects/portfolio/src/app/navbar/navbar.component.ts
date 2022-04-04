import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  @HostBinding('class') readonly HostClasses = `
    block rounded-full z-50 px-2 sm:px-4 py-4
    bg-opacity-50 transition backdrop-blur-lg border-[1px] border-slate-700 bg-slate-900 
  `;
}
