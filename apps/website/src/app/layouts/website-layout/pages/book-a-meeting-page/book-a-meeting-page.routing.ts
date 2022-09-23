import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookAMeetingPageComponent } from './book-a-meeting-page.component';

const routes: Routes = [{ path: '', component: BookAMeetingPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookAMeetingPageRoutingModule {}
