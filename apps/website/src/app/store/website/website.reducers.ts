import { createReducer, on } from '@ngrx/store';
import { loadStateFromLocalStorage, persistState } from '@store/local-storage';
import { StateKey } from '@store/models';

import { SetGlobalSocialIconsStateAction, SetLoadingPageStateAction, SetProjectListAction } from './website.actions';
import { defaultWebsiteState } from './website.mocks';

const initialWebsiteState = loadStateFromLocalStorage(StateKey.Website, defaultWebsiteState);

export const websiteStateReducer = createReducer(
    initialWebsiteState,
    on(SetLoadingPageStateAction, (state, { isLoading }) => ({ ...state, isLoading })),
    on(SetGlobalSocialIconsStateAction, (state, { isInHomePage }) => ({ ...state, isInHomePage })),
    on(SetProjectListAction, (state, payload) =>
        persistState(StateKey.Website, () => ({ ...state, projectList: { ...state.projectList, ...payload.projectList } }))()
    )
);
