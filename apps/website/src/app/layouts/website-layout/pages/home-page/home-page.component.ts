import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISmartPictureSettings } from '@components/smart-picture';
import { Store } from '@ngrx/store';
import { IAppState } from '@store/models';
import { SetGlobalSocialIconsStateAction } from '@store/website';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  public demoImage: ISmartPictureSettings = {
    definition: [{ resourcePath: '/assets/svg/developer.svg', imageType: 'svg+xml' }],
    size: { widthRatio: 16, heightRatio: 9 },
  };

  constructor(private readonly _store: Store<IAppState>) {}

  public ngOnInit(): void {
    setTimeout(() => this._store.dispatch(SetGlobalSocialIconsStateAction({ isInHomePage: true })), 0);
  }

  public ngOnDestroy(): void {
    setTimeout(() => this._store.dispatch(SetGlobalSocialIconsStateAction({ isInHomePage: false })), 0);
  }
}
