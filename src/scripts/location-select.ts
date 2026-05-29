import SunCalc from "suncalc";

const $form = document.getElementById("form") as HTMLFormElement;
const $input = document.getElementById("input") as HTMLInputElement;
const $locations = document.getElementById("locations") as Element;
const ARROW_KEYS = ["ArrowUp", "ArrowDown"];
const WEATHER_GOV_BASE = "https://api.weather.gov";

const LOCATION_LOCALSTORAGE_KEY = "location";
const lowTempThreshold = 50;
const highTempThreshold = 85;
const humidityThreshold = 55;
const windSpeedThreshold = 12;

/**
 * Creates a normalized location name.
 *
 * @param {Object} location - A location entry.
 * @returns {String} - A normalized location name.
 */
function formatLabel(location) {
  return `${location.city}, ${location.state}`;
}

/**
 * Determines a good time to play.
 *
 * @param {String} startTime - ISO8601 Datetime string.
 * @returns {Boolean}
 */
function isFuture(startTime) {
  return new Date(startTime) >= new Date();
}

/**
 * Determines a good temperature to play.
 *
 * @param {Number} temp - Temperature.
 * @returns {Boolean}
 */
function goodTemperature(temp) {
  return temp >= lowTempThreshold && temp <= highTempThreshold;
}

/**
 * Determines if precipitation is adequate.
 *
 * @param {String} shortForecast - Forecast description.
 * @returns {Boolean}
 */
function goodPrecip(shortForecast) {
  const exclude = ["rain", "shower", "storm", "snow", "hail"];
  return !exclude.some((word) =>
    shortForecast.toLowerCase().includes(word.toLowerCase()),
  );
}

/**
 * Determines if the humidity is adequate.
 *
 * @param {Number} - The relativeHumidity value from the forecast.
 * @returns {Boolean}
 */
function goodHumidity(relativeHumidity) {
  return relativeHumidity.value <= humidityThreshold;
}

/**
 * Determines if the windspeed is adequate.
 *
 * @param {String} windspeed - The windspeed from the forecast.
 * @returns {Boolean}
 */
function goodWindspeed(windspeed) {
  return parseInt(windspeed.replace(/\D+/, ""), 10) < windSpeedThreshold;
}

/**
 * Evaluates a forecast and returns its quality and failure reasons.
 *
 * @param {Object} forecast - A forecast to check.
 * @param {Number} latitude - Location latitude.
 * @param {Number} longitude - Location longitude.
 * @returns {Object} - { isGood: boolean, failureReasons: string[], sunEvent: string|null }
 */
function evaluateForecast(forecast, latitude, longitude) {
  const {
    temperature,
    startTime,
    shortForecast,
    relativeHumidity,
    windSpeed,
  } = forecast;

  const failureReasons = [];
  const date = new Date(startTime);
  const sunTimes = SunCalc.getTimes(date, latitude, longitude);

  // Determine if hour contains sunrise or sunset
  const hourStart = new Date(date);
  hourStart.setMinutes(0, 0, 0);
  const hourEnd = new Date(hourStart);
  hourEnd.setHours(hourEnd.getHours() + 1);

  let sunEvent = null;
  if (sunTimes.sunrise >= hourStart && sunTimes.sunrise < hourEnd) {
    sunEvent = "sunrise";
  } else if (sunTimes.sunset >= hourStart && sunTimes.sunset < hourEnd) {
    sunEvent = "sunset";
  } else if (!(date > sunTimes.sunrise && date < sunTimes.sunset)) {
    failureReasons.push("nighttime");
  }

  if (!goodTemperature(temperature)) {
    failureReasons.push(
      temperature < lowTempThreshold ? "temperature-low" : "temperature-high",
    );
  }
  if (!goodHumidity(relativeHumidity)) failureReasons.push("humidity");
  if (!goodPrecip(shortForecast)) failureReasons.push("precipitation");
  if (!goodWindspeed(windSpeed)) failureReasons.push("wind");

  return {
    isGood: failureReasons.length === 0,
    failureReasons,
    sunEvent,
  };
}

/**
 * Determines which of the given forecasts are adequate using Array.reduce().
 *
 * @param {Number} latitude - Location latitude.
 * @param {Number} longitude - Location longitude.
 * @param {Array<Object>} acc - Accumulation of good forecasts.
 * @param {Object} forecast - A forecast to check.
 * @returns {Array<Object>} - The final accumulation of good forecasts.
 */
function goodForecasts(latitude, longitude, acc, forecast) {
  const {
    temperature,
    startTime,
    shortForecast,
    relativeHumidity,
    windSpeed,
  } = forecast;

  const date = new Date(startTime);
  const sunTimes = SunCalc.getTimes(date, latitude, longitude);
  const isDaytime = date > sunTimes.sunrise && date < sunTimes.sunset;

  if (
    !isDaytime ||
    !isFuture(startTime) ||
    !goodTemperature(temperature) ||
    !goodHumidity(relativeHumidity) ||
    !goodPrecip(shortForecast) ||
    !goodWindspeed(windSpeed)
  )
    return acc;
  return acc.concat(forecast);
}

/**
 * Moves the tabindex between buttons in the flyout using the up/down arrow keys.
 *
 * @param {KeyboardEvent} ev - Native DOM keyboard event
 * @returns {Element|undefined} The next element to focus
 */
function keyboardTraverse(ev) {
  if (!ARROW_KEYS.includes(ev.key)) return;
  ev.stopPropagation();
  const visible = [
    ...$locations.querySelectorAll('button:not([style*="none"])'),
  ];
  const current = visible.findIndex(($btn: HTMLElement) => $btn.tabIndex === 0);
  if (!~current) return updateTabIndex(visible.at(0));
  const direction = ARROW_KEYS.indexOf(ev.key) * 2 - 1;
  const next = (current + direction + visible.length) % visible.length;
  return updateTabIndex(visible.at(next));
}

