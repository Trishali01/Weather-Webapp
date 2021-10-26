 // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 77b64df40b9ee8ec8c4f79347332982d

const weatherApi ={
    key:"77b64df40b9ee8ec8c4f79347332982d",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox =document.getElementById('input-box');

// Event listner on keypress

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
       console.log(searchInputBox.value);
       getWeatherReport(searchInputBox.value);
       document.querySelector('.weather-body').style.display = "Block"
   }

});



// get weather reports
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport); 

    // if(city== null){
    //     showAlert('Error','danger')
    // }

}

// function showAlert(message , className) {
  //   const errormsg = document.getElementById('errorMsg');
  
  //   errormsg.innerText=message;

  //   errormsg.className = `alert alert-${className}`;
  
  //   // vanish in 3 sec
  //   // setTimeout(() => document.querySelector('.alert').remove(),4000);

  // }


// show weather report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let wind = document.getElementById('wind');
    wind.innerHTML = `Wind speed: ${weather.wind.speed}`;

    let humidity = document.getElementById('humidity');
    humidity.innerHTML = `Humidity: ${weather.main.humidity}`;


    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if( weatherType.textContent =='Haze' ){
        document.body.style.backgroundImage ="url(Images/haze.jpg)";

    }else if(weatherType.textContent =='Snow') {
     document.body.style.backgroundImage ="url(Images/snow.jpg)";
 }else if(weatherType.textContent =='Rain') {
     document.body.style.backgroundImage ="url(Images/rain.jpg)";
 }else if(weatherType.textContent =='Clouds') {
     document.body.style.backgroundImage ="url(Images/cloud.jpg)";
 }else if(weatherType.textContent =='sunny') {
     document.body.style.backgroundImage ="url(Images/sunny.jpg)";
 }else if(weatherType.textContent =='Thunderstorm') {
     document.body.style.backgroundImage ="url(Images/thunderstorm.jpg)";
 }else if(weatherType.textContent =='Clear') {
     document.body.style.backgroundImage ="url(Images/clear.jpg)";

 }

}


// date manage
function dateManage(dateArg){

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date =dateArg.getDate()
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}) , ${year}`;

}