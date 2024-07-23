// Chuyển đổi kiểu và ép kiểu
// lab3.1
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
// Toán tử bằng: == với ===
// lab3.2
const numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
// khi thay == trở thành === thì nhập số vào numNeighbours đều không phải number mà string nên kết quả luôn trả về là "No borders"
// vì === không ép kiểu còn == thì ép kiểu từ string thành number
// chúng ta nên sử dụng === khi đã có câu lệnh Number chuyển prompt từ string sang Number
// chùn ta nên sử dụng ép kiểu == khi chưa có câu lệnh number chuyển prompt từ string sang Number
// lab3.2
// lab3.3
const country = prompt("The country you want to live in?");
const languageCountry = prompt("What language do you use in your country?");
const population = Number(prompt("What is the population of your country?"));
const islandNation = prompt("Is your country an island?");
if (languageCountry === "English" && population < 50 && islandNation === "No") {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
// lab3.3
// lab3.4
// Câu lệnh switch
/*const language = "Hindi";
switch (language) {
  case "Chinese or Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}*/
// lab3.4
// lab3.5
// Toán tử điều kiện (ba ngôi)
/*const populationPortugal = 10;
populationPortugal > 33
  ? console.log("Portugal's population is above average")
  : console.log("Portugal's population is below average");*/
// lab3.5
