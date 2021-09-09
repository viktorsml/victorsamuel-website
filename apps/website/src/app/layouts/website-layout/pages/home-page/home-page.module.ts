import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SmartPictureModule } from '@components/smart-picture';
import { SocialMediaButtonsModule } from '@components/social-media-buttons';

import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, SocialMediaButtonsModule, MatButtonModule, SmartPictureModule],
})
export class HomePageModule {}
