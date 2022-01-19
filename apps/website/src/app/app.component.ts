import { Subscription } from 'rxjs';

import { Component, HostListener, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart } from '@angular/router';
import { getSocialMediaIconDefinitions } from '@mocks/social-media';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';

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

  private _isAbleToDetectSystemPreferences: boolean;
  private _navigationWatcherSubscription!: Subscription;

  constructor(
    private readonly _environmentService: EnvironmentService,
    private readonly _matIconRegistry: MatIconRegistry,
    private readonly _domSanitzer: DomSanitizer,
    private readonly _renderer: Renderer2,
    private readonly _analyticsService: AnalyticsService,
    private readonly _navigationService: NavigationService
  ) {
    this._isAbleToDetectSystemPreferences =
      this._environmentService.isBrowserEnvironment && window && window.matchMedia('(prefers-color-scheme)').media !== 'not all';
  }

  //#region Lifecycle
  public ngOnInit() {
    console.debug('Aplication running in environment:', this._environmentService.environment);
    if (this._environmentService.isBrowserEnvironment) {
      this._analyticsService.initializeGoogleTagManager();
      this._playAnimationsOnBrowserLoad();
      this._registerCustomIcons();
      this._watchNavigation();
      // TODO: Create a propper light theme.
      // this._watchSystemColorThemeChange();
      this._setColorTheme(this._colorTheme);
    }
  }

  public ngOnDestroy() {
    if (this._environmentService.isBrowserEnvironment) {
      this._navigationWatcherSubscription.unsubscribe();
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
    if (this._environmentService.isBrowserEnvironment) {
      this._renderer.addClass(this._environmentService.document.body, 'App--IsUsingMouse');
    }
  }

  @HostListener('keyup', ['$event'])
  private _onKeyDown({ key: pressedKey }: KeyboardEvent): void {
    if (pressedKey === 'Tab' && this._environmentService.isBrowserEnvironment) {
      this._renderer.removeClass(this._environmentService.document.body, 'App--IsUsingMouse');
    }
  }
  // #endregion

  // #region Theme Engine
  private _setColorTheme(updatedColorTheme: ColorTheme): void {
    const opositeColorTheme = updatedColorTheme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Dark;
    this._colorTheme = updatedColorTheme;
    this._renderer.removeClass(this._environmentService.document.body, opositeColorTheme);
    this._renderer.addClass(this._environmentService.document.body, updatedColorTheme);
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

  private _playAnimationsOnBrowserLoad() {
    if (this._environmentService.isBrowserEnvironment) {
      this._renderer.removeClass(this._environmentService.document.body, 'App--PrepareForAnimations');
      this._renderer.addClass(this._environmentService.document.body, 'App--AllowAnimations');
    }
  }
  // #endregion

  // #region Icon Registration
  private _registerCustomIcons() {
    const customIcons = getSocialMediaIconDefinitions();
    for (const { iconKey, svgResourcePath } of customIcons) {
      this._matIconRegistry.addSvgIcon(iconKey, this._domSanitzer.bypassSecurityTrustResourceUrl(svgResourcePath));
    }
  }
  // #endregion Icon Registration
}