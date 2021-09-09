import { InViewportModule } from 'ng-in-viewport';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InlineErrorMessageBoxModule } from '@components/inline-error-message-box';
import { LoadingSpinnerModule } from '@components/loading-spinner';
import { SmartPictureModule } from '@components/smart-picture';
import { TemplateDirectivesModule } from '@directives/template';
import { LogicalPipesModule } from '@pipes/logical';

import { ProjectsPageComponent } from './projects-page.component';
import { ProjectsPageRoutingModule } from './projects-page.routing';

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [
    CommonModule,
    ProjectsPageRoutingModule,
    MatButtonModule,
    LogicalPipesModule,
    TemplateDirectivesModule,
    LoadingSpinnerModule,
    InViewportModule,
    SmartPictureModule,
    InlineErrorMessageBoxModule,
  ],
})
export class ProjectsPageModule {}
