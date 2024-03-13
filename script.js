function getWeather(){
    const apikey = '47c6a200841b1d4a6720b31e29dff310';
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter city name');
        return;
    }
    const currenturl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
}