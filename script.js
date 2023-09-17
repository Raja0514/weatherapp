const API_KEy = "ee9891e333786b4dc502a196ab3f7aa3";

const WEATHER_API_URl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");

const searchbutton = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {

  let response = await fetch(WEATHER_API_URl + city + `&appid=${API_KEy}`);

  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{
    data = await response.json();

    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
    if(data.weather[0].main == "Clouds") {
      weatherIcon.src ="images/clouds.png";
    } 
    else if(data.weather[0].main == "Clear") {
      weatherIcon.src ="images/clear.png";
    } 
    else if(data.weather[0].main == "Rain") {
      weatherIcon.src ="images/rain.png";
    } 
    else if(data.weather[0].main == "Drizzle") {
      weatherIcon.src ="images/drizzle.png";
    } 
    else if(data.weather[0].main == "Mist") {
      weatherIcon.src ="images/mist.png";
    } 
  
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
   
  }
  

  }

 
searchbutton.addEventListener("click", () => {
  checkweather(searchbox.value);
});
