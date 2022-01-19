const fs = require('fs');
const path = require('path');
const https = require('https');

const generationSettings = {
  fileName: 'static.paths.txt',
  fileLocationPath: '/',
  apiEndpoint: 'https://victorsamuel-website-backend.viktorsml.workers.dev/build/getStaticRoutes',
};

const currentWorkingDirectory = process.cwd();

const generateStaticRoutesFile = (projectPathList) => {
  console.log('Static routes returned by API', projectPathList);
  const fileData = projectPathList.reduce((acc, curr) => `${acc}\n${curr}`);
  fs.writeFile(path.join(currentWorkingDirectory, generationSettings.fileLocationPath, generationSettings.fileName), fileData, (err) => {
    if (err) throw err;
    console.log('✔ Static routes file generated successfully');
  });
};

const makeRequest = (endpoint) => {
  return new Promise((resolve, reject) => {
    https
      .get(endpoint, (resp) => {
        let data = '';
        // A chunk of data has been received.
        resp.on('data', (chunk) => (data += chunk));
        // The whole response has been received. Print out the result.
        resp.on('end', () => resolve(JSON.parse(data)));
      })
      .on('error', reject);
  });
};

makeRequest(generationSettings.apiEndpoint).then(generateStaticRoutesFile);
