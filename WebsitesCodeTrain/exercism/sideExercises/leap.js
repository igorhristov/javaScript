const isLeap = (year) => {
  return year % 400 === 0 && year % 4 === 0 ? true : year % 4 === 0 && year % 100 !== 0 ? true : false
};
console.log(isLeap(2015)); // false 
console.log(isLeap(1970)); // falase
console.log(isLeap(1996)); // true
console.log(isLeap(1960)); // true
console.log(isLeap(2100)); // false
console.log(isLeap(2100)); // false
console.log(isLeap(1900)); // false
console.log(isLeap(2000)); // true
console.log(isLeap(2400)); // true
console.log(isLeap(1800)); // false

/*
The tricky thing here is that a leap year in the Gregorian calendar occurs:

on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400

For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.
*/