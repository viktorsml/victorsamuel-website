import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { environment } from '@environment';
import { getSocialMediaDefinitions, SocialMediaPlatform } from '@mocks/social-media';
import { Store } from '@ngrx/store';
import { NavigationService } from '@services/navigation';
import { SEOMetaInformation, SeoService } from '@services/seo';
import { IAppState } from '@store/models';
import { getIsInHomePageState, getLoadingState, SetLoadingPageStateAction } from '@store/website';

import { INavigationItem } from './website-layout.component.models';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('0.3s cubic-bezier(0.75, 0.18, 0.48, 0.98)', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.3s cubic-bezier(0.75, 0.18, 0.48, 0.98)', style({ opacity: 0 }))]),
    ]),
  ],
})
export class WebsiteLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('RouterOutletContainer') private _routerOutletContainer!: ElementRef;

  public contactEmail = environment.contactEmail;
  public composeNewEmailUrl = environment.composeNewEmailUrl;
  public isVerticalScrollbarVisible$ = new BehaviorSubject<boolean>(false);
  public navigationItems: INavigationItem[] = [
    { label: 'About Me', routerLink: 'about' },
    { label: 'Projects', routerLink: 'projects' },
    { label: 'Contact', routerLink: 'contact' },
  ];
  public socialMediaProfileLinks = getSocialMediaDefinitions([
    SocialMediaPlatform.Twitter,
    SocialMediaPlatform.Instagram,
    SocialMediaPlatform.LinkedIn,
    SocialMediaPlatform.GitHub,
  ]);

  private _navigationWatcherSubscription!: Subscription;
  private _routerOutletContainerHeightObserver: any;
  public isLoadingRoute$: Observable<boolean>;
  public isInHomePage$: Observable<boolean>;

  constructor(
    private readonly _store: Store<IAppState>,
    private readonly _seoService: SeoService,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly navigationService: NavigationService
  ) {
    this.isLoadingRoute$ = this._store.select(getLoadingState);
    this.isInHomePage$ = this._store.select(getIsInHomePageState);
  }

  public ngOnInit(): void {
    this._setSeoMetaInformationBasedOnRouteData();
    this._navigationWatcherSubscription = this.navigationService.watchNavigation({
      onNavigationStart: (event) => this._onNavigationStart(event),
      onNavigationEnd: (event) => this._onNavigationEnd(event),
      onNavigationComplete: () => this._onNavigationComplete(),
    });
  }

  public ngAfterViewInit(): void {
    this._routerOutletContainerHeightObserver = this._watchRouterOutletContainerHeight((routerOutletContainerHeight) => {
      this.isVerticalScrollbarVisible$.next(routerOutletContainerHeight > window.innerHeight);
    });
  }

  public ngOnDestroy() {
    this._navigationWatcherSubscription.unsubscribe();
    this._routerOutletContainerHeightObserver.unobserve(this._routerOutletContainer.nativeElement);
  }

  private _onNavigationStart(event: NavigationStart) {
    this._store.dispatch(SetLoadingPageStateAction({ isLoading: true }));
  }

  private _onNavigationEnd(event: NavigationEnd): void {
    this._setSeoMetaInformationBasedOnRouteData();
  }

  private _onNavigationComplete() {
    this._store.dispatch(SetLoadingPageStateAction({ isLoading: false }));
  }

  private _watchRouterOutletContainerHeight(callback: (routerOutletContainerHeight: number) => void) {
    const resizeObserver = new ResizeObserver((entries) => callback(entries[0].target.clientHeight));
    resizeObserver.observe(this._routerOutletContainer.nativeElement);
    return resizeObserver;
  }

  private _setSeoMetaInformationBasedOnRouteData() {
    this._seoService.setMetaInformation(this._activatedRoute.snapshot.firstChild?.data as SEOMetaInformation);
  }
}
