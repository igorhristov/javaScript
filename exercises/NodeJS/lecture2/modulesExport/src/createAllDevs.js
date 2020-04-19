const {
  readCsvLines,
  parseCsvLineToJson,
  saveJsonFile
} = require('./src-to-json.js');

const createAllDevs = async _ => {
  const lines = await readCsvLines('developers.csv');
  const devs = lines.map(parseCsvLineToJson);
  await saveJsonFile(devs,'allDevs.json');
};

createAllDevs();
