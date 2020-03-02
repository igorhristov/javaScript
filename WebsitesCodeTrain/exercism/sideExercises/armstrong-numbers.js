/*
Introduction

An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

For example:

    9 is an Armstrong number, because 9 = 9^1 = 9
    10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
    153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190

Write some code to determine whether a number is an Armstrong number.
*/
const isArmstrongNumber = (num) => {
  
  if (num >= 0 && num < 10) {
    return true;
  } else if (num < 101) {
    return false         
  } else {
    let n = num.toString().split('');
    let nSize = n.length
    console.log(n);
    console.log(nSize);
    let arm = n.reduce((acc, broj) =>{
      acc = acc + Math.pow(broj, nSize)
      return acc
    }, 0)
    console.log(arm);
    return num === arm
  }
};
console.log('armstrong NUmbers:');
console.log(isArmstrongNumber(0));  // true Zero is an Armstrong number
console.log(isArmstrongNumber(5));  // true Single digit numbers are Armstrong numbers
console.log(isArmstrongNumber(10));  // false There are no 2 digit Armstrong numbers
console.log(isArmstrongNumber(100)); // false Three digit number that is not an Armstrong number
console.log(isArmstrongNumber(153));  // true Three digit number that is an Armstrong number
console.log(isArmstrongNumber(9474)); // true Four digit number that is an Armstrong number
console.log(isArmstrongNumber(9475)); // false Four digit number that is not an Armstrong number
console.log(isArmstrongNumber(9926315)); // true Seven digit number that is an Armstrong number
console.log(isArmstrongNumber(9926314)); // false Seven digit number that is not an Armstrong number

console.log('===== isAmstrongNum1====');

const isArmstrongNumber1 = n => n === ('' + n).split('').reduce((sum, d, _, digits) => sum + (+d) ** digits.length, 0);

console.log(isArmstrongNumber1(0));  // true Zero is an Armstrong number
console.log(isArmstrongNumber1(5));  // true Single digit numbers are Armstrong numbers
console.log(isArmstrongNumber1(10));  // false There are no 2 digit Armstrong numbers
console.log(isArmstrongNumber1(100)); // false Three digit number that is not an Armstrong number
console.log(isArmstrongNumber1(153));  // true Three digit number that is an Armstrong number
console.log(isArmstrongNumber1(9474)); // true Four digit number that is an Armstrong number
console.log(isArmstrongNumber1(9475)); // false Four digit number that is not an Armstrong number
console.log(isArmstrongNumber1(9926315)); // true Seven digit number that is an Armstrong number
console.log(isArmstrongNumber1(9926314)); // false Seven digit number that is not an Armstrong number