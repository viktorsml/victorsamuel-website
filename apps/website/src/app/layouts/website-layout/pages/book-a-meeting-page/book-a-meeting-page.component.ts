import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '@services/environment';
import { MeetingBookingService } from '@services/meeting-booking';

@Component({
    selector: 'app-book-a-meeting-page',
    templateUrl: './book-a-meeting-page.component.html',
    styleUrls: ['./book-a-meeting-page.component.scss'],
})
export class BookAMeetingPageComponent {
    public readonly fifteenMinuteMeetingId: string;
    public readonly thirtyMinuteMeetingId: string;

    constructor(private readonly environment: EnvironmentService, public readonly meetingBooking: MeetingBookingService) {
        this.fifteenMinuteMeetingId = this.meetingBooking.getCompleteMeetingId(this.environment.var.fifteenMinMeetingId);
        this.thirtyMinuteMeetingId = this.meetingBooking.getCompleteMeetingId(this.environment.var.thirtyMinMeetingId);
    }
}
