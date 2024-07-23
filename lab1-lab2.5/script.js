// lab1
const counTry = "Việt Nam";
const continent = "Asia";
let population = 96;
console.log(counTry);
console.log(continent);
console.log(population);
// lan1
// lab2.1 2.2
const isIsland = false;
console.log(isIsland);
var language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof counTry);
console.log(typeof language);
var language = "Vietnamese";
// lab2.3
console.log(population / 2);
population = 97;
console.log(population / 2);
let Finland = 6;
console.log(population > Finland);
let averagePopulation = 33;
console.log(population < averagePopulation);
let description =
  counTry + " and its " + population + " million people speak " + language;
console.log(description);
// lab2.4
let descriptionNew = `${counTry} and its ${population} million people speak ${language}`;
console.log(descriptionNew);
// lab2.5
if (population > averagePopulation) {
  console.log(`${counTry} 's population is above average`);
} else {
  let populationLeft = 33 - population;
  console.log(
    `${counTry} 's population is ${populationLeft} million below average`
  );
}
