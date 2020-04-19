let time = 0;
const myTime = setInterval(function () {
    time += 2;

    if (time > 10) {
        clearInterval(myTime);
    } else {
     return   `Passed ${time} seconds`;
    }
}, 2000);
console.log(__dirname);
console.log(__filename);
console.log(URL);

module.exports = myTime;
