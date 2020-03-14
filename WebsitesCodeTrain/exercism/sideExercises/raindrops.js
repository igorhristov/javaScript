/*
Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".
*/
 const convert = (n) => {
  let rain = '';
  
   for(let i = 1; i <= n; i++) {

    if(n % i === 0 && i === 3) {
      rain += 'Pling'
    } else if(n % i === 0 && i === 5) {
      rain += 'Plang'
    } else if(n % i === 0 && i === 7) {
      rain += 'Plong'
    } 

  }

  return rain.length === 0 ? n.toString() : rain;
};

console.log(convert(28)); //  plong
console.log(convert(1)); //  1
console.log(convert(3)); //  pling
console.log(convert(5)); //  Plang
console.log(convert(7)); //  Plong
console.log(convert(6)); //  Pling
console.log(convert(8)); //  8
console.log(convert(9)); //  Pling
console.log(convert(10)); //  Plang
console.log(convert(14)); //  Plong
console.log(convert(15)); //  PlingPlang
console.log(convert(21)); //  PlingPlong
console.log(convert(25)); //  Plang
console.log(convert(35)); //  PlangPlong
console.log(convert(105)); //  PlingPlangPlong
console.log(convert(3125)); //  Plang
