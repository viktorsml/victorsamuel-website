import { Component, OnInit, Input, ElementRef } from '@angular/core';

interface ImagePath {
  webp: string,
    png: string,
    jpg: string,
}

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() source: string;
  @Input() mode: string = 'cover';
  @Input() shadow: string = '0';
  @Input() responsive: boolean = false;
  @Input() isPng: boolean = false;
  public imagePath: ImagePath;
  public shouldPictureLoad: boolean = false;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {
    if (!this.source) throw `No image provided in picture tag! [${this.source}]`;
    this.imagePath = this.constructImagePath(this.source);
    if (!this.canLazyLoad()) {
      this.shouldPictureLoad = true;
      return;
    }
    this.lazyLoadImage();
  }

  private constructImagePath(source: string): ImagePath {
    return {
      webp: `/assets/image/${source}.webp`,
      jpg: `/assets/image/${source}.jpg`,
      png: `/assets/image/${source}.png`
    }
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.shouldPictureLoad = true;
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }
}
