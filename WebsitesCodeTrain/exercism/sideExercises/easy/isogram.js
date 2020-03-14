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
const isIsogram = string => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const str = string.toLowerCase();
  let countLetters = [];
  let countDouble = [];

  for (let i = 0; i < str.length; i++) {
    if (abc.includes(str[i])) {
      countLetters.push(str[i]);
      if (countLetters.includes(str[i])) {
        countDouble.push(str[i]);
      }
    }
  }

  countDouble = countLetters.reduce((acc, c) => {
    if (!acc.includes(c)) {
      acc.push(c);
    }
    return acc;
  }, []);

  return countLetters.length === countDouble.length;
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
