import { Component, Inject, OnInit } from '@angular/core';

import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
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

  constructor(@Inject('VanillaTilt') public vanillaTilt: any) {}

  ngOnInit() {
    // const tiltedElements = document.querySelectorAll('.titlme .picture-holder');
    // tiltedElements.forEach(e => {
    //   e.setAttribute('data-tilt', '');
    //   e.setAttribute('data-tilt-full-page-listening', '');
    // })
    // this.vanillaTilt.init(tiltedElements, { max: 1, speed: 400 });
  }
}
