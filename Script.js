const apikey = "1891cf1fe7f56da6c16ea8ecc1f81be1";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchcity = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const image = document.querySelector(".Weather-icon");

async function checkWeather(city) {
  const responce = await fetch(apiurl + city + `&appid=${apikey}`);

  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await responce.json();
    const description = data.weather[0]
      ? data.weather[0].description
      : "No weather data available";
    console.log(data);
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".weather p").innerHTML = description;
    document.querySelector(".temp").innerHTML =
      Math.ceil(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      Math.ceil(data.wind.speed) + " KPH";

    if (data.weather[0].main == "Clouds") {
      image.src = "images/clouds.png";
    } else if (data.weather[0].main == "rain") {
      image.src = "images/rain.png";
    } else if (data.weather[0].main == "mist") {
      image.src = "images/mist.png";
    } else if (data.weather[0].main == "snow") {
      image.src = "images/snow.png";
    } else if (data.weather[0].main == "clear") {
      image.src = "images/clear.png";
    } else if (data.weather[0].main == "clear") {
      image.src = "images/clear.png";
    } else if (data.weather[0].main == "drizzle") {
      image.src = "images/drizzle.png";
    } else {
      image.src = "images/clear.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchcity.value);
});
