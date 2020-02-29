/*
Introduction
Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.

It is possible to return a correct value for this exercise by mutating the solution function argument. Although there are legitimate use cases for mutating function arguments, this is usually undesirable, and in the case of this exercise, clearly unexpected. For this reason, the test suite has a test that fails in case the argument has been modified after the function execution.
*/
/*
const gigasecond = (date) => {
  let startTime = date.getTime()
  var endDate = new Date(startTime + 1000000000000);
	return endDate;
  console.log(today);
  
};
console.log(gigasecond());
*/

const gigasecond = time => {
  /*
  let thisDate = new Date(time).getTime()
  return new Date(thisDate + Math.pow(10, 12));
  */
 let thisDate = time.getTime();
   return new Date(thisDate + Math.pow(10, 12));
};

  console.log(gigasecond(new Date(Date.UTC(2015, 0, 24, 22, 0, 0))));
  console.log(new Date(Date.parse('2046-10-02T23:46:40Z')));
  
  /*
  console.log(gigasecond(today));
  console.log(gigasecond(today));
  console.log(gigasecond(today));
  console.log(gigasecond(today));
  console.log(gigasecond(today));
*/

const gs = gigasecond(new Date(Date.UTC(2015, 0, 24, 23, 59, 59)));

console.log(gs);

const expectedDate = new Date(Date.parse('2046-10-03T01:46:39Z'));
console.log(expectedDate);

let input = new Date(Date.UTC(2020, 0, 4, 20, 28, 30));
console.log(gigasecond(input));

console.log(new Date(Date.UTC(2020, 0, 4, 20, 28, 30)));
