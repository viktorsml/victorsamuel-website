import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isBrowser: boolean;
  private theme: 'dark' | 'light';
  private readonly defaultTheme = 'light';

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public ngOnInit(): void {
    if (this.isBrowser) {
      this.updateColorScheme(this.detectColorScheme());
      // tslint:disable-next-line: deprecation
      window.matchMedia('(prefers-color-scheme: dark)').addListener((event: MediaQueryListEvent) => {
        this.updateColorScheme(event.matches ? 'dark' : 'light');
      });
    }
  }

  private detectColorScheme(): 'dark' | 'light' {
    if (window && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise set to light.
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      // If browser dont support prefers-color-scheme, set it as default
      return this.defaultTheme;
    }
  }

  public updateColorScheme(theme: 'dark' | 'light'): void {
    const newTheme = theme === 'light' || theme === 'dark' ? theme : this.defaultTheme;
    this.theme = newTheme;
    document.getElementsByTagName('html')[0].dataset.theme = newTheme;
  }
}
