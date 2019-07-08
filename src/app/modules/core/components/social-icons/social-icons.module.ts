import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [SocialIconsComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule],
  exports: [SocialIconsComponent]
})
export class SocialIconsModule {}
