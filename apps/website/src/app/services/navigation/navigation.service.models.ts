import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';

export interface INavigationWatcher {
  onNavigationStart?: (event: NavigationStart) => void;
  onNavigationCancel?: (event: NavigationCancel) => void;
  onNavigationEnd?: (event: NavigationEnd) => void;
  onNavigationError?: (event: NavigationError) => void;
  onNavigationComplete?: () => void;
}
