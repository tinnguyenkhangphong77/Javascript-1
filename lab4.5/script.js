"use strict";
const populations = [1441, 97, 72, 52];
if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}
const percentageOfWorld1 = function (percentage) {
  return (percentage / 7900) * 100;
};
const China = percentageOfWorld1(populations[0]);
const Vietnam = percentageOfWorld1(populations[1]);
const Thailand = percentageOfWorld1(populations[2]);
const Korea = percentageOfWorld1(populations[3]);
const percentages = [China, Vietnam, Thailand, Korea];
console.log(percentages[0]);
console.log(percentages[1]);
console.log(percentages[2]);
console.log(percentages[3]);