/**
 * Updates the tabIndex of all buttons in the flyout.
 *
 * @param {Element} $current - The element meant to be newly tabbable
 * @returns {Element} - The element meant to be newly tabbable
 */
function updateTabIndex($current) {
  if (!$current) return;
  [...$locations.children].forEach(($btn: HTMLElement) => {
    $btn.tabIndex = $btn === $current ? 0 : -1;
  });
  $current.scrollIntoView({ block: "nearest" });
  return $current;
}

// Show or hide the flyout depending on if the input has a value.
$input.addEventListener("click", (ev) => {
  if (!(ev.target instanceof HTMLInputElement)) return;
  $input.setAttribute("aria-expanded", String(Boolean(ev.target.value)));
});

// Filter the list of options during input.
$input.addEventListener("input", (ev) => {
  if (!(ev.target instanceof HTMLInputElement)) return;
  // Update the size of the input to accommodate the value.
  $input.style.minWidth = `${ev.target.value.length}ch`;
  // Show the flyout of options.
  $input.setAttribute("aria-expanded", String(Boolean(ev.target.value)));
  // Show or hide the options based on the input value.
  const rgx = new RegExp(`${ev.target.value}`, "gmisu");
  const visible = [...$locations.children].filter(($btn: HTMLElement) => {
    if (!(ev.target instanceof HTMLInputElement)) return;
    const exclude =
      Boolean(ev.target.value) && !rgx.test($btn.textContent as string);
    $btn.style.display = exclude ? "none" : "block";
    return exclude;
  });
  // Ensure something is tabbable, otherwise set the first visible option as tabbable.
  if (!visible.some(($btn: HTMLElement) => $btn.tabIndex === 0))
    updateTabIndex(visible.at(0));
});

// If tabbed into the list, continues to move up/down with arrow keys.
$locations.addEventListener("keydown", (ev) => keyboardTraverse(ev)?.focus());

// If flyout is open and outside click, close flyout.
document.body.addEventListener("click", (ev) => {
  const isExpanded = $input.getAttribute("aria-expanded");
  const outsideForm = ![...ev.composedPath()].includes($form);
  if (isExpanded && outsideForm) $input.setAttribute("aria-expanded", "false");
});

// On load, fetch locations.json for input field, render as options.
fetch("/locations.json")
  .then((res) => res.json())
  .then((locations) => {
    $locations.innerHTML = locations
      .map((entry, index) => {
        return `<button 
            tabIndex="-1"
            type="button"
            value="${index}">
            ${formatLabel(entry)}
        </button>`;
      })
      .join("");

    /**
     * Triggers series of requests to fetch weather data.
     *
     * @param {Number} index - The index of the target in the locations array
     * @returns {void}
     */
    function onLocationSelect(index) {
      if (!locations?.[index]) return;
      const location = locations[index];
      localStorage.setItem(LOCATION_LOCALSTORAGE_KEY, index);

      // Replace the input value with city alone.
      $input.value = location.city;
      $input.style.minWidth = `${location.city.length}ch`;

      // Event is read by <Map/> component.
      window.dispatchEvent(
        new CustomEvent("city", { detail: formatLabel(location) }),
      );

      // Construct the URL for the forecast request.
      const url = new URL(
        `/points/${location.latitude},${location.longitude}`,
        WEATHER_GOV_BASE,
      );

      // Execute the fetch request.
      fetch(url.toString())
        .then((res) => res.json())
        .then(({ properties }) => fetch(properties.forecastHourly))
        .then((res) => res.json())
        .then(({ properties }) => {
          const goodForecastsArray = properties.periods.reduce(
            (acc, forecast) =>
              goodForecasts(location.latitude, location.longitude, acc, forecast),
            [],
          );
          const allForecasts = properties.periods
            .filter((forecast) => isFuture(forecast.startTime))
            .map((forecast) => ({
              ...forecast,
              ...evaluateForecast(forecast, location.latitude, location.longitude),
            }));
          // Event is read by <Results/> component.
          window.dispatchEvent(
            new CustomEvent("forecasts", { 
              detail: { forecasts: goodForecastsArray, timezone: location.timezone } 
            }),
          );
          // Event is read by <Calendar/> component.
          window.dispatchEvent(
            new CustomEvent("allForecasts", { 
              detail: { forecasts: allForecasts, timezone: location.timezone } 
            }),
          );
        });
    }

    /**
     * Triggers several functions when a location is selected.
     *
     * @param {Element} $btn - The element selected by the user
     */
    function userChosen(
      $btn = $locations.querySelector('button[tabIndex="0"]'),
    ) {
      if (!($btn instanceof HTMLButtonElement)) return;
      $input.setAttribute("aria-expanded", "false");
      updateTabIndex($btn);
      onLocationSelect(Number($btn.value));
    }

    // Listen for keyboard events in the input field.
    $input.addEventListener("keydown", (ev) => {
      if (["Enter"].includes(ev.key)) return userChosen();
      keyboardTraverse(ev);
    });

    // When an option in the dropdown is clicked, target the element.
    $locations.addEventListener("click", (ev) =>
      userChosen(ev.target as Element),
    );

    // Get loaded item from storage if it exists, otherwise default to first item.
    const storage = localStorage.getItem(LOCATION_LOCALSTORAGE_KEY);
    const idx = typeof storage === "string" ? parseInt(storage, 10) : 0;

    onLocationSelect(idx);
  });
