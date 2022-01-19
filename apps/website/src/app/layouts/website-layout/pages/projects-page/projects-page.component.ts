import { formatDuration, intervalToDuration, subMinutes } from 'date-fns';
import { isWithinInterval, parseISO } from 'date-fns/esm';
import { take } from 'rxjs/operators';

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnvironmentService } from '@services/environment';
import { IAppState } from '@store/models';
import { ApiCallStatus, getProjectListDataState, LoadProjectListAction } from '@store/website';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  public projectListData$ = this._store.select(getProjectListDataState);
  private _projectListUpdateThresholdInMinutes = 60;

  constructor(private readonly _store: Store<IAppState>, private readonly _renderer: Renderer2, public readonly environmentService: EnvironmentService) {}

  public ngOnInit(): void {
    this.projectListData$.pipe(take(1)).subscribe(({ updatedDate: updatedDateAsIsoString, status }) => {
      const updatedDate = parseISO(updatedDateAsIsoString ?? '');
      return this._updateProjectListIfOutdated(updatedDate, status);
    });
  }

  private _updateProjectListIfOutdated(updatedDate: Date, status?: ApiCallStatus) {
    const now = new Date();
    const wasDataFetchSuccessfulLastTime = status === ApiCallStatus.Successful;
    const isDataFromLastFiveMinutes = isWithinInterval(updatedDate, {
      start: subMinutes(now, this._projectListUpdateThresholdInMinutes),
      end: now,
    });

    if ((!wasDataFetchSuccessfulLastTime && isDataFromLastFiveMinutes) || !isDataFromLastFiveMinutes) {
      this._store.dispatch(LoadProjectListAction());
    }
  }

  public onProjectCardVisibleOnViewport({ target, visible }: { target: Element; visible: boolean }): void {
    const activeClass = 'ProjectCard--InViewport';
    const inactiveClass = 'ProjectCard--OutsideViewport';
    this._renderer.addClass(target, visible ? activeClass : inactiveClass);
    this._renderer.removeClass(target, visible ? inactiveClass : activeClass);
  }

  public toKebabCase(str: string) {
    return str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map((x) => x.toLowerCase())
      .join('-');
  }
}
