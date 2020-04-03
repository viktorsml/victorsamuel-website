import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private isBrowser: boolean;
  @Input() public canRenderScrollToTop: boolean = false;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  public ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public shouldRenderScrollToTop(): void {
    if (this.isBrowser) {
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const websiteHeight = document.body.scrollHeight;
      this.canRenderScrollToTop = websiteHeight > viewportHeight * 2;
    }
  }

  public scrollToTop(): void {
    if (this.isBrowser) window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
