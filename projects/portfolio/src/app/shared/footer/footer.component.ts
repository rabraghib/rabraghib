import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'rabraghib-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  @Input() name!: string;
  @Output() TakeAction = new EventEmitter<boolean>();
  @HostBinding('class') get HostClasses() {
    return `
      block relative text-gray-300 font-medium text-xl p-6 px-10 text-center
      sm:rounded-t-full bg-black
    `;
  }

  ScrollToTop() {
    this.TakeAction.emit(true);
  }
}
