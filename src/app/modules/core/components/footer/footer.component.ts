import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() public canRenderScrollToTop: boolean = false;

  constructor() {}

  public shouldRenderScrollToTop(): void {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const websiteHeight = document.body.scrollHeight;
    this.canRenderScrollToTop = websiteHeight > viewportHeight * 2;
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
