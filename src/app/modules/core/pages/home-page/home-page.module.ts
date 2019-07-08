import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SocialIconsModule
  ]
})
export class HomePageModule {}
