//
/*
Introduction
Manage a game player's High Score list.

Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
*/
//

class HighScores {
    constructor(arr) {
        this.arr = arr;
    }

    get scores() {
        return this.arr;
    }

    get latest() {
        return this.arr[this.arr.length - 1];
    }

    get personalBest() {
        return Math.max.apply(null, this.arr);
    }

    get personalTopThree() {
        const myArr = this.arr.slice();

        for (let i = 0; i < myArr.length; i++) {
            let min = i; // storing the index of minimum element

            for (let k = i + 1; k < myArr.length; k++) {
                if (myArr[min] < myArr[k]) {
                    min = k; // update the index of minimum element
                }
            }

            // swap.
            if (i !== min) {
                let temp = myArr[i];
                myArr[i] = myArr[min];
                myArr[min] = temp;
            }
        }

        return myArr.slice(0, 3);
    }
}
const input = [30, 50, 20, 70];
const inputClass = new HighScores(input).scores;
console.log(inputClass); // [30, 50, 20, 70]

const input1 = [40, 100, 70];
const inputClass1 = new HighScores(input1).personalBest;
console.log(inputClass1); // 100

const input2 = [100, 0, 90, 30];
const inputClass2 = new HighScores(input2).latest;
console.log(inputClass2); // 30

const input3 = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
const inputClass3 = new HighScores(input3).personalTopThree;
console.log(inputClass3); // [100, 90, 70]

const input4 = [20, 10, 30];
const inputClass4 = new HighScores(input4).personalTopThree;
console.log(inputClass4); // [30, 20, 10]

const input5 = [40, 20, 40, 30];
const inputClass5 = new HighScores(input5).personalTopThree;
console.log(inputClass5); // [40, 40, 30]

const input6 = [30, 70];
const inputClass6 = new HighScores(input6).personalTopThree;
console.log(inputClass6); // ([70, 30]

const input7 = [40];
const inputClass7 = new HighScores(input7).personalTopThree;
console.log(inputClass7); // ([40]
