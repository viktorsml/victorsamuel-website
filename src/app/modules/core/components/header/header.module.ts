import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SocialIconsModule } from '../social-icons/social-icons.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, SocialIconsModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
