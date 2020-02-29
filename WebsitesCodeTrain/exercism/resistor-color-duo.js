const decodedValue = (arr) => {
  return (COLORS1.indexOf(arr[0]) + '' + COLORS1.indexOf(arr[1])) * 1
};
const COLORS1 = [
  'Black',
  'Brown',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Violet',
  'Grey',
  'White'
];

console.log(decodedValue(['White','Brown','red']));
