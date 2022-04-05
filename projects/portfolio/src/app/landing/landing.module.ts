import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@ngaox/icons';
import { SharedModule } from '../shared/shared.module';

import { OverviewComponent } from './overview/overview.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

import { SkillCardComponent } from './cards/skill-card/skill-card.component';
import { ProjectCardComponent } from './cards/project-card/project-card.component';
import { CareerCardComponent } from './cards/career-card/career-card.component';

const EXPORTS = [
  OverviewComponent,
  SkillsComponent,
  ProjectCardComponent,
  CareerCardComponent,
  ContactComponent,
  SkillCardComponent,
  ProjectsComponent,
  CareerComponent
];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, IconsModule, SharedModule],
  exports: [...EXPORTS]
})
export class LandingModule {}
