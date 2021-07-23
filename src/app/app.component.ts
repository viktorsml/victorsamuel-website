import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { Subscription } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart } from '@angular/router';
import { environment } from '@environment';
import { getSocialMediaIconDefinitions } from '@mocks/social-media';

import { ColorTheme } from './app.component.models';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  private _colorTheme: ColorTheme = ColorTheme.Dark;

  private _isBrowserEnvironment: boolean;
  private _isAbleToDetectSystemPreferences: boolean;
  private _navigationWatcherSubscription!: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId: object,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitzer: DomSanitizer,
    private readonly _renderer: Renderer2,
    private readonly _googleTagManagerService: GoogleTagManagerService,
    private readonly _navigationService: NavigationService
  ) {
    this._isBrowserEnvironment = isPlatformBrowser(_platformId);
    this._isAbleToDetectSystemPreferences = this._isBrowserEnvironment && window && window.matchMedia('(prefers-color-scheme)').media !== 'not all';
  }

  //#region Lifecycle
  public ngOnInit() {
    if (this._isBrowserEnvironment) {
      this._enableGoogleTagManagerTracking();
      this._registerCustomIcons();
      this._watchNavigation();
      // TODO: Create a propper light theme.
      // this._watchSystemColorThemeChange();
      this._setColorTheme(this._colorTheme);
    }
  }

  public ngOnDestroy() {
    this._navigationWatcherSubscription.unsubscribe();
  }

  private _enableGoogleTagManagerTracking() {
    if (environment.production) {
      this._googleTagManagerService.addGtmToDom();
    }
  }

  private _watchNavigation() {
    this._navigationWatcherSubscription = this._navigationService.watchNavigation({
      onNavigationStart: (event) => this._onNavigationStart(event),
    });
  }

  private _onNavigationStart(event: NavigationStart) {
    this._navigationService.scrollToTop();
  }
  //#endregion Lifecycle

  // #region Accessibility
  @HostListener('mousedown', ['$event'])
  private _onMouseDown(): void {
    this._renderer.addClass(document.body, 'App--IsUsingMouse');
  }

  @HostListener('keyup', ['$event'])
  private _onKeyDown({ key: pressedKey }: KeyboardEvent): void {
    if (pressedKey === 'Tab') {
      this._renderer.removeClass(document.body, 'App--IsUsingMouse');
    }
  }
  // #endregion

  // #region Theme Engine
  private _setColorTheme(updatedColorTheme: ColorTheme): void {
    const opositeColorTheme = updatedColorTheme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Dark;
    this._colorTheme = updatedColorTheme;
    this._renderer.removeClass(document.body, opositeColorTheme);
    this._renderer.addClass(document.body, updatedColorTheme);
  }

  private _watchSystemColorThemeChange() {
    this._setColorTheme(this._colorTheme);

    if (!this._isAbleToDetectSystemPreferences) {
      return;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: doesUserPreferDarkTheme }: MediaQueryListEvent) => {
      this._setColorTheme(doesUserPreferDarkTheme ? ColorTheme.Dark : ColorTheme.Light);
    });
  }
  // #endregion

  // #region Icon Registration
  private _registerCustomIcons() {
    const customIcons = getSocialMediaIconDefinitions();
    for (const { iconKey, svgResourcePath } of customIcons) {
      this.matIconRegistry.addSvgIcon(iconKey, this.domSanitzer.bypassSecurityTrustResourceUrl(svgResourcePath));
    }
  }
  // #endregion Icon Registration
}
