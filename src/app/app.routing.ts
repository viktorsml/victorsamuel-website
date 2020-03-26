import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, AngularFireAuthGuardModule, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [RouterModule.forRoot(routes), AngularFireAuthGuardModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
