import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SocialIconsModule } from '../social-icons/social-icons.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SocialIconsModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
