/**
 * Introduction

Write a function that returns the earned points in a single toss of a Darts game.

Darts is a game where players throw darts to a target.

In our particular instance of the game, the target rewards with 4 different amounts of points, depending on where the dart lands:

    If the dart lands outside the target, player earns no points (0 points).
    If the dart lands in the outer circle of the target, player earns 1 point.
    If the dart lands in the middle circle of the target, player earns 5 points.
    If the dart lands in the inner circle of the target, player earns 10 points.

The outer circle has a radius of 10 units (This is equivalent to the total radius for the entire target), the middle circle a radius of 5 units, and the inner circle a radius of 1. Of course, they are all centered to the same point (That is, the circles are concentric) defined by the coordinates (0, 0).

Write a function that given a point in the target (defined by its real cartesian coordinates x and y), returns the correct amount earned by a dart landing in that point.
 * 
 */
/*export default function solve(x, y) {
    if (Number.isNaN(Number(x)) || Number.isNaN(Number(y))) return null;

    const distanceToDart = Math.sqrt(x * x + y * y);
    if (distanceToDart > 10) return 0;
    if (distanceToDart > 5) return 1;
    if (distanceToDart > 1) return 5;
    return 10;
}*/
const score = (x, y) => {
    if (Number.isNaN(Number(x)) || Number.isNaN(Number(y))) {
        throw new Error('Please enter Numbers');
    }
    
    const dartDist = Math.sqrt(x ** 2 + y ** 2);
    if (dartDist > 10) {
        return 0;
    } else if (dartDist > 5) {
        return 1;
    } else if (dartDist > 1) {
        return 5;
    } else {
        return 10;
    }
};
console.log(score(-9, 9)); // 0
console.log(score(0, 10)); // 1
console.log(score(-5, 0)); // 5
console.log(score(0, -1)); // 10
console.log(score(-0.1, -0.1)); //10
console.log(score(0.7, 0.7)); //10
console.log(score(0.8, -0.8)); // 5
console.log(score(-3.5, 3.5)); // 5
console.log(score(-3.6, -3.6)); // 1
console.log(score(-7.0, 7.0)); // 1
console.log(score(7.1, -7.1)); // 0
console.log(score(0.5, -4)); // 5
console.log(score('a', -4)); // 5
