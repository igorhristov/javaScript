/*
Introduction

Implement run-length encoding and decoding.

Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.

For example we can represent the original 53 characters with only 13.

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"

RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.

"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"

For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.
*/
const encode = str => {
  var count = {};
  str.split('').forEach(s => {
    count[s] = count[s] ? count[s] + 1 : 1;
  });
  console.log(count);
  
  // return Object.entries(count).map(x => x.reverse()).flat().join('')
};
// console.log(encode('')); // ''
// console.log(encode('XYZ')); // 'XYZ'
console.log(encode('AABBBCCCC')); // '2A3B4C'
console.log(encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')); // '12WB12W3B24WB'
// console.log(encode('  hsqq qww  ')); // '2 hs2q q2w2 '
console.log(encode('aabbbcccc')); // '2a3b4c'

console.log('DECODE');

const decode = () => {};
console.log(decode('')); // ''
console.log(decode('XYZ')); // 'XYZ'
console.log(decode('2A3B4C')); // 'AABBBCCCC'
console.log(decode('12WB12W3B24WB')); // 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB'
console.log(decode('2 hs2q q2w2 ')); // '  hsqq qww  '
console.log(decode('2a3b4c')); // 'aabbbcccc'
console.log(decode('zzz ZZ  zZ')); // 'zzz ZZ  zZ'

// console.log(decode(encode('zzz ZZ  zZ'))); // 'zzz ZZ  zZ'
