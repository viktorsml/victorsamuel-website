import { Subscription } from 'rxjs';

import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, AfterContentInit, OnDestroy {
  public isLoading: boolean = true;
  private backgroundStylerSubscription: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.backgroundStylerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false;
      }
      if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }

  ngAfterContentInit() {
    this.isLoading = false;
  }

  ngOnDestroy() {
    this.backgroundStylerSubscription.unsubscribe();
  }
}
