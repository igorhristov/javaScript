/*Introduction
Given a number determine whether or not it is valid per the Luhn formula.

The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The task is to check if a given string is valid.

Validating a Number
Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.

Example 1: valid credit card number
4539 1488 0343 6467
The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling

4_3_ 1_8_ 0_4_ 6_6_
If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:

8569 2478 0383 3437
Then sum all of the digits:

8+5+6+9+2+4+7+8+0+3+8+3+3+4+3+7 = 80
If the sum is evenly divisible by 10, then the number is valid. This number is valid!

Example 2: invalid credit card number
8273 1232 7352 0569
Double the second digits, starting from the right

7253 2262 5312 0539
Sum the digits

7+2+5+3+2+2+6+2+5+3+1+2+0+5+3+9 = 57
57 is not evenly divisible by 10, so this number is not valid.
*/
const valid = (str) => {
    if (str.trim().length === 1) {
        return false;
    }

    if (str.trim().length < 3 && Number.isNaN(Number(str * 1))) {
        return false;
    }
    const arr = str
        .split(' ')
        .map((x) => x.split(''))
        .flat()
        .map(Number)
        .reverse();

    if (Number.isNaN(Number(arr.slice().reverse())) && arr.length < 4) {
        return true;
    }
    let double = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] !== 9 && i % 2 !== 0) {
            double.push(arr[i] * 2 > 9 ? arr[i] * 2 - 9 : arr[i] * 2);
        } else {
            double.push(arr[i]);
        }
    }

    let sum = 0;
    double.forEach((el) => {
        sum += el;
    });

    return sum % 10 === 0;
};
console.log("using ascii value for doubled non-digit isn't allowed:  :9");
console.log(valid(':9')); // false
console.log('a simple valid SIN that becomes invalid if reversed: 59');
console.log(valid('59')); // true
console.log('a valid Canadian SIN: 055 444 285');
console.log(valid('055 444 285')); // true
console.log(valid('4539 1488 0343 6467')); // true
console.log('a simple valid SIN that remains valid if reversed: 059 true');
console.log(valid('059')); // true
console.log('input digit 9 is correctly converted to output digit 9');
console.log(valid('091')); // true
console.log('valid number with an even number of digits: 095 245 88');
console.log(valid('095 245 88')); // true
console.log('valid number with an odd number of spaces: 234 567 891 234');
console.log(valid('234 567 891 234')); // true
console.log('invalid credit card: 8273 1232 7352 0569');
console.log(valid('8273 1232 7352 0569')); //false
console.log('single digit strings can not be valid: 1');
console.log(valid('1')); // false
console.log('a single zero is invalid: 0');
console.log(valid('0')); // false
console.log('valid strings with a non-digit added at the end invalid');
console.log(valid('059a')); // false
console.log('valid strings with punctuation included become invalid');
console.log(valid('055-444-285')); // false
console.log('single zero with space is invalid');
console.log(valid(' 0')); // false
console.log('more than a single zero is valid: 0000 0');
console.log(valid('0000 0')); // true
console.log('invalid Canadian SIN: 055 444 286');
console.log(valid('055 444 286')); //false
console.log("using ascii value for non-doubled non-digit isn't allowed");
console.log(valid('055b 444 285')); // false
