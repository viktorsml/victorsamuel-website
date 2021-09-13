import { getProjects } from '@endpoints/get-projects';
import { normalResponse } from '@helpers/response';

export const GetStaticRoutesEndpoint = async (): Promise<Response> => {
  const generatePath = (projectId: string) => `/project/${projectId}`
  const projectList = await getProjects()
  const projectPaths = projectList.map((projectItem) => generatePath(projectItem.id))
  return normalResponse(projectPaths)
}
