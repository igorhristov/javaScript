/* Introduction
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

    The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
*/

const isPangram = string => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let count = [];
  const str = [...string.toLowerCase()]
  for (let i = 0; i < str.length; i++) {
    if (abc.includes(str[i])) {
      if (!count.includes(str[i])) {
        count.push(str[i]);
      }
    }
  }
  return count.length === 26;
};

console.log(isPangram('the quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('a quick movement of the enemy will jeopardize five gunboats')); // false
console.log(isPangram('the quick brown fox jumps over with lazy FX')); // false
console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."')); // true

/*

describe('Pangram()', () => {
  test('empty sentence', () => {
    expect(isPangram('')).toBe(false);
  });

  test('perfect lower case', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  test('only lower case', () => {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
  });

  test("missing the letter 'x'", () => {
    expect(isPangram('a quick movement of the enemy will jeopardize five gunboats')).toBe(false);
  });

  test("missing the letter 'h'", () => {
    expect(isPangram('five boxing wizards jump quickly at it')).toBe(false);
  });

  test('with underscores', () => {
    expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true);
  });

  test('with numbers', () => {
    expect(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')).toBe(true);
  });

  test('missing letters replaced by numbers', () => {
    expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
  });

 
*/
