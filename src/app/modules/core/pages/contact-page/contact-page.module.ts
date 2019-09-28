import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PageTitleModule } from '../../components/page-title/page-title.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    PageTitleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule 
  ]
})
export class ContactPageModule {}
