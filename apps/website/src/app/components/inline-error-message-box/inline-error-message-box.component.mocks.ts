import { IErrorMessage } from './inline-error-message-box.component.models';

export type ErrorMessageEnumAsString = 'NoProjectsAvaliable' | 'UnableToFetchProjects';

export enum ErrorMessage {
  NoProjectsAvaliable = 'NoProjectsAvaliable',
  UnableToFetchProjects = 'UnableToFetchProjects',
}

export const iconPathFolder = '/assets/svg';

export const errorMessagesMap = new Map<ErrorMessage, IErrorMessage>([
  [
    ErrorMessage.NoProjectsAvaliable,
    {
      iconFilePath: `${iconPathFolder}/empty-box.svg`,
      title: $localize`Hmm, nothing here...`,
      description: $localize`Sorry, but there are no projects available at this moment.`,
    },
  ],
  [
    ErrorMessage.UnableToFetchProjects,
    {
      iconFilePath: `${iconPathFolder}/window-error.svg`,
      title: $localize`Hmm, something went wrong :(`,
      description: $localize`Sorry, but we couldn't retreive any project from the database at this moment.`,
    },
  ],
]);
