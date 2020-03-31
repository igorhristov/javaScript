class Series {
    constructor(str) {
        this.str = str;
    }

    get digits() {
        return this.str.split('').map(Number);
    }

    slices(size) {
        if (size > this.digits.length) {
            throw new Error('Slice size is too big.');
        }
        const slicedArr = [];

        for (let i = 0; i <= this.digits.length - size; i++) {
            slicedArr.push(this.digits.slice(i, i + size));
        }

        return slicedArr;
    }
}

const a = new Series('01234');
console.log(a.digits); // [0,1,2,3,4]
console.log(a.slices(1)); // [[0], [1], [2], [3], [4]]

const b = new Series('98273463').slices(2);
console.log(b); // [[9, 8], [8, 2], [2, 7], [7, 3], [3, 4], [4, 6], [6, 3]]
const c = new Series('81228');
console.log(c.slices(5)); //[[8, 1, 2, 2, 8]]

const slBy4 = new Series('91274').slices(4);
console.log(slBy4);

const slBy3 = new Series('01234').slices(3);
console.log(slBy3); // [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
const err = new Series('12345').slices(8);
console.log(err);
