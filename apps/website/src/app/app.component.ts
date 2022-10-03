import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Component, HostListener, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { getSocialMediaIconDefinitions } from '@mocks/social-media';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';

import { ColorTheme } from './app.component.models';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
    private _colorTheme: ColorTheme = ColorTheme.Dark;

    private readonly destroyed$ = new Subject();

    constructor(
        private readonly environmentService: EnvironmentService,
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitzer: DomSanitizer,
        private readonly renderer: Renderer2,
        private readonly analytics: AnalyticsService,
        private readonly navigation: NavigationService,
        private readonly router: Router
    ) {}

    public ngOnInit() {
        if (this.environmentService.isBrowserEnvironment) {
            this.playAnimationsOnBrowserLoad();
            this.registerCustomIcons();
            this.watchNavigation();
            this.setColorTheme(this._colorTheme);
            this.initializeAnalytics();
        }
    }

    public ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    private initializeAnalytics() {
        this.analytics.initializeAnalytics();
    }

    private watchNavigation() {
        this.router.events
            .pipe(
                takeUntil(this.destroyed$),
                filter((event) => event instanceof NavigationStart)
            )
            .subscribe(this.onNavigationStart.bind(this));
    }

    private onNavigationStart() {
        this.navigation.scrollToTop();
    }

    @HostListener('mousedown', ['$event'])
    public onMouseDown(): void {
        if (this.environmentService.isBrowserEnvironment) {
            this.renderer.addClass(this.environmentService.document.body, 'App--IsUsingMouse');
        }
    }

    @HostListener('keyup', ['$event'])
    public onKeyDown({ key: pressedKey }: KeyboardEvent): void {
        if (pressedKey === 'Tab' && this.environmentService.isBrowserEnvironment) {
            this.renderer.removeClass(this.environmentService.document.body, 'App--IsUsingMouse');
        }
    }

    private setColorTheme(updatedColorTheme: ColorTheme): void {
        const opositeColorTheme = updatedColorTheme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Dark;
        this._colorTheme = updatedColorTheme;
        this.renderer.removeClass(this.environmentService.document.body, opositeColorTheme);
        this.renderer.addClass(this.environmentService.document.body, updatedColorTheme);
    }

    private playAnimationsOnBrowserLoad() {
        if (this.environmentService.isBrowserEnvironment) {
            this.renderer.removeClass(this.environmentService.document.body, 'App--PrepareForAnimations');
            this.renderer.addClass(this.environmentService.document.body, 'App--AllowAnimations');
        }
    }

    private registerCustomIcons() {
        const customIcons = getSocialMediaIconDefinitions();
        for (const { iconKey, svgResourcePath } of customIcons) {
            this.matIconRegistry.addSvgIcon(iconKey, this.domSanitzer.bypassSecurityTrustResourceUrl(svgResourcePath));
        }
    }
}
