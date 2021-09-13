const fs = require('fs');
const path = require('path');
const https = require('https');

const fileName = 'static.paths.txt';
const fileLocationPath = '/';
const apiEndpoint = 'https://victorsamuel-website-backend.viktorsml.workers.dev/build/getStaticRoutes';

const currentWorkingDirectory = process.cwd();

const generateStaticRoutesFile = (projectPathList) => {
  console.log('Static routes returned by API', projectPathList);
  const fileData = projectPathList.reduce((acc, curr) => `${acc}\n${curr}`);
  fs.writeFile(path.join(currentWorkingDirectory, fileLocationPath, fileName), fileData, (err) => {
    if (err) throw err;
    console.log('✔ Static routes file generated successfully');
  });
};

https
  .get(apiEndpoint, (resp) => {
    let data = '';
    // A chunk of data has been received.
    resp.on('data', (chunk) => (data += chunk));
    // The whole response has been received. Print out the result.
    resp.on('end', () => generateStaticRoutesFile(JSON.parse(data)));
  })
  .on('error', (err) => console.log('Error: ' + err.message));
