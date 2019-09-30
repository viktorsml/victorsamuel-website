import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartPictureComponent } from './smart-picture.component';

// this module requires https://github.com/fregante/object-fit-images

@NgModule({
  declarations: [SmartPictureComponent],
  imports: [CommonModule],
  exports: [SmartPictureComponent]
})
export class SmartPictureModule { }
