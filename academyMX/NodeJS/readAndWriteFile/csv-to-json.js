const fs = require('fs').promises;

const readCsvLines = async filename => {
  const csvBuffer = await fs.readFile(filename);
  const csvString = csvBuffer.toString();
  const [, ...lines] = csvString.split('\n');
  return lines.filter(content => content); // remove empty lines ''--> falsy
};
const parseCsvLineToJson = line => {
  const [birthYear, firstName, lastName, skill, gender, salary] = line.split(
    ','
  );
  return {
    birthYear: +birthYear,
    salary: +salary,
    firstName,
    lastName,
    skill,
    gender
  };
};

const saveJsonFile = (devs, filename) =>
  fs.writeFile(filename, JSON.stringify(devs, null, 2));

const RUN = async () => {
  const lines = await readCsvLines('./data/developers.csv');
  const devs = lines.map(parseCsvLineToJson);
  await saveJsonFile(devs, './data/developers.json');
  console.log('developers.json is saved');
  
};
RUN();
