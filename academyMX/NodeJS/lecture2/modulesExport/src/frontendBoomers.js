const {
  readCsvLines,
  parseCsvLineToJson,
  saveJsonFile,
  filteredDevs
} = require('./src-to-json.js');

const createFrontEndBoomers = async _ => {
  const lines = await readCsvLines('developers.csv');
  const devs = lines.map(parseCsvLineToJson);
  /*
  const frontendBoomers = devs.filter(
    dev => dev.skill === 'frontend' && dev.birthYear < 1990
  );
  */
 console.log(filteredDevs(devs,'male').length);
 
 
  await saveJsonFile(filteredDevs(devs,'male'), 'frontendBoomers.json');
};
createFrontEndBoomers();
