import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styles: []
})
export class ProfileCardComponent {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() handle!: string;
  @Input() cliPackageName!: string;
  _hostClasses = `
    bg-black rounded-l-2xl
    grid gap-4 justify-items-center
    w-80 p-4
  `;
  @Input() set class(value: string) {
    this._hostClasses += value;
  }
  @HostBinding('class') get HostClasses() {
    return this._hostClasses;
  }
}
