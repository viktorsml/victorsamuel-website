import { IProjectItem } from '@shared/models/project';

export interface IWebsiteState {
  readonly isLoading: boolean;
  readonly isInHomePage: boolean;
  readonly projectList: IProjectListData;
}

export enum ApiCallStatus {
  Pending = 'Pending',
  FailedToFetch = 'FailedToFetch',
  Successful = 'Successful',
}

export interface IProjectListData {
  status?: ApiCallStatus;
  updatedDate?: string;
  data?: IProjectItem[];
}

export interface ISetLoadingPageActionData {
  isLoading: boolean;
}

export interface ISetGlobalSocialIconsActionData {
  isInHomePage: boolean;
}

export interface ISetProjectListActionData {
  projectList: IProjectListData;
}
