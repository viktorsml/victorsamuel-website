import { GOOGLE_TAG_MANAGER_CONTAINER_ID, PRODUCTION_DOMAIN } from './environment.common';
import { IEnvironment } from './environment.model';

export const environment: IEnvironment = {
  production: true,
  websiteBaseUrl: PRODUCTION_DOMAIN,
  googleTagManagerContainerId: GOOGLE_TAG_MANAGER_CONTAINER_ID,
  contactEmail: 'hola@victorsamuel.com',
  composeNewEmailUrl: 'https://viktors.ml/send-email',
  brandedBaseUrl: 'https://viktors.ml',
  backendEndpoint: 'https://victorsamuel-website-backend.viktorsml.workers.dev/api',
};
