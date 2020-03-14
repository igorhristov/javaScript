const steps = (num) => {
  let step = 0;
  let n = num;
  if(num === 1) {
    return 0
  } else if ( num < 1) {
    throw new Error("Only positive numbers are allowed");
  } else {
    for (let i = 0; i <= num; i++) {
      if(n === 1) {
        break;
      } else if(n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
          
      step++;
    }
  }
  return step;
};

console.log(steps(12));
console.log(steps(1000000));
console.log(steps(16));
// console.log(steps(-5));
console.log(steps(1));
// console.log(steps(0));
/*
Introduction
The Collatz Conjecture or 3x+1 problem can be summarized as follows:
Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.
Given a number n, return the number of steps required to reach 1.
Examples
Starting with n = 12, the steps would be as follows:
    12
    6
    3
    10
    5
    16
    8
    4
    2
    1
Resulting in 9 steps. So for input n = 12, the return value would be 9.
*/