import getWeatherEmoji from "./emoji.js";
import { START_HOUR, END_HOUR } from "./hours.js";

const DAYS_SHOWN = 3;
const $summary = document.getElementById('summary');
const $thead = document.getElementById('thead');
const $tbody = document.getElementById('tbody');

function incrementedDates() {
    const today = new Date().getDate();
    return Array.from({ length: DAYS_SHOWN }, (_, i) => {
        const d = new Date();
        d.setDate(today + i);
        return d;
    });
}

function dateCellId(date) {
    return date.toISOString().replace(/:.+/g,'');
}

function generateHeaders(dates) {
    return `<th></th>` + dates.map((d) => {
        const label = d.toLocaleDateString(
            "en-US",
            { weekday: "short", month: "short", day: "numeric" }
        );
        return `<th>${label}</th>`;
    }).join('');
}

function generateRow(dates, hour) {
    const events = dates.map((d) => {
        const date = new Date(d);
        date.setHours(hour);
        return `<td id="${dateCellId(date)}"></td>`;
    }).join('');
    return `<tr><td>${hour}:00</td>${events}</tr>`;
}

function generateRows(dates) {
    return Array.from({ length: (END_HOUR - START_HOUR) + 1 }).map((_, i) => {
        return generateRow(dates, START_HOUR + i);
    }).join('');
}

function renderCalendar() {
    $summary.textContent = `${DAYS_SHOWN} day view`;
    const dates = incrementedDates();
    $thead.innerHTML = generateHeaders(dates);
    $tbody.innerHTML = generateRows(dates);
}

renderCalendar();

window.addEventListener("forecasts", ({ detail: forecasts }) => {
    forecasts.forEach((forecast) => {
        const { startTime, temperature, shortForecast } = forecast;
        const id = dateCellId(new Date(startTime));
        const cell = document.getElementById(id);
        if (!cell) return;
        cell.textContent = `${getWeatherEmoji(shortForecast)} ${temperature}`;
    });
});
