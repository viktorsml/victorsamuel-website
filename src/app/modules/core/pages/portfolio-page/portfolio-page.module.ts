import { InViewportModule } from 'ng-in-viewport';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SmartPictureModule } from '../../../../shared/components/smart-picture/smart-picture.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { PageTitleModule } from '../../components/page-title/page-title.module';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PortfolioPageRoutingModule } from './portfolio-page.routing';

@NgModule({
  declarations: [PortfolioPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularFirestoreModule,
    InViewportModule,
    SpinnerModule,
    PortfolioPageRoutingModule,
    PageTitleModule,
    SmartPictureModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PortfolioPageModule {}
