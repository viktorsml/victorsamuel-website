import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SocialMediaButtonsComponent } from './social-media-buttons.component';

@NgModule({
  declarations: [SocialMediaButtonsComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule, MatTooltipModule],
  exports: [SocialMediaButtonsComponent],
})
export class SocialMediaButtonsModule {}
