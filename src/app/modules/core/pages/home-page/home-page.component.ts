import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../app.state';
import { SmartPictureSettings } from '../../../../shared/components/smart-picture/smart-picture.interfaces';
import * as LoadingScreenActions from '../../../../state/actions/loading-screen.actions';
import { CoreService } from '../../core.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public readonly developerIcon: SmartPictureSettings = {
    source: { main: { url: '/assets/svg/laptop-code.svg', type: 'svg' } },
    size: 'contain',
    isResponsive: true,
    heightRatio: 4,
    widthRatio: 5,
    disablePlaceholder: true,
  };
  public readonly developerImage: SmartPictureSettings = {
    source: { main: { url: '/assets/svg/developer.svg', type: 'svg' } },
    size: 'contain',
    isResponsive: true,
    heightRatio: 356,
    widthRatio: 457,
    objectPosition: 'right',
    disablePlaceholder: true,
  };

  constructor(public readonly core: CoreService, private readonly store: Store<AppState>, private readonly router: Router) {
    store.dispatch(new LoadingScreenActions.ShowLoadingScreen(false));
  }

  public ngOnInit(): void {
    this.core.setMetaTags({
      title: {
        en: 'Victor Samuel | Full-Stack Web Developer',
        es: 'Victor Samuel | Desarrollador Web Full-Stack',
      },
      description: {
        en: `Full-stack web developer currently in the ${this.core.currentLocation.city} area.`,
        es: `Desarrollador web full-stack actualmente en el área de ${this.core.currentLocation.city}.`,
      },
      type: 'profile',
      image: this.core.profilePic,
      url: `https://www.victorsamuel.com/${this.core.currentLocale}${this.router.url}`,
    });
  }
}
