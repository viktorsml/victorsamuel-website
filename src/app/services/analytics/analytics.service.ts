import { GoogleTagManagerService } from 'angular-google-tag-manager';

import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private readonly _googleTagManagerService: GoogleTagManagerService) {}

  public initializeGoogleTagManager() {
    this._googleTagManagerService.addGtmToDom();
  }

  public dispatchEvent<PayloadType extends Object>(eventName: string, eventPayload?: PayloadType) {
    const eventTag = eventPayload ? { event: eventName, ...eventPayload } : { event: eventName };
    this._googleTagManagerService.pushTag(eventTag);
  }
}
