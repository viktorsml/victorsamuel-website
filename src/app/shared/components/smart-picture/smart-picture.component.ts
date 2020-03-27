import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

import { SmartPictureSettings } from './smart-picture.interfaces';
import { SmartPictureService } from './smart-picture.service';

@Component({
  selector: 'app-smart-picture',
  templateUrl: './smart-picture.component.html',
  styleUrls: ['./smart-picture.component.scss']
})
export class SmartPictureComponent implements OnInit {
  public shouldPictureLoad: boolean;
  private readonly defaultSettings: SmartPictureSettings;
  @Input() public settings: SmartPictureSettings;
  @HostBinding('style.--aspect-ratio') public aspectRatio: string;
  @HostBinding('class.isResponsive') public responsiveStatus: boolean;

  constructor(private readonly sps: SmartPictureService, private readonly el: ElementRef) {
    this.shouldPictureLoad = false;
    this.defaultSettings = {
      source: {
        main: { url: '', type: 'jpg' }
      },
      isResponsive: false,
      size: 'initial',
      disableLazyLoad: false,
      disablePlaceholder: false
    };
  }

  public ngOnInit(): void {
    this.sps.initializeSmartPictureService();
    this.settings = { ...this.defaultSettings, ...this.settings };
    this.responsiveStatus = this.settings.isResponsive;
    if (this.settings.isResponsive) {
      this.aspectRatio = `${this.settings.heightRatio / (this.settings.widthRatio / 100)}%`;
    }
    this.lazyLoadImage((wasLazyLoaded: boolean) => {
      // console.log(`${this.settings.source.main.url}: Was lazy loaded?: ${wasLazyLoaded}`);
    });
  }

  private lazyLoadImage(whenDone: (canLazyLoad: boolean) => void): void {
    const canLazyLoad = window && 'IntersectionObserver' in window && !this.settings.disableLazyLoad;
    if (!canLazyLoad) {
      this.loadImage();
      if (typeof whenDone === 'function') {
        whenDone(canLazyLoad);
      }
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          if (typeof whenDone === 'function') {
            whenDone(canLazyLoad);
          }
          observer.unobserve(this.el.nativeElement);
        }
      });
    });
    observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    this.shouldPictureLoad = true;
  }

  public reformatType(type: string): string {
    return `image/${type}`;
  }
}
