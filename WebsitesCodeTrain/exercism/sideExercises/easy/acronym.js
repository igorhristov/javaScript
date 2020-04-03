/*
Introduction
Convert a phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
*/

const parse = str => {
    return str
        .toUpperCase()
        .replace("'", '')
        .split(/[^A-Z]/)
        .map(x => x[0])
        .join('');
};
console.log(parse('Portable Network Graphics')); // PNG
console.log(parse('Ruby on Rails')); // ROR
console.log(parse('First In, First Out')); // FIFO
console.log(parse('GNU Image Manipulation Program')); // GIMP
console.log(parse('Complementary metal-oxide semiconductor')); // CMOS
console.log(parse('Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me')); // ROTFLSHTMDCOALM
console.log(parse('Something - I made up from thin air')); // SIMUFTA
console.log(parse("Halley's Comet")); // HC
console.log(parse('The Road _Not_ Taken')); // TRNT