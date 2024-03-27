const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e9bb2efa27msh5483ce78ab83253p10a5acjsn7c264b0621e0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function getWeather(city = "Delhi") {
  let cityName = document.querySelector("#cityName");
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = new Date(response.sunrise * 1000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      sunset.innerHTML = new Date(response.sunset * 1000)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");;
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      // wind_degrees.innerHTML = response.wind_degrees;
      document.querySelectorAll(".wind_speed").innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
}

// Intial calls for weather
getWeather();

// For search weather
search.addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.querySelector("#input");
  getWeather(input.value);
});

//For commoon places of weather
function updateCity(city, suffix) {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(`.cloud_pct${suffix}`).innerHTML =
        response.cloud_pct;
      document.querySelector(`.feels_like${suffix}`).innerHTML =
        response.feels_like;
      document.querySelector(`.humidity${suffix}`).innerHTML =
        response.humidity;
      document.querySelector(`.max_temp${suffix}`).innerHTML =
        response.max_temp;
      document.querySelector(`.min_temp${suffix}`).innerHTML =
        response.min_temp;
      document.querySelector(`.sunrise${suffix}`).innerHTML = response.sunrise;
      document.querySelector(`.sunset${suffix}`).innerHTML = response.sunset;
      document.querySelector(`.temp${suffix}`).innerHTML = response.temp;
      document.querySelector(`.wind_degrees${suffix}`).innerHTML =
        response.wind_degrees;
      document.querySelector(`.wind_speed${suffix}`).innerHTML =
        response.wind_speed;
    })
    .catch((err) => console.error(err));
}

const cities = ["Motihari", "Meerut", "Kolkata", "London"];
cities.forEach((city, index) => {
  updateCity(city, String.fromCharCode(65 + index));
  console.log(city, String.fromCharCode(65 + index));
});

//For view the weather in to the dropdown
let dropdown = document.querySelectorAll(".dropdown-item");
dropdown.forEach((city) => {
  city.addEventListener("click", (event) => {
    getWeather(event.target.text);
  });
});

//In the given below code is use for test the web app in past;
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e9bb2efa27msh5483ce78ab83253p10a5acjsn7c264b0621e0",
//     "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
//   },
// };

// function getWeather(city="Delhi") {

//     let cityName = document.querySelector("#cityName");
//     cityName.innerHTML = city;
//     fetch(
//         "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
//         options
//     )
//         .then((response) => response.json())
//         .then((response) => {
//             console.log(response);
//             cloud_pct.innerHTML = response.cloud_pct;
//             feels_like.innerHTML = response.feels_like;
//             humidity.innerHTML = response.humidity;
//             humidity1.innerHTML = response.humidity;
//             max_temp.innerHTML = response.max_temp;
//             min_temp.innerHTML = response.min_temp;
//             sunrise.innerHTML = response.sunrise;
//             sunset.innerHTML = response.sunset;
//             temp.innerHTML = response.temp;
//              temp1.innerHTML = response.temp;
//             // wind_degrees.innerHTML = response.wind_degrees;
//              document.querySelectorAll(".wind_speed").innerHTML =
//                response.wind_speed;
//             wind_speed1.innerHTML = response.wind_speed;
//         })
//         .catch((err) => console.error(err));

// }
// getWeather();
// search.addEventListener("click", (event) => {
//     event.preventDefault();
//     let input = document.querySelector("#input");
//     getWeather(input.value);

// })

// fetch(
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Motihari",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     document.querySelector(".cloud_pct").innerHTML = response.cloud_pct;
//     document.querySelector(".feels_like").innerHTML = response.feels_like;
//     document.querySelector(".humidity").innerHTML = response.humidity;
//     // document.querySelector(".humidity1").innerHTML = response.humidity;
//     document.querySelector(".max_temp").innerHTML = response.max_temp;
//     document.querySelector(".min_temp").innerHTML = response.min_temp;
//     document.querySelector(".sunrise").innerHTML = response.sunrise;
//     document.querySelector(".sunset").innerHTML = response.sunset;
//     document.querySelector(".temp").innerHTML = response.temp;
//     //  document.querySelector(".temp1").innerHTML = response.temp;
//     document.querySelector(".wind_degrees").innerHTML = response.wind_degrees;
//   document.querySelector(".wind_speed").innerHTML = response.wind_speed;
//     // document.querySelector(".wind_speed1").innerHTML = response.wind_speed;
//   })
//   .catch((err) => console.error(err));

// //  document.querySelectorAll(".wind_speed").innerHTML = 4;

// fetch(
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Meerut",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     document.querySelector(".cloud_pctA").innerHTML = response.cloud_pct;
//     document.querySelector(".feels_likeA").innerHTML = response.feels_like;
//     document.querySelector(".humidityA").innerHTML = response.humidity;
//     // document.querySelector(".humidity1").innerHTML = response.humidity;
//     document.querySelector(".max_tempA").innerHTML = response.max_temp;
//     document.querySelector(".min_tempA").innerHTML = response.min_temp;
//     document.querySelector(".sunriseA").innerHTML = response.sunrise;
//     document.querySelector(".sunsetA").innerHTML = response.sunset;
//     document.querySelector(".tempA").innerHTML = response.temp;
//     //  document.querySelector(".temp1").innerHTML = response.temp;
//     document.querySelector(".wind_degreesA").innerHTML = response.wind_degrees;
//     document.querySelector(".wind_speedA").innerHTML = response.wind_speed;
//     // document.querySelector(".1wind_speed1").innerHTML = response.wind_speed;
//   })
//   .catch((err) => console.error(err));

