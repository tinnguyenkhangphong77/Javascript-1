"use strict";
function percentagePopulation(population) {
  return (population / 7900) * 100;
}
function describePopulation(country, population) {
  const percentageOfWorld1 = percentagePopulation(population);
  return `${country} has ${population} million people, which is about ${percentageOfWorld1}% of the world.`;
}
console.log(describePopulation("China", 1441));
console.log(describePopulation("Việt Nam", 96));
console.log(describePopulation("Thailand", 72));
