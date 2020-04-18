/*
Introduction
Given a string representing a matrix of numbers, return the rows and columns of that matrix.

So given a string with embedded newlines like:

9 8 7
5 3 2
6 6 7
representing this matrix:

    1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7
your code should be able to spit out:

A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
A list of the columns, reading each column top-to-bottom while moving from left-to-right.
The rows for our example matrix:

9, 8, 7
5, 3, 2
6, 6, 7
And its columns:

9, 5, 6
8, 3, 6
7, 2, 7
*/

class Matrix {
    constructor(input) {
      this.input = input
    }

    get rows() {
      return this.input.split('\n').map(x => x.split(' ').map(Number))
    }

    get columns() {
        return Array.from(this.rows[0], (_, i) => this.rows.map(x => x[i]))
    }
}

const str = '1 2\n3 4';
const matStr = new Matrix(str).rows[1];
console.log(matStr); // [3,4]

const matStr4 = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3]; // [8, 7, 6]
console.log(matStr4);

const matStr5 = new Matrix('1 2 3\n4 5 6\n7 8 9').columns[2];
console.log(matStr5); //[3, 6, 9]


/*
import { Matrix } from './matrix';

describe('Matrix', () => {
  test('extract row from one number matrix', () => {
    expect(new Matrix('1').rows[0]).toEqual([1]);
  });

  test('can extract row', () => {
    expect(new Matrix('1 2\n3 4').rows[1]).toEqual([3, 4]);
  });

  test('extract row where numbers have different widths', () => {
    expect(new Matrix('1 2\n10 20').rows[1]).toEqual([10, 20]);
  });

  test('can extract row from non-square matrix with no corresponding column', () => {
    expect(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3]).toEqual([8, 7, 6]);
  });

  test('extract column from one number matrix', () => {
    expect(new Matrix('1').columns[0]).toEqual([1]);
  });

  test('can extract column', () => {
    expect(new Matrix('1 2 3\n4 5 6\n7 8 9').columns[2]).toEqual([3, 6, 9]);
  });

  test('can extract column from non-square matrix with no corresponding row', () => {
    expect(new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6').columns[3]).toEqual([4, 8, 6]);
  });

  test('can extract column from non-square matrix with more columns than rows', () => {
    expect(new Matrix('1 2 3\n4 5 6').columns[2]).toEqual([3, 6]);
  });

  test('extract column where numbers have different widths', () => {
    expect(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]).toEqual([1903, 3, 4]);
  });
});

*/
