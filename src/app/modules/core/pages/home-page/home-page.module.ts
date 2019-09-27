import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page.routing';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';
import { PictureModule } from 'src/app/shared/components/picture/picture.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SocialIconsModule,
    PictureModule
  ],
  providers: [
    { provide: 'VanillaTilt', useValue: window['VanillaTilt'] }
  ]
})
export class HomePageModule {}
