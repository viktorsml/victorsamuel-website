import { Subscription } from 'rxjs';
import { LanguageCode, LanguageServiceService } from 'src/app/shared/services/language-service.service';

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

type DisplayMode = 'LanguageCode' | 'LanguageName';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  /**
   * Defines which property is going to be used to display as text. Can be 'LanguageCode' or 'LanguageName'.
   */
  @Input() displayMode: DisplayMode = 'LanguageName';

  private _isBrowserEnvironment: boolean;
  private _currentLanguageSubscription: Subscription;
  public currentLanguage: LanguageCode;
  public shouldDisplayAsLanguageCode: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object, public languageService: LanguageServiceService) {
    this._isBrowserEnvironment = isPlatformBrowser(_platformId);
  }

  public ngOnInit() {
    this.shouldDisplayAsLanguageCode = this.displayMode === 'LanguageCode';
    this._currentLanguageSubscription = this.languageService.currentLanguage.subscribe((updatedLanguageCode) => {
      this.currentLanguage = updatedLanguageCode;
    });
  }

  public ngOnDestroy() {
    this._currentLanguageSubscription.unsubscribe();
  }

  public onLanguageButtonClick(requestedLanguageCode: LanguageCode): void {
    this.languageService.setCurrentLanguage(requestedLanguageCode);
  }
}
