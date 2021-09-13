import { switchMap } from 'rxjs/internal/operators/switchMap';
import { take } from 'rxjs/internal/operators/take';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BlocksChildrenListResponse } from '@notionhq/client/build/src/api-endpoints';
import { BackendApiService } from '@services/backend-api';
import { SeoService } from '@services/seo';
import { IAppState } from '@store/models';
import { SetLoadingPageStateAction } from '@store/website';

@Component({
  selector: 'app-single-project-page',
  templateUrl: './single-project-page.component.html',
  styleUrls: ['./single-project-page.component.scss'],
})
export class SingleProjectPageComponent implements OnInit {
  constructor(
    private readonly _store: Store<IAppState>,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _seoService: SeoService,
    private readonly _backendApiService: BackendApiService
  ) {}

  public ngOnInit(): void {
    this._loadProject();
  }

  private _loadProject(): void {
    this._route.params
      .pipe(
        take(1),
        switchMap((params) => this._backendApiService.getSingleProject$(params['projectId']))
      )
      .subscribe(this._onProjectLoadSuccessfull.bind(this), this._onProjectLoadError.bind(this));
  }

  private _onProjectLoadSuccessfull(projectContent: BlocksChildrenListResponse) {
    this._seoService.setMetaInformation({ pageTitle: 'Super Custom Title' });
    this._store.dispatch(SetLoadingPageStateAction({ isLoading: false }));
  }

  private _onProjectLoadError(error: any) {
    this._router.navigate(['/404'], { skipLocationChange: true });
    console.warn(error);
  }
}
