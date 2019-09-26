import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

interface SocialIcon {
  title: string,
  name: string,
  url: string,
  resource: string
}

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  @Input() tabindexValue: number = 0;

  public socialIcons: Array<SocialIcon> = [
    { title: 'Twitter', name: 'twitter', url: 'https://www.twitter.com/viktorsml', resource: '/assets/svg/logo-twitter.svg' },
    { title: 'Instagram', name: 'instagram', url: 'https://www.instagram.com/viktorsml', resource: '/assets/svg/logo-instagram.svg' },
    { title: 'GitHub', name: 'github', url: 'https://github.com/viktorsml', resource: '/assets/svg/logo-github.svg' },
    { title: 'LinkedIn', name: 'linkedin', url: 'https://www.linkedin.com/in/viktorsml', resource: '/assets/svg/logo-linkedin.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.socialIcons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.resource));
    });
  }

}
