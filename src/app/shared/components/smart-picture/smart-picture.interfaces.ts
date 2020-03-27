export interface PictureRef {
  url: string;
  type: string;
}

export interface PictureSource {
  main: PictureRef;
  fallback?: PictureRef;
}

export interface SmartPictureSettings {
  source: PictureSource;
  alt?: string;
  ariaHidden?: string;

  isResponsive?: boolean;
  disablePlaceholder?: boolean;
  disableLazyLoad?: boolean;

  objectPosition?: string;
  size?: string;
  heightRatio?: number;
  widthRatio?: number;
}
