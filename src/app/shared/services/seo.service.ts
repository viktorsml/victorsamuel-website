import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface TextBlock {
  en: string;
  es: string;
}

interface SeoTags {
  url: string;
  title: TextBlock;
  description: TextBlock;
  image: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  public myTitle: TextBlock = {
    en: 'Full-Stack Web Developer',
    es: 'Desarrollador Web Full-Stack',
  };
  public currentLocation = {
    city: 'Puerto Vallarta',
    state: 'Jalisco',
    country: 'México',
  };
  public profilePic = 'https://www.victorsamuel.com/assets/image/victor-samuel-profile.jpg';
  public currentLocale: string;

  constructor(@Inject(LOCALE_ID) public locale: string, private readonly titleService: Title, private readonly meta: Meta) {
    this.currentLocale = this.locale.substring(0, 2);
  }

  public setTitle(titleTag: TextBlock): void {
    this.titleService.setTitle(titleTag[this.currentLocale]);
  }

  public setMetaTags(tags: SeoTags): void {
    this.setTitle(tags.title);
    this.meta.addTags([
      // regular seo tags
      { name: 'description', content: tags.description[this.currentLocale] },
      // for open graph
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:type', content: tags.type },
      { name: 'og:url', content: tags.url },
      { name: 'og:title', content: tags.title[this.currentLocale] },
      { name: 'og:description', content: tags.description[this.currentLocale] },
      { name: 'og:image', content: tags.image },
    ]);
  }
}
