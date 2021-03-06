import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SmartPictureComponent } from './smart-picture.component';
import { SmartPictureService } from './smart-picture.service';

@NgModule({
  declarations: [SmartPictureComponent],
  imports: [CommonModule],
  providers: [SmartPictureService],
  exports: [SmartPictureComponent]
})
export class SmartPictureModule {}
