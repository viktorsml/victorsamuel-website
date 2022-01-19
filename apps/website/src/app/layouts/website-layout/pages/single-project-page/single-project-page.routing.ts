import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleProjectPageComponent } from './single-project-page.component';

const routes: Routes = [
  { path: ':projectId', component: SingleProjectPageComponent },
  { path: '', pathMatch: 'full', loadChildren: () => import('../not-found-page').then((m) => m.NotFoundPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleProjectPageRoutingModule {}
