import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Store } from '@ngrx/store';
import { BlocksChildrenListResponse } from '@notionhq/client/build/src/api-endpoints';
import { IProjectItem } from '@shared/models/project';
import { IAppState } from '@store/models';
import { ApiCallStatus, SetProjectListAction } from '@store/website';

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
    return this._httpClient.get<IProjectItem[]>(this._apiPath('projects')).pipe(take(1));
  }

  public getSingleProject$(projectId: string): Observable<BlocksChildrenListResponse> {
    this._store.dispatch(SetProjectListAction({ projectList: { status: ApiCallStatus.Pending } }));
    return this._httpClient.get<BlocksChildrenListResponse>(this._apiPath(`project/${projectId}`)).pipe(take(1));
  }
}
