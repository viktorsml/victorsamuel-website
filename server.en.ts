import 'zone.js/dist/zone-node';

import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
// tslint:disable-next-line: typedef
export function universalEnglishApp() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'en/index.original.html')) ? 'en/index.original.html' : 'en/index';

  server.use(cookieParser());

  server.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('*.*', express.static(distFolder, { maxAge: '1y' }));

  server.get('/en*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: join(req.baseUrl, '/en/') }] });
  });

  return server;
}

const run = (): void => {
  const port = process.env.PORT || 4000;
  const server = universalEnglishApp();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
};

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
