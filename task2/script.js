const apiKey = 'c9636b25d86d69d50df67b5a7bccff2d';

function getWeather() {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
                document.getElementById('weather-info').style.display = 'block';
            } else {
                alert('City not found. Please check the city name and try again.');
            }
        })
        .catch(error => {
            alert(error.message || 'Error fetching weather data');
        });
}
