/* 
Introduction

Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.

The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.

The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.

Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares of the first ten natural numbers is 3025 - 385 = 2640.

You are not expected to discover an efficient solution to this yourself from first principles; research is allowed, indeed, encouraged. Finding the best algorithm for the problem is a key skill in software engineering.
*/

class Squares {
    constructor(num) {
        this.num = num;
    }

    get sumOfSquares() {
        let totalSumOfSquares = 0;
        for (let i = 1; i <= this.num; i++) {
            totalSumOfSquares += i ** 2;
        }
        return totalSumOfSquares;
    }

    get squareOfSum() {
        let totalSquareOfSum = 0;
        for (let i = 1; i <= this.num; i++) {
            totalSquareOfSum += i;
        }
        return totalSquareOfSum ** 2;
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}

const squares1 = new Squares(1);
const squares5 = new Squares(5);
const squares100 = new Squares(100);
console.log('Square the sum of the numbers up to the given number');
console.log('square of sum 1');
console.log(squares1.squareOfSum); // 1
console.log('square of sum 5');
console.log(squares5.squareOfSum); // 225
console.log('square of sum 100');
console.log(squares100.squareOfSum); // 25502500
console.log('Sum the squares of the numbers up to the given number');
console.log('sum of squares 1');
console.log(squares1.sumOfSquares); // 1
console.log('sum of squares 5');
console.log(squares5.sumOfSquares); // 55
console.log('sum of squares 100');
console.log(squares100.sumOfSquares); // 338350
console.log('Subtract sum of squares from square of sums');
console.log('difference of squares 1');
console.log(squares1.difference); // 0
console.log('difference of squares 5');
console.log(squares5.difference); // 170
console.log('difference of squares 100');
console.log(squares100.difference); // 25164150
