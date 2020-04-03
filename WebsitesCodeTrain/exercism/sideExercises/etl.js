/*
Introduction
We are going to do the Transform step of an Extract-Transform-Load.

ETL
Extract-Transform-Load (ETL) is a fancy way of saying, "We have some crufty, legacy data over in this system, and now we need it in this shiny new system over here, so we're going to migrate this."

(Typically, this is followed by, "We're only going to need to run this once." That's then typically followed by much forehead slapping and moaning about how stupid we could possibly be.)

The goal
We're going to extract some scrabble scores from a legacy system.

The old system stored a list of letters per score:

1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
2 points: "D", "G",
3 points: "B", "C", "M", "P",
4 points: "F", "H", "V", "W", "Y",
5 points: "K",
8 points: "J", "X",
10 points: "Q", "Z",
The shiny new scrabble system instead stores the score per letter, which makes it much faster and easier to calculate the score for a word. It also stores the letters in lower-case regardless of the case of the input letters:

"a" is worth 1 point.
"b" is worth 3 points.
"c" is worth 3 points.
"d" is worth 2 points.
Etc.
Your mission, should you choose to accept it, is to transform the legacy data format to the shiny new format.

Notes
A final note about scoring, Scrabble is played around the world in a variety of languages, each with its own unique scoring table. For example, an "E" is scored at 2 in the Māori-language version of the game while being scored at 4 in the Hawaiian-language version.

*/

const transform = obj => {
    let newObj = {};

    for (let ix in obj) {
        obj[ix].map(x => {
            newObj[x.toLowerCase()] = ix * 1;
        });
    }

    return newObj;
};
const old = { 1: ['A', 'E', 'I', 'O', 'U'] };
const expected = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1
};
console.log(transform(old)); // expected
console.log(expected);

const old1 = { 1: ['A'] };
console.log(transform(old1)); // { a: 1 }

const old2 = { 1: ['A', 'E'], 2: ['D', 'G'] };
const expected2 = {
    a: 1,
    e: 1,
    d: 2,
    g: 2
};
console.log(transform(old2)); //expected2
console.log(expected2);

const old3 = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};
const expected3 = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
};
console.log(transform(old3)); //expected3
console.log(expected3);
