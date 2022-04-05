import { Component, Input } from '@angular/core';
import { ISkills } from '@rabraghib/content';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: []
})
export class SkillsComponent {
  @Input() skills: ISkills = [];
}
