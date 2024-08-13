document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiKey = '1a65fc932b314bf95a85a9bc3bb756ef'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('weather-result').style.display = 'block';
            } else {
                alert('City not found. Please try again.');
                document.getElementById('weather-result').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching weather data.');
        });
});

