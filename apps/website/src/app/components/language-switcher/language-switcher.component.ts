import { Subscription } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { EnvironmentService } from '@services/environment';
import { SupportedLanguage } from '@services/environment/environment.service.models';

import { DisplayMode } from './language-switcher.component.models';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  @Input() 'display-mode': DisplayMode = 'Label';

  public shouldDisplayAsLanguageCode: boolean = false;

  constructor(public readonly environmentService: EnvironmentService) {}

  public ngOnInit() {
    this.shouldDisplayAsLanguageCode = this['display-mode'] === 'Code';
  }

  public ngOnDestroy() {}

  public onLanguageButtonClick(language: SupportedLanguage) {
    window.location.href = window.location.href.replace(/(\/[a-zA-Z]{2}\/)/, `/${language}/`);
  }
}
