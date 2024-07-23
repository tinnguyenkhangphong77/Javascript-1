"use strict";
function describeCountry(country, population, capitalCity) {
  const cribeCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return cribeCountry;
}
const Vietnam = describeCountry("VietNam", 96, "HaNoi");
console.log(Vietnam);
const Thailand = describeCountry("Thailand", 72, "Bangkok");
console.log(Thailand);
const Korea = describeCountry("Korea", 52, "Seoul");
console.log(Korea);
