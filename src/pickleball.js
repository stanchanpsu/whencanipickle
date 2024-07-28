let googleApiKey = "";

const startHour = 8;
const endHour = 22;

let debounceTimer;
let selectedLocation = null;

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

  getGoogleApiKey().then((apiKey) => {
    // Initialize with New York City
    input.value = "New York";
    selectedLocation = {
      name: "New York, New York",
      lat: 40.7128,
      lon: -74.006,
    };
    searchLocation(selectedLocation);

    // Create the calendar
    createCalendar();
  });
}

// location

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
    fetchWeather(
      parseFloat(selectedLocation.lat),
      parseFloat(selectedLocation.lon)
    ).then((forecasts) => {
      let goodForecasts = findGoodPickleballForecasts(forecasts);
      showNextGoodTime(goodForecasts);
      updateCalendar(goodForecasts);
    });
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

// weather

function fetchWeather(latitude, longitude) {
  return fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
    .then((response) => response.json())
    .then((data) => {
      return fetch(data.properties.forecastHourly);
    })
    .then((response) => response.json())
    .then((data) => {
      return data.properties.periods;
    });
}

function showNextGoodTime(goodTimes) {
  const resultElement = document.getElementById("result");
  resultElement.classList.remove("loading");

  if (!goodTimes.length == 0) {
    let goodTime = goodTimes[0];
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
}

function findGoodPickleballForecasts(forecasts) {
  const highTemp = 60;
  const lowTemp = 85;
  const humidityThreshold = 55;
  const windSpeedThreshold = 12;

  let goodForecasts = [];

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
      goodForecasts.push(forecast);
    }
  }
  return goodForecasts;
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

// Calendar

function createCalendar() {
  const calendar = document.getElementById("calendar");
  const tbody = calendar.querySelector("tbody");
  const today = new Date();

  // Set day headers
  for (let i = 0; i < 3; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);
    document.getElementById(`day${i}`).textContent = day.toLocaleDateString(
      "en-US",
      { weekday: "short", month: "short", day: "numeric" }
    );
  }

  // Create time slots
  for (let hour = startHour; hour <= endHour; hour++) {
    const row = document.createElement("tr");
    const timeCell = document.createElement("td");
    timeCell.className = "time-cell";
    timeCell.textContent = `${hour}:00`;
    row.appendChild(timeCell);

    for (let i = 0; i < 3; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);
      const cell = document.createElement("td");
      cell.id = eventCellId(day, hour);
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }
}

function updateCalendar(goodForecasts) {
  clearCalendar();
  for (const time of goodForecasts) {
    let day = new Date(time.startTime);
    let text = `${getWeatherEmoji(time.shortForecast)} ${time.temperature}`;
    addEvent(day, day.getHours(), text);
  }
}

function clearCalendar() {
  const eventCells = document.getElementsByClassName("event-cell");

  // Convert the HTMLCollection to an array and iterate
  Array.from(eventCells).forEach((cell) => {
    cell.className = ""; // Remove the 'event-cell' class
    cell.textContent = ""; // Clear the cell's text content
  });
}

function eventCellId(day, hour) {
  return `${day.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
  })}-${hour}`;
}

function addEvent(day, hour, eventText) {
  const cell = document.getElementById(eventCellId(day, hour));
  if (cell == null) {
    return;
  }
  cell.className = "event-cell";
  cell.textContent = eventText;
}

function toggleCalendar() {
  const container = document.getElementById("calendarContainer");
  container.classList.toggle("expanded");
}

function getGoogleApiKey() {
  const netlifyFunctionPath = "/.netlify/functions/googleapikey";
  return fetch(netlifyFunctionPath)
    .then((response) => response.json())
    .then((data) => {
      googleApiKey = data.message;
    })
    .catch((error) => {
      console.error("Error fetching Google API key:", error);
    });
}

// init
window.addEventListener
  ? window.addEventListener("load", initPage, false)
  : window.attachEvent && window.attachEvent("onload", initPage);
