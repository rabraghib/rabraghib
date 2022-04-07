import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@ngaox/icons';
import { SharedModule } from '../shared/shared.module';

import { OverviewComponent } from './overview/overview.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';

import { ServiceCardComponent } from './cards/service-card/service-card.component';
import { ProjectCardComponent } from './cards/project-card/project-card.component';
import { CareerCardComponent } from './cards/career-card/career-card.component';

const EXPORTS = [
  OverviewComponent,
  ServicesComponent,
  ProjectCardComponent,
  CareerCardComponent,
  ContactComponent,
  ServiceCardComponent,
  ProjectsComponent,
  CareerComponent
];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, IconsModule, SharedModule],
  exports: [...EXPORTS]
})
export class LandingModule {}
