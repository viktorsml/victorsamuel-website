import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, SocialIconsModule, SmartPictureModule],
  providers: [{ provide: 'VanillaTilt', useValue: window['VanillaTilt'] }]
})
export class HomePageModule {}
