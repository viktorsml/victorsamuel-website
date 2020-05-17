import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../app.state';
import * as LoadingScreenActions from '../../../../state/actions/loading-screen.actions';
import { CoreService } from '../../core.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent implements OnInit {
  constructor(private readonly store: Store<AppState>, private readonly core: CoreService) {
    store.dispatch(new LoadingScreenActions.ShowLoadingScreen(false));
  }

  public ngOnInit(): void {
    this.core.setTitle({
      en: 'Victor Samuel | Not Found',
      es: 'Victor Samuel | No Encontrado',
    });
  }
}
