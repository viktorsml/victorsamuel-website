import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '@services/environment';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  constructor(private _environmentService: EnvironmentService) {}

  public async ngOnInit() {
    await this.beautifyUrlIfUserComesFromARedirectLoop();
  }

  public goBackInNavigationHistory() {
    window.history.back();
  }

  public async beautifyUrlIfUserComesFromARedirectLoop() {
    if (!this._environmentService.isBrowserEnvironment) return;
    const failureUrlCookieName = 'LastKnownUrl';
    const failureUrl = this._environmentService.getCookie(failureUrlCookieName);
    console.log('failureUrl', failureUrl);
    if (!failureUrl) return;
    try {
      window.history.replaceState(null, '', failureUrl);
      await this._environmentService.removeCookie(failureUrlCookieName);
    } catch (error) {
      if (error) {
        console.warn('A non critical error happened. You are okay but the URL in you browser may not be looking good.', error);
      }
    }
  }
}
