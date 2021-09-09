export type MIMEType = 'jpeg' | 'apng' | 'bmp' | 'gif' | 'x-icon' | 'png' | 'svg+xml' | 'tiff' | 'webp';

export type ObjectFitValues = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | 'inherit' | 'initial' | 'unset';

export interface IImageDefinition {
  resourcePath: string;
  imageType: MIMEType;
}

export interface IImageSizeSettings {
  heightRatio?: number;
  widthRatio?: number;
  objectFit?: ObjectFitValues;
  objectPosition?: string;
}

export interface ISmartPictureSettings {
  definition: IImageDefinition[];
  size?: IImageSizeSettings;
  shouldLazyLoad?: boolean;
  alt?: string;
}

export interface IPictureRenderEvent {
  wasLazyLoaded: boolean;
  settings: ISmartPictureSettings;
}
