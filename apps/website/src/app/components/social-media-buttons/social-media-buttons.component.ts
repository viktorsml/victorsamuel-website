import { Component, Input } from '@angular/core';
import { getSocialMediaDefinitions, SocialMediaPlatform } from '@mocks/social-media';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';

@Component({
    selector: 'app-social-media-buttons',
    templateUrl: './social-media-buttons.component.html',
    styleUrls: ['./social-media-buttons.component.scss'],
})
export class SocialMediaButtonsComponent {
    @Input() public tabindex: number = 0;
    public readonly socialIcons = getSocialMediaDefinitions([
        SocialMediaPlatform.Twitter,
        SocialMediaPlatform.LinkedIn,
        SocialMediaPlatform.GitHub,
    ]);
    public readonly canShowIcon = this.environment.isBrowserEnvironment;

    constructor(private readonly analytics: AnalyticsService, private readonly environment: EnvironmentService) {}

    public registerSocialMediaVisit(platform: string) {
        this.analytics.dispatchSocialMediaVisit(platform);
    }
}
