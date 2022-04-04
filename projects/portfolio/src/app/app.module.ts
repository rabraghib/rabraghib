import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { IconsModule } from '@ngaox/icons';
import { AppNgaoxIcons } from '@rabraghib/content';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { OverviewComponent } from './landing/overview/overview.component';
import { ContactComponent } from './landing/contact/contact.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './landing/skills/skills.component';
import { ProjectCardComponent } from './landing/project-card/project-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CareerCardComponent } from './landing/career-card/career-card.component';
import { SkillCardComponent } from './landing/skill-card/skill-card.component';

const routes = [
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OverviewComponent,
    ProjectCardComponent,
    ContactComponent,
    SkillsComponent,
    NavbarComponent,
    FooterComponent,
    CareerCardComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    IconsModule.forRoot(AppNgaoxIcons),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
