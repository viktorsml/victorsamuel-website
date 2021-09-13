import { Router } from 'itty-router';

import { GetSingleProjectEndpoint } from '@endpoints/get-project';
import { GetProjectListEndpoint } from '@endpoints/get-projects';
import { GetStaticRoutesEndpoint } from '@endpoints/internal';
import { notFoundResponse } from '@helpers/response';

const router = Router()

addEventListener('fetch', (event) => {
  event.respondWith(
    router
      .get('/api/projects', GetProjectListEndpoint)
      .get('/api/project/:projectId', GetSingleProjectEndpoint)
      .get('/build/getStaticRoutes', GetStaticRoutesEndpoint)
      .get('*', () => notFoundResponse({ reason: 'Invalid route' }))
      .handle(event.request),
  )
})
