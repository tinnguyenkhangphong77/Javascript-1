"use strict";

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "5d549e9c705f65b6d40d3531d267a0f7";

let html = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  /* Your code: check list arrays */

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // lấy 4 trùường cơ bản đêể  xửử lý dâata
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

      console.log(data);
      console.log(data.name);
      console.log(data.sys.country);
      console.log(data.weather[0].main);

      console.log(icon);
      /* Your code: process element */
      renderData(data, icon);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city";
    });

  // console.log(data);

  msg.textContent = "";
  form.reset();
  input.focus();
});

// Hàm hiển thị các thông tin thời tiết các thành phố
function renderData(data, icon) {
  html += `
  <li class="city">
    <h1 class="city-name">${data.name} <sup>${data.sys.country}</sup></h1>
    <p class="city-temp">${Math.round(data.main.temp)}°C</p>
    <img class="city-icon" src="${icon}" />
    <figcaption>${data.weather[0].description}</figcaption>
  </li>
  
  `;
  list.innerHTML = html;
}
