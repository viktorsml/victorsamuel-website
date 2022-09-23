import { TestBed } from '@angular/core/testing';

import { MeetingBookingService } from './meeting-booking.service';

describe('MeetingBookingService', () => {
  let service: MeetingBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
