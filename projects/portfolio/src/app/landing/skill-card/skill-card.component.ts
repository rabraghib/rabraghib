import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styles: []
})
export class SkillCardComponent {
  @HostBinding('class') readonly HostClasses = `
    text-center p-4
    flex flex-col items-center gap-2
  `;
}
