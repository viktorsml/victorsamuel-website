import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const SHOW_LOADING_SCREEN = '[LOADING SCREEN] Toggle';

export class ShowLoadingScreen implements Action {
  public readonly type = SHOW_LOADING_SCREEN;
  constructor(public payload: boolean) {}
}

export type Actions = ShowLoadingScreen;
