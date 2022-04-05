import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { IconsModule } from '@ngaox/icons';
import { AppNgaoxIcons } from '@rabraghib/content';
import { LandingModule } from './landing/landing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LandingModule,
    SharedModule,
    RouterModule.forRoot(routes),
    IconsModule.forRoot(AppNgaoxIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
