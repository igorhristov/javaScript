const fs = require('fs').promises;
const path = require('path');

const readCsvLines = async filename => {
  const CSV_FILE_PATH = path.resolve(__dirname, `./data/${filename}`);
  const csvBuffer = await fs.readFile(CSV_FILE_PATH);
  const csvString = csvBuffer.toString();
  const [, ...lines] = csvString.split('\n');
  return lines.filter(content => content);
};

const parseCsvLineToJson = line => {
  const [birthYear, firstName, lastName, skill, gender, salary] = line.split(
    ','
  );
  return {
    birthYear: Number(birthYear),
    firstName,
    lastName,
    skill,
    gender,
    salary: Number(salary)
  };
};

const saveJsonFile = (devs, filename) => {
  const JSON_FILE_PATH = path.resolve(__dirname, `./data/${filename}`);
  fs.writeFile(JSON_FILE_PATH, JSON.stringify(devs, null, 2));
};

module.exports = { readCsvLines, parseCsvLineToJson, saveJsonFile };
