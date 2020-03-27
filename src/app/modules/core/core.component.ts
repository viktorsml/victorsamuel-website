import { Subscription } from 'rxjs';

import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterContentInit, OnDestroy {
  public isLoading: boolean = true;
  private backgroundStylerSubscription: Subscription;

  constructor(private readonly router: Router) {}

  public ngOnInit(): void {
    this.backgroundStylerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
