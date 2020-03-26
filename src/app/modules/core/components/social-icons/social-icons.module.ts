import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { SocialIconsComponent } from './social-icons.component';

@NgModule({
  declarations: [SocialIconsComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule, HttpClientModule],
  exports: [SocialIconsComponent]
})
export class SocialIconsModule {}
