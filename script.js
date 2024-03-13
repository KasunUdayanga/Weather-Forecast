function getWeather(){
    const apikey = '47c6a200841b1d4a6720b31e29dff310';
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter city name');
        return;
    }
    const currenturl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
    fetch(currenturl)
   .then(response => response.json())
   .then(data=>{
    displayWeather(data);
   })
   .catch(err =>{
    console.log(err);
    alert("Error fetching weather");
   });

   fetch(forecasturl)
   .then(response => response.json())
   .then(data=>{
    displayHourlyForecast(data.list);
   })
   .catch(err =>{
    console.log(err);
    alert("Error fetching Hourly Forecast weather");
   });

}

function displayWeather(data){
    const tempDivInfo= document.getElementById("temp-div");
    const weatherInfoDiv= document.getElementById("weather-Info");
    const weatherIcon= document.getElementById("weather-icon");
    const hourlyForecastDiv= document.getElementById("hourly-forecast"); 

    weatherInfoDiv.innerHTML="";
    hourlyForecastDiv.innerHTML="";
    tempDivInfo.innerHTML="";
}
function displayWeather(data){
    if(data.cod ==='404'){
        weatherInfoDiv.innnerHTML=`<p>${data.message}</p>`;
    }else {
        const cityname = data.name;
        const temp=Math.round(data.main.temp -273.15);
        const description=data.weather[0].description;
        const icon=data.weather[0].icon;
        const icon_url=`http://openweathermap.org/img/wn/${icon}@2x.png`;
        const tempHTML=`<p>${temp}°C</p>`;
        const weatherHtml=`<p>${cityname}</p>
        <p>${description}</p>`;
        tempDivInfo.innerHTML=tempHTML;
        weatherInfoDiv.innerHTML=weatherHtml;
        weatherIcon.src=icon_url;
        weatherIcon.alt=description;
        showImage();
    }
}
function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv=document.getElementById('hourlyForecast');
    const next24Hours=hourlyData.slice(0.8);
    next24Hours.forEach(item=>{
        const dateTime=new Date(item.dt*1000);
        const hour=dateTime.getHours();
        const temperature=Math.round(item.main.temp - 2373.15);
        const iconcode=item.weather[0].icon;
        const icon_url=`http://openweathermap.org/img/wn/${iconcode}@2x.png`;
        const hourlyItemHtml=`<div class="hourly-item">
        <span>${hour}:00</span>
        <img src="${icon_url}" alt="Hourly Weather Icon">
        <span>${temperature}°C</span></div>`;
        hourlyForecastDiv.innerHTML+=hourlyItemHtml;
    });
} 
function showImage(){
    const weatherIcon=document.getElementById('weather-icon');
    weatherIcon.style.display="block";
    }