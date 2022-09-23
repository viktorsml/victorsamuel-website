import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MeetingBookingDirective } from './meeting-booking.directive';

@NgModule({
    declarations: [MeetingBookingDirective],
    imports: [CommonModule],
    exports: [MeetingBookingDirective],
})
export class MeetingBookingModule {}
