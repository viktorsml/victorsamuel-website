import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookSpecificMeetingPageComponent } from './book-specific-meeting-page.component';

const routes: Routes = [{ path: '', component: BookSpecificMeetingPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookSpecificMeetingPageRoutingModule {}
