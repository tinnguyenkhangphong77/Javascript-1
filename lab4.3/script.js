"use strict";
const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
const Vietnam = describeCountry("VietNam", 96, "HaNoi");
console.log(Vietnam);
const Thailand = describeCountry("Thailand", 72, "Bangkok");
console.log(Thailand);
const Korea = describeCountry("Korea", 52, "Seoul");
console.log(Korea);

const percentageOfWorld3 = (country, population) => {
  const percentagePopulation = (population / 7900) * 100;
  const populationCountry = `${country} có ${population} triệu người, chiếm ${percentagePopulation}% dân số thế giới.`;
  return populationCountry;
};
const populationChina = percentageOfWorld3("China", 1441);
console.log(populationChina);

const populationVietNam = percentageOfWorld3("VietNam", 96);
console.log(populationVietNam);

const populationThailand = percentageOfWorld3("Thailand", 72);
console.log(populationThailand);
