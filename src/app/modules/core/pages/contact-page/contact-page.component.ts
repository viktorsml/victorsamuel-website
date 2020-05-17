import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../app.state';
import * as LoadingScreenActions from '../../../../state/actions/loading-screen.actions';
import { CoreService } from '../../core.service';

interface SocialIcon {
  title: string;
  name: string;
  url: string;
  resource: string;
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  public readonly contactIcons: SocialIcon[] = [
    {
      title: 'LinkedIn',
      name: 'linkedin',
      url: 'https://go.victorsamuel.com/contact-via-linkedin',
      resource: '/assets/svg/logo-colored-linkedin.svg',
    },
    {
      title: 'Twitter',
      name: 'twitter',
      url: 'https://go.victorsamuel.com/contact-via-twitter',
      resource: '/assets/svg/logo-colored-twitter.svg',
    },
    {
      title: 'Telegram',
      name: 'telegram',
      url: 'https://go.victorsamuel.com/contact-via-telegram',
      resource: '/assets/svg/logo-colored-telegram.svg',
    },
    {
      title: 'Messenger',
      name: 'messenger',
      url: 'https://go.victorsamuel.com/contact-via-messenger',
      resource: '/assets/svg/logo-colored-messenger.svg',
    },
    {
      title: 'WhatsApp',
      name: 'whatsapp',
      url: 'https://go.victorsamuel.com/contact-via-whatsapp',
      resource: '/assets/svg/logo-colored-whatsapp.svg',
    },
  ];

  constructor(
    public readonly core: CoreService,
    private readonly store: Store<AppState>,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly router: Router
  ) {
    store.dispatch(new LoadingScreenActions.ShowLoadingScreen(false));
  }

  public ngOnInit(): void {
    this.core.setMetaTags({
      title: {
        en: 'Victor Samuel | Contact',
        es: 'Victor Samuel | Contacto',
      },
      description: {
        en: `Full-stack web developer currently in the ${this.core.currentLocation.city} area.`,
        es: `Desarrollador web full-stack actualmente en el área de ${this.core.currentLocation.city}.`,
      },
      type: 'profile',
      image: this.core.profilePic,
      url: `https://www.victorsamuel.com/${this.core.currentLocale}${this.router.url}`,
    });
    this.contactIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.resource));
    });
  }
}
