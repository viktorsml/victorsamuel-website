// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { BOOK_15_MIN_MEETING_ID, BOOK_30_MIN_MEETING_ID, BOOKING_SERVICE_USERNAME, PRODUCTION_DOMAIN } from './environment.common';
import { IEnvironment } from './environment.model';

export const environment: IEnvironment = {
    production: false,
    websiteBaseUrl: PRODUCTION_DOMAIN,
    postHogProjectApiKey: 'phc_Plmx9vKsSoPis5YC1ADsC8ia2m2gRm0G1UR2g9gplNH',
    contactEmail: 'hello@example.com',
    composeNewEmailUrl: 'https://example.com/send-email',
    brandedBaseUrl: 'https://example.com',
    backendEndpoint: 'http://127.0.0.1:8787/api',
    analyticsServerUri: 'https://app.posthog.com',
    bookingServiceUsername: BOOKING_SERVICE_USERNAME,
    fifteenMinMeetingId: BOOK_15_MIN_MEETING_ID,
    thirtyMinMeetingId: BOOK_30_MIN_MEETING_ID,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
