import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioPageRoutingModule } from './portfolio-page.routing';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule
  ]
})
export class PortfolioPageModule {}
