const fs = require('fs');
const path = require('path');

const prerenderedLanguages = ['en', 'es'];
const rootBrowserPath = 'dist/victorsamuel-website/browser';

const fileNamesToMove = process.argv[2].split('|');
const currentWorkingDirectory = process.cwd();

filesToMoveLoop: for (const fileName of fileNamesToMove) {
  const [defaultLanguage, ...otherLanguages] = prerenderedLanguages;
  const fileToMoveFullPath = path.join(currentWorkingDirectory, rootBrowserPath, defaultLanguage, fileName);

  if (!fs.existsSync(fileToMoveFullPath)) {
    console.log(`❌ Unable to move file because it doesn't exist (${fileToMoveFullPath})`);
    continue filesToMoveLoop;
  }

  const destinationPath = path.join(currentWorkingDirectory, rootBrowserPath, fileName);
  fs.rename(fileToMoveFullPath, destinationPath, (errorOnMovingFile) => {
    if (errorOnMovingFile) throw errorOnMovingFile;
  });

  cleanUpLoop: for (const supportedLanguage of otherLanguages) {
    const fileToDeletePath = path.join(currentWorkingDirectory, rootBrowserPath, supportedLanguage, fileName);

    if (!fs.existsSync(fileToDeletePath)) {
      continue cleanUpLoop;
    }

    fs.unlink(fileToDeletePath, (errorOnDeletingFile) => {
      if (errorOnDeletingFile) throw errorOnDeletingFile;
    });
  }

  console.log(`✔ File fixed successfully (${fileToMoveFullPath})`);
}
