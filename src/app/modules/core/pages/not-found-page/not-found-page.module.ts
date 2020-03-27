import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page.routing';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundPageRoutingModule]
})
export class NotFoundPageModule {}
