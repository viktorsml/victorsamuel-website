import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LoadingSpinnerModule } from '@components/loading-spinner';
import { SocialMediaButtonsModule } from '@components/social-media-buttons';

import { WebsiteLayoutComponent } from './website-layout.component';
import { WebsiteLayoutRoutingModule } from './website-layout.routing';

@NgModule({
  declarations: [WebsiteLayoutComponent],
  imports: [CommonModule, MatButtonModule, WebsiteLayoutRoutingModule, SocialMediaButtonsModule, LoadingSpinnerModule],
  exports: [WebsiteLayoutComponent],
})
export class WebsiteLayoutModule {}
