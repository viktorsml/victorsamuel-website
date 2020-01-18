import { Component, OnInit, Input, ElementRef, HostBinding } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-smart-picture',
  templateUrl: './smart-picture.component.html',
  styleUrls: ['./smart-picture.component.scss']
})
export class SmartPictureComponent implements OnInit {


  @Input() sourceWebp: string;
  @Input() sourceJpg: string;
  @Input() sourcePng: string;
  @Input() sourceBmp: string;
  @Input() sourceGif: string;
  @Input() sourceSvg: string;
  @Input() altText: string;
  @Input() ariaHidden: boolean = false;
  @Input() disablePlaceholder: boolean = false;
  @Input() width: string = '100%';
  @Input() size: 'cover' | 'contain' = 'cover';
  @Input() objectPosition: string = 'center';
  @Input() shadow: string = '0';

  @Input() heightRatio: number = 1;
  @Input() widthRatio: number = 1;

  @HostBinding('class.responsive') @Input() responsive: boolean = false;
  @HostBinding('attr.style') private get valueAsStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`--aspect-ratio: ${this.aspectRatio}`);
  }

  public sourceUrl: string;
  public shouldItLoad: boolean = false;
  public aspectRatio: string;

  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // validate inputs
    if (!this.sourceJpg && !this.sourcePng) {
      throw Error('You must provide a .jpg or .png version of the picture');
    }
    if (this.size !== 'cover' && this.size !== 'contain') {
      throw Error('size must be cover or contain');
    }
    if (this.heightRatio <= 0 || this.widthRatio <= 0) {
      throw Error('heightRatio and widthRatio must be greater than 0');
    }
    // set aspect ratio
    this.aspectRatio = `${(this.heightRatio / (this.widthRatio / 100))}%`;
    if (!this.canLazyLoad()) {
      this.shouldItLoad = true;
    } else {
      this.lazyLoadImage();
    }
  }
  
  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.shouldItLoad = true;
          observer.unobserve(this.el.nativeElement);
        }
      });
    });
    observer.observe(this.el.nativeElement);
  }
}
