import { START_HOUR, END_HOUR } from "./hours.js";

const $input = document.getElementById('cities');
const $cities = document.getElementById('citylist');
const WEATHER_GOV_BASE = 'https://api.weather.gov';


const lowTempThreshold = 60;
const highTempThreshold = 85;
const humidityThreshold = 55;
const windSpeedThreshold = 12;

function formatLabel(entry) {
    return `${entry.city}, ${entry.state}`;
}

fetch('/cities.json').then((res) => res.json()).then((cities) => {
    $cities.innerHTML = cities.map((entry) => {
        return `<option>${formatLabel(entry)}</option>`;
    }).join('');

    function onChange(value) {
        const city = cities.find((entry) => formatLabel(entry) === value);
        if (!city) return;
        window.dispatchEvent(new CustomEvent('city', { detail: formatLabel(city) }));
        const url = new URL(`/points/${city.latitude},${city.longitude}`, WEATHER_GOV_BASE);
        fetch(url.toString())
            .then((res) => res.json())
            .then(({ properties }) => fetch(properties.forecastHourly))
            .then((res) => res.json())
            .then(({ properties }) => {
                const forecasts = properties.periods.reduce(goodForecasts, []);
                window.dispatchEvent(new CustomEvent('forecasts', { detail: forecasts }));
            });
    }

    $input?.addEventListener('change', ({ target }) => onChange($input.value));
    onChange($input.value);
});

function goodHours(startTime) {
    const startTimestamp = new Date(startTime);
    const hours = startTimestamp.getHours();
    return startTimestamp > new Date()
        && hours >= START_HOUR
        && hours <= END_HOUR;
}

function goodTemperature(temp) {
    return temp >= lowTempThreshold
        && temp <= highTempThreshold;
}

function goodPrecip(shortForecast) {
    const exclude = ['rain', 'shower'].map((word) => `(?!.*\\b${word}\\b)`).join('');
    const rgx = new RegExp(`^${exclude}.*$`, 'i');
    return rgx.test(shortForecast);
}

function goodHumidity({ value }) {
    return value <= humidityThreshold;
}

function goodWindspeed(windspeed) {
    return parseInt(windspeed.replace(/\D+/, ''), 10) < windSpeedThreshold;
}

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

