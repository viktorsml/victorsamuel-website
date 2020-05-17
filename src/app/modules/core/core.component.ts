import { Observable, Subscription } from 'rxjs';

import { animate, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import * as LoadingScreenActions from '../../state/actions/loading-screen.actions';
import { CoreService } from './core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.3s cubic-bezier(0.75, 0.18, 0.48, 0.98)', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.3s cubic-bezier(0.75, 0.18, 0.48, 0.98)', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CoreComponent implements OnInit, OnDestroy {
  public isInitialLoad: boolean = true;
  public isSocialBarVisible: boolean = false;
  private backgroundStylerSubscription: Subscription;
  private readonly initialPage: string = '/about';

  public isLoading: Observable<boolean>;

  constructor(private readonly store: Store<AppState>, private readonly router: Router, public core: CoreService) {}

  public ngOnInit(): void {
    this.isSocialBarVisible = !(this.router.url === this.initialPage);
    this.isLoading = this.store.select('isLoading');
    this.watchNavigation(
      (eventOnSuccess) => this.doOnNavigationStart(eventOnSuccess),
      (eventOnEnd) => this.doOnNavigationEnd(eventOnEnd)
    );
  }

  public ngOnDestroy(): void {
    this.backgroundStylerSubscription.unsubscribe();
  }

  private watchNavigation(
    onNavigationStart: (event: NavigationStart) => void,
    onNavigationEnd: (event: NavigationEnd | NavigationCancel | NavigationError) => void
  ): void {
    this.backgroundStylerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) onNavigationStart(event);
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) onNavigationEnd(event);
    });
  }

  private doOnNavigationStart(event: NavigationStart): void {
    this.scrollToTop();
    this.store.dispatch(new LoadingScreenActions.ShowLoadingScreen(true));
    this.isInitialLoad = false;
  }

  private doOnNavigationEnd(event: NavigationEnd | NavigationCancel | NavigationError): void {
    if (event instanceof NavigationEnd) this.isSocialBarVisible = !(event.urlAfterRedirects === this.initialPage);
  }

  public scrollToTop(): void {
    if (this.core.isBrowser) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public switchLanguage(): string {
    if (this.core.isBrowser) {
      const targetLanguage = this.core.currentLocale === 'es' ? 'en' : 'es';
      return `${window.location.origin}/${window.location.pathname.replace(/^.{3}/g, targetLanguage)}`;
    }
  }
}
