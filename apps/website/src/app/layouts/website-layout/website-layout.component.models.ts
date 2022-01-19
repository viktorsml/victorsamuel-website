import { SEOMetaInformation } from '@services/seo';

export interface INavigationItem {
  label: string;
  routerLink: string;
}

export interface IRouteData {
  seoInformation?: SEOMetaInformation;
  requiresExtraLoadingTime?: boolean;
}
