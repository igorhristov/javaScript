/*
Introduction

Write a function to convert from normal numbers to Roman Numerals.

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

 1  => I
10  => X
 7  => VII

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M 900=CM 90=XC

2008 is written as MMVIII:

2000=MM 8=VIII

See also: http://www.novaroma.org/via_romana/numbers.html

*/

const romanNumerals = [
	['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
	['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
	['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
	['', 'M', 'MM', 'MMM']
];

 const toRoman = (decimal) =>
	String(decimal).split('')
		.reverse()
		.map((x, ix) => romanNumerals[ix][Number(x)])
		.reverse()
		.join('');
  
console.log(toRoman(1)); // 'I'
console.log(toRoman(3)); // III
console.log(toRoman(4)); // IV
console.log(toRoman(5)); // V
console.log(toRoman(6)); // 'VI'
console.log(toRoman(9)); // 'IX'
console.log(toRoman(27)); // 'XXVII'
console.log(toRoman(48)); // 'XLVIII'
console.log(toRoman(59)); // LIX
console.log(toRoman(93)); // XCIII
console.log(toRoman(141)); // CXLI
console.log(toRoman(163)); // CLXIII
console.log(toRoman(402)); // CDII
console.log(toRoman(575)); // DLXXV
console.log(toRoman(911)); // CMXI
console.log(toRoman(1024)); // MXXIV
console.log(toRoman(3000)); // MMM