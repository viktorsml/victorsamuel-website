import { MIMEType, ObjectFitValues } from './smart-picture.component.models';

export interface ValidatorModifiers {
  isRequired?: boolean;
}

const objectFitValues = ['fill', 'contain', 'cover', 'none', 'scale-down', 'inherit', 'initial', 'unset'];
const MIMETypes = ['jpeg', 'apng', 'bmp', 'gif', 'x-icon', 'png', 'svg+xml', 'tiff', 'webp'];

export class Validator {
  public static objectFitValues = objectFitValues;
  public static MIMETypes = MIMETypes;
  public static isValidImageUrl(imageUrl: string | null | undefined, modifiers: ValidatorModifiers = {}): boolean {
    if (!modifiers.isRequired && imageUrl === null) {
      return true;
    }
    if (typeof imageUrl !== 'string') {
      return false;
    }
    if (modifiers.isRequired && imageUrl.length <= 0) {
      return false;
    }
    return true;
  }

  public static isValidMIMEType(imageType: MIMEType | null | undefined, modifiers: ValidatorModifiers = {}): boolean {
    if (!modifiers.isRequired && imageType === null) {
      return true;
    }
    return MIMETypes.includes(imageType ?? '');
  }

  public static isValidString(value: string): boolean {
    return typeof value === 'string' && value.length >= 0;
  }

  public static isBoolean(value: boolean): boolean {
    return typeof value === 'boolean';
  }

  public static isValidObjectFitValue(value: ObjectFitValues): boolean {
    return objectFitValues.includes(value);
  }

  public static areValidAspectRatioValues(widthRatio: number | null | undefined, heightRatio: number | null | undefined): boolean {
    if (widthRatio === null && heightRatio === null) {
      return true;
    }
    if (Number(widthRatio) > 0 && Number(heightRatio) > 0) {
      return true;
    }
    if (typeof widthRatio === 'number' && widthRatio > 0 && typeof heightRatio === 'number' && heightRatio > 0) {
      return true;
    }
    return false;
  }

  public static isValidAspectRatio(widthRatio: number | null | undefined, heightRatio: number | null | undefined): boolean {
    if (widthRatio && widthRatio > 0 && heightRatio && heightRatio > 0) {
      return true;
    }
    return false;
  }
}
