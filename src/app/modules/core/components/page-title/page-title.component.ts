import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public extra: string;
  @Input() public linkText: string;
  @Input() public linkHref: string;

  constructor() {}
}
