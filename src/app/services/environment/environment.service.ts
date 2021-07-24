import { PRODUCTION_DOMAIN, PRODUCTION_GOOGLE_ANALYTICS_ID, TESTING_GOOGLE_ANALYTICS_ID } from 'src/environments/environment.common';

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { Environment } from './environment.service.models';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private _isBrowserEnvironment: boolean;
  private _environment: Environment;

  private _localDomains: string[] = ['localhost:4200'];

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object) {
    this._isBrowserEnvironment = isPlatformBrowser(_platformId);
    this._environment = this._determineEnvironment();
  }

  // #region Getters And Setters
  public get isBrowserEnvironment(): boolean {
    return this._isBrowserEnvironment;
  }

  public get environment(): Environment {
    return this._environment;
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
