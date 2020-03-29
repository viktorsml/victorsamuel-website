import { Subscription } from 'rxjs';

import { Component, HostBinding, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isSocialBarVisible = false;
  public language: string;
  private socialIconsSubscription: Subscription;

  constructor(@Inject(LOCALE_ID) public locale: string, private readonly router: Router) {}

  public ngOnInit(): void {
    this.language = this.locale.substr(0, 2);
    this.isSocialBarVisible = !(this.router.url === '/acerca');
    this.socialIconsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSocialBarVisible = !(event.urlAfterRedirects === '/acerca');
      }
    });
  }

  public switchLanguage(): void {
    const currentLanguage = window.location.pathname.substr(1, 2);
    const targetLanguage = currentLanguage === 'es' ? 'en' : 'es';
    window.location.replace(`${window.location.origin}/${window.location.pathname.replace(/^.{3}/g, targetLanguage)}`);
  }

  public ngOnDestroy(): void {
    this.socialIconsSubscription.unsubscribe();
  }
}
