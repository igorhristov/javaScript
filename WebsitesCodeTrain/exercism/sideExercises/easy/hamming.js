// link
// https://exercism.io/tracks/javascript/exercises/hamming/solutions/66bf9f474ba44e0ab953448b7731533c
// exercism profile:
// https://exercism.io/profiles/igorhristov
/*
ntroduction
Calculate the Hamming Distance between two DNA strands.

Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing, which they achieve by dividing into daughter cells. In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!

When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "Hamming Distance".

We read DNA using the letters C,A,G and T. Two strands might look like this:

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
They have 7 differences, and therefore the Hamming Distance is 7.

The Hamming Distance is useful for lots of things in science, not just biology, so it's a nice phrase to be familiar with :)

Implementation notes
The Hamming distance is only defined for sequences of equal length, so an attempt to calculate it between sequences of different lengths should not work.
*/

const compute = (leftStrand, rightStrand) => {
  if (leftStrand === rightStrand) {
    return 0;
  } else if (leftStrand === '') {
    throw new Error('left strand must not be empty');
  } else if (rightStrand === '') {
    throw new Error('right strand must not be empty');
  } else if (leftStrand.length !== rightStrand.length) {
    throw new Error('left and right strands must be of equal length');
  } else {
    let hamming = 0;
    for (let i = 0; i < leftStrand.length; i++) {
      if (leftStrand[i] !== rightStrand[i]) {
        hamming++;
      }
    }
    return hamming;
  }
};

console.log(compute('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')); // 7
console.log(compute('', '')); // 0
console.log(compute('A', 'A')); // 0
console.log(compute('G', 'T')); // 1
console.log(compute('GGACGGATTCTG', 'AGGACGGATTCT')); // 9
console.log(compute('GGACTGAAATCTG', 'GGACTGAAATCTG')); // 0
