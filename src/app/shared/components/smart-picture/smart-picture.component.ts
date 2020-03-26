import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

import { validator } from './smart-picture.functions';
import { SmartPictureSettings } from './smart-picture.interfaces';
import { SmartPictureService } from './smart-picture.service';

@Component({
  selector: 'app-smart-picture',
  templateUrl: './smart-picture.component.html',
  styleUrls: ['./smart-picture.component.scss']
})
export class SmartPictureComponent implements OnInit {
  public shouldPictureLoad: boolean;
  private defaultSettings: SmartPictureSettings;
  @Input() settings: SmartPictureSettings;
  @HostBinding('style.--aspect-ratio') aspectRatio: string;
  @HostBinding('class.isResponsive') responsiveStatus: boolean;

  constructor(private sps: SmartPictureService, private el: ElementRef) {
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

  ngOnInit() {
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

  private lazyLoadImage(whenDone: (canLazyLoad: boolean) => void) {
    const canLazyLoad = window && 'IntersectionObserver' in window && !validator.isBoolean(this.settings.disableLazyLoad);
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
