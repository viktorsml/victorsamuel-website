// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { IEnvironment } from './environment.model';

export const environment: IEnvironment = {
  production: false,
  contactEmail: 'hello@example.com',
  composeNewEmailUrl: 'https://example.com/send-email',
  websiteBaseUrl: 'https://victorsamuel.com',
  brandedBaseUrl: 'https://example.com',
  backendEndpoint: 'http://127.0.0.1:8787/api',
  googleTagManagerContainerId: 'GTM-XXXXXXX',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
