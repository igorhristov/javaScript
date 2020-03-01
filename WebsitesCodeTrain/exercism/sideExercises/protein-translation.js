const translate = rna => {
  if (rna === undefined) {
    return [];
  }
  let tranlatedRna = [];
  for (let i = 0; i < rna.length; i += 3) {
    let mojavar = rna.substring(i, i + 3);
    if (['UAA', 'UAG', 'UGA'].includes(mojavar)) {
      return tranlatedRna;
    } else if (mojavar.includes('AUG')) {
      tranlatedRna.push('Methionine');
    } else if (['UUC', 'UUU'].includes(mojavar)) {
      tranlatedRna.push('Phenylalanine');
    } else if (['UUA', 'UUG'].includes(mojavar)) {
      tranlatedRna.push('Leucine');
    } else if (['UCG', 'UCA', 'UCC', 'UCU'].includes(mojavar)) {
      tranlatedRna.push('Serine');
    } else if (['UAU', 'UAC'].includes(mojavar)) {
      tranlatedRna.push('Tyrosine');
    } else if (['UGU', 'UGC'].includes(mojavar)) {
      tranlatedRna.push('Cysteine');
    } else if (['UGG'].includes(mojavar)) {
      tranlatedRna.push('Tryptophan');
    } else {
      throw new Error('Invalid codon');
    }
  }
  return tranlatedRna;
};

console.log(translate());
console.log(translate('AUGUUUUCU'));
console.log(translate('AUGUUUUCU'));
console.log(translate('UCUUCCUCAUCG'));
console.log(translate('UAGAUGUAU'));
console.log(translate('AUGUUUUCUUAAAUG'));
// console.log(translate('LOL'));
console.log('protein-translation');

/*
Translate RNA sequences into proteins.
Codon 	Protein
AUG 	Methionine
UUU, UUC 	Phenylalanine
UUA, UUG 	Leucine
UCU, UCC, UCA, UCG 	Serine
UAU, UAC 	Tyrosine
UGU, UGC 	Cysteine
UGG 	Tryptophan
UAA, UAG, UGA 	STOP
RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:

RNA: "AUGUUUUCU" => translates to

Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>

Protein: "Methionine", "Phenylalanine", "Serine"

There are 64 codons which in turn correspond to 20 amino acids; however, all of the codon sequences and resulting amino acids are not important in this exercise. If it works for one codon, the program should work for all of them. However, feel free to expand the list in the test suite to include them all.

There are also three terminating codons (also known as 'STOP' codons); if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated.

All subsequent codons after are ignored, like this:

RNA: "AUGUUUUCUUAAAUG" =>

Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>

Protein: "Methionine", "Phenylalanine", "Serine"

Note the stop codon "UAA" terminates the translation and the final methionine is not translated into the protein sequence.

Below are the codons and resulting Amino Acids needed for the 

*/
