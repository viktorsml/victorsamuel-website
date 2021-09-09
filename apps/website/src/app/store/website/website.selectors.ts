import { createSelector } from '@ngrx/store';
import { IAppState } from '@store/models';

import { IWebsiteState } from './website.models';

export const selectWebsiteFeature = (state: IAppState) => state.website;

export const getLoadingState = createSelector(selectWebsiteFeature, (state: IWebsiteState) => state.isLoading);
export const getIsInHomePageState = createSelector(selectWebsiteFeature, (state: IWebsiteState) => state.isInHomePage);
export const getProjectListDataState = createSelector(selectWebsiteFeature, (state: IWebsiteState) => state.projectList);
