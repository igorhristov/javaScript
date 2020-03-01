

const convert = (arr, a, b) => {
  /*let arrDone = arr.reduce((acc, c, i, niza) => {
    return acc
  }, [])*/
   let arrDone =[]
   let curent= 0;
        for (let i = arr.length - 1; i >= 0; i--) {
          curent += arr[i] * b**i
         console.log(curent);
         
         arrDone.push(curent / a)
        }
        
  return arrDone
};

console.log(convert([1, 0, 1], 2, 10)); // [5]

console.log(convert([5], 10, 2)); // [1, 0, 1]

console.log(convert([3, 46, 60], 97, 73)); // [6, 10, 45]

/* 


The number 101010, in base 2, means:

(1 * 2^5) + (0 * 2^4) + (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0)


The number 1120, in base 3, means:

(1 * 3^3) + (1 * 3^2) + (2 * 3^1) + (0 * 3^0)

(4 * 10^1) + (2 * 10^0)
 test('binary to single decimal', () => {
    expect(convert([1, 0, 1], 2, 10)).toEqual([5]);
  });
test('15-bit integer', () => {
    expect(convert([3, 46, 60], 97, 73)).toEqual([6, 10, 45]);
 test('single decimal to binary', () => {
    expect(convert([5], 10, 2)).toEqual([1, 0, 1]);
  });
/* expect(convert([4, 2], 10, 2)).toEqual([1, 0, 1, 0, 1, 0]);
/*
Introduction
Convert a number, represented as a sequence of digits in one base, to any other base.
Implement general base conversion. Given a number in base a, represented as a sequence of digits, convert it to base b.
Note
    Try to implement the conversion yourself. Do not use something else to perform the conversion for you.
About Positional Notation
In positional notation, a number in base b can be understood as a linear combination of powers of b.
The number 42, in base 10, means:

I think you got the idea!

Yes. Those three numbers above are exactly the same. Congratulations!
*/