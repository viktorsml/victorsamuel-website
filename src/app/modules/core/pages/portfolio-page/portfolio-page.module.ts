import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioPageRoutingModule } from './portfolio-page.routing';
import { PageTitleModule } from '../../components/page-title/page-title.module';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule,
    PageTitleModule
  ]
})
export class PortfolioPageModule {}
