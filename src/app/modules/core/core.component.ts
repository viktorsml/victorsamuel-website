import { Subscription } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { AfterContentInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterContentInit, OnDestroy {
  public isLoading: boolean = true;
  private backgroundStylerSubscription: Subscription;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object, private readonly router: Router) {}

  public ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.backgroundStylerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        if (this.isBrowser) window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false;
      }
    });
  }

  public ngAfterContentInit(): void {
    this.isLoading = false;
  }

  public ngOnDestroy(): void {
    this.backgroundStylerSubscription.unsubscribe();
  }
}
