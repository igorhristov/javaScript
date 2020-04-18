/**
  # Nucleotide Count

Given a single stranded DNA string, compute how many times each nucleotide occurs in the string.

The genetic language of every living thing on the planet is DNA.
DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides.
4 types exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

Here is an analogy:
- twigs are to birds nests as
- nucleotides are to DNA as
- legos are to lego houses as
- words are to sentences as...

 */
class NucleotideCounts {
    static parse(str) {
        if (/[^ACGT]/.test(str)) {
            throw new Error('Invalid nucleotide in strand');
        }

        const countNucInObj = str.split('').reduce((acc, c) => {
            acc[c] = acc[c] ? acc[c] + 1 : 1;
            return acc;
        }, {});

        return `${countNucInObj.A || 0} ${countNucInObj.C || 0} ${countNucInObj.G || 0} ${
            countNucInObj.T || 0
        }`;
    }
}

console.log('count all nucleotides in a strand');
console.log('empty strand');
console.log(NucleotideCounts.parse('')); // '0 0 0 0'
console.log('can count one nucleotide in single-character input');
console.log(NucleotideCounts.parse('G')); // '0 0 1 0'
console.log('strand with repeated nucleotide');
console.log(NucleotideCounts.parse('GGGGGGG')); // '0 0 7 0'
console.log('strand with multiple nucleotides');
console.log(
    NucleotideCounts.parse('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')
); // '20 12 17 21'
console.log('strand with invalid nucleotides');
console.log(NucleotideCounts.parse('AGXXACT')); // new Error('Invalid nucleotide in strand')
