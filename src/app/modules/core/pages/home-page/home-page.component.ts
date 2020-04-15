import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

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

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object, private readonly seo: SeoService) {
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
    this.seo.setTitle({
      en: 'Victor Samuel | Full-Stack Web Developer',
      es: 'Victor Samuel | Desarrollador Web Full-Stack',
    });
  }
}
