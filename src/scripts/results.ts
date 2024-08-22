import getWeatherEmoji from "./emoji.ts";
import { formatDistanceToNowStrict } from "date-fns";

const $results = document.getElementById("results");

/**
 * Formats a string to "Sentence case."
 *
 * @param {String} str - The string to format.
 * @returns {String} - The transformed string.
 */
function sentenceCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\.\s*([a-z])|^[a-z]/gm, (s) => s.toUpperCase());
}

/**
 * Creates a human readable datetime description.
 *
 * @param {String} startTime - ISO8601 Datetime format.
 * @returns {String} - Human readable datetime description.
 */
function formatTime(startTime: string): string {
  const date = new Date(startTime);
  const relativeTimeFuture = sentenceCase(
    formatDistanceToNowStrict(date, { addSuffix: true })
  );
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const localeDate = date.toLocaleDateString("en-US");
  const localeTime = date.toLocaleTimeString("en-US", { hour: "numeric" });
  return `${relativeTimeFuture} - ${weekday}, ${localeDate} at ${localeTime}`;
}

/**
 * Decorates the forecast description with an emoji.
 *
 * @param {String} shortForecast - Forecast description.
 * @returns {String} - A forecast description prefixed with an appropriate emoji.
 */
function getConditions(shortForecast: string): string {
  const emoji = getWeatherEmoji(shortForecast);
  return `${emoji} Conditions: ${shortForecast}`;
}

interface Forecast {
  startTime: string;
  temperature: number;
  relativeHumidity: {
    value: number;
  };
  windSpeed: number;
  windDirection: string;
  shortForecast: string;
}

interface ForecastEvent extends CustomEvent {
  detail: Forecast[];
}

window.addEventListener("forecasts", ({ detail: forecasts }: ForecastEvent) => {
  if (!$results) return;
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
