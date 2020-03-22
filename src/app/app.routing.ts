import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

const redirectLoggedInToPanel = () => redirectLoggedInTo(['/admin']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToPanel },
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AngularFireAuthGuardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
