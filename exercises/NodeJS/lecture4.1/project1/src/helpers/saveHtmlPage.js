const fs = require('fs').promises;
const path = require('path');
const BUILD_PATH = path.resolve(__dirname, '../../build');

module.exports = async (htmlFilename, output) => {
  const pagePath = path.resolve(BUILD_PATH, htmlFilename);
  return await fs.writeFile(pagePath, output);
};
