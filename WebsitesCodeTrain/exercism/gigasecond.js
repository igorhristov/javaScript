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

  const gigasecond = (date) => {
    // conversion of the initial date in milliseconds with getTime()
    // const initialDate = date.getTime();
    // sum of the total of milliseconds of the initial date + 1 000 000 000 000 milliseconds (= 1 giga second) within the Date constructor which give the right format to the result
    return new Date (now + Math.pow(10, 12));
  };
  var now = new Date().getTime()
  console.log(gigasecond(now));
