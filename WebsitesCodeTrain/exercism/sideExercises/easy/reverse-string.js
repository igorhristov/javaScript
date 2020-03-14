const reverseString = str => {
  let string = '';
  if (str.length < 1) {
    return '';
  } else {
    for(let i = str.length - 1; i >= 0; i--) {
      string += str[i];
    }
  }
  return string;
} 

console.log(reverseString('I am hungry!'));
console.log(reverseString('hello'));
console.log(reverseString('racecar'));
console.log(reverseString('reward'));
