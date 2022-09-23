import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'action', loadChildren: () => import('./layouts/full-screen-layout').then((m) => m.FullScreenLayoutModule) },
    { path: '', loadChildren: () => import('./layouts/website-layout').then((m) => m.WebsiteLayoutModule) },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
            onSameUrlNavigation: 'reload',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
