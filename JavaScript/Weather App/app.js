
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8978384d7acc427c923134239251505'; // 👈 Replace this with your actual API key

    const currentUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    try {
        // Get current weather
        const currentRes = await fetch(currentUrl);
        const currentData = await currentRes.json();

        // Get forecast
        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();

        // Display current weather
        const weatherInfo = `
          <h3>${currentData.location.name}, ${currentData.location.country}</h3>
          <img src="https:${currentData.current.condition.icon}" />
          <p><strong>${currentData.current.temp_c}°C</strong></p>
          <p>${currentData.current.condition.text}</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;

        // Display local time
        document.getElementById('localTime').innerText = `Local time: ${currentData.location.localtime}`;

        // Display forecast
        let forecastHTML = '';
        forecastData.forecast.forecastday.forEach(day => {
            forecastHTML += `
            <div class="forecast-day">
              <p><strong>${day.date}</strong></p>
              <img src="https:${day.day.condition.icon}" />
              <p>${day.day.avgtemp_c}°C</p>
              <p>${day.day.condition.text}</p>
            </div>
          `;
        });
        document.getElementById('forecast').innerHTML = forecastHTML;

    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = '<p>Error: Invalid city or API issue</p>';
        document.getElementById('forecast').innerHTML = '';
        document.getElementById('localTime').innerHTML = '';
    }
}
