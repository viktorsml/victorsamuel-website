import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing';
import { MatIconModule } from '@angular/material/icon';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ContactPageRoutingModule,
    PageTitleModule,
    MatIconModule,
  ]
})
export class ContactPageModule {}
