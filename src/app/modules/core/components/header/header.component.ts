import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isSocialBarVisible = false;
  private socialIconsSubscription: Subscription;

  constructor(private readonly router: Router) {}

  public ngOnInit(): void {
    this.isSocialBarVisible = !(this.router.url === '/acerca');
    this.socialIconsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSocialBarVisible = !(event.urlAfterRedirects === '/acerca');
      }
    });
  }

  public ngOnDestroy(): void {
    this.socialIconsSubscription.unsubscribe();
  }
}
