"use strict";
// lab5.1
// const myCountry = {
//   country: "Việt Nam",
//   capital: "Hà Nội",
//   language: "Vietnamese",
//   population: 97,
//   neighbours: ["Laos", "Campuchia", "China"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
//     );
//   },
//   checkIsland: function () {
//     console.log((this.isIsland = this.neighbours.length === 0 ? true : false));
//   },
// };
// console.log(myCountry.describe());

// //lab5.2
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population = myCountry.population + 2;
// myCountry["population"] = myCountry["population"] - 2;
// console.log(myCountry.population);

// //lab5.3

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// //lab5.4
for (let number = 1; number <= 50; number++) {
  console.log(`Voter number ${number} is currently voting`);
}
// lab5.5
// const populations = [1441, 97, 72, 52];
// const percentageOfWorld1 = function (percentage) {
//   return (percentage / 7900) * 100;
// };
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2[i] = percentageOfWorld1(populations[i]);
// }
// console.log(percentages2);
// cách này gọn hơn bài làm lab 4.5

//lab5.6

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];
// for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
//   for (let rep = 1; rep <= listOfNeighbours[i].length - 1; rep++) {
//     if (listOfNeighbours[i].length >= 2) {
//       console.log(listOfNeighbours[i][rep]);
//     }
//   }
// }

//lab5.7
// const populations = [1441, 97, 72, 52];
// const percentageOfWorld1 = function (percentage) {
//   return (percentage / 7900) * 100;
// };
// const percentages3 = [];
// let i = 0;
// while (i < populations.length) {
//   percentages3[i] = percentageOfWorld1(populations[i]);
//   i++;
// }
// console.log(percentages3);
// tôi thích vòng lặp for hơn vì nó dễ nhớ

//lab5.8.1

// const Mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMIMark = this.mass / [this.height * this.height];
//   },
// };
// const John = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMIJohn = this.mass / [this.height * this.height];
//   },
// };
// Mark.calcBMI();
// John.calcBMI();
// // console.log(Mark.BMIMark);
// // console.log(John.BMIJohn);
// if (Mark.BMIMark > John.BMIJohn) {
//   console.log(
//     `${Mark.fullname} BMI (${Mark.BMIMark}) is higher than ${John.fullname} (${John.BMIJohn})`
//   );
// } else {
//   console.log(`${John.fullname} BMI (${John.BMIJohn}) is higher than ${Mark.fullname} (${Mark.BMIMark})`);
// }

//lab5.8.2

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   tips[i] =
//     bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;
//   totals[i] = tips[i] + bills[i];
// }

// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(bills));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
