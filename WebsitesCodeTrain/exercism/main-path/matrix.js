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
    constructor(str) {
        this.row = str
            // split the string with '\n'
            .split('\n')
            // list all elements
            .map((x) =>
                x.split(' ')
                // make every element number
                .map(Number)
            );
    }

    get rows() {
        return this.row;
    }

    get columns() {
        let columns = [];
        // list first element of row for numbers of columns
        for (let i = 0; i < this.row[0].length; i++) {
            let col = [];

            // push  elements in col array
            for (let k = 0; k < this.row.length; k++) {
                col.push(this.row[k][i]);
            }

            // push every column to form column
            columns.push(col);
        }

        return columns;
    }
}

console.log('Matrix');
console.log('extract row from one number matrix');
console.log(new Matrix('1').rows[0]); // [1]
console.log('can extract row');
console.log(new Matrix('1 2\n3 4').rows[1]); // [3, 4]
console.log('extract row where numbers have different widths');
console.log(new Matrix('1 2\n10 20').rows[1]); // [10, 20]
console.log('can extract row from non-square matrix with no corresponding column');
console.log(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3]); // [8, 7, 6]
console.log('extract column from one number matrix');
console.log(new Matrix('1').columns[0]); // [1]
console.log('can extract column');
console.log(new Matrix('1 2 3\n4 5 6\n7 8 9').columns[2]); // [3, 6, 9]
console.log('can extract column from non-square matrix with no corresponding row');
console.log(new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6').columns[3]); // [4, 8, 6]
console.log('can extract column from non-square matrix with more columns than rows');
console.log(new Matrix('1 2 3\n4 5 6').columns[2]); // [3, 6]
console.log('extract column where numbers have different widths');
console.log(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1]); // [1903, 3, 4]

/***
class Matrix1 {
    constructor(input) {
        this.input = input;
    }

    get rows() {
        return this.input.split('\n').map((x) => x.split(' ').map(Number));
    }

    get columns() {
        return Array.from(this.rows[0], (_, i) => this.rows.map((x) => x[i]));
    }
}
***/

/***
 class Matrix2 {
    constructor(matrix) {
        this.matrix = matrix;
        this.matrixArr = this.matrix .split('\n')
    }

    get rows() {
      return this.matrixArr.map(x=> x.split(' ').map(Number))
    }

    get columns() {
      return this.rows[0].map((col, i)=> this.rows.map(row=> row[i]))
    }
}
 ***/

/***
class Matrix3 {
  constructor(input) {
      console.log(typeof rows)
      this.matrix = input.split('\n')
      .map((stringRow) => {
              return stringRow.split(' ').map((stringNum) => {
                  return Number(stringNum);
              });
          });
      this.rows = this.matrix;
      this.addColumns();
//       console.log(this.columns[0])
//      console.log(this.rows[0])
  }

  addColumns() {
      let columns = [];
  //    console.log(this.matrix[0][0])
  //    console.log(this.matrix[0].length)
      for (let col = 0; col < this.matrix[0].length; col++) {
          let column = [];
          for (let row = 0; row < this.matrix.length; row++) {
              column.push(this.matrix[row][col]);
          }
          columns.push(column);
      }
      this.columns = columns;
  }
}
 ***/
