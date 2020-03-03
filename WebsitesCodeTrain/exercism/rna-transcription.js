/*
Introduction
Given a DNA strand, return its RNA complement (per RNA transcription).
Both DNA and RNA strands are a sequence of nucleotides.
The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
    G -> C
    C -> G
    T -> A
    A -> U
*/
 
    /*
    if (DNA[i] === 'G') {
      rna += 'C';
    } else if (DNA[i] === 'C') {
      rna += 'G';
    } else if (DNA[i] === 'T') {
      rna += 'A';
    } else if (DNA[i] === 'A') {
      rna += 'U';
    }
    */
const toRna = DNA => {
  const TRANSCRIPTION = { G: 'C', C: 'G', A: 'U', T: 'A' };
  let rna = '';
  for (let i = 0; i < DNA.length; i++) {
    rna += TRANSCRIPTION[DNA[i]]
  }
  return rna;
};

console.log(toRna('')); // ''
console.log(toRna('C')); // G
console.log(toRna('T')); // A
console.log(toRna('A')); // U
console.log(toRna('ACGTGGTCTTAA')); // UGCACCAGAAUU
/*
Well, this is better to separate data from logic. Here this can be done by putting the transcription map in a JS object, for example: const TRANSCRIPTION = { A: 'U', ... }; and use it directly in your loop: TRANSCRIPTION[nucleotides[i]].

Can you do that?

Also, to go further, this is more idiomatic to go through arrays and use map to loop over elements...
*/
