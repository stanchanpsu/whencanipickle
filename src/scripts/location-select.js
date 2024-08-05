import { START_HOUR, END_HOUR } from "./hours.js";

const $input = document.getElementById('cities');
const $cities = document.getElementById('citylist');
const WEATHER_GOV_BASE = 'https://api.weather.gov';

const lowTempThreshold = 60;
const highTempThreshold = 85;
const humidityThreshold = 55;
const windSpeedThreshold = 12;

/**
 * Creates a normalized location name.
 * 
 * @param {Object} entry - A location entry. 
 * @returns {String} - A normalized location name.
 */
function formatLabel(entry) {
    return `${entry.city}, ${entry.state}`;
}

/**
 * Determines a good time to play.
 * 
 * @param {String} startTime - ISO8601 Datetime string.
 * @returns {Boolean}
 */
function goodHours(startTime) {
    const startTimestamp = new Date(startTime);
    const hours = startTimestamp.getHours();
    return startTimestamp > new Date()
        && hours >= START_HOUR
        && hours <= END_HOUR;
}

/**
 * Determines a good temperature to play.
 * 
 * @param {Number} temp - Temperature.
 * @returns {Boolean}
 */
function goodTemperature(temp) {
    return temp >= lowTempThreshold
        && temp <= highTempThreshold;
}

/**
 * Determines if precipitation is adequate.
 * 
 * @param {String} shortForecast - Forecast description. 
 * @returns {Boolean}
 */
function goodPrecip(shortForecast) {
    const exclude = ['rain', 'shower'].map((word) => `(?!.*\\b${word}\\b)`).join('');
    const rgx = new RegExp(`^${exclude}.*$`, 'i');
    return rgx.test(shortForecast);
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
    return parseInt(windspeed.replace(/\D+/, ''), 10) < windSpeedThreshold;
}

/**
 * Determines which of the given forecasts are adequate using Array.reduce().
 * 
 * @param {Array<Object>} acc - Accumulation of good forecasts.
 * @param {Object} forecast - A forecast to check.
 * @returns {Array<Object>} - The final accumulation of good forecasts.
 */
function goodForecasts(acc, forecast) {
    const {
        temperature,
        startTime,
        shortForecast,
        relativeHumidity,
        windSpeed
    } = forecast;

    if (
        !goodHours(startTime)
        || !goodTemperature(temperature)
        || !goodHumidity(relativeHumidity)
        || !goodPrecip(shortForecast)
        || !goodWindspeed(windSpeed)
    ) return acc;
    return acc.concat(forecast);
}

// On load, fetch cities.json for input field, render as options.
fetch('/cities.json').then((res) => res.json()).then((cities) => {
    $cities.innerHTML = cities.map((entry) => {
        return `<option>${formatLabel(entry)}</option>`;
    }).join('');

    /**
     * Attempts to trigger a series of requests to fetch weather and map data.
     * 
     * This function sits inside of the earlier fetch results to hold the `cities` data.
     * 
     * @param {String} value - Value within the input field. 
     */
    function onChange() {
        const location = cities.find((entry) => formatLabel(entry) === $input.value);
        if (!location) return;
        // Replace the input value with city alone
        $input.value = location.city;
        // Event is read by <Map/> component.
        window.dispatchEvent(new CustomEvent('city', { detail: formatLabel(location) }));
        const url = new URL(`/points/${location.latitude},${location.longitude}`, WEATHER_GOV_BASE);
        fetch(url.toString())
            .then((res) => res.json())
            .then(({ properties }) => fetch(properties.forecastHourly))
            .then((res) => res.json())
            .then(({ properties }) => {
                const forecasts = properties.periods.reduce(goodForecasts, []);
                // Event is read by <Results/> and <Calendar/> components.
                window.dispatchEvent(new CustomEvent('forecasts', { detail: forecasts }));
            });
    }

    $input?.addEventListener('change', onChange);
    onChange();
});