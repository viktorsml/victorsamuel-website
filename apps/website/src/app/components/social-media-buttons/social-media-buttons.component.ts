import { Component, Input } from '@angular/core';
import { getSocialMediaDefinitions, SocialMediaPlatform } from '@mocks/social-media';
import { EnvironmentService } from '@services/environment';

@Component({
  selector: 'app-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.scss'],
})
export class SocialMediaButtonsComponent {
  @Input() public tabindex: number = 0;
  public socialIcons = getSocialMediaDefinitions([SocialMediaPlatform.Twitter, SocialMediaPlatform.LinkedIn, SocialMediaPlatform.GitHub]);

  constructor(public readonly environmentService: EnvironmentService) {}
}
