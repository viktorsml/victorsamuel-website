import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { ProjectPageComponent } from './project-page.component';
import { ProjectPageRoutingModule } from './project-page.routing';

@NgModule({
  declarations: [ProjectPageComponent],
  imports: [CommonModule, ProjectPageRoutingModule, PageTitleModule, SmartPictureModule, MatButtonModule],
  exports: [ProjectPageComponent]
})
export class ProyectPageModule {}
