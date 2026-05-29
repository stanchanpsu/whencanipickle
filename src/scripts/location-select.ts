import SunCalc from "suncalc";
import type { Location, RawForecast, ForecastEvaluation, FailureReason, SunEvent } from "./types.ts";
import { LOW_TEMP_THRESHOLD as lowTempThreshold, HIGH_TEMP_THRESHOLD as highTempThreshold, HUMIDITY_THRESHOLD as humidityThreshold, WIND_SPEED_THRESHOLD as windSpeedThreshold } from "./constants.ts";

const $form = document.getElementById("form") as HTMLFormElement;
const $input = document.getElementById("input") as HTMLInputElement;
const $locations = document.getElementById("locations") as Element;
const ARROW_KEYS = ["ArrowUp", "ArrowDown"];
const WEATHER_GOV_BASE = "https://api.weather.gov";

const LOCATION_LOCALSTORAGE_KEY = "location";

function formatLabel(location: Location): string {
  return `${location.city}, ${location.state}`;
}

function isFuture(startTime: string): boolean {
  return new Date(startTime) >= new Date();
}

function goodTemperature(temp: number): boolean {
  return temp >= lowTempThreshold && temp <= highTempThreshold;
}

function goodPrecip(shortForecast: string): boolean {
  const exclude = ["rain", "shower", "storm", "snow", "hail"];
  return !exclude.some((word) =>
    shortForecast.toLowerCase().includes(word.toLowerCase()),
  );
}

function goodHumidity(relativeHumidity: { value: number }): boolean {
  return relativeHumidity.value <= humidityThreshold;
}

function goodWindspeed(windspeed: string): boolean {
  return parseInt(windspeed.replace(/\D+/, ""), 10) < windSpeedThreshold;
}

interface SunCalcTimes {
  sunrise: Date;
  sunset: Date;
}

