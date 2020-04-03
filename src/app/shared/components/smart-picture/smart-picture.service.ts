import objectFitImages from 'object-fit-images';

import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartPictureService implements OnInit {
  private isInitialized: boolean = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  public ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public initializeSmartPictureService(): void {
    if (!this.isInitialized && this.isBrowser) {
      objectFitImages('img.fit-image');
      this.isInitialized = true;
    }
  }
}
