import { createAction, props } from '@ngrx/store';

import { ISetGlobalSocialIconsActionData, ISetLoadingPageActionData, ISetProjectListActionData } from './website.models';

export const SetLoadingPageStateAction = createAction('[Navigation] Set Loading Page State', props<ISetLoadingPageActionData>());
export const SetGlobalSocialIconsStateAction = createAction('[Navigation] Set Global Social Icons State', props<ISetGlobalSocialIconsActionData>());
export const LoadProjectListAction = createAction('[Projects] Get Project List from API');
export const SetProjectListAction = createAction('[Projects] Set Project List State', props<ISetProjectListActionData>());
