import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { EnvironmentService } from '@services/environment';

import { INavigationWatcher } from './navigation.service.models';

@Injectable({
  providedIn: 'root',
})
/**@deprecated */
export class NavigationService {
  constructor(private readonly _environmentService: EnvironmentService, private _router: Router, private readonly _activatedRoute: ActivatedRoute) {}

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
    if (this._environmentService.isBrowserEnvironment) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
