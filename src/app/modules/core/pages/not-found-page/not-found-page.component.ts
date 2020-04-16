import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../../shared/services/seo.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  constructor(private readonly seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.setTitle({
      en: 'Victor Samuel | Not Found',
      es: 'Victor Samuel | No Encontrado',
    });
  }
}
