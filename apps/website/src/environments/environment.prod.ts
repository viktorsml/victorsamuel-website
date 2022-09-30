import { PRODUCTION_DOMAIN } from './environment.common';
import { IEnvironment } from './environment.model';

export const environment: IEnvironment = {
    production: true,
    websiteBaseUrl: PRODUCTION_DOMAIN,
    postHogProjectApiKey: 'phc_Plmx9vKsSoPis5YC1ADsC8ia2m2gRm0G1UR2g9gplNH',
    contactEmail: 'hola@victorsamuel.com',
  composeNewEmailUrl: 'https://viktorsml.dev/send-email',
  brandedBaseUrl: 'https://viktorsml.dev',
    backendEndpoint: 'https://victorsamuel-website-backend.viktorsml.workers.dev/api',
    analyticsServerUri: 'https://app.posthog.com',
};
