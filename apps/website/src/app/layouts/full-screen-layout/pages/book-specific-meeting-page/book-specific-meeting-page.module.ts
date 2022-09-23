import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingBookingModule } from '@directives/meeting-booking';

import { BookSpecificMeetingPageComponent } from './book-specific-meeting-page.component';
import { BookSpecificMeetingPageRoutingModule } from './book-specific-meeting-page.routing';

@NgModule({
    declarations: [BookSpecificMeetingPageComponent],
    imports: [CommonModule, BookSpecificMeetingPageRoutingModule, MeetingBookingModule],
    exports: [BookSpecificMeetingPageComponent],
})
export class BookSpecificMeetingPageModule {}
