const apiKey = "21c550f93000cd19a3b2ef1e03e4fa0e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityInput = document.querySelector("#cityInput");
let searchBtn = document.querySelector("#searchBtn");
let hint = document.querySelector(".hint");
let details = document.querySelector(".details");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    hint.textContent = "Oops! City not found. Try again 🙂";
    details.style.display = "none";
    return;
  }

  let data = await response.json();

  document.querySelector("#cityName").textContent = data.name;
  document.querySelector("#temperature").textContent = Math.round(data.main.temp) + `°C`;
  document.querySelector("#humidity").textContent = data.main.humidity + `%`;
  document.querySelector("#wind").textContent = data.wind.speed + ` km/h`;

  details.style.display = "block";
  hint.textContent = "e.g., Delhi, Tokyo, New York";
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") checkWeather(city);
});
