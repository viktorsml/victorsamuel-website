import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environment';
import { getSocialMediaDefinitions, SocialMediaPlatform } from '@mocks/social-media';
import { Store } from '@ngrx/store';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';
import { NavigationService } from '@services/navigation';
import { SEOMetaInformation, SeoService } from '@services/seo';
import { IAppState } from '@store/models';
import { getIsInHomePageState, getLoadingState, SetLoadingPageStateAction } from '@store/website';

import { INavigationItem, IRouteData } from './website-layout.component.models';

@Component({
    selector: 'app-website-layout',
    templateUrl: './website-layout.component.html',
    styleUrls: ['./website-layout.component.scss'],
})
export class WebsiteLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('RouterOutletContainer')
    private readonly routerOutletContainer!: ElementRef;

    public readonly contactEmail = environment.contactEmail;
    public readonly composeNewEmailUrl = environment.composeNewEmailUrl;
    public readonly isVerticalScrollbarVisible$ = new BehaviorSubject<boolean>(false);
    public readonly navigationItems: INavigationItem[] = [
        { label: $localize`About Me`, routerLink: 'about' },
        { label: $localize`Projects`, routerLink: 'projects' },
        { label: $localize`Contact`, routerLink: 'contact' },
    ];
    public readonly socialMediaProfileLinks = getSocialMediaDefinitions([
        SocialMediaPlatform.Twitter,
        SocialMediaPlatform.LinkedIn,
        SocialMediaPlatform.GitHub,
    ]);

    private navigationWatcherSubscription!: Subscription;
    private routerOutletContainerHeightObserver: any;
    public isLoadingRoute$: Observable<boolean>;
    public isInHomePage$: Observable<boolean>;

    private get routeData(): IRouteData | undefined {
        return this.activatedRoute.snapshot.firstChild?.data;
    }

    constructor(
        private readonly store: Store<IAppState>,
        private readonly seo: SeoService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly environmentService: EnvironmentService,
        private readonly analytics: AnalyticsService,
        public readonly navigationService: NavigationService
    ) {
        this.isLoadingRoute$ = this.store.select(getLoadingState);
        this.isInHomePage$ = this.store.select(getIsInHomePageState);
    }

    public ngOnInit(): void {
        this.watchNavigation();
        this.setSeoMetaInformationBasedOnRouteData();
    }

    public ngAfterViewInit(): void {
        if (this.environmentService.isBrowserEnvironment) {
            this.routerOutletContainerHeightObserver = this.watchRouterOutletContainerHeight((routerOutletContainerHeight) => {
                this.isVerticalScrollbarVisible$.next(routerOutletContainerHeight > window.innerHeight);
            });
        }
    }

    public ngOnDestroy() {
        this.navigationWatcherSubscription.unsubscribe();
        if (this.environmentService.isBrowserEnvironment) {
            this.routerOutletContainerHeightObserver.unobserve(this.routerOutletContainer.nativeElement);
        }
    }

    public dispatchSocialMediaVisit(platform: string) {
        this.analytics.dispatchSocialMediaVisit(platform);
    }

    private watchNavigation() {
        this.navigationWatcherSubscription = this.navigationService.watchNavigation({
            onNavigationStart: () => this.onNavigationStart(),
            onNavigationEnd: () => this.onNavigationEnd(),
            onNavigationComplete: () => this.onNavigationComplete(),
        });
        setTimeout(() => {
            this.onNavigationStart();
            this.onNavigationEnd();
            this.onNavigationComplete();
        }, 0);
    }

    private onNavigationStart() {
        this.store.dispatch(SetLoadingPageStateAction({ isLoading: true }));
    }

    private onNavigationEnd(): void {
        this.setSeoMetaInformationBasedOnRouteData(this.routeData?.seoInformation);
    }

    private onNavigationComplete() {
        if (!this.routeData?.requiresExtraLoadingTime) {
            this.store.dispatch(SetLoadingPageStateAction({ isLoading: false }));
        }
    }

    private watchRouterOutletContainerHeight(callback: (routerOutletContainerHeight: number) => void) {
        const resizeObserver = new ResizeObserver((entries) => callback(entries[0].target.clientHeight));
        resizeObserver.observe(this.routerOutletContainer.nativeElement);
        return resizeObserver;
    }

    private setSeoMetaInformationBasedOnRouteData(seoInformation?: SEOMetaInformation) {
        this.seo.setMetaInformation(seoInformation || {});
    }
}
