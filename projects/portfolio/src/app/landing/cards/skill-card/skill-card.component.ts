import { Component, HostBinding, Input } from '@angular/core';
import { ISkill } from '@rabraghib/content';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styles: []
})
export class SkillCardComponent {
  @Input() skill!: ISkill;
  @HostBinding('class') readonly HostClasses = `
    text-center p-4
    flex flex-col items-center gap-2
  `;
}
