import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { defaultValues } from './seo.service.mocks';
import { SEOMetaInformation } from './seo.service.models';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private readonly _title: Title, private readonly _meta: Meta) {}

  public setMetaInformation({ pageTitle, description, type, image, url }: SEOMetaInformation) {
    this._title.setTitle(pageTitle ?? defaultValues.pageTitle);
    this._meta.addTags([
      { name: 'description', content: description ?? defaultValues.description },
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:type', content: type ?? defaultValues.type },
      { name: 'og:url', content: url ?? defaultValues.url },
      { name: 'og:title', content: pageTitle ?? defaultValues.pageTitle },
      { name: 'og:description', content: description ?? defaultValues.description },
      { name: 'og:image', content: image ?? defaultValues.image },
    ]);
  }
}
