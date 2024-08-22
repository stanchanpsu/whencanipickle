import getWeatherEmoji from "./emoji.ts";
import { START_HOUR, END_HOUR } from "./hours.ts";

const DAYS_SHOWN: number = 3;
const $details = document.getElementById('details');
const $summary = document.getElementById('summary');
const $thead = document.getElementById('thead');
const $tbody = document.getElementById('tbody');

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
    return date.toISOString().replace(/:.+/g, '');
}

/**
 * Generate the HTML for the table headers.
 * 
 * @param {Array<Date>} dates - Array of dates from incrementedDates.
 * @returns {String} - The table header row to be written as HTML.
 */
function generateHeaders(dates: Date[]): string {
    return `<th></th>` + dates.map((d) => {
        const label = d.toLocaleDateString(
            "en-US",
            { weekday: "short", month: "short", day: "numeric" }
        );
        return `<th>${label}</th>`;
    }).join('');
}

/**
 * Generate the HTML for a single table row.
 * 
 * @param {Array<Date>} dates - Array of dates from incrementedDates.
 * @param {Number} hour - The specific hour for this row.
 * @returns {String} - The table row to be written as HTML.
 */
function generateRow(dates: Date[], hour: number): string {
    const events = dates.map((d) => {
        const date = new Date(d);
        date.setHours(hour);
        return `<td id="${dateCellId(date)}" class="event-cell"></td>`;
    }).join('');
    return `<tr><td>${hour}:00</td>${events}</tr>`;
}

/**
 * Generate the HTML for the table rows.
 * 
 * @param {Array<Date>} dates - Array of dates from incrementedDates.
 * @returns {String} - The table rows to be written as HTML.
 */
function generateRows(dates: Date[]): string {
    return Array.from({ length: (END_HOUR - START_HOUR) + 1 }).map((_, i) => {
        return generateRow(dates, START_HOUR + i);
    }).join('');
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
    const eventCells = document.getElementsByClassName('event-cell');
    Array.from(eventCells).forEach(cell => {
        cell.textContent = '';
    });
}

/**
 * Toggles the details element.
 * 
 * @param {Event} ev - Native Event Object.
 */
function detailsToggle(ev: MediaQueryListEvent | MediaQueryList): void {
    const $details: HTMLDetailsElement | null = document.querySelector('details');
    
    if ($details) {
        if (ev.matches) {
            $details.removeAttribute('open');
        } else {
            $details.setAttribute('open', '');
        }
    }
}

renderCalendar();

interface Forecast {
    startTime: string;
    temperature: number;
    shortForecast: string;
}

interface ForecastEvent extends CustomEvent {
    detail: Forecast[];
}

window.addEventListener("forecasts", ({ detail: forecasts }: ForecastEvent) => {
    clearCalendar();
    forecasts.forEach((forecast: Forecast) => {
        const { startTime, temperature, shortForecast } = forecast;
        const id = dateCellId(new Date(startTime));
        const cell = document.getElementById(id);
        if (!cell) return;
        cell.textContent = `${getWeatherEmoji(shortForecast)} ${temperature}`;
    });
});

const mq: MediaQueryList = window.matchMedia('(max-width: 700px)');
mq.addEventListener('change', detailsToggle);
detailsToggle(mq);