// fetch(
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     document.querySelector(".cloud_pctB").innerHTML = response.cloud_pct;
//     document.querySelector(".feels_likeB").innerHTML = response.feels_like;
//     document.querySelector(".humidityB").innerHTML = response.humidity;
//     // document.querySelector(".humidity1").innerHTML = response.humidity;
//     document.querySelector(".max_tempB").innerHTML = response.max_temp;
//     document.querySelector(".min_tempB").innerHTML = response.min_temp;
//     document.querySelector(".sunriseB").innerHTML = response.sunrise;
//     document.querySelector(".sunsetB").innerHTML = response.sunset;
//     document.querySelector(".tempB").innerHTML = response.temp;
//     //  document.querySelector(".temp1").innerHTML = response.temp;
//     document.querySelector(".wind_degreesB").innerHTML = response.wind_degrees;
//     document.querySelector(".wind_speedB").innerHTML = response.wind_speed;
//     // document.querySelector(".wind_speed1").innerHTML = response.wind_speed;
//   })
//   .catch((err) => console.error(err));

//   fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bihar",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       document.querySelector(".cloud_pctC").innerHTML = response.cloud_pct;
//       document.querySelector(".feels_likeC").innerHTML = response.feels_like;
//       document.querySelector(".humidityC").innerHTML = response.humidity;
//       // document.querySelector(".humidity1").innerHTML = response.humidity;
//       document.querySelector(".max_tempC").innerHTML = response.max_temp;
//       document.querySelector(".min_tempC").innerHTML = response.min_temp;
//       document.querySelector(".sunriseC").innerHTML = response.sunrise;
//       document.querySelector(".sunsetC").innerHTML = response.sunset;
//       document.querySelector(".tempC").innerHTML = response.temp;
//       //  document.querySelector(".temp1").innerHTML = response.temp;
//       document.querySelector(".wind_degreesC").innerHTML =
//         response.wind_degrees;
//       document.querySelector(".wind_speedC").innerHTML = response.wind_speed;
//       // document.querySelector(".wind_speed1").innerHTML = response.wind_speed;
//     })
//     .catch((err) => console.error(err));

// const apiKey = "e9bb2efa27msh5483ce78ab83253p10a5acjsn7c264b0621e0";
// const apiHost = "weather-by-api-ninjas.p.rapidapi.com";
// const apiUrl = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": apiKey,
//     "X-RapidAPI-Host": apiHost,
//   },
// };

// function fetchWeather(city) {
//   return fetch(`${apiUrl}?city=${city}`, options)
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// }

// function updateWeatherData(city, suffix = "") {
//   fetchWeather(city)
//     .then((response) => {
//       console.log(`.cloud_pct${suffix}`);
//       document.querySelector(`.cloud_pct${suffix}`).innerHTML =
//         response.cloud_pct;
//       document.querySelector(`.feels_like${suffix}`).innerHTML =
//         response.feels_like;
//       document.querySelector(`.humidity${suffix}`).innerHTML =
//         response.humidity;
//       document.querySelector(`.max_temp${suffix}`).innerHTML =
//         response.max_temp;
//       document.querySelector(`.min_temp${suffix}`).innerHTML =
//         response.min_temp;
//       document.querySelector(`.sunrise${suffix}`).innerHTML = response.sunrise;
//       document.querySelector(`.sunset${suffix}`).innerHTML = response.sunset;
//       document.querySelector(`.temp${suffix}`).innerHTML = response.temp;
//       document.querySelector(`.wind_degrees${suffix}`).innerHTML =
//         response.wind_degrees;
//       document.querySelector(`.wind_speed${suffix}`).innerHTML =
//         response.wind_speed;
//     })
//     .catch((err) => console.error(err));
// }

// // function getWeather(city = "Delhi") {
// //   let cityName = document.querySelector("#cityName");
// //   cityName.innerHTML = city;
// //   updateWeatherData(city);
// // }

// // // Initial load
// // getWeather();

// // Event listener for search button
// // search.addEventListener("click", (event) => {
// //   event.preventDefault();
// //   let input = document.querySelector("#input");
// //   getWeather(input.value);
// // });

// // Fetch weather data for specific cities
// const cities = ["Motihari", "Meerut", "Kolkata", "Bihar"];
// cities.forEach((city, index) => {
//   fetchWeather(city)
//     .then((response) => {
//       console.log(response);
//       let man = updateWeatherData(city, String.fromCharCode(65 + index));
//       console.log(city, String.fromCharCode(65 + index));
//     })
//     .catch((err) => console.error(err));
// });
