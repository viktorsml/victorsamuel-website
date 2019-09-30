import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSocialBarVisible = false;
  private socialIconsSubscription: Subscription;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.isSocialBarVisible = !(this.router.url === '/acerca');
    this.socialIconsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSocialBarVisible = !(event.urlAfterRedirects === '/acerca');
      }
    });
  }

  ngOnDestroy() {
    this.socialIconsSubscription.unsubscribe();
  }

}
