import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: CoreComponent, children: [
    { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
    { path: 'portfolio', loadChildren: () => import('./pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule) },
    { path: 'contact', loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule) },
    { path: '**', loadChildren: () => import('./pages/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule) }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
