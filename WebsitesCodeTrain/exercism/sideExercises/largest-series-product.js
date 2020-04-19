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
    let product = 1;

    for (let i = 0; i < Math.floor(str.length / dig); i++) {
      
        // if(product < Number(str.slice(i,dig))) {
        // }
    }

    return product;
};
console.log('Largest Series Product');
console.log('can find the largest product of 2 with numbers in order');
console.log(largestProduct('0123456789', 2)); // 72
console.log('can find the largest product of 2');
console.log(largestProduct('576802143', 2)); // 48
console.log('finds the largest product if span equals length');
console.log(largestProduct('29', 2)); // 18

/*
import { largestProduct } from './largest-series-product';

describe(, () => {
  test(, () => {
    expect().toEqual(18);
  });

  xtest('can find the largest product of 3 with numbers in order', () => {
    expect(largestProduct('0123456789', 3)).toEqual(504);
  });

  xtest('can find the largest product of 3', () => {
    expect(largestProduct('1027839564', 3)).toEqual(270);
  });

  xtest('can find the largest product of 5 with numbers in order', () => {
    expect(largestProduct('0123456789', 5)).toEqual(15120);
  });

  xtest('can get the largest product of a big number', () => {
    expect(
      largestProduct('73167176531330624919225119674426574742355349194934', 6)
    ).toEqual(23520);
  });

  xtest('reports zero if the only digits are zero', () => {
    expect(largestProduct('0000', 2)).toEqual(0);
  });

  xtest('reports zero if all spans include zero', () => {
    expect(largestProduct('99099', 3)).toEqual(0);
  });

  xtest('rejects span longer than string length', () => {
    expect(() => largestProduct('123', 4)).toThrow(
      new Error('Span must be smaller than string length')
    );
  });

  xtest('reports 1 for empty string and empty product (0 span)', () => {
    expect(largestProduct('', 0)).toEqual(1);
  });

  xtest('reports 1 for nonempty string and empty product (0 span)', () => {
    expect(largestProduct('123', 0)).toEqual(1);
  });

  xtest('rejects empty string and nonzero span', () => {
    expect(() => largestProduct('', 1)).toThrow(
      new Error('Span must be smaller than string length')
    );
  });

  xtest('rejects invalid character in digits', () => {
    expect(() => largestProduct('1234a5', 2)).toThrow(
      new Error('Digits input must only contain digits')
    );
  });

  xtest('rejects negative span', () => {
    expect(() => largestProduct('12345', -1)).toThrow(
      new Error('Span must be greater than zero')
    );
  });
});


*/
