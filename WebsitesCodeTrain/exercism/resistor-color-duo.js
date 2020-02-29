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

const decodedValue1 = (arr) => {
  return (COLORS1.indexOf(arr[0]) * 10 + COLORS1.indexOf(arr[1]));
};

console.log(decodedValue1(['White','Brown','red']));


// const decodedValue3 = ([color1, color2]) =>  [...COLORS1]
 
// console.log(decodedValue3(['White','Brown']));

const decodedValue4 = (...[colors]) => {
  let [color1, color2] = colors;
    return Number(`${COLORS1.indexOf(color1)}${COLORS1.indexOf(color2)}`);
};
console.log(decodedValue4(['White','Brown']));
