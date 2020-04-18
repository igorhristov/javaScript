/*
# Phone Number
Clean up user-entered phone numbers so that they can be sent SMS messages.

The **North American Numbering Plan (NANP)** is a telephone numbering system used by many countries in North America like the United States, Canada or Bermuda. All NANP-countries share the same international country code: `1`.

NANP numbers are ten-digit numbers consisting of a three-digit Numbering Plan Area code, commonly known as *area code*, followed by a seven-digit local number. The first three digits of the local number represent the *exchange code*, followed by the unique four-digit number which is the *subscriber number*.

The format is usually represented as
```text
(NXX)-NXX-XXXX
```
where `N` is any digit from 2 through 9 and `X` is any digit from 0 through 9.

Your task is to clean up differently formatted telephone numbers by removing punctuation and the country code (1) if present.

For example, the inputs
- `+1 (613)-995-0253`
- `613-995-0253`
- `1 613 995 0253`
- `613.995.0253`

should all produce the output
`6139950253`
**Note:** As this exercise only deals with telephone numbers used in NANP-countries, only 1 is considered a valid country code.
*/

const clean = (str) => {
    if (/[a-z]/i.test(str)) {
        throw new Error('Letters not permitted');
    }

    if (/[!:@]/i.test(str)) {
        throw new Error('Punctuations not permitted');
    }

    const tel = str.match(/\d/g).map(Number);
    if (tel.length < 10) {
        throw new Error('Incorrect number of digits');
    }

    if (tel.length === 11 && tel[0] !== 1) {
        throw new Error('11 digits must start with 1');
    }
    if (tel.length > 11) {
        throw new Error('More than 11 digits');
    }

    if (tel.length > 10 && tel[0] === 1) {
        tel.shift();
    }

    if (tel[0] === 0) {
        throw new Error('Area code cannot start with zero');
    }
    if (tel[0] === 1) {
        throw new Error('Area code cannot start with one');
    }

    if (tel[3] === 0) {
        throw new Error('Exchange code cannot start with zero');
    }
    if (tel[3] === 1) {
        throw new Error('Exchange code cannot start with one');
    }

    return tel.join('');
};

console.log('Phone Number');
console.log('Cleanup user-entered phone numbers');
console.log('cleans the number');
console.log(clean('(223) 456-7890')); // 2234567890
console.log('cleans numbers with dots');
console.log(clean('223.456.7890')); // 2234567890
console.log('cleans numbers with multiple spaces');
console.log(clean('223 456   7890   ')); // 2234567890
console.log('invalid when 9 digits');
console.log(clean('123456789')); // new Error('Incorrect number of digits')
console.log('invalid when 11 digits does not start with a 1');
console.log(clean('22234567890')); // new Error('11 digits must start with 1')
console.log('valid when 11 digits and starting with 1');
console.log(clean('12234567890')); // 2234567890
console.log('valid when 11 digits and starting with 1 even with punctuation');
console.log(clean('+1 (223) 456-7890')); // 2234567890
console.log('invalid when more than 11 digits');
console.log(clean('321234567890')); //  new Error('More than 11 digits')
console.log('invalid with letters');
console.log(clean('123-abc-7890')); // new Error('Letters not permitted')
console.log('invalid with punctuations');
console.log(clean('123-@:!-7890')); // new Error('Punctuations not permitted')
console.log('invalid if area code starts with 0');
console.log(clean('(023) 456-7890')); // new Error('Area code cannot start with zero')
console.log('invalid if area code starts with 1');
console.log(clean('(123) 456-7890')); //  new Error('Area code cannot start with one')
console.log('invalid if exchange code starts with 0');
console.log(clean('(223) 056-7890')); //  new Error('Exchange code cannot start with zero')
console.log('invalid if exchange code starts with 1');
console.log(clean('(223) 156-7890')); // new Error('Exchange code cannot start with one')
console.log('invalid if area code starts with 0 on valid 11-digit number');
console.log(clean('1 (023) 456-7890')); //  new Error('Area code cannot start with zero')
console.log('invalid if area code starts with 1 on valid 11-digit number');
console.log(clean('1 (123) 456-7890')); // new Error('Area code cannot start with one')
console.log('invalid if exchange code starts with 0 on valid 11-digit number');
console.log(clean('1 (223) 056-7890')); // new Error('Exchange code cannot start with zero')
console.log('invalid if exchange code starts with 1 on valid 11-digit number');
console.log(clean('1 (223) 156-7890')); // new Error('Exchange code cannot start with one')
