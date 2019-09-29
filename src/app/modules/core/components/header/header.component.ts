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
    { title: 'Acerca', path: '/acerca' },
    { title: 'Proyectos', path: '/proyectos' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contacto', path: '/contacto' },
    { title: 'CV', path: '/cv' },
  ];
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
