import { Component } from '@angular/core';
import { EnvironmentService } from '@services/environment';
import { MeetingBookingService } from '@services/meeting-booking';

@Component({
    selector: 'app-book-a-meeting-page',
    templateUrl: './book-a-meeting-page.component.html',
    styleUrls: ['./book-a-meeting-page.component.scss'],
})
export class BookAMeetingPageComponent {
    public readonly meetings = [
        {
            id: this.meetingBooking.getCompleteMeetingId(this.environment.var.fifteenMinMeetingId),
            icon: '/assets/svg/icon-meeting-15.svg',
            label: $localize`Schedule a 15 min meeting`,
            colorModifier: 'Green',
        },
        {
            id: this.meetingBooking.getCompleteMeetingId(this.environment.var.thirtyMinMeetingId),
            icon: '/assets/svg/icon-meeting-30.svg',
            label: $localize`Schedule a 30 min meeting`,
            colorModifier: 'Blue',
        },
    ];

    constructor(private readonly environment: EnvironmentService, public readonly meetingBooking: MeetingBookingService) {}

    public generateCssClass(cssClass: string, modifier: string) :string {
        return `${cssClass}${modifier}`
    }
}
