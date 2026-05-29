import { describe, it, expect } from 'vitest';

/**
 * Simulates evaluateForecast logic extracted for testing.
 * Tests the refactored approach of using evaluateForecast + isFuture filter
 * instead of the old goodForecasts reduce function.
 */

interface Forecast {
  temperature: number;
  startTime: string;
  shortForecast: string;
  relativeHumidity: { value: number };
  windSpeed: string;
}

function goodTemperature(temp: number): boolean {
  return temp >= 50 && temp <= 85;
}

function goodPrecip(shortForecast: string): boolean {
  const exclude = ["rain", "shower", "storm", "snow", "hail"];
  return !exclude.some((word) =>
    shortForecast.toLowerCase().includes(word.toLowerCase()),
  );
}

function goodHumidity(relativeHumidity: { value: number }): boolean {
  return relativeHumidity.value <= 55;
}

function goodWindspeed(windspeed: string): boolean {
  return parseInt(windspeed.replace(/\D+/g, ""), 10) < 12;
}

function isFuture(startTime: string): boolean {
  return new Date(startTime) >= new Date();
}

function evaluateForecast(forecast: Forecast) {
  const { temperature, shortForecast, relativeHumidity, windSpeed } = forecast;
  const failureReasons: string[] = [];

  if (!goodTemperature(temperature)) {
    failureReasons.push(
      temperature < 50 ? "temperature-low" : "temperature-high",
    );
  }
  if (!goodHumidity(relativeHumidity)) failureReasons.push("humidity");
  if (!goodPrecip(shortForecast)) failureReasons.push("precipitation");
  if (!goodWindspeed(windSpeed)) failureReasons.push("wind");

  return {
    isGood: failureReasons.length === 0,
    failureReasons,
  };
}

function getGoodForecasts(periods: Forecast[]) {
  return periods.filter((forecast) => {
    const { isGood } = evaluateForecast(forecast);
    return isGood && isFuture(forecast.startTime);
  });
}

describe('evaluateForecast', () => {
  it('returns isGood: true for ideal conditions', () => {
    const forecast: Forecast = {
      temperature: 72,
      startTime: new Date(Date.now() + 86400000).toISOString(), // tomorrow
      shortForecast: 'Sunny',
      relativeHumidity: { value: 40 },
      windSpeed: '5 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(true);
    expect(failureReasons).toHaveLength(0);
  });

  it('flags temperature too low', () => {
    const forecast: Forecast = {
      temperature: 30,
      startTime: new Date(Date.now() + 86400000).toISOString(),
      shortForecast: 'Sunny',
      relativeHumidity: { value: 40 },
      windSpeed: '5 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(false);
    expect(failureReasons).toContain('temperature-low');
  });

  it('flags temperature too high', () => {
    const forecast: Forecast = {
      temperature: 95,
      startTime: new Date(Date.now() + 86400000).toISOString(),
      shortForecast: 'Sunny',
      relativeHumidity: { value: 40 },
      windSpeed: '5 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(false);
    expect(failureReasons).toContain('temperature-high');
  });

  it('flags high humidity', () => {
    const forecast: Forecast = {
      temperature: 72,
      startTime: new Date(Date.now() + 86400000).toISOString(),
      shortForecast: 'Sunny',
      relativeHumidity: { value: 90 },
      windSpeed: '5 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(false);
    expect(failureReasons).toContain('humidity');
  });

  it('flags precipitation', () => {
    const forecast: Forecast = {
      temperature: 72,
      startTime: new Date(Date.now() + 86400000).toISOString(),
      shortForecast: 'Light rain',
      relativeHumidity: { value: 40 },
      windSpeed: '5 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(false);
    expect(failureReasons).toContain('precipitation');
  });

  it('flags high wind', () => {
    const forecast: Forecast = {
      temperature: 72,
      startTime: new Date(Date.now() + 86400000).toISOString(),
      shortForecast: 'Sunny',
      relativeHumidity: { value: 40 },
      windSpeed: '25 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(false);
    expect(failureReasons).toContain('wind');
  });

  it('flags multiple failure reasons', () => {
    const forecast: Forecast = {
      temperature: 30,
      startTime: new Date(Date.now() + 86400000).toISOString(),
      shortForecast: 'Heavy rain',
      relativeHumidity: { value: 90 },
      windSpeed: '30 mph',
    };
    const { isGood, failureReasons } = evaluateForecast(forecast);
    expect(isGood).toBe(false);
    expect(failureReasons).toContain('temperature-low');
    expect(failureReasons).toContain('humidity');
    expect(failureReasons).toContain('precipitation');
    expect(failureReasons).toContain('wind');
  });
});

describe('getGoodForecasts (refactored)', () => {
  it('returns only good future forecasts', () => {
    const periods: Forecast[] = [
      {
        temperature: 72,
        startTime: new Date(Date.now() + 86400000).toISOString(), // tomorrow
        shortForecast: 'Sunny',
        relativeHumidity: { value: 40 },
        windSpeed: '5 mph',
      },
      {
        temperature: 30,
        startTime: new Date(Date.now() + 86400000).toISOString(),
        shortForecast: 'Sunny',
        relativeHumidity: { value: 40 },
        windSpeed: '5 mph',
      },
    ];

    const good = getGoodForecasts(periods);
    expect(good).toHaveLength(1);
  });

  it('excludes past forecasts', () => {
    const periods: Forecast[] = [
      {
        temperature: 72,
        startTime: new Date(Date.now() - 86400000).toISOString(), // yesterday
        shortForecast: 'Sunny',
        relativeHumidity: { value: 40 },
        windSpeed: '5 mph',
      },
    ];

    const good = getGoodForecasts(periods);
    expect(good).toHaveLength(0);
  });

  it('returns empty array when no matches', () => {
    const periods: Forecast[] = [
      {
        temperature: 30,
        startTime: new Date(Date.now() + 86400000).toISOString(),
        shortForecast: 'Heavy rain',
        relativeHumidity: { value: 90 },
        windSpeed: '30 mph',
      },
    ];

    const good = getGoodForecasts(periods);
    expect(good).toHaveLength(0);
  });
});
