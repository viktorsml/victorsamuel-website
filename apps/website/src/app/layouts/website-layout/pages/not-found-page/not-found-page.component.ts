import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
    constructor(private environment: EnvironmentService, private analytics: AnalyticsService) {}

    public async ngOnInit() {
        await this.beautifyUrlIfUserComesFromARedirectLoop();
        this.trackFailure();
    }

    public goBackInNavigationHistory() {
        window.history.back();
    }

    private async beautifyUrlIfUserComesFromARedirectLoop() {
        if (!this.environment.isBrowserEnvironment) {
            return;
        }

        const failureUrlCookieName = 'LastKnownUrl';
        const failureUrl = this.environment.getCookie(failureUrlCookieName);

        if (!failureUrl) {
            return;
        }

        try {
            window.history.replaceState(null, '', failureUrl);
            await this.environment.removeCookie(failureUrlCookieName);
        } catch (error) {
            if (error) {
                console.warn('A non critical error happened. You are okay but the URL in you browser may not be looking good.', error);
            }
        }
    }

    private trackFailure() {
        if (this.environment.isBrowserEnvironment) {
            this.analytics.dispatchEvent('Page Not Found', { failureUrl: window.location.href });
        }
    }
}
