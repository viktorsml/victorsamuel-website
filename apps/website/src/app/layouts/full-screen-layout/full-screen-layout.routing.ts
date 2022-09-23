import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenLayoutComponent } from './full-screen-layout.component';

const routes: Routes = [
    {
        path: '',
        component: FullScreenLayoutComponent,
        children: [
            {
                path: 'schedule-a-meeting',
                loadChildren: () => import('./pages/book-specific-meeting-page').then((m) => m.BookSpecificMeetingPageModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FullScreenLayoutRoutingModule {}
