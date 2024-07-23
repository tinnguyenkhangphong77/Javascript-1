let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;
let BMIMark2 = massMark2 / (heightMark2 * heightMark2);
let BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
let markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(markHigherBMI2);
if (BMIMark > BMIJohn) {
  console.log("Mark's" + " BMI" + " is" + " higher" + " than" + " John's!");
} else {
  console.log("John's" + " BMI" + " is" + " higher" + " than" + " Mark's!");
}
if (BMIMark2 > BMIJohn2) {
  console.log("Mark's" + " BMI" + " is" + " higher" + " than" + " John's!");
} else {
  console.log("John's" + " BMI" + " is" + " higher" + " than" + " Mark's!");
}
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn}is higher than Mark's ${BMIMark}!`);
}
if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI ${BMIMark2} is higher than John's ${BMIJohn2}!`);
} else {
  console.log(`John's BMI ${BMIJohn2}is higher than Mark's ${BMIMark2}!`);
}
