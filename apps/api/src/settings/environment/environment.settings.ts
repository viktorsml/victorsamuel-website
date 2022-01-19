/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IWorkerSettings } from './environment.models';

export const settings: IWorkerSettings = {
  // @ts-ignore
  notionToken: NOTION_TOKEN ?? 'EMPTY_NOTION_TOKEN',
  // @ts-ignore
  databaseId: PROJECTS_DATABASE ?? 'EMPTY_PROJECTS_DATABASE',
}
