const isPaired = (str) => {
    const arr = str.split('');
    
    let b = 0;
    let b1 = 0;
    let s = 0;
    let s1 = 0;
    let m = 0;
    let m1 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            b++;
        } else if(arr[i] === ')') {
            b1++
        }
        if (arr[i] === '[') {
            s++;
        } else if(arr[i] === ']') {
            s1++
        }

        if (arr[i] === '{') {
            m++;
        } else if(arr[i] === '}') {
            m1++
        }
       
    }

   return b === b1 && s === s1 && m === m1 ? true : false
};
console.log(isPaired('[]')); // true
console.log(isPaired('')); // true
console.log(isPaired('[[')); // false
console.log(isPaired('}{')); // false
console.log(isPaired('{]')); // false
console.log(isPaired('{ }')); // true
console.log(isPaired('{[])')); // false
console.log(isPaired('[]]')); // false
console.log(isPaired('{[]}')); // true
console.log(isPaired('{}[]')); // true
console.log(isPaired('([{}({}[])])')); // true
console.log(isPaired('{[)][]}')); // false
console.log(isPaired('([{])')); // false
console.log(isPaired('[({]})')); // false
console.log(isPaired('{}[')); // false
console.log(isPaired('(((185 + 223.85) * 15) - 543)/2')); // true
console.log(isPaired('\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)')); // true

/*
"use strict";

const PAIRS = {"{":"}", "[":"]", "(":")"};
export const isPaired = (str) => {

  let stack = [];

  for (let element of str) {
    if ('[{('.includes(element)) {
      stack.push(element);
    }
    else if (']})'.includes(element)) 
      if (element != PAIRS[stack.pop()]) {
        return false;
      }
    }

  return stack.length == 0;

}

*/ */