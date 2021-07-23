import { Component, OnInit } from '@angular/core';
import { SeoService } from '@services/seo';

@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss'],
})
export class SingleProjectPageComponent implements OnInit {
  constructor(private readonly _seoService: SeoService) {}

  public ngOnInit(): void {
    this._seoService.setMetaInformation({
      pageTitle: 'Super Custom Title',
    });
  }
}
