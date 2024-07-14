let debounceTimer;
let selectedLocation = null;

function initializeLocationInput() {
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

  // Load cities.json
  fetch("cities.json")
    .then((response) => response.json())
    .then((data) => {
      citiesData = data; // Store the data in citiesData
    });

  // Initialize with New York City
  input.value = "New York City";
  selectedLocation = { name: "New York City", lat: 40.7128, lon: -74.006 };
  searchLocation(selectedLocation);
}

function fetchLocationSuggestions(query) {
  const dropdown = document.getElementById("locationDropdown");
  dropdown.innerHTML = ""; // Clear previous suggestions

  // Fuzzy search through citiesData
  const matches = fuzzySearch(query, citiesData);

  if (matches.length > 0) {
    matches.forEach((result) => {
      const li = document.createElement("li");
      // Use result.city instead of result.name
      li.textContent = result.city;
      li.addEventListener("click", function () {
        document.getElementById("locationInput").value = result.city; // Use result.city
        dropdown.style.display = "none";
        selectedLocation = {
          name: result.city, // Use result.city
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
    // Check if the 'name' property exists
    if (city.city) {
      return city.city.toLowerCase().includes(query.toLowerCase());
    } else {
      // Handle cases where 'name' is missing (e.g., log a warning)
      console.warn("City object missing 'name' property:", city);
      return false; // Exclude this city from the matches
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
  } else {
    console.error("No location selected");
    // Optionally, you can show an error message to the user
  }
}

function checkPickleballWeather(latitude, longitude) {
  // Central Park's lat/lon
  // const latitude = 40.7829;
  // const longitude = -73.9654;

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

window.onload = function () {
  initializeLocationInput();
};
