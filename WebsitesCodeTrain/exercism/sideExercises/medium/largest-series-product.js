/**
# Largest Series Product

Given a string of digits, calculate the largest product for a contiguous
substring of digits of length n.

For example, for the input `'1027839564'`, the largest product for a
series of 3 digits is 270 (9 * 5 * 6), and the largest product for a
series of 5 digits is 7560 (7 * 8 * 3 * 9 * 5).

Note that these series are only required to occupy *adjacent positions*
in the input; the digits need not be *numerically consecutive*.

For the input `'73167176531330624919225119674426574742355349194934'`,
the largest product for a series of 6 digits is 23520. 

 */

const largestProduct = (str, dig) => {
    if (dig < 0) {
        throw new Error('Span must be greater than zero');
    }
    if (str.length < dig) {
        throw new Error('Span must be smaller than string length');
    }
    if (/[^0-9]/.test(str)) {
        throw new Error('Digits input must only contain digits');
    }
    let product = 0;
    let arr = '';
    let getSlice = '';
    let temp = 1;

    for (let i = 0; i <= str.length; i++) {
        getSlice = str.slice(i, dig + i);

        if (getSlice.length < dig) {
            continue;
        }
        arr = getSlice.split('').map(Number);
        // console.log(getSlice);
        // console.log(arr);
        arr.forEach((element) => {
            temp *= element;
        });
        if (temp > product) {
            product = temp;
        }
        // console.log(temp);
        temp = 1;
        arr = [];
    }

    return product;
};
console.log('finds the largest product if span equals length');

console.log(largestProduct('29', 2)); // 18

/*
console.log('reports zero if the only digits are zero');
console.log(largestProduct('0000', 2)); // 0
console.log('reports zero if all spans include zero');
console.log(largestProduct('99099', 3)); // 0
console.log('can find the largest product of 3 with numbers in order');
console.log(largestProduct('0123456789', 3)); // 504
console.log('Largest Series Product');
console.log('can find the largest product of 2 with numbers in order');
console.log(largestProduct('0123456789', 2)); // 72
console.log('can find the largest product of 2');
console.log(largestProduct('576802143', 2)); // 48
console.log('finds the largest product if span equals length');
console.log(largestProduct('29', 2)); // 18
console.log('can find the largest product of 3');
console.log(largestProduct('1027839564', 3)); // 270
console.log('can find the largest product of 5 with numbers in order');
console.log(largestProduct('0123456789', 5)); // 15120
console.log('can get the largest product of a big number');
console.log(largestProduct('73167176531330624919225119674426574742355349194934', 6)); // 23520
console.log('rejects span longer than string length');
console.log(largestProduct('123', 4)); //  new Error('Span must be smaller than string length')
console.log('reports 1 for empty string and empty product (0 span)');
console.log(largestProduct('', 0)); // 1
console.log('reports 1 for nonempty string and empty product (0 span)');
console.log(largestProduct('123', 0));
console.log('rejects empty string and nonzero span');
console.log(largestProduct('', 1));
console.log('rejects invalid character in digits');
console.log(largestProduct('1234a5', 2));
console.log('rejects negative span');
console.log(largestProduct('12345', -1));

*/
