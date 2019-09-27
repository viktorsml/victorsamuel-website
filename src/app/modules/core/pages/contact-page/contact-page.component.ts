import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface SocialIcon {
  title: string,
  name: string,
  url: string,
  resource: string
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public contactIcons: Array<SocialIcon> = [
    { title: 'LinkedIn', name: 'linkedin', url: 'https://www.linkedin.com/in/viktorsml', resource: '/assets/svg/logo-colored-linkedin.svg' },
    { title: 'Twitter', name: 'twitter', url: 'https://twitter.com/messages/compose?recipient_id=1071842136079781888', resource: '/assets/svg/logo-colored-twitter.svg' },
    { title: 'Telegram', name: 'telegram', url: 'https://t.me/viktorsml', resource: '/assets/svg/logo-colored-telegram.svg' },
    { title: 'Messenger', name: 'messenger', url: 'https://m.me/victorsamuel.wd', resource: '/assets/svg/logo-colored-messenger.svg' },
    { title: 'WhatsApp', name: 'whatsapp', url: 'https://wa.me/5213221257546', resource: '/assets/svg/logo-colored-whatsapp.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.contactIcons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.resource));
    });
  }

}
