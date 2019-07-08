import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { HeaderComponent } from './components/header/header.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {}
