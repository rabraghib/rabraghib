import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '@ngaox/icons';
import { TitleComponent } from './title/title.component';
import { FloatingObjectsComponent } from './floating-objects/floating-objects.component';

@NgModule({
  declarations: [TitleComponent, FloatingObjectsComponent],
  imports: [CommonModule, IconsModule],
  exports: [TitleComponent, FloatingObjectsComponent]
})
export class SharedModule {}
