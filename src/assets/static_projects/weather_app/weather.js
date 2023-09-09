const apiKey = "18a5a00148eb2d046d003a5c07789056";
const endpoint = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const inputElement = document.querySelector(".city_name_input");
const weatherIcon = document.querySelector(".weather_icon");
const searchButton = document.querySelector(".search_button");
const loading = document.querySelector(".loading");

searchButton.addEventListener("click", checkWeather);

async function checkWeather() {
  const cityName = inputElement.value;

  loading.style.display = "block";

  await fetch(`${endpoint}&q=${cityName}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind_speed").innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main === " Mist") {
        weatherIcon.src = "./assets/mist.png";
      } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./assets/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./assets/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./assets/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./assets/drizzle.png";
      }

      loading.style.display = "none";
      document.querySelector(".weather").style.display = "block";
    });

  inputElement.value = "";
}
