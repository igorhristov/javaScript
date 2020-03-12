/*
Introduction
Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.

It is possible to return a correct value for this exercise by mutating the solution function argument. Although there are legitimate use cases for mutating function arguments, this is usually undesirable, and in the case of this exercise, clearly unexpected. For this reason, the test suite has a test that fails in case the argument has been modified after the function execution.
*/

const gigasecond = time => {
  const GIGASECOND = Math.pow(10, 9);
  // The getTime() method returns the number of milliseconds* since the Unix Epoch.
  let timeInNum = time.getTime() / 1000;
  // * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
   return new Date((timeInNum + GIGASECOND) * 1000);
};

console.log(gigasecond(new Date(Date.UTC(2015, 0, 24, 22, 0, 0)))); //2046-10-02T23:46:40Z

console.log(gigasecond(new Date(Date.UTC(2015, 0, 24, 23, 59, 59)))); //2046-10-03T01:46:39Z

console.log(gigasecond(new Date(Date.UTC(1959, 6, 19)))); // 1991-03-27T01:46:40Z