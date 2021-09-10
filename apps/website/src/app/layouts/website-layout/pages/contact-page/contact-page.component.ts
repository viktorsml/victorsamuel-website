import { ClipboardService } from 'ngx-clipboard';

import { Component } from '@angular/core';
import { environment } from '@environment';
import { getSocialMediaDefinitions, SocialMediaLinkType, SocialMediaPlatform, SVGResourceType } from '@mocks/social-media';
import { AnalyticsService } from '@services/analytics';
import { EnvironmentService } from '@services/environment';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  public contactEmail = environment.contactEmail;
  public composeNewEmailUrl = environment.composeNewEmailUrl;
  public contactIcons = getSocialMediaDefinitions(
    [SocialMediaPlatform.LinkedIn, SocialMediaPlatform.Twitter, SocialMediaPlatform.Telegram, SocialMediaPlatform.Messenger, SocialMediaPlatform.WhatsApp],
    { sVGResourceType: SVGResourceType.Colored, socialMediaLinkType: SocialMediaLinkType.Contact }
  );

  constructor(
    public readonly environmentService: EnvironmentService,
    private readonly _clipboardService: ClipboardService,
    private readonly _analyticsService: AnalyticsService
  ) {}

  public copyEmailToClipboard() {
    this._clipboardService.copy(this.contactEmail);
    this._analyticsService.dispatchEvent('Email Copied to Clipboard');
  }
}
