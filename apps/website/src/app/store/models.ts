import { IWebsiteState } from './website';

export enum StateKey {
  Website = 'WebsitePersistedState',
}

export interface IAppState {
  website: IWebsiteState;
}
