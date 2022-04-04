import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <span class="text-blue-100 text-base font-semibold">{{ overline }}</span>
    <h1
      data-aos="fade-in"
      class="text-3xl sm:text-4xl md:lg:text-5xl lg:text-6xl mt-1 lg:mt-2"
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
