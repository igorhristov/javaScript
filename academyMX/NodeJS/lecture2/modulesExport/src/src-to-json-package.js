const fs = require('fs').promises;
const path = require('path');
const csv = require('csvtojson');

const CSV_FILE_PATH = path.resolve(__dirname, './data/developers.csv');
const JSON_FILE_PATH = path.resolve(
  __dirname,
  './data/developers-package.json'
);

const createDevsJson = async _ => {
  const devs = await csv({
    colParser: {
      birthYear: 'number',
      salary: 'number'
    }
  }).fromFile(CSV_FILE_PATH);

  await fs.writeFile(JSON_FILE_PATH, JSON.stringify(devs, null, 2));
};
createDevsJson();
