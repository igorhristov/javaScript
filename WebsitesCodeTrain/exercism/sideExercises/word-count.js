/*
Introduction

Given a phrase, count the occurrences of each word in that phrase.

For example for the input "olly olly in come free"

olly: 2
in: 1
come: 1
free: 1

*/

const countWords = str => {
    return str
        .toLowerCase()
        .split(' ')
        .reduce((acc, c) => {
            let currentWord = c
                .trim()
                .replace(/\W+/g, ' ')
                .trim();
            if (currentWord !== '') {
                acc.push(currentWord);
            }
            return acc;
        }, [])
        .reduce((acc, c) => {
            acc[c] = acc[c] ? acc[c] + 1 : 1;
            return acc;
        }, {});
};

console.log(countWords('olly olly in come free')); // {olly: 2, in: 1, come: 1, free: 1}
console.log(countWords('word')); // {word: 1}
console.log(countWords('one fish two fish red fish blue fish')); // {one: 1, fish: 4, two: 1, red: 1, blue: 1}
console.log(countWords('one of each')); // { one: 1, of: 1, each: 1 }
console.log(countWords('one,two,three')); // {one,two,three: 1}
console.log(countWords('one,\ntwo,\nthree')); //
console.log(countWords('go Go GO Stop stop')); //  go: 3, stop: 2
console.log(countWords(",\n,one,\n ,two \n 'three'"));
console.log(countWords('one,two,three'));
console.log();
console.log();

/*

    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1
    };
    expect(countWords('one,\ntwo,\nthree')).toEqual(expectedCounts);
  });

  xtest('ignore punctuation', () => {
    const expectedCounts = {
      car: 1,
      carpet: 1,
      as: 1,
      java: 1,
      javascript: 1
    };
    expect(countWords('car: carpet as java: javascript!!&@$%^&')).toEqual(
      expectedCounts
    );
  });

  xtest('include numbers', () => {
    const expectedCounts = {
      testing: 2,
      '1': 1,
      '2': 1
    };
    expect(countWords('testing, 1, 2 testing')).toEqual(expectedCounts);
  });

  xtest('normalize case', () => {
    const expectedCounts = {
     

  xtest('with apostrophes', () => {
    const expectedCounts = {
      first: 1,
      'don\'t': 2,
      laugh: 1,
      then: 1,
      cry: 1
    };
    expect(countWords('First: don\'t laugh. Then: don\'t cry.')).toEqual(
      expectedCounts
    );
  });

  xtest('with quotations', () => {
    const expectedCounts = {
      joe: 1,
      'can\'t': 1,
      tell: 1,
      between: 1,
      large: 2,
      and: 1
    };
    expect(countWords('Joe can\'t tell between \'large\' and large.')).toEqual(
      expectedCounts
    );
  });

  xtest('substrings from the beginning', () => {
    const expectedCounts = {
      joe: 1,
      'can\'t': 1,
      tell: 1,
      between: 1,
      app: 1,
      apple: 1,
      and: 1,
      a: 1
    };
    expect(countWords('Joe can\'t tell between app, apple and a.')).toEqual(
      expectedCounts
    );
  });

  xtest('multiple spaces not detected as a word', () => {
    const expectedCounts = {
      multiple: 1,
      whitespaces: 1
    };
    expect(countWords(' multiple   whitespaces')).toEqual(expectedCounts);
  });

  xtest('alternating word separators not detected as a word', () => {
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1
    };
    expect(countWords(',\n,one,\n ,two \n \'three\'')).toEqual(expectedCounts);
  });
});

*/
