// import { notion } from "@services/notion";
// import { settings } from "@settings/environment";
// import { IProject } from "./get-project.models";

// export const convertPageToProjectDefinition = (page: Page): IProjectItem => {
//   return {
//     id: page.id,
//     projectName: titlePropertyAccessor('Project Name', page.properties)?.title[0].plain_text,
//     date: {
//       published: datePropertyAccessor('Published', page.properties)?.date.start,
//       updated: lastEditedTimePropertyAccessor('Updated', page.properties)?.last_edited_time,
//     },
//     role: selectPropertyAccessor('Role', page.properties)?.select.name,
//     stack: multiSelectPropertyAccessor('Stack', page.properties)?.multi_select.map(({ name }) => name),
//     urls: {
//       repository: urlPropertyAccessor('Repository', page.properties)?.url,
//       landingPage: urlPropertyAccessor('Project Landing Page', page.properties)?.url,
//     },
//   }
// }

// export const getProject = async (): Promise<IProject> => {
//   const projectPage = await notion.databases.query({ database_id: settings.databaseId })
// }
