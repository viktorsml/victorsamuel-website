import * as functions from 'firebase-functions';

// @ts-ignore
import { universalEnglishApp } from '../dist/server/en/main.js';
// @ts-ignore
import { universalSpanishApp } from '../dist/server/es/main.js';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const ssrEn = functions.https.onRequest(universalEnglishApp());
export const ssrEs = functions.https.onRequest(universalSpanishApp());
export const languageManager = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
