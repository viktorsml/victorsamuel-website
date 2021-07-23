import { ISmartPictureSettings } from './smart-picture.component.models';

export const defaultSettings: ISmartPictureSettings = {
  definition: [],
  shouldLazyLoad: true,
  size: {
    objectFit: 'contain',
  },
  alt: '',
};
