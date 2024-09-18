
let HijriHolder = document.getElementById("HijriHolder");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let Isha = document.getElementById("Isha");
let Maghrib = document.getElementById("Maghrib");
let Asr = document.getElementById("Asr");
let Dhuhr = document.getElementById("Dhuhr");
let Sunrise = document.getElementById("Sunrise");
let Fajr = document.getElementById("Fajr");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let humid = document.getElementById("humid");
let lon = document.getElementById("lon");
let lat = document.getElementById("lat");


let geoAPI = `https://api.openweathermap.org/data/2.5/weather?q=riyadh&appid=17ff28b56ae2f24feab75367990192ce`;
let islamicAPI = `https://api.aladhan.com/v1/hijriCalendarByCity/1445/11?city=riyadh&country=Saudi%20Arabia&method=2`;
function changeCity() {
  let cityFinder = document.getElementById("cityFinder").value;
  geoAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityFinder}&appid=17ff28b56ae2f24feab75367990192ce`;
  islamicAPI = `https://api.aladhan.com/v1/hijriCalendarByCity/1445/11?city=${cityFinder}&country=Saudi%20Arabia&method=2`;
  console.log(cityFinder);
  getTimings()
  fetchWeatherAPI();
  getHijriDate()
  getGregorianDate()
  getDayName()
  getTimings()
  fetchWeatherAPI()
}

getDayName();
getTimings();
getHijriDate();
fetchWeatherAPI();

async function getHijriDate() {
  const response = await fetch(islamicAPI);
  const data = await response.json();
  item1.innerText = data.data[27].date.hijri.date;
  console.log(data);
}

async function getGregorianDate() {
  const response = await fetch(islamicAPI);
  const data = await response.json();
  item1.innerText = data.data[27].date.gregorian.date;
  console.log(data);
}

async function getDayName() {
  const response = await fetch(islamicAPI);
  const data = await response.json();
  item2.innerText = data.data[27].date.gregorian.weekday.en;
  console.log(data);
}

async function getTimings() {
  const response = await fetch(islamicAPI);

  const data = await response.json();
  Fajr.innerText = "Fajr: " + data.data[27].timings.Fajr;
  Dhuhr.innerText = "Dhuhr: " + data.data[27].timings.Dhuhr;
  Sunrise.innerText = "Sunrise: " + data.data[27].timings.Sunrise;
  Asr.innerText = "Asr: " + data.data[27].timings.Asr;
  Maghrib.innerText = "Maghrib: " + data.data[27].timings.Maghrib;
  Isha.innerText = "Isha: " + data.data[27].timings.Isha;

  console.log(data);
}

async function fetchWeatherAPI() {
  const response = await fetch(geoAPI);
  const data = await response.json();
  console.log(data);
  city.innerText = data.name;
  temp.innerText = data.main.temp;
  humid.innerText = data.main.humidity;
  lon.innerText = data.coord.lon;
  lat.innerText = data.coord.lat;
}