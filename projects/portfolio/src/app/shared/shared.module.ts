import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@ngaox/icons';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule, IconsModule],
  exports: [TitleComponent]
})
export class SharedModule {}
