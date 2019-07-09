import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  public isBgInFullScreen: boolean;
  private backgroundStylerSubscription: Subscription;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.isBgInFullScreen = !(this.router.url === '/portfolio');
    this.backgroundStylerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBgInFullScreen = !(event.urlAfterRedirects === '/portfolio');
      }
    });
  }

  ngOnDestroy() {
    this.backgroundStylerSubscription.unsubscribe();
  }

}
