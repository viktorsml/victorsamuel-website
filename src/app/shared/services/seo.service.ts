import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface TitleTag {
  en: string;
  es: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  public currentLocale: string;

  constructor(@Inject(LOCALE_ID) public locale: string, private readonly titleService: Title) {
    this.currentLocale = this.locale.substring(0, 2);
  }

  public setTitle(titleTag: TitleTag): void {
    this.titleService.setTitle(titleTag[this.currentLocale]);
  }
}
