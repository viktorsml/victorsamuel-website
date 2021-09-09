import { SocialMediaPlatform } from './social-media.mocks';

export enum SVGResourceType {
  Colored = 'colored',
  Flat = 'flat',
}

export enum SocialMediaLinkType {
  Contact = 'Contact',
  Profile = 'Profile',
}

export type SvgResourceMap = Map<SVGResourceType, string>;
export type SocialMediaLinkMap = Map<SocialMediaLinkType, string>;

export interface ISocialMediaPlatformDefinition {
  platformName: string;
  brandedUrl: string;
  platformKey: string;
}

export interface ISocialMediaIconDefinition {
  svgResourcePath: string;
  iconKey: string;
}

export interface IPassedSocialMediaDefinitionOptions {
  socialMediaLinkType?: SocialMediaLinkType;
  sVGResourceType?: SVGResourceType;
}

export interface IDefaultSocialMediaDefinitionOptions {
  socialMediaLinkType: SocialMediaLinkType;
  sVGResourceType: SVGResourceType;
}
