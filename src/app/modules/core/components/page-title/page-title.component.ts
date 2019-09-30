import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() extra: string;
  @Input() linkText: string;
  @Input() linkHref: string;

  constructor() {}

  ngOnInit() {}

}
