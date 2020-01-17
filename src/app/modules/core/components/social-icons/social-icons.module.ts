import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SocialIconsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatRippleModule,
    HttpClientModule
  ],
  exports: [SocialIconsComponent]
})
export class SocialIconsModule {}
