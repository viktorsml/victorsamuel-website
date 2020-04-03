import 'zone.js/dist/zone-node';

import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export const app = () => {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtmlEn = existsSync(join(distFolder, 'en/index.original.html')) ? 'en/index.original.html' : 'en/index';
  const indexHtmlEs = existsSync(join(distFolder, 'es/index.original.html')) ? 'es/index.original.html' : 'es/index';
  const supportedLangs = ['en', 'es'];
  const defaultLang = 'en';

  server.use(cookieParser());

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('/en*', (req, res) => {
    res.render(indexHtmlEn, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  server.get('/es*', (req, res) => {
    res.render(indexHtmlEs, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  server.get('/*', (req, res) => {
    res.header('Content-Type', 'text/plain');
    const userLang = req.acceptsLanguages();
    const requestedLang = userLang ? userLang[0].substr(0, 2) : 'NA';
    const storedLang = req.cookies.lang ? req.cookies.lang : 'NA';
    const isRequestedLangSupported = supportedLangs.includes(requestedLang);
    const isStoredLangSupported = supportedLangs.includes(storedLang);
    if (isStoredLangSupported) {
      res.redirect(`/${storedLang}${req.url}`);
      res.end();
      return;
    }
    if (isRequestedLangSupported) {
      res.redirect(`/${requestedLang}${req.url}`);
      res.end();
      return;
    }
    res.redirect(`/${defaultLang}${req.url}`);
    res.end();
    return;
  });

  return server;
};

const run = (): void => {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
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
