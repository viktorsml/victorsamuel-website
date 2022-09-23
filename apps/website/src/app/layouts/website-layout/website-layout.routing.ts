import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteLayoutComponent } from './website-layout.component';
import { IRouteData } from './website-layout.component.models';

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
                data: <IRouteData>{ seoInformation: { pageTitle: $localize`Victor Samuel | Projects` } },
                loadChildren: () => import('./pages/projects-page').then((m) => m.ProjectsPageModule),
            },
            {
                path: 'project',
                data: <IRouteData>{ requiresExtraLoadingTime: true },
                loadChildren: () => import('./pages/single-project-page').then((m) => m.SingleProjectPageModule),
            },
            {
                path: 'contact',
                data: <IRouteData>{ seoInformation: { pageTitle: $localize`Victor Samuel | Contact` } },
                loadChildren: () => import('./pages/contact-page').then((m) => m.ContactPageModule),
            },
            {
                path: 'meet',
                data: <IRouteData>{ seoInformation: { pageTitle: $localize`Victor Samuel | Book a meeting` } },
                loadChildren: () => import('./pages/book-a-meeting-page').then((m) => m.BookAMeetingPageModule),
            },
            {
                path: 'not-found',
                data: <IRouteData>{ seoInformation: { pageTitle: $localize`Victor Samuel | Not Found` } },
                loadChildren: () => import('./pages/not-found-page').then((m) => m.NotFoundPageModule),
            },
            {
                path: '**',
                data: <IRouteData>{ seoInformation: { pageTitle: $localize`Victor Samuel | Not Found` } },
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
