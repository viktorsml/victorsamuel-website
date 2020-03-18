import { Component, OnInit, Input, ElementRef, HostBinding } from '@angular/core';
import { SmartPictureSettings } from './smart-picture.interfaces';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { SmartPictureService } from './smart-picture.service';
import { validator } from './smart-picture.functions';

@Component({
  selector: 'app-smart-picture',
  templateUrl: './smart-picture.component.html',
  styleUrls: ['./smart-picture.component.scss']
})
export class SmartPictureComponent implements OnInit {

  public shouldPictureLoad: boolean;
  public aspectRatio: string;
  @Input() settings: SmartPictureSettings;
  @HostBinding('attr.style') private get valueAsStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`--aspect-ratio: ${this.aspectRatio}`);
  }

  constructor(
    private sps: SmartPictureService,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.sps.initializeSmartPictureService();
    if (this.areValidateSettings(this.settings)) {
      if (this.settings.isResponsive) {
        this.aspectRatio = `${(this.settings.heightRatio / (this.settings.widthRatio / 100))}%`;
      }
      this.lazyLoadImage((wasLazyLoaded: boolean) => {
        // console.log(`${this.settings.source.main.url}: Was lazy loaded?: ${wasLazyLoaded}`);
      });
    }
  }

  private areValidateSettings(s: SmartPictureSettings): boolean {
    if (typeof s !== 'undefined') {
      if (validator.isObject(s)) throw Error('No settings provided for smart-picture');
      if (!validator.isValidString(s.source.main.url)) throw Error('No main image url provided for smart-picture');
      if (!validator.isValidString(s.source.main.type)) throw Error('No main image type provided for smart-picture');
      if (s.source.fallback && !validator.isValidString(s.source.fallback.url)) throw Error('No fallback image url provided for smart-picture');
      if (s.source.fallback && !validator.isValidString(s.source.fallback.type)) throw Error('No fallback image type provided for smart-picture');
      if (!validator.isBoolean(s.isResponsive) && (!validator.isValidPositive(s.heightRatio) || !validator.isValidPositive(s.widthRatio)))
        throw Error('If isResponsive is true you must provide heightRatio widthRatio');
      return true;
    } else {
      throw Error('You must provide settings for SmartPicture');
    }
  }

  private lazyLoadImage(whenDone: Function) {
    const canLazyLoad = (window && 'IntersectionObserver' in window) && !validator.isBoolean(this.settings.disableLazyLoad);
    if (!canLazyLoad) {
      this.shouldPictureLoad = true;
      if (typeof whenDone === 'function') whenDone(canLazyLoad);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.shouldPictureLoad = true;
          if (typeof whenDone === 'function') whenDone(canLazyLoad);
          observer.unobserve(this.el.nativeElement);
        }
      });
    });
    observer.observe(this.el.nativeElement);
  }

  public reformatType(type: string): string {
    return `image/${type}`;
  }

}
