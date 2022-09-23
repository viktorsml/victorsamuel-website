import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { MeetingBookingService } from '@services/meeting-booking';

import { BookingLayoutType } from './meeting-booking.models';

@Directive({
    selector: '[meeting-booking]',
})
export class MeetingBookingDirective {
    constructor(private readonly meetingBooking: MeetingBookingService, private readonly elementRef: ElementRef) {}

    @Input()
    public 'booking-layout-type': BookingLayoutType = 'popup';

    @Input()
    public set 'meeting-booking'(meetingId: string) {
        if (this.layoutType === 'popup') {
            this.nativeElement.setAttribute('data-cal-link', meetingId);
        }

        if (this.layoutType === 'embed') {
            this.meetingBooking.loadCalendarWidget(meetingId, this.nativeElement);
        }

        this.meetingBooking.listenForSuccessfulBooking((event) => {
            this['successful-booking'].emit(event);
        });
    }

    @Output()
    public 'successful-booking' = new EventEmitter<any>();

    private get layoutType(): BookingLayoutType {
        return this['booking-layout-type'];
    }

    private get nativeElement(): HTMLElement {
        return this.elementRef.nativeElement;
    }
}
