import posthog, { Properties } from 'posthog-js';
import { Subject } from 'rxjs';
import { filter, skip, takeUntil } from 'rxjs/operators';

import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '@environment';
import { EnvironmentService } from '@services/environment';

@Injectable({
    providedIn: 'root',
})
export class AnalyticsService implements OnDestroy {
    private readonly destroyed$ = new Subject();
    private readonly canSendAnalytics = this.environment.isBrowserEnvironment;

    constructor(private readonly router: Router, private readonly environment: EnvironmentService) {}

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    public initializeAnalytics() {
        if (!this.canSendAnalytics) {
            return;
        }

        posthog.init(environment.postHogProjectApiKey, {
            api_host: environment.analyticsServerUri,
            persistence: 'localStorage',
            loaded: this.onAnalyticsInitialized.bind(this),
        });
    }

    public dispatchPageView() {
        if (!this.canSendAnalytics) {
            return;
        }

        console.debug('Dispatching page view');
        posthog.capture('$pageview');
    }

    public dispatchEvent(eventName: string, eventPayload?: Properties) {
        if (!this.canSendAnalytics) {
            return;
        }

        posthog.capture(eventName, eventPayload);
    }

    public dispatchSocialMediaVisit(platform: string) {
        this.dispatchEvent('Social Media Profile Visit', { platform });
    }

    public dispatchPublicEmailClicked() {
        this.dispatchEvent('Public Email Clicked');
    }

    private onAnalyticsInitialized() {
        posthog.register_once({
            ApplicationEnvironment: this.environment.environment,
        });

        this.router.events
            .pipe(
                takeUntil(this.destroyed$),
                filter((event) => event instanceof NavigationEnd),
                skip(1)
            )
            .subscribe(() => this.dispatchPageView());
    }
}
