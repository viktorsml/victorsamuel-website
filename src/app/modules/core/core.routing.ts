import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', redirectTo: '/acerca', pathMatch: 'full' },
  {
    path: '', component: CoreComponent, children: [
      { path: 'acerca', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
      { path: 'proyecto', loadChildren: () => import('./pages/project-page/project-page.module').then(m => m.ProyectPageModule) },
      { path: 'proyectos', loadChildren: () => import('./pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule) },
      { path: 'contacto', loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule) },
      { path: '**', loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
