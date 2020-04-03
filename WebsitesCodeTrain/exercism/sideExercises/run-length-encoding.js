/*Introduction
Implement run-length encoding and decoding.
Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.
For example we can represent the original 53 characters with only 13.
"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.
"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.
*/
const encode = string => {
    const arr = string.split('');

    let count = 0;
    let newStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            count === 0 ? newStr.push(arr[i]) : newStr.push(count + 1 + arr[i]);
            count = 0;
        }
    }
    return newStr.join('');
};
// console.log(encode('')); // ''
// console.log(encode('XYZ')); // 'XYZ'
// console.log(encode('AABBBCCCC')); // '2A3B4C'
// console.log(encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')); // '12WB12W3B24WB'
// console.log(encode('  hsqq qww  ')); // '2 hs2q q2w2 '
// console.log(encode('aabbbcccc')); // '2a3b4c'
// console.log(decode(encode('zzz ZZ  zZ'))); // 'zzz ZZ  zZ'

console.log('DECODE');

const decode = string => {
  
    if(string === '') {
      return ''
    }
    
    /*if(!(/\d+$1/).test(string)) {
      return string
    } */
    

    let str = '';
    const arr = string.split('').map(x=> !Number.isNaN(Number(x)) ? x * 1 : x )
    console.log(arr);
      
    for (let i = 0; i < arr.length; i++) {
      
        if (typeof arr[i] === 'number') {
          while (arr[i] >= 1) {
            str += arr[i + 1]
            arr[i]--
          }
        } else {
          str += arr[i]
        }

    }

    return str;
};
  console.log(decode('')); // ''
console.log(decode('XYZ')); // 'XYZ'
console.log(decode('2A3B4C')); // 'AABBBCCCC'
console.log(decode('12WB12W3B24WB')); // 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB'
// console.log(decode('2 hs2q q2w2 ')); // '  hsqq qww  '
console.log(decode('2a3b4c')); // 'aabbbcccc'
console.log(decode('zzz ZZ  zZ')); // 'zzz ZZ  zZ'

