export type DisplayMode = 'Code' | 'Label';

export interface ISetCookieOptions {
  name: string;
  value: string;
  expireDays?: number;
  path?: string;
}
