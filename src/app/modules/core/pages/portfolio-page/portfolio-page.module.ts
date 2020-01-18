import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioPageRoutingModule } from './portfolio-page.routing';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SmartPictureModule } from 'src/app/shared/components/smart-picture/smart-picture.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    PortfolioPageRoutingModule,
    PageTitleModule,
    SmartPictureModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PortfolioPageModule {}
