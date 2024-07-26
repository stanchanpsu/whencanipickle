let debounceTimer;
let selectedLocation = null;
const googleApiKey = "";

function initPage() {
  const input = document.getElementById("locationInput");
  const dropdown = document.getElementById("locationDropdown");

  input.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (this.value.length > 2) {
        fetchLocationSuggestions(this.value);
      } else {
        dropdown.innerHTML = "";
        dropdown.style.display = "none";
      }
    }, 300);
  });

  input.addEventListener("focus", function () {
    if (this.value.length > 2) {
      dropdown.style.display = "block";
    }
  });

  document.addEventListener("click", function (e) {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // Initialize with New York City
  input.value = "New York";
  selectedLocation = { name: "New York, New York", lat: 40.7128, lon: -74.006 };
  searchLocation(selectedLocation);

  updateMap(selectedLocation.name);

  // Create the calendar
  createCalendar();

  // Example usage: Add an event block
  addEventBlock(0, 10, 12, "Meeting");
  addEventBlock(1, 14, 16, "Presentation");
  addEventBlock(2, 9, 11, "Workshop");
}

function fetchLocationSuggestions(query) {
  const dropdown = document.getElementById("locationDropdown");
  dropdown.innerHTML = "";

  // Fuzzy search through citiesData
  const matches = fuzzySearch(query, citiesData);

  if (matches.length > 0) {
    matches.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result.city + ", " + result.state;
      li.addEventListener("click", function () {
        document.getElementById("locationInput").value = result.city;
        dropdown.style.display = "none";
        selectedLocation = {
          name: result.city + ", " + result.state,
          lat: result.latitude,
          lon: result.longitude,
        };
        searchLocation();
      });
      dropdown.appendChild(li);
    });
    dropdown.style.display = "block";
  } else {
    const li = document.createElement("li");
    li.textContent = "No matches found";
    li.style.fontStyle = "italic";
    dropdown.appendChild(li);
    dropdown.style.display = "block";
  }
}

function fuzzySearch(query, data) {
  const matches = data.filter((city) => {
    if (city.city) {
      return city.city.toLowerCase().includes(query.toLowerCase());
    } else {
      console.warn("City object missing 'name' property:", city);
      return false;
    }
  });
  return matches;
}

function searchLocation() {
  if (selectedLocation) {
    checkPickleballWeather(
      parseFloat(selectedLocation.lat),
      parseFloat(selectedLocation.lon)
    );
    updateMap(selectedLocation.name);
  } else {
    console.error("No location selected");
  }
}

function sentenceCase(str) {
  return str
    .toLowerCase()
    .replace(/\.\s*([a-z])|^[a-z]/gm, (s) => s.toUpperCase());
}

function timeUntil(date) {
  const formatter = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
  });

  const DIVISIONS = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
  ];

  let duration = (date - new Date()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

function checkPickleballWeather(latitude, longitude) {
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
        let resultText = "🎾 Good news! You can play pickleball:\n";
        resultText += `📅 ${sentenceCase(
          timeUntil(date)
        )} - ${weekday}, ${date.toLocaleDateString()} at ${date.toLocaleTimeString(
          [],
          {
            hour: "numeric",
          }
        )}\n\n`;
        resultText += `🌡️ Temperature: ${goodTime.temperature}°F\n`;
        resultText += `💧 Humidity: ${goodTime.relativeHumidity.value}%\n`;
        resultText += `💨 Wind: ${goodTime.windSpeed} ${goodTime.windDirection}\n`;
        resultText += `${getWeatherEmoji(goodTime.shortForecast)} Conditions: ${
          goodTime.shortForecast
        }\n`;
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
  const windSpeedThreshold = 12;

  for (let forecast of forecasts) {
    const temp = forecast.temperature;
    const startTime = new Date(forecast.startTime);
    // Don't consider foracasts in the past.
    if (startTime < new Date()) {
      continue;
    }
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

function getWeatherEmoji(description) {
  description = description.toLowerCase();
  switch (true) {
    case description.includes("clear") || description.includes("sunny"):
      return "☀️";
    case description.includes("cloud"):
      return "☁️";
    case description.includes("rain") || description.includes("drizzle"):
      return "🌧️";
    case description.includes("thunderstorm"):
      return "⛈️";
    case description.includes("snow"):
      return "❄️";
    case description.includes("mist") || description.includes("fog"):
      return "🌫️";
    case description.includes("wind"):
      return "💨";
    default:
      return "☁️"; // Default emoji for unknown weather conditions
  }
}

function updateMap(locationName) {
  let iframe = document.getElementById("map");
  if (iframe) {
    let src = `
    https://www.google.com/maps/embed/v1/search?q=
    pickleball%20courts%20
    ${locationName}
    &key=${googleApiKey}
    `;
    iframe.src = src;
  } else {
    console.error("Map not found");
  }
}

window.addEventListener
  ? window.addEventListener("load", initPage, false)
  : window.attachEvent && window.attachEvent("onload", initPage);

function createCalendar() {
  const calendar = document.getElementById("calendar");
  const today = new Date();

  for (let i = 0; i < 3; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);

    const dayColumn = document.createElement("div");
    dayColumn.className = "day-column";

    const dayHeader = document.createElement("div");
    dayHeader.className = "day-header";
    dayHeader.textContent = day.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    dayColumn.appendChild(dayHeader);

    for (let hour = 7; hour < 24; hour++) {
      const timeSlot = document.createElement("div");
      timeSlot.className = "time-slot";
      timeSlot.id = `day-${i}-hour-${hour}`;

      const timeLabel = document.createElement("div");
      timeLabel.className = "time-label";
      timeLabel.textContent = `${hour}:00`;
      timeSlot.appendChild(timeLabel);

      dayColumn.appendChild(timeSlot);
    }

    calendar.appendChild(dayColumn);
  }
}

function addEventBlock(day, startHour, endHour, eventText) {
  const startSlot = document.getElementById(`day-${day}-hour-${startHour}`);
  const eventBlock = document.createElement("div");
  eventBlock.className = "event-block";
  eventBlock.style.height = `${(endHour - startHour) * 60 - 10}px`;
  eventBlock.textContent = eventText;
  startSlot.appendChild(eventBlock);
}
