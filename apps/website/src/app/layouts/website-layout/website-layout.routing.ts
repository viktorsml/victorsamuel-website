import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEOMetaInformation } from '@services/seo';

import { WebsiteLayoutComponent } from './website-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./pages/home-page').then((m) => m.HomePageModule),
      },
      {
        path: 'projects',
        data: <SEOMetaInformation>{ pageTitle: 'Victor Samuel | Projects' },
        loadChildren: () => import('./pages/projects-page').then((m) => m.ProjectsPageModule),
      },
      {
        path: 'project',
        loadChildren: () => import('./pages/single-project-page').then((m) => m.SingleProjectPageModule),
      },
      {
        path: 'contact',
        data: <SEOMetaInformation>{ pageTitle: 'Victor Samuel | Contact' },
        loadChildren: () => import('./pages/contact-page').then((m) => m.ContactPageModule),
      },
      {
        path: 'not-found',
        data: <SEOMetaInformation>{ pageTitle: 'Victor Samuel | Not Found' },
        loadChildren: () => import('./pages/not-found-page').then((m) => m.NotFoundPageModule),
      },
      {
        path: '**',
        data: <SEOMetaInformation>{ pageTitle: 'Victor Samuel | Not Found' },
        loadChildren: () => import('./pages/not-found-page').then((m) => m.NotFoundPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteLayoutRoutingModule {}
