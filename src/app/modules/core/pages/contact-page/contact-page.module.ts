import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PageTitleModule } from '../../components/page-title/page-title.module';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, HttpClientModule, ContactPageRoutingModule, PageTitleModule, MatIconModule]
})
export class ContactPageModule {}
