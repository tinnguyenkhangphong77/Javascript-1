"use strict";
const neighbours = ["China", "Campuchia", "Laos"];
neighbours.push("Jay");
neighbours.pop();
if (neighbours.includes("Germany") === false) {
  console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf("China"));

neighbours[0] = "Thailand";
console.log(neighbours[0]);
