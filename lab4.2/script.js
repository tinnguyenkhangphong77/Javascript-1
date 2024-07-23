"use strict";
function percentageOfWorld1(country, population) {
  const percentagePopulation = (population / 7900) * 100;
  const populationCountry = `${country} có ${population} triệu người, chiếm ${percentagePopulation}% dân số thế giới.`;
  return populationCountry;
}
const populationChina = percentageOfWorld1("China", 1441);
console.log(populationChina);

const populationVietNam = percentageOfWorld1("VietNam", 96);
console.log(populationVietNam);

const populationThailand = percentageOfWorld1("Thailand", 72);
console.log(populationThailand);

const percentageOfWorld2 = function (country2, population2) {
  const percentagePopulation2 = (population2 / 7900) * 100;
  const populationCountry2 = `${country2} có ${population2} triệu người, chiếm ${percentagePopulation2}% dân số thế giới.`;
  return populationCountry2;
};
const populationChina2 = percentageOfWorld2("China", 1441);
console.log(populationChina2);

const populationVietNam2 = percentageOfWorld2("VietNam", 96);
console.log(populationVietNam2);

const populationThailand2 = percentageOfWorld2("Thailand", 72);
console.log(populationThailand2);
