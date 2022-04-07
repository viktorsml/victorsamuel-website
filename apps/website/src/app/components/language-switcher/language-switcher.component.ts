import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';
import { SupportedLanguage } from '@services/environment/environment.service.models';

import { DisplayMode } from './language-switcher.component.models';

@Component({
    selector: 'app-language-switcher',
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
    @Input() 'display-mode': DisplayMode = 'Label';

    public shouldDisplayAsLanguageCode: boolean = false;

    constructor(private readonly analytics: AnalyticsService, public readonly environment: EnvironmentService) {}

    public ngOnInit() {
        this.shouldDisplayAsLanguageCode = this['display-mode'] === 'Code';
    }

    public ngOnDestroy() {}

    public async onLanguageChange(language: SupportedLanguage) {
        if (this.environment.isBrowserEnvironment) {
            this.analytics.dispatchEvent('Language Change', { selectedLanguage: language });
            await this.environment.setCookie({ key: 'lang', value: language });
            window.location.href = window.location.href.replace(/(\/[a-zA-Z]{2}\/)/, `/${language}/`);
        }
    }
}
