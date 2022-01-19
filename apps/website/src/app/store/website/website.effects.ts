import { formatISO } from 'date-fns/esm';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BackendApiService } from '@services/backend-api';

import { LoadProjectListAction, SetProjectListAction } from './website.actions';
import { ApiCallStatus } from './website.models';

@Injectable()
export class WebsiteEffects {
  constructor(private _actions$: Actions, private _backendApiService: BackendApiService) {}

  public loadProjects$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(LoadProjectListAction),
      mergeMap(() =>
        this._backendApiService.getProjectList$().pipe(
          map((projects) => SetProjectListAction({ projectList: { status: ApiCallStatus.Successful, updatedDate: formatISO(new Date()), data: projects } })),
          catchError(async () => SetProjectListAction({ projectList: { status: ApiCallStatus.FailedToFetch, updatedDate: formatISO(new Date()) } }))
        )
      )
    );
  });
}
