import { Subscription } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isSocialBarVisible = false;
  public language: string;
  public isBrowser: boolean;
  private socialIconsSubscription: Subscription;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    const initialPage = '/about';
    this.language = this.locale.substr(0, 2);
    this.isSocialBarVisible = !(this.router.url === initialPage);
    this.socialIconsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSocialBarVisible = !(event.urlAfterRedirects === initialPage);
      }
    });
  }

  public switchLanguage(): void {
    if (this.isBrowser) {
      const currentLanguage = window.location.pathname.substr(1, 2);
      const targetLanguage = currentLanguage === 'es' ? 'en' : 'es';
      window.location.replace(`${window.location.origin}/${window.location.pathname.replace(/^.{3}/g, targetLanguage)}`);
    }
  }

  public ngOnDestroy(): void {
    this.socialIconsSubscription.unsubscribe();
  }
}
