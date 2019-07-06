import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: CoreComponent, children: [
    { path: '', loadChildren: './pages/home-page/home-page.module#HomePageModule' },
    { path: 'portfolio', loadChildren: './pages/portfolio-page/portfolio-page.module#PortfolioPageModule' },
    { path: 'contact', loadChildren: './pages/contact-page/contact-page.module#ContactPageModule' },
    { path: '**', loadChildren: './pages/not-found-page/not-found-page.module#NotFoundPageModule' },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
