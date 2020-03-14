/*
Introduction

Determine if a word or phrase is an isogram.

An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

Examples of isograms:

    lumberjacks
    background
    downstream
    six-year-old

The word isograms, however, is not an isogram, because the s repeats.
*/
const isIsogram = str => {
  const reg = /[a-z]/i;
  let count = 0;
  str.split('').forEach(element => {
    if(element.match(reg)) {
      count++
      console.log(count);
      
    }
  });
  return count === 0 ? true : false
};

console.log(isIsogram('isogram')); // true
console.log(isIsogram('eleven')); // false
console.log(isIsogram('zzyzx')); // false
console.log(isIsogram('')); // true
console.log(isIsogram('subdermatoglyphic')); // true
console.log(isIsogram('Alphabet')); // false
console.log(isIsogram('alphAbet')); // false
console.log(isIsogram('thumbscrew-japingly')); // true
console.log(isIsogram('thumbscrew-jappingly')); // false
console.log(isIsogram('six-year-old')); // true
console.log(isIsogram('Emily Jung Schwartzkopf')); // true
console.log(isIsogram('accentor')); // false
console.log(isIsogram('angola')); // false
