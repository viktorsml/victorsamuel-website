import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingBookingModule } from '@directives/meeting-booking';

import { BookAMeetingPageComponent } from './book-a-meeting-page.component';
import { BookAMeetingPageRoutingModule } from './book-a-meeting-page.routing';

@NgModule({
    declarations: [BookAMeetingPageComponent],
    imports: [CommonModule, BookAMeetingPageRoutingModule, MeetingBookingModule],
    exports: [BookAMeetingPageComponent],
})
export class BookAMeetingPageModule {}
