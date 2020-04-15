const fs = require('fs').promises;
const path = require('path');
const csv = require('csvtojson');

const CSV_FILE_PATH = path.resolve(__dirname, './data/developers.csv');
const JSON_FILE_PATH = path.resolve(__dirname, './data/frntBmrs-package.json');

const createFrontendBoomers = async _ => {
  const devs = await csv({
    colParser: {
      birthYear: 'number',
      salary: 'number'
    }
  }).fromFile(CSV_FILE_PATH);

  const frontEndBoomers = devs.filter(dev => dev.skill === 'frontend' && dev.birthYear < 1990);
  console.log(frontEndBoomers.length + ' devs');
  
  await fs.writeFile(JSON_FILE_PATH, JSON.stringify(frontEndBoomers, null, 2));
};
createFrontendBoomers();
