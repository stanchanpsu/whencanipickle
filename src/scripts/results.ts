import getWeatherEmoji from "./emoji.ts";
import { formatDistanceToNowStrict } from "date-fns";
import { formatTimeInTimezone, formatDateInTimezone, formatWeekdayInTimezone } from "./timezone.ts";

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
 * @param {String} timezone - IANA timezone identifier.
 * @returns {String} - Human readable datetime description.
 */
function formatTime(startTime: string, timezone: string): string {
  const date = new Date(startTime);
  const relativeTimeFuture = sentenceCase(
    formatDistanceToNowStrict(date, { addSuffix: true })
  );
  const weekday = formatWeekdayInTimezone(startTime, timezone);
  const localeDate = formatDateInTimezone(startTime, timezone);
  const localeTime = formatTimeInTimezone(startTime, timezone);
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
  detail: { forecasts: Forecast[]; timezone: string };
}

window.addEventListener("forecasts", ({ detail }: ForecastEvent) => {
  if (!$results) return;
  const { forecasts, timezone } = detail;
  $results.textContent = `😔 Darn! No good pickleball weather in the next week.  Check back later! 🥒`;
  if (forecasts.length) {
    const [forecast] = forecasts;
    $results.textContent = `🎾 Good news! You can play pickleball
        📅 ${formatTime(forecast.startTime, timezone)}

        🌡️ Temperature: ${forecast.temperature}°F
        💧 Humidity: ${forecast.relativeHumidity.value}%
        💨 Wind: ${forecast.windSpeed} ${forecast.windDirection}
        ${getConditions(forecast.shortForecast)}
        `;
  }
});

// Copy button
const shareButton = document.getElementById("shareResults");
if (shareButton) {
  shareButton.addEventListener("click", async () => {
    try {
      const resultsElem = document.getElementById("results");
      if (resultsElem && resultsElem.textContent != null) {
        const trimmedText = resultsElem.textContent
          .split("\n")
          .map((line) => line.trimStart())
          .join("\n");
        await navigator.clipboard.writeText(trimmedText);
        const textSpan = shareButton.querySelector(".text");
        if (textSpan) {
          const originalText = textSpan.textContent;
          textSpan.textContent = "Copied";
          setTimeout(() => {
            textSpan.textContent = originalText;
          }, 2000);
        }
      }
    } catch (error) {
      console.error("Copy failed:", error);
    }
  });
}
