import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../components/page-title/page-title.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    PageTitleModule,
    MatIconModule,
  ]
})
export class ContactPageModule {}
