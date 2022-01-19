import { environment } from '@environment';

import {
  IDefaultSocialMediaDefinitionOptions, IPassedSocialMediaDefinitionOptions, ISocialMediaIconDefinition, ISocialMediaPlatformDefinition,
  SocialMediaLinkMap, SocialMediaLinkType, SvgResourceMap, SVGResourceType
} from './social-media.models';

const brandedBaseUrl = environment.brandedBaseUrl;
const profilePathPrefix = '';
const contactPathPrefix = 'contact-via-';
const svgAssetsPath = '/assets/svg';

export enum SocialMediaPlatform {
  Twitter = 'twitter',
  LinkedIn = 'linkedin',
  GitHub = 'github',
  Telegram = 'telegram',
  WhatsApp = 'whatsapp',
}

const platformNames = new Map([
  [SocialMediaPlatform.Twitter, 'Twitter'],
  [SocialMediaPlatform.LinkedIn, 'LinkedIn'],
  [SocialMediaPlatform.GitHub, 'GitHub'],
  [SocialMediaPlatform.Telegram, 'Telegram'],
  [SocialMediaPlatform.WhatsApp, 'WhatsApp'],
]);

const defaultSocialMediaDefinitionOptions: IDefaultSocialMediaDefinitionOptions = {
  socialMediaLinkType: SocialMediaLinkType.Profile,
  sVGResourceType: SVGResourceType.Flat,
};

const generateSvgResourceMap = (platformKey: SocialMediaPlatform): SvgResourceMap => {
  return new Map([
    [SVGResourceType.Colored, `${svgAssetsPath}/logo-colored-${platformKey}.svg`],
    [SVGResourceType.Flat, `${svgAssetsPath}/logo-${platformKey}.svg`],
  ]);
};

const generateSocialMediaLinkMap = (platformKey: SocialMediaPlatform): SocialMediaLinkMap => {
  return new Map([
    [SocialMediaLinkType.Profile, `${brandedBaseUrl}/${profilePathPrefix}${platformKey}`],
    [SocialMediaLinkType.Contact, `${brandedBaseUrl}/${contactPathPrefix}${platformKey}`],
  ]);
};

const generatePlatformKeyValue = (sVGResourceType: string, platformKey: string) => `${sVGResourceType}-${platformKey}`;

export const getSocialMediaDefinitions = (
  platformKeys: SocialMediaPlatform[],
  passedOptions?: IPassedSocialMediaDefinitionOptions
): ISocialMediaPlatformDefinition[] => {
  const options = { ...defaultSocialMediaDefinitionOptions, ...passedOptions };
  return platformKeys.map((platformKey) => ({
    platformKey: generatePlatformKeyValue(options.sVGResourceType, platformKey),
    platformName: platformNames.get(platformKey) as string,
    brandedUrl: generateSocialMediaLinkMap(platformKey).get(options.socialMediaLinkType) as string,
    svgResourcePath: generateSvgResourceMap(platformKey).get(options.sVGResourceType) as string,
  }));
};

export const getSocialMediaIconDefinitions = (): ISocialMediaIconDefinition[] => {
  // TODO: There is probably a better way to write the function 'getSocialMediaIconDefinitions'
  return [].concat.apply(
    [],
    //@ts-ignore
    Array.from(platformNames.keys()).map((platformKey) => {
      const svgResourceMap = generateSvgResourceMap(platformKey);
      return Object.keys(SVGResourceType).map((resourceType) => {
        // @ts-ignore
        const resourceTypeValue = SVGResourceType[resourceType];
        return {
          iconKey: generatePlatformKeyValue(resourceTypeValue, platformKey),
          svgResourcePath: svgResourceMap.get(resourceTypeValue) as string,
        } as ISocialMediaIconDefinition;
      });
    })
  );
};
