const fs = require('fs').promises;

const readCsvLines = async (filename = './data/developers.csv') => {
  const csvBuffer = await fs.readFile(filename);
  const csvString = csvBuffer.toString();

  const [, ...lines] = csvString.split('\n');

  return lines.filter(content => content); // '' --> falsy
};

const parseCsvLineToJson = line => {
  const [
    birthYear,
    firstName,
    lastName,
    skill,
    gender,
    salary
  ] = line.split(',');

  return {
    birthYear: +birthYear,
    salary: +salary,
    firstName,
    lastName,
    skill,
    gender
  };
};

const saveJsonFile = (devs, filename = './data/developers.json') =>
  fs.writeFile(filename, JSON.stringify(devs, null, 2));

const run = async () => {
  const lines = await readCsvLines();
  const devs = lines.map(parseCsvLineToJson);

  await saveJsonFile(devs);

  console.log('developers.json saved');
};

run();