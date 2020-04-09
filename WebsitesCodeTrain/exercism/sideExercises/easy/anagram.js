/*
Anagram
Side exercise
Introduction
Given a word and a list of possible anagrams, select the correct sublist.

Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
const findAnagrams = (str, arr) => {
    const arrStr = [...str.toLowerCase()].sort().join();
    const anagram = [];
    arr.forEach((el) => {
        if(el.toLowerCase() !== str.toLowerCase()) {
          arrStr === [...el.toLowerCase()].sort().join() ? anagram.push(el) : 1;
        } 
    });
    return anagram;
};
console.log(findAnagrams('master', ['stream', 'pigeon', 'maters'])); // ['stream', 'maters']
console.log(findAnagrams('listen', ['enlists', 'google', 'inlets', 'banana'])); //['inlets']
console.log(findAnagrams('diaper', ['hello', 'world', 'zombies', 'pants'])); // []
console.log(findAnagrams('good', ['dog', 'goody'])); // []
console.log(findAnagrams('allergy', ['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading'])); // ['gallery', 'regally', 'largely']
console.log(findAnagrams('nose', ['Eons', 'ONES'])); // ['Eons', 'ONES']
console.log(findAnagrams('mass', ['last'])); // []
console.log(findAnagrams('Orchestra', ['cashregister', 'Carthorse', 'radishes'])); // ['Carthorse']
console.log(findAnagrams('Orchestra', ['cashregister', 'carthorse', 'radishes'])); // ['carthorse']
console.log(findAnagrams('orchestra', ['cashregister', 'Carthorse', 'radishes'])); // ['Carthorse']
console.log(findAnagrams('go', ['go Go GO'])); // []
console.log(findAnagrams('tapper', ['patter'])); []
console.log(findAnagrams('BANANA', ['BANANA', 'Banana', 'banana'])); []
console.log(findAnagrams('LISTEN', ['Listen', 'Silent', 'LISTEN'])); // ['Silent']