import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SmartPictureComponent } from './smart-picture.component';

@NgModule({
  declarations: [SmartPictureComponent],
  imports: [CommonModule],
  exports: [SmartPictureComponent],
})
export class SmartPictureModule {}
