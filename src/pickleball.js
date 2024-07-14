function checkPickleballWeather() {
  // Central Park's lat/lng
  const latitude = 40.7829;
  const longitude = -73.9654;

  fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
    .then((response) => response.json())
    .then((data) => {
      return fetch(data.properties.forecastHourly);
    })
    .then((response) => response.json())
    .then((data) => {
      const forecasts = data.properties.periods;
      let goodTime = null;

      goodTime = findGoodPickleballTime(forecasts);

      const resultElement = document.getElementById("result");
      resultElement.classList.remove("loading");

      if (goodTime) {
        const date = new Date(goodTime.startTime);
        const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
        const now = new Date();
        const dayDifference = Math.floor((date - now) / (1000 * 60 * 60 * 24));

        let relativeDay;
        if (dayDifference === 0) {
          relativeDay = "Today";
        } else if (dayDifference === 1) {
          relativeDay = "Tomorrow";
        } else {
          relativeDay = dayDifference + " days from now";
        }

        let resultText = "🎾 Good news! You can play pickleball:\n";
        resultText += `📅 ${relativeDay} - ${weekday}, ${date.toLocaleDateString()} at ${date.toLocaleTimeString(
          [],
          {
            hour: "2-digit",
          }
        )}\n\n`;
        resultText += `🌡️ Temperature: ${goodTime.temperature}°F\n`;
        resultText += `💧 Humidity: ${goodTime.relativeHumidity.value}%\n`;
        resultText += `☁️ Conditions: ${goodTime.shortForecast}\n`;
        resultText += `💨 Wind: ${goodTime.windSpeed} ${goodTime.windDirection}`;
        resultElement.innerText = resultText;
      } else {
        resultElement.innerText =
          "😔 Darn! No good pickleball weather in the next week.  Check back later! 🥒";
      }
    })
    .catch((error) => {
      const resultElement = document.getElementById("result");
      resultElement.classList.remove("loading");
      resultElement.innerText = "";
      console.error("Error:", error);
    });
}

function findGoodPickleballTime(forecasts) {
  const highTemp = 60;
  const lowTemp = 85;
  const startHour = 8;
  const endHour = 22;
  const humidityThreshold = 55;
  const windSpeedThreshold = 14;

  for (let forecast of forecasts) {
    const temp = forecast.temperature;
    const startTime = new Date(forecast.startTime);
    const hours = startTime.getHours();
    const isRainy =
      forecast.shortForecast.toLowerCase().includes("rain") ||
      forecast.shortForecast.toLowerCase().includes("shower");
    const humidity = forecast.relativeHumidity.value;
    const windSpeed = parseInt(forecast.windSpeed.replace(/ mph/, ""));

    if (
      temp >= highTemp &&
      temp <= lowTemp &&
      hours >= startHour &&
      hours <= endHour &&
      humidity <= humidityThreshold &&
      windSpeed < windSpeedThreshold &&
      !isRainy
    ) {
      return forecast;
    }
  }
  return null;
}

checkPickleballWeather();
