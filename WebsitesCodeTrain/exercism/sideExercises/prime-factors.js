/*Introduction
Compute the prime factors of a given natural number.
A prime number is only evenly divisible by itself and 1.
Note that 1 is not a prime number.
Example
What are the prime factors of 60?
    Our first divisor is 2. 2 goes into 60, leaving 30.
    2 goes into 30, leaving 15.
        2 doesn't go cleanly into 15. So let's move on to our next divisor, 3.
    3 goes cleanly into 15, leaving 5.
        3 does not go cleanly into 5. The next possible factor is 4.
        4 does not go cleanly into 5. The next possible factor is 5.
    5 does go cleanly into 5.
    We're left only with 1, so now, we're done.
Our successful divisors in that computation represent the list of prime factors of 60: 2, 2, 3, and 5.
You can check this yourself:

    2 * 2 * 3 * 5
    = 4 * 15
    = 60
    Success!
*/
const primeFactors = (n) => {
  let factors = []
  for (let i = 2; i <= n; i++) {
    if(i   )

  }

  return factors;
};
console.log(primeFactors(8)); // [2, 2, 2]

/*

describe('primeFactors', () => {
  test('returns an empty array for 1', () => expect(primeFactors(1)).toEqual([]));

  test('factors 2', () => expect(primeFactors(2)).toEqual([2]));

  test('factors 3', () => expect(primeFactors(3)).toEqual([3]));

  test('factors 4', () => expect(primeFactors(4)).toEqual([2, 2]));

  test('factors 6', () => expect(primeFactors(6)).toEqual([2, 3]));

 test('factors 8', () => expect(primeFactors(8)).toEqual([2, 2, 2]));

  test('factors 9', () => expect(primeFactors(9)).toEqual([3, 3]));

  test('factors 27', () => expect(primeFactors(27)).toEqual([3, 3, 3]));

  test('factors 625', () => expect(primeFactors(625)).toEqual([5, 5, 5, 5]));

  test('factors 901255', () => expect(primeFactors(901255)).toEqual([5, 17, 23, 461]));

  test('factors 93819012551', () => expect(primeFactors(93819012551)).toEqual([11, 9539, 894119]));
});

*/
