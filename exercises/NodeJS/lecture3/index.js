// const timer = require('./app')
// // console.log(timer);
// console.log(timer);

/*
// // timer()
let a = 1;
let b = 3;

[a,b] = [b, a]

console.log(a);
console.log(b);
*/
const totalNumber = (n) => {
    return Array(n)
        .fill(0)
        .map((_, ix) => {
            return ix * 4 + 5;
        });
};
console.log(totalNumber(5)); // 5,9,13,17,21
