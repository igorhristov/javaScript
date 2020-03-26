const isPangram = str => [...'abcdefghijklmnopqrstuvwxyz'].every(letter => str.toLowerCase().includes(letter));

console.log(isPangram('the quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('a quick movement of the enemy will jeopardize five gunboats')); // false
console.log(isPangram('the quick brown fox jumps over with lazy FX')); // false
console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."')); // true
console.log(isPangram('')); // false
// /* Very interesting. Nicely done first effort.
/*
L4 Do we need an array just to iterate over a string?
L2 So right now we redefine this every time the function is called?
L6-7 If we just want to know if every letter exists in the string,
 doesn't Array have some nice functions that might help?

Hope this helps. Let me know if anything isn’t clear or if you need further hints. 
Brief bullet points are just my personal style;
 I'm always happy to explain or provide more detail as needed. 🙂

Cheers, Josh */

/* Introduction
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

    The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
*/
