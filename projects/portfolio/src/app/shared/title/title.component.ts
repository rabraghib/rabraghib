import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <span class="text-blue-100 text-base font-semibold" data-aos="fade-up">{{
      overline
    }}</span>
    <h1
      class="text-3xl sm:text-4xl lg:text-6xl mt-1 lg:mt-2 font-black text-white"
      data-aos="fade-up"
    >
      {{ title }}
    </h1>
  `,
  styles: []
})
export class TitleComponent {
  @Input() title = '';
  @Input() overline = '';
  @HostBinding('class') readonly HostClasses = `
    block mb-8 lg:mb-14
  `;
}
