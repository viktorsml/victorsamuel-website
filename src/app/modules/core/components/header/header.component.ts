import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

interface MenuLink {
  title: string,
  path: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSocialBarVisible = false;
  public menuLinks: Array<MenuLink> = [
    { title: 'Acerca', path: '/about' },
    { title: 'Portafolio', path: '/portfolio' },
    { title: 'Contacto', path: '/contact' },
  ];
  private socialIconsSubscription: Subscription;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.isSocialBarVisible = !(this.router.url === '/about');
    this.socialIconsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSocialBarVisible = !(event.urlAfterRedirects === '/about');
      }
    });
  }

  ngOnDestroy() {
    this.socialIconsSubscription.unsubscribe();
  }

}
