import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

import { INavigationWatcher } from './navigation.service.models';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _isBrowserEnvironment: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object, private _router: Router) {
    this._isBrowserEnvironment = isPlatformBrowser(_platformId);
  }

  public watchNavigation({ onNavigationStart, onNavigationCancel, onNavigationEnd, onNavigationError, onNavigationComplete }: INavigationWatcher) {
    return this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) onNavigationStart && onNavigationStart(event);
      if (event instanceof NavigationCancel) onNavigationCancel && onNavigationCancel(event);
      if (event instanceof NavigationEnd) onNavigationEnd && onNavigationEnd(event);
      if (event instanceof NavigationError) onNavigationError && onNavigationError(event);
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError)
        onNavigationComplete && onNavigationComplete();
    });
  }

  public scrollToTop(): void {
    if (this._isBrowserEnvironment) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
