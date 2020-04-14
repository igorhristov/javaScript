const fs = require('fs').promises;
const path = require('path');
const csv = require('csvtojson');
// const CSV_FILE_PATH = './data/developers.csv';
const CSV_FILE_PATH = path.resolve(__dirname, './data/developers.csv');
const RUN = async () => {
  const devs = await csv({
    colParser: {
      birthYear: 'number',
      salary: 'number'
    }
  }).fromFile(CSV_FILE_PATH);
  await fs.writeFile('./data/developers.json', JSON.stringify(devs, null, 2));
};
RUN();
