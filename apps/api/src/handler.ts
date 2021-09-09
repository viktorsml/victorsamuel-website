import { Router } from 'itty-router';

import { getProjects } from '@endpoints/get-projects';
import { returnJson } from '@helpers/data-manipulation';

const router = Router()
const headers = new Headers({
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
})

export const GetProjectsList = async (): Promise<Response> => {
  return new Response(returnJson(await getProjects()), { headers })
}

router
  .get('/api/projects', GetProjectsList)
  // .get('/api/project/:id', GetProject) // TODO: Add enpoint to fetch only one project with complete information
  .get('*', () => new Response('Not found', { status: 404 }))

export const handleRequest = (request: Request): Promise<Response> => router.handle(request)
