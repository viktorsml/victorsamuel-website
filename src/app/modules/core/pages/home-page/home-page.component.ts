import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';
import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public developerIcon: SmartPictureSettings;
  public developerImage: SmartPictureSettings;
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object, private readonly router: Router, private readonly seo: SeoService) {
    this.developerIcon = {
      source: {
        main: { url: '/assets/svg/laptop-code.svg', type: 'svg' },
      },
      size: 'contain',
      isResponsive: true,
      heightRatio: 4,
      widthRatio: 5,
      disablePlaceholder: true,
    };
    this.developerImage = {
      source: {
        main: { url: '/assets/svg/developer.svg', type: 'svg' },
      },
      size: 'contain',
      isResponsive: true,
      heightRatio: 356,
      widthRatio: 457,
      objectPosition: 'right',
      disablePlaceholder: true,
    };
  }

  public ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.seo.setMetaTags({
      title: {
        en: 'Victor Samuel | Full-Stack Web Developer',
        es: 'Victor Samuel | Desarrollador Web Full-Stack',
      },
      description: {
        en: `Full-stack web developer currently in the ${this.seo.currentLocation.city} area.`,
        es: `Desarrollador web full-stack actualmente en el área de ${this.seo.currentLocation.city}.`,
      },
      type: 'profile',
      image: this.seo.profilePic,
      url: `https://www.victorsamuel.com/${this.seo.currentLocale}${this.router.url}`,
    });
  }
}
