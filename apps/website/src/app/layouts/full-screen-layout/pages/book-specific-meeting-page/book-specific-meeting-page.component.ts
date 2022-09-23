import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '@services/analytics';
import { MeetingBookingService } from '@services/meeting-booking';

@Component({
    selector: 'app-book-specific-meeting-page',
    templateUrl: './book-specific-meeting-page.component.html',
    styleUrls: ['./book-specific-meeting-page.component.scss'],
})
export class BookSpecificMeetingPageComponent {
    public meetingId: string | null;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly meetingBookingService: MeetingBookingService,
        private readonly analytics: AnalyticsService
    ) {
        this.meetingId = this.meetingBookingService.getCompleteMeetingId(this.activatedRoute.snapshot.fragment);
        this.analytics.dispatchEvent('Meeting Booking: Started', { meetingId: this.meetingId });
    }

    public successfulBookingHandler(event: any) {
        this.analytics.dispatchEvent('Meeting Booking: Completed', { meetingId: this.meetingId, data: event.detail.data });
    }
}
