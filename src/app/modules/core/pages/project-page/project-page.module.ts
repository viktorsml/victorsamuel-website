import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageRoutingModule } from './project-page.routing';
import { ProjectPageComponent } from './project-page.component';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { SmartPictureModule } from 'src/app/shared/components/smart-picture/smart-picture.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProjectPageComponent],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    PageTitleModule,
    SmartPictureModule,
    MatButtonModule
  ],
  exports: [ProjectPageComponent]
})
export class ProyectPageModule {}
