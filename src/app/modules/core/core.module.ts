import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { HeaderComponent } from './components/header/header.component';
import { SocialIconsModule } from './components/social-icons/social-icons.module';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SocialIconsModule,
    SpinnerModule
  ]
})
export class CoreModule {}
