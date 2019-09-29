import { Component, OnInit, Input, ElementRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-smart-picture',
  templateUrl: './smart-picture.component.html',
  styleUrls: ['./smart-picture.component.scss']
})
export class SmartPictureComponent implements OnInit {

  @HostBinding('class.responsive') isResponsive: boolean = false;
  @HostBinding('attr.style')
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--aspect-ratio: ${this.aspectRatio}`);
  }

  @Input() sourceWebp: string;
  @Input() sourceJpg: string;
  @Input() sourcePng: string;
  @Input() sourceBmp: string;
  @Input() sourceGif: string;
  @Input() sourceSvg: string;
  @Input() responsive: boolean = false;
  @Input() width: string = '100%';
  @Input() size: 'cover' | 'contain' = 'cover';
  @Input() shadow: string = '0';
  @Input() heightRatio: number = 1;
  @Input() widthRatio: number = 1;

  public sourceUrl: string;
  public shouldItLoad: boolean = false;
  public aspectRatio: string;

  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.responsive) {
      this.isResponsive = this.responsive;
      this.aspectRatio = `${(this.heightRatio / (this.widthRatio / 100))}%`;
    }
    if (!this.canLazyLoad()) {
      this.shouldItLoad = true;
      return;
    }
    this.lazyLoadImage();
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
