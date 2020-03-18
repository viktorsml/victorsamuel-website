import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { SocialIcon } from './social-icons.interfaces';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  @Input() tabindexValue: number = 0;

  public socialIcons: Array<SocialIcon> = [
    { title: 'Twitter', name: 'twitter', url: 'https://go.victorsamuel.com/twitter', resource: '/assets/svg/logo-twitter.svg' },
    { title: 'Instagram', name: 'instagram', url: 'https://go.victorsamuel.com/instagram', resource: '/assets/svg/logo-instagram.svg' },
    { title: 'GitHub', name: 'github', url: 'https://go.victorsamuel.com/github', resource: '/assets/svg/logo-github.svg' },
    { title: 'LinkedIn', name: 'linkedin', url: 'https://go.victorsamuel.com/linkedin', resource: '/assets/svg/logo-linkedin.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.socialIcons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.resource));
    });
  }
}
