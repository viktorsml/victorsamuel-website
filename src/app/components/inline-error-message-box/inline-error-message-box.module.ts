import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmartPictureModule } from '@components/smart-picture';

import { InlineErrorMessageBoxComponent } from './inline-error-message-box.component';

@NgModule({
  declarations: [InlineErrorMessageBoxComponent],
  imports: [CommonModule, SmartPictureModule],
  exports: [InlineErrorMessageBoxComponent],
})
export class InlineErrorMessageBoxModule {}
