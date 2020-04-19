const fs = require('fs').promises;
const path = require('path');
const csv = require('csvtojson');

const CSV_FILE_PATH = path.resolve(__dirname, './data/developers.csv');
const JSON_FILE_PATH = path.resolve(__dirname, './data/femBack-pack.json');

const createfemaleBackendDevs = async _ => {
  const devs = await csv({
    colParser: {
      birthYear: 'number',
      salary: 'number'
    }
  }).fromFile(CSV_FILE_PATH);

  const femaleBackendDevs = devs.filter(
    dev => dev.gender === 'female' && dev.skill === 'backend'
  );
  
  console.log(femaleBackendDevs.length + ' devs');

  await fs.writeFile(JSON_FILE_PATH, JSON.stringify(femaleBackendDevs, null, 2));
};
createfemaleBackendDevs();
