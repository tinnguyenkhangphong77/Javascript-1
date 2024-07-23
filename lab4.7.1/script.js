"use strict";
const calcAverage = (point1, point2, point3) => (point1 + point2 + point3) / 3;
console.log(calcAverage(10, 15, 30));
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
  } else {
    console.log(`There is no winning team`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 24, 27);
console.log(scoreDolphins2, scoreKoalas2);
checkWinner(scoreDolphins2, scoreKoalas2);
