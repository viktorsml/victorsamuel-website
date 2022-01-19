import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SingleProjectPageComponent } from './single-project-page.component';
import { SingleProjectPageRoutingModule } from './single-project-page.routing';

@NgModule({
  declarations: [SingleProjectPageComponent],
  imports: [CommonModule, SingleProjectPageRoutingModule],
  exports: [SingleProjectPageComponent],
})
export class SingleProjectPageModule {}
