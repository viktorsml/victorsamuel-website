import { Component } from '@angular/core';

import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public developerIcon: SmartPictureSettings = {
    source: {
      main: { url: '/assets/svg/laptop-code.svg', type: 'svg' }
    },
    size: 'contain',
    isResponsive: true,
    heightRatio: 4,
    widthRatio: 5,
    disablePlaceholder: true
  };
  public developerImage: SmartPictureSettings = {
    source: {
      main: { url: '/assets/svg/developer.svg', type: 'svg' }
    },
    size: 'contain',
    isResponsive: true,
    heightRatio: 356,
    widthRatio: 457,
    objectPosition: 'right',
    disablePlaceholder: true
  };

  constructor() {}
}
