import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SpinnerModule } from '../../shared/components/spinner/spinner.module';
import { SocialIconsModule } from './components/social-icons/social-icons.module';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, CoreRoutingModule, SpinnerModule, SocialIconsModule],
})
export class CoreModule {}
