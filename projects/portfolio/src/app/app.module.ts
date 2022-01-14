import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { IconsModule } from '@ngaox/icons';
import { AppNgaoxIcons } from '@rabraghib/content';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './projects/card/card.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    IconsModule.forRoot('', AppNgaoxIcons),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
