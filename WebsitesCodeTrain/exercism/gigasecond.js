/*
Introduction
Given a moment, determine the moment that would be after a gigasecond has passed.

A gigasecond is 10^9 (1,000,000,000) seconds.

It is possible to return a correct value for this exercise by mutating the solution function argument. Although there are legitimate use cases for mutating function arguments, this is usually undesirable, and in the case of this exercise, clearly unexpected. For this reason, the test suite has a test that fails in case the argument has been modified after the function execution.
*/
/*
const gigasecond = (date) => {
  let today = date.getTime()
  var endDate = new Date(startTime + 1000000000000);
	return endDate;
  console.log(today);
  
};
console.log(gigasecond());
*/
const gigasecondToMillisecond = 10e11;

const gigasecond = date =>
  new Date(date.getTime() + gigasecondToMillisecond);

  console.log(gigasecond());
  