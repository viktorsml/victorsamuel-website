import { Action } from '@ngrx/store';

import * as LoadingScreenActions from '../actions/loading-screen.actions';

const initialState: boolean = true;

export function loadingScreenReducer(state: boolean = initialState, action: LoadingScreenActions.Actions): boolean {
  switch (action.type) {
    case LoadingScreenActions.SHOW_LOADING_SCREEN:
      return action.payload;
    default:
      return state;
  }
}
