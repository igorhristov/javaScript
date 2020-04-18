/* Introduction
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

    The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
*/

const isPangram = str =>
    [...'abcdefghijklmnopqrstuvwxyz'].every(letter => str.toLowerCase().includes(letter));

console.log(isPangram('the quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('a quick movement of the enemy will jeopardize five gunboats')); // false
console.log(isPangram('the quick brown fox jumps over with lazy FX')); // false
console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."')); // true
console.log(isPangram('')); // false

const isPangram1 = string => {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let count = [];
    const str = [...string.toLowerCase()];
    for (let i = 0; i < str.length; i++) {
        if (abc.includes(str[i])) {
            if (!count.includes(str[i])) {
                count.push(str[i]);
            }
        }
    }
    return count.length === 26;
};
