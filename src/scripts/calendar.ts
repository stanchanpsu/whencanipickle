import getWeatherEmoji, { getFailureIndicator } from "./emoji";
import { START_HOUR, END_HOUR } from "./hours";
import { dateCellIdInTimezone, formatDateLabelInTimezone } from "./timezone";
import type { Forecast, AllForecastsEvent } from "./types";

const DAYS_SHOWN: number = 7;
const $details = document.getElementById("details");
const $summary = document.getElementById("summary");
const $thead = document.getElementById("thead");
const $tbody = document.getElementById("tbody");
const $timezoneNote = document.getElementById("timezone-note");

let currentTimezone: string = "America/New_York";

/**
 * Creates an array of dates, each incremented by one day.
 * Helps to setup the data that exists in any row.
 */
function incrementedDates(): Date[] {
  const today = new Date().getDate();
  return Array.from({ length: DAYS_SHOWN }, (_, i) => {
    const d = new Date();
    d.setDate(today + i);
    return d;
  });
}

/**
 * Uses a segment of the ISO8601 Date to identify a cell.
 *
 * @param {Date} date - Native Date Object.
 * @returns {String} - YYYY-MM-DDTHH.
 */
function dateCellId(date: Date): string {
  return dateCellIdInTimezone(date, currentTimezone);
}

/**
 * Generate the HTML for the table headers.
 *
 * @param {Array<Date>} dates - Array of dates from incrementedDates.
 * @returns {String} - The table header row to be written as HTML.
 */
function generateHeaders(dates: Date[]): string {
  const tooltip = "Times shown in city local time";
  return (
    `<th></th>` +
    dates
      .map((d) => {
        const label = formatDateLabelInTimezone(d, currentTimezone);
        return `<th title="${tooltip}">${label}</th>`;
      })
      .join("")
  );
}

/**
 * Generate the HTML for a single table row.
 *
 * @param {Array<Date>} dates - Array of dates from incrementedDates.
 * @param {Number} hour - The specific hour for this row.
 * @returns {String} - The table row to be written as HTML.
 */
function generateRow(dates: Date[], hour: number): string {
  const events = dates
    .map((d) => {
      const date = new Date(d);
      date.setHours(hour);
      return `<td id="${dateCellId(date)}" class="event-cell"></td>`;
    })
    .join("");
  return `<tr><td>${hour}:00</td>${events}</tr>`;
}

/**
 * Generate the HTML for the table rows.
 *
 * @param {Array<Date>} dates - Array of dates from incrementedDates.
 * @returns {String} - The table rows to be written as HTML.
 */
function generateRows(dates: Date[]): string {
  return Array.from({ length: END_HOUR - START_HOUR + 1 })
    .map((_, i) => {
      return generateRow(dates, START_HOUR + i);
    })
    .join("");
}

/**
 * Renders the calendar.
 */
function renderCalendar(): void {
  if (!$summary || !$thead || !$tbody) return;
  $summary.textContent = `${DAYS_SHOWN} day view`;
  const dates = incrementedDates();
  $thead.innerHTML = generateHeaders(dates);
  $tbody.innerHTML = generateRows(dates);
}

/**
 * Clears the calendar.
 */
function clearCalendar(): void {
  const eventCells = document.getElementsByClassName("event-cell");
  Array.from(eventCells).forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("ideal", "not-ideal");
  });
}

/**
 * Toggles the details element.
 *
 * @param {Event} ev - Native Event Object.
 */
function detailsToggle(ev: MediaQueryListEvent | MediaQueryList): void {
  if (!$details) return;
  if (ev.matches) {
    $details.removeAttribute("open");
  } else {
    $details.setAttribute("open", "");
  }
}

renderCalendar();

window.addEventListener(
  "allForecasts",
  ({ detail }: AllForecastsEvent) => {
    const { forecasts, timezone } = detail;
    currentTimezone = timezone;
    clearCalendar();
    if ($timezoneNote) {
      $timezoneNote.textContent = "🕐 Times shown in city local time";
    }
    forecasts.forEach((forecast: Forecast) => {
      const { startTime, temperature, shortForecast, isGood, failureReasons, sunEvent } =
        forecast;
      const id = dateCellId(new Date(startTime));
      const cell = document.getElementById(id);
      if (!cell) return;

      if (sunEvent) {
        // Sun event: always show sunrise/sunset, style based on weather
        const { emoji, label } = getFailureIndicator(sunEvent);
        cell.textContent = `${emoji} ${label}`;
        cell.classList.add(isGood ? "ideal" : "not-ideal");
      } else if (isGood) {
        // Ideal conditions: show emoji and temperature
        cell.textContent = `${getWeatherEmoji(shortForecast)} ${temperature}`;
        cell.classList.add("ideal");
      } else {
        // Bad conditions: show failure indicator
        const primaryReason = failureReasons[0];
        const { emoji, label } = getFailureIndicator(primaryReason);
        cell.textContent = `${emoji} ${label}`;
        cell.classList.add("not-ideal");
      }
    });
  },
);

const mq: MediaQueryList = window.matchMedia("(max-width: 700px)");
mq.addEventListener("change", detailsToggle);
detailsToggle(mq);
