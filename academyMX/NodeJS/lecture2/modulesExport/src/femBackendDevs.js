const {
  readCsvLines,
  parseCsvLineToJson,
  saveJsonFile
} = require('./src-to-json.js');

const createFemBackendDevs = async _ => {
  const lines = await readCsvLines('developers.csv');
  const devs = lines.map(parseCsvLineToJson);
  const femBackendDevs = devs.filter(dev => dev.gender === 'female' && dev.skill === 'backend')
  await saveJsonFile(femBackendDevs, 'femBackendDevs.json');
};
createFemBackendDevs();