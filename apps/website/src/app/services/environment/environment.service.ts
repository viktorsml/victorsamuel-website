import { PRODUCTION_DOMAIN, PRODUCTION_GOOGLE_ANALYTICS_ID, TESTING_GOOGLE_ANALYTICS_ID } from 'src/environments/environment.common';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, LOCALE_ID, PLATFORM_ID } from '@angular/core';

import { Environment, ISupportedLanguageDefinition, SupportedLanguage } from './environment.service.models';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private _isBrowserEnvironment: boolean;
  private _isServerEnvironment: boolean;
  private _environment: Environment;

  private _localDomains: string[] = ['localhost:4200'];
  private _supportedLanguages: ISupportedLanguageDefinition[] = [
    { code: SupportedLanguage.English, label: 'English', help: 'Switch language to English' },
    { code: SupportedLanguage.Spanish, label: 'Español', help: 'Cambiar idioma al Español' },
  ];

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object, @Inject(LOCALE_ID) private readonly _locale: string) {
    this._isBrowserEnvironment = isPlatformBrowser(_platformId);
    this._isServerEnvironment = isPlatformServer(_platformId);
    this._environment = this._determineEnvironment();
  }

  // #region Getters And Setters
  public get isBrowserEnvironment(): boolean {
    return this._isBrowserEnvironment;
  }

  public get isServerEnvironment(): boolean {
    return this._isServerEnvironment;
  }

  public get environment(): Environment {
    return this._environment;
  }

  public get supportedLanguages(): ISupportedLanguageDefinition[] {
    return this._supportedLanguages;
  }

  public get currentLanguage(): SupportedLanguage {
    return this._locale.substring(0, 2) as SupportedLanguage;
  }
  // #endregion Getters And Setters

  private _determineEnvironment(): Environment {
    if (!this._isBrowserEnvironment) {
      return Environment.Server;
    }

    const currentDomain = window.location.host;

    if (currentDomain === PRODUCTION_DOMAIN) {
      return Environment.Production;
    }

    if (currentDomain !== PRODUCTION_DOMAIN && !this._localDomains.includes(currentDomain)) {
      return Environment.Testing;
    }

    return Environment.Development;
  }

  public getGoogleAnalyticsMeasurementId(): string {
    switch (this._environment) {
      case Environment.Production:
        return PRODUCTION_GOOGLE_ANALYTICS_ID;
      default:
        return TESTING_GOOGLE_ANALYTICS_ID;
    }
  }
}
