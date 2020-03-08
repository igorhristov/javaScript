/*Introduction
Given an age in seconds, calculate how old someone would be on:
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.
*/
const age = (planet, seconds) => {
  // console.log(secToYear);
  let secToYear = (seconds / 60 / 60 / 24 / 365.25);

  const planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  let spaceAge = planets[planet] * secToYear / ( planets[planet] * planets[planet]);
  return Number(spaceAge.toFixed(2));
};
console.log(age('earth', 1000000000)); // 31.69
console.log(age('mars', 2129871239)); // 35.88
console.log(age('mercury', 2134835688)); // 280.88
console.log(age('venus', 189839836)); // 9.78
console.log(age('jupiter', 901876382)); // 2.41
console.log(age('saturn', 1210123456)); // 1.15
console.log(age('uranus', 2000000000)); // 0.46
console.log(age('neptune', 1821023456)); // 0.35

