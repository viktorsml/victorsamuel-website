const express = require('express');
const path = require('path');

const getTranslatedServer = (lang) => {
  const distFolder = path.join(process.cwd(), 'dist/victorsamuel-website/server', lang);
  const server = require(path.join(distFolder, 'main.js'));
  return server.app(lang);
};

function run() {
  const port = process.env.PORT || 4200;

  // Start up the Node server
  const appEn = getTranslatedServer('en');
  const appEs = getTranslatedServer('es');

  const server = express();
  server.use('/en', appEn);
  server.use('/es', appEs);
  server.use('', appEn);

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
