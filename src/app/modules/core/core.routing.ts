import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  // start retrocompatibility
  { path: 'acerca', redirectTo: '/about', pathMatch: 'full' },
  { path: 'proyectos', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'contacto', redirectTo: '/contact', pathMatch: 'full' },
  // end retrocompatibility
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: 'about', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
      { path: 'project', loadChildren: () => import('./pages/project-page/project-page.module').then(m => m.ProyectPageModule) },
      { path: 'projects', loadChildren: () => import('./pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule) },
      { path: 'contact', loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule) },
      { path: '**', loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
