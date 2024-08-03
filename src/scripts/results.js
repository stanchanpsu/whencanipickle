import getWeatherEmoji from "./emoji.js";

const $results = document.getElementById("results");

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

function formatTime(startTime) {
    const date = new Date(startTime);
    const timeDiff = sentenceCase(timeUntil(date));
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const localeDate = date.toLocaleDateString('en-US');
    const localeTime = date.toLocaleTimeString('en-US', { hour: "numeric" });
    return `${timeDiff} - ${weekday}, ${localeDate} at ${localeTime}`;
}

function getConditions(shortForecast) {
    const emoji = getWeatherEmoji(shortForecast)
    return `${emoji} Conditions: ${shortForecast}`;
}

window.addEventListener("forecasts", ({ detail: forecasts }) => {
    $results.textContent = `😔 Darn! No good pickleball weather in the next week.  Check back later! 🥒`;
    if (forecasts.length) {
        const [forecast] = forecasts;
        $results.textContent = `🎾 Good news! You can play pickleball
        📅 ${formatTime(forecast.startTime)}
        🌡️ Temperature: ${forecast.temperature}°F
        💧 Humidity: ${forecast.relativeHumidity.value}%
        💨 Wind: ${forecast.windSpeed} ${forecast.windDirection}
        ${getConditions(forecast.shortForecast)}
        `;
    }
});
