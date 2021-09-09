import { Page } from '@notionhq/client/build/src/api-types';
import {
  checkboxPropertyAccessor, datePropertyAccessor, lastEditedTimePropertyAccessor, multiSelectPropertyAccessor, notion,
  selectPropertyAccessor, titlePropertyAccessor, urlPropertyAccessor
} from '@services/notion';
import { settings } from '@settings/environment';

import { IProjectItem } from './get-projects.models';

export const convertPageToProjectDefinition = (page: Page): IProjectItem => {
  return {
    id: page.id,
    projectName: titlePropertyAccessor('Project Name', page.properties)?.title[0].plain_text,
    date: {
      published: datePropertyAccessor('Published', page.properties)?.date.start,
      updated: lastEditedTimePropertyAccessor('Updated', page.properties)?.last_edited_time,
    },
    role: selectPropertyAccessor('Role', page.properties)?.select.name,
    stack: multiSelectPropertyAccessor('Stack', page.properties)?.multi_select.map(({ name }) => name),
    urls: {
      repository: urlPropertyAccessor('Repository', page.properties)?.url,
      landingPage: urlPropertyAccessor('Project Landing Page', page.properties)?.url,
    },
  }
}

export const getProjects = async (): Promise<IProjectItem[]> => {
  const storedProjects = await notion.databases.query({ database_id: settings.databaseId })

  if (storedProjects.object !== 'list') {
    return []
  }

  return storedProjects.results.filter((page) => checkboxPropertyAccessor('Is Public', page.properties)).map(convertPageToProjectDefinition)
}
