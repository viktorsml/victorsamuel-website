import { compareAsc, parseISO } from 'date-fns';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Store } from '@ngrx/store';
import { IAppState } from '@store/models';
import { ApiCallStatus, SetProjectListAction } from '@store/website';

import { IProjectItem } from './backend-api.service.models';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  private _backendEndpoint: string = environment.backendEndpoint;

  constructor(private readonly _store: Store<IAppState>, private readonly _httpClient: HttpClient) {}

  private _apiPath(path: string): string {
    return `${this._backendEndpoint}/${path}`;
  }

  public getProjectList$(): Observable<IProjectItem[]> {
    this._store.dispatch(SetProjectListAction({ projectList: { status: ApiCallStatus.Pending } }));
    return this._httpClient.get<IProjectItem[]>(this._apiPath('projects')).pipe(
      map((projectList) =>
        projectList.sort((a, b) => compareAsc(parseISO(b.date.published ?? new Date().toISOString()), parseISO(a.date.published ?? new Date().toISOString())))
      ),
      take(1)
    );
  }
}
