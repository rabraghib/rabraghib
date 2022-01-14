import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { IconsModule } from '@ngaox/icons';
import { AppNgaoxIcons } from '@rabraghib/content';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [AppComponent, OverviewComponent],
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
