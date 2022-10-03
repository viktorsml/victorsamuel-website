import { Injectable } from '@angular/core';
import { EnvironmentService } from '@services/environment';

declare var Cal: Function;

@Injectable({
    providedIn: 'root',
})
export class MeetingBookingService {
    private readonly calendar: Function = () => {};

    constructor(private readonly environment: EnvironmentService) {
        if (this.environment.isBrowserEnvironment) {
            this.calendar = Cal;

            this.calendar('init', { origin: 'https://app.cal.com' });
            this.calendar('ui', {
                theme: 'dark',
                styles: { branding: { brandColor: '#000000' } },
            });
        }
    }

    public getCompleteMeetingId(meetingId: string | null): string {
        return `${this.environment.var.bookingServiceUsername}/${meetingId}`;
    }

    public loadCalendarWidget(meetingId: string, elementOrSelector: HTMLElement | string, config: object = {}) {
        this.calendar('inline', {
            elementOrSelector,
            calLink: meetingId,
            config: { theme: 'dark', ...config },
        });
    }

    public listenForSuccessfulBooking(callback: (event: any) => void) {
        this.calendar('on', { action: 'bookingSuccessful', callback });
    }
}
