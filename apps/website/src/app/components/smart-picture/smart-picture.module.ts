import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateDirectivesModule } from '@directives/template';

import { SmartPictureComponent } from './smart-picture.component';

@NgModule({
  declarations: [SmartPictureComponent],
  imports: [CommonModule, TemplateDirectivesModule],
  exports: [SmartPictureComponent],
})
export class SmartPictureModule {}
