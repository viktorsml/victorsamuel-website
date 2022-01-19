import { GoogleTagManagerService } from 'angular-google-tag-manager';

import { Injectable } from '@angular/core';
import { EnvironmentService } from '@services/environment';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private readonly _environmentService: EnvironmentService, private readonly _googleTagManagerService: GoogleTagManagerService) {}

  public initializeGoogleTagManager() {
    this._googleTagManagerService.addGtmToDom().then((wasLoaded) => {
      if (!wasLoaded) {
        console.warn('Unable to load Google Tag Manager.');
      }
      this._googleTagManagerService.pushTag({
        event: 'Google Analytics Measurement Id Initialization',
        measurementId: this._environmentService.getGoogleAnalyticsMeasurementId(),
      });
    });
  }

  public dispatchEvent<PayloadType extends Object>(eventName: string, eventPayload?: PayloadType) {
    const eventTag = eventPayload ? { event: eventName, ...eventPayload } : { event: eventName };
    this._googleTagManagerService.pushTag(eventTag);
  }
}
