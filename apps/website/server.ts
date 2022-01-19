import 'zone.js/dist/zone-node';

import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { environment } from '@environment';
import { ngExpressEngine } from '@nguniversal/express-engine';

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(lang: string): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), `dist/victorsamuel-website/browser`, lang);
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
      extraProviders: [{ provide: LOCALE_ID, useValue: lang }],
    } as any)
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, { maxAge: '1y' }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  const appEn = app('en');
  const appEs = app('es');
  const server = express();

  server.use('/en', appEn);
  server.use('/es', appEs);
  server.use('', appEn);
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if ((!environment.production && moduleFilename === __filename) || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
