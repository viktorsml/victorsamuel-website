import { normalResponse, notFoundResponse } from '@helpers/response';
import { BlocksChildrenListResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from '@services/notion';

const getProject = async (projectId: string | null): Promise<BlocksChildrenListResponse | undefined> => {
  if (!projectId) return undefined
  return notion.blocks.children.list({ block_id: projectId, page_size: 50 })
}

export const GetSingleProjectEndpoint = async (request: Request): Promise<Response> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectId = (request as any)?.params['projectId']
  const projectContent = await getProject(projectId)

  if (!projectContent) {
    return notFoundResponse({ reason: `Project not found with id of: '${projectId}'` })
  }

  return normalResponse(projectContent)
}
