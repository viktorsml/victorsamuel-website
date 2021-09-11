import { TooltipModule } from 'ng2-tooltip-directive';
import { ClipboardModule } from 'ngx-clipboard';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ContactPageComponent } from './contact-page.component';
import { ContactPageRoutingModule } from './contact-page.routing';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule, ClipboardModule, MatIconModule, MatButtonModule, TooltipModule],
})
export class ContactPageModule {}
