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

const toRna = DNA => {
  if (DNA.length < 1) {
    return DNA;
  }
  let rna = '';
  for (let i = 0; i < DNA.length; i++) {
    if (DNA[i] === 'G') {
      rna += 'C';
    } else if (DNA[i] === 'C') {
      rna += 'G';
    } else if (DNA[i] === 'T') {
      rna += 'A';
    } else if (DNA[i] === 'A') {
      rna += 'U';
    }
  }
  return rna;
};

console.log(toRna('')); // ''
console.log(toRna('C')); // G
console.log(toRna('T')); // A
console.log(toRna('A')); // U
console.log(toRna('ACGTGGTCTTAA')); // UGCACCAGAAUU
