import { ISetCookieOptions } from './language-switcher.component.models';

export const setCookie = ({ name, value, expireDays = 30, path = '/' }: ISetCookieOptions) => {
  const date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires: string = `expires=${date.toUTCString()}`;
  const cpath: string = path ? `; path=${path}` : '/';
  document.cookie = `${name}=${value}; ${expires}${cpath}`;
};
