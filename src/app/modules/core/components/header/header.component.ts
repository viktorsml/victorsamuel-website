import { Component, OnInit } from '@angular/core';

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

  public menuLinks: Array<MenuLink> = [
    { title: 'Acerca', path: '/about' },
    { title: 'Portafolio', path: '/portfolio' },
    { title: 'Contacto', path: '/contact' },
  ];

  constructor() {}

  ngOnInit() {}

}