function evaluateForecast(
  forecast: RawForecast,
  latitude: number,
  longitude: number,
): ForecastEvaluation {
  const {
    temperature,
    startTime,
    shortForecast,
    relativeHumidity,
    windSpeed,
  } = forecast;

  const failureReasons: FailureReason[] = [];
  const date = new Date(startTime);
  const sunTimes: SunCalcTimes = SunCalc.getTimes(date, latitude, longitude);

  // Determine if hour contains sunrise or sunset
  const hourStart = new Date(date);
  hourStart.setMinutes(0, 0, 0);
  const hourEnd = new Date(hourStart);
  hourEnd.setHours(hourEnd.getHours() + 1);

  let sunEvent: SunEvent | null = null;
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

function keyboardTraverse(ev: KeyboardEvent): Element | undefined {
  if (!ARROW_KEYS.includes(ev.key)) return;
  ev.stopPropagation();
  const visible: HTMLElement[] = [
    ...$locations.querySelectorAll('button:not([style*="none"])'),
  ];
  const current = visible.findIndex(($btn: HTMLElement) => $btn.tabIndex === 0);
  if (!~current) return updateTabIndex(visible.at(0));
  const direction = ARROW_KEYS.indexOf(ev.key) * 2 - 1;
  const next = (current + direction + visible.length) % visible.length;
  return updateTabIndex(visible.at(next));
}

function updateTabIndex($current: Element | undefined): Element | undefined {
  if (!$current) return;
  [...$locations.children].forEach(($btn: HTMLElement) => {
    $btn.tabIndex = $btn === $current ? 0 : -1;
  });
  $current.scrollIntoView({ block: "nearest" });
  return $current;
}

$input.addEventListener("click", (ev: MouseEvent) => {
  if (!(ev.target instanceof HTMLInputElement)) return;
  $input.setAttribute("aria-expanded", String(Boolean(ev.target.value)));
});

$input.addEventListener("input", (ev: Event) => {
  if (!(ev.target instanceof HTMLInputElement)) return;
  $input.style.minWidth = `${ev.target.value.length}ch`;
  $input.setAttribute("aria-expanded", String(Boolean(ev.target.value)));
  const visible: HTMLElement[] = [...$locations.children].filter(($btn: HTMLElement) => {
    if (!(ev.target instanceof HTMLInputElement)) return false;
    const exclude =
      Boolean(ev.target.value) &&
      !$btn.textContent?.toLowerCase().includes(ev.target.value.toLowerCase());
    $btn.style.display = exclude ? "none" : "block";
    return exclude;
  });
  if (!visible.some(($btn: HTMLElement) => $btn.tabIndex === 0))
    updateTabIndex(visible.at(0));
});

$locations.addEventListener("keydown", (ev: KeyboardEvent) => keyboardTraverse(ev)?.focus());

document.body.addEventListener("click", (ev: MouseEvent) => {
  const isExpanded = $input.getAttribute("aria-expanded");
  const outsideForm = ![...ev.composedPath()].includes($form);
  if (isExpanded && outsideForm) $input.setAttribute("aria-expanded", "false");
});

fetch("/locations.json")
  .then((res: Response) => res.json())
  .then((locations: Location[]) => {
    $locations.innerHTML = locations
      .map((entry: Location, index: number) => {
        return `<button 
            tabIndex="-1"
            type="button"
            value="${index}">
            ${formatLabel(entry)}
        </button>`;
      })
      .join("");

    function onLocationSelect(index: number): void {
      if (!locations?.[index]) return;
      const location = locations[index];
      
      try {
        localStorage.setItem(LOCATION_LOCALSTORAGE_KEY, index.toString());
      } catch (e: unknown) {
        console.warn('Failed to save location to localStorage:', e);
      }

      $input.value = location.city;
      $input.style.minWidth = `${location.city.length}ch`;

      window.dispatchEvent(
        new CustomEvent("city", { detail: formatLabel(location) }),
      );

      const url = new URL(
        `/points/${location.latitude},${location.longitude}`,
        WEATHER_GOV_BASE,
      );

      fetch(url.toString())
        .then((res: Response) => {
          if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
          return res.json();
        })
        .then(({ properties }: { properties: { forecastHourly: string } }) =>
          fetch(properties.forecastHourly),
        )
        .then((res: Response) => {
          if (!res.ok) throw new Error(`Forecast API error: ${res.status}`);
          return res.json();
        })
        .then(({ properties }: { properties: { periods: RawForecast[] } }) => {
          const goodForecastsArray = properties.periods
            .filter((forecast: RawForecast) => {
              const { isGood } = evaluateForecast(forecast, location.latitude, location.longitude);
              return isGood && isFuture(forecast.startTime);
            });
          const allForecasts = properties.periods
            .filter((forecast: RawForecast) => isFuture(forecast.startTime))
            .map((forecast: RawForecast) => ({
              ...forecast,
              ...evaluateForecast(forecast, location.latitude, location.longitude),
            }));
          window.dispatchEvent(
            new CustomEvent("forecasts", { 
              detail: { forecasts: goodForecastsArray, timezone: location.timezone } 
            }),
          );
          window.dispatchEvent(
            new CustomEvent("allForecasts", { 
              detail: { forecasts: allForecasts, timezone: location.timezone } 
            }),
          );
        })
        .catch((error: Error) => {
          console.error('Failed to fetch weather data:', error);
          window.dispatchEvent(
            new CustomEvent("forecasts", { 
              detail: { forecasts: [], timezone: location.timezone } 
            }),
          );
          window.dispatchEvent(
            new CustomEvent("allForecasts", { 
              detail: { forecasts: [], timezone: location.timezone } 
            }),
          );
        });
    }

    function userChosen(
      $btn: Element | null = $locations.querySelector('button[tabIndex="0"]'),
    ): void {
      if (!($btn instanceof HTMLButtonElement)) return;
      $input.setAttribute("aria-expanded", "false");
      updateTabIndex($btn);
      onLocationSelect(Number($btn.value));
    }

    $input.addEventListener("keydown", (ev: KeyboardEvent) => {
      if (["Enter"].includes(ev.key)) return userChosen();
      keyboardTraverse(ev);
    });

    $locations.addEventListener("click", (ev: MouseEvent) =>
      userChosen(ev.target as Element),
    );

    let idx = 0;
    try {
      const storage = localStorage.getItem(LOCATION_LOCALSTORAGE_KEY);
      if (typeof storage === "string") {
        idx = parseInt(storage, 10);
      }
    } catch (e: unknown) {
      console.warn('Failed to read location from localStorage:', e);
    }

    onLocationSelect(idx);
  })
  .catch((error: Error) => {
    console.error('Failed to load locations:', error);
    $locations.innerHTML = '<p class="error">Failed to load locations. Please refresh the page.</p>';
  });
