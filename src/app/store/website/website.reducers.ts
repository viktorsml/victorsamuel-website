import { createReducer, on } from '@ngrx/store';
import { loadStateFromLocalStorage, persistState, presistStateWrapper } from '@store/local-storage';
import { StateKey } from '@store/models';

import { SetGlobalSocialIconsStateAction, SetLoadingPageStateAction, SetProjectListAction } from './website.actions';
import { defaultWebsiteState } from './website.mocks';
import {
  IProjectListData, ISetGlobalSocialIconsActionData, ISetLoadingPageActionData, ISetProjectListActionData, IWebsiteState
} from './website.models';

const initialWebsiteState = loadStateFromLocalStorage(StateKey.Website, defaultWebsiteState);

export const websiteStateReducer = createReducer(
  initialWebsiteState,
  on(SetLoadingPageStateAction, (state, { isLoading }) => ({ ...state, isLoading })),
  on(SetGlobalSocialIconsStateAction, (state, { isInHomePage }) => ({ ...state, isInHomePage })),

  on(SetProjectListAction, (state, payload) =>
    persistState(StateKey.Website, () => ({ ...state, projectList: { ...state.projectList, ...payload.projectList } }))()
  )

  // on(SetProjectListAction, persistState(StateKey.Website, (state, payload) => ({ ...state, projectList: { ...state.projectList, ...payload.projectList } }))()),

  // on(
  //   SetProjectListAction,
  //   persistState(StateKey.Website, (state: IWebsiteState, { projectList }: ISetProjectListActionData) => ({
  //     ...state,
  //     projectList: { ...state.projectList, ...projectList },
  //   }))
  // )
);
