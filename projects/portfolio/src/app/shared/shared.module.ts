import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from '@ngaox/icons';

@NgModule({
  declarations: [NavbarComponent, SocialLinksComponent, FooterComponent],
  imports: [CommonModule, IconsModule],
  exports: [NavbarComponent, SocialLinksComponent, FooterComponent]
})
export class SharedModule {}
