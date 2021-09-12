import { Router } from 'itty-router';

import { GetSingleProjectEndpoint } from '@endpoints/get-project';
import { GetProjectListEndpoint } from '@endpoints/get-projects';

const router = Router()

addEventListener('fetch', (event) => {
  event.respondWith(
    router
      .get('/api/projects', GetProjectListEndpoint)
      .get('/api/project/:projectId', GetSingleProjectEndpoint)
      .get('*', () => new Response('Not found', { status: 404 }))
      .handle(event.request),
  )
})
