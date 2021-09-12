import { extractPlainText } from '@helpers/data-manipulation';
import { normalResponse } from '@helpers/response';
import { Page } from '@notionhq/client/build/src/api-types';
import {
  datePropertyAccessor, lastEditedTimePropertyAccessor, multiSelectPropertyAccessor, notion, richTextPropertyAccessor,
  selectPropertyAccessor, titlePropertyAccessor, urlPropertyAccessor
} from '@services/notion';
import { settings } from '@settings/environment';
import { IProjectItem } from '@shared/models/project';

const convertPageToProjectDefinition = (page: Page): IProjectItem => {
  return {
    id: page.id,
    urlSlug: extractPlainText(richTextPropertyAccessor('URL Slug', page.properties)?.rich_text),
    projectName: extractPlainText(titlePropertyAccessor('Project Name', page.properties)?.title),
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
    shortDescription: extractPlainText(richTextPropertyAccessor('Short Description', page.properties)?.rich_text),
    gridImageUrl: urlPropertyAccessor('Grid Image URL', page.properties)?.url,
  }
}

const getProjects = async (): Promise<IProjectItem[]> => {
  const storedProjects = await notion.databases.query({
    database_id: settings.databaseId,
    filter: { property: 'Is Public', checkbox: { equals: true } },
    sorts: [{ property: 'Published', direction: 'descending' }],
  })

  if (storedProjects.object !== 'list') {
    return []
  }

  return storedProjects.results.map(convertPageToProjectDefinition)
}

export const GetProjectListEndpoint = async (): Promise<Response> => {
  return normalResponse(await getProjects())
}
