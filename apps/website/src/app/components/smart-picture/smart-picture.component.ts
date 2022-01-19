import { BehaviorSubject } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostBinding, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';

import { defaultSettings } from './smart-picture.component.mocks';
import { IImageDefinition, IPictureRenderEvent, ISmartPictureSettings, ObjectFitValues } from './smart-picture.component.models';
import { deepMerge } from './smart-picture.helpers';
import { Validator } from './smart-picture.validators';

@Component({
  selector: 'app-smart-picture',
  templateUrl: './smart-picture.component.html',
  styleUrls: ['./smart-picture.component.scss'],
})
export class SmartPictureComponent implements OnInit {
  @Input() public image!: ISmartPictureSettings;
  @Input() public definition!: IImageDefinition[];
  @Input() public alt!: string;
  @Input() public 'height-ratio': number;
  @Input() public 'width-ratio': number;
  @Input() public 'object-fit': ObjectFitValues;
  @Input() public 'object-position': string;
  @Input() public 'lazy-load': boolean;

  @Output() public pictureRender: EventEmitter<IPictureRenderEvent> = new EventEmitter<IPictureRenderEvent>();

  public canRenderImage = new BehaviorSubject(false);

  private _isBrowserEnvironment: boolean;
  private _settings!: ISmartPictureSettings;

  public get settings(): ISmartPictureSettings {
    return this._settings;
  }

  public set settings(value: ISmartPictureSettings) {
    this._settings = value;
    this._bindProperties(value);
  }

  @HostBinding('style.--object-fit') public bindObjectFit!: string;
  @HostBinding('style.--object-position') public bindObjectPosition!: string;
  @HostBinding('style.--aspect-ratio') public bindAspectRatio!: string;
  @HostBinding('class.isResponsive') public bindIsResponsive!: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly _platformId: object, private readonly _elementRef: ElementRef) {
    this._isBrowserEnvironment = isPlatformBrowser(_platformId);
  }

  public ngOnInit(): void {
    this._loadImage(this._mergeSettings([defaultSettings, this._inlineSettings(), this.image]));
  }

  private _mergeSettings(settings: ISmartPictureSettings[]): ISmartPictureSettings {
    return settings.reduce((result, ccurrent) => (ccurrent ? deepMerge(result, ccurrent) : result));
  }

  private _inlineSettings(): ISmartPictureSettings {
    return {
      definition: this.definition ?? {},
      shouldLazyLoad: this['lazy-load'] ?? defaultSettings.shouldLazyLoad,
      alt: this.alt ?? defaultSettings.alt,
      size: {
        heightRatio: this['height-ratio'] ?? defaultSettings.size?.heightRatio,
        widthRatio: this['width-ratio'] ?? defaultSettings.size?.widthRatio,
        objectFit: this['object-fit'] ?? defaultSettings.size?.objectFit,
        objectPosition: this['object-position'] ?? defaultSettings.size?.objectPosition,
      },
    } as ISmartPictureSettings;
  }

  private _loadImage(settings: ISmartPictureSettings): void {
    const canUseIntersectionObservers = this._isBrowserEnvironment ? window && 'IntersectionObserver' in window : false;
    const canLazyLoadImage = canUseIntersectionObservers && (settings.shouldLazyLoad as boolean);

    this.settings = settings;

    if (canLazyLoadImage) {
      this._createObserver(() => this.canRenderImage.next(true));
    } else {
      this.canRenderImage.next(true);
    }

    this.pictureRender.emit({ wasLazyLoaded: canLazyLoadImage, settings: this._settings });
  }

  private _createObserver(whenIsObserved: () => void): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          whenIsObserved();
          observer.unobserve(this._elementRef.nativeElement);
        }
      });
    });
    observer.observe(this._elementRef.nativeElement);
  }

  private _bindProperties(settings: ISmartPictureSettings): void {
    this.bindObjectFit = settings.size?.objectFit ?? 'contain';
    this.bindObjectPosition = settings.size?.objectPosition ?? 'initial';
    this.bindIsResponsive = Validator.isValidAspectRatio(settings.size?.widthRatio, settings.size?.heightRatio);
    this.bindAspectRatio = this.bindIsResponsive ? `${(settings.size?.heightRatio ?? 0) / ((settings.size?.widthRatio ?? 0) / 100)}%` : '';
  }
}
