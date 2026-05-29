import { describe, it, expect } from 'vitest';
import type { Location, RawForecast, Forecast, FailureReason, SunEvent } from './types';

describe('TypeScript types', () => {
  describe('Location type', () => {
    it('accepts a valid Location object', () => {
      const location: Location = {
        city: 'Portland',
        state: 'Oregon',
        latitude: 45.5152,
        longitude: -122.6784,
        timezone: 'America/Los_Angeles',
      };
      expect(location.city).toBe('Portland');
      expect(location.state).toBe('Oregon');
      expect(typeof location.latitude).toBe('number');
      expect(typeof location.longitude).toBe('number');
    });

    it('accepts Location with optional rank', () => {
      const location: Location = {
        city: 'Portland',
        state: 'Oregon',
        latitude: 45.5152,
        longitude: -122.6784,
        timezone: 'America/Los_Angeles',
        rank: '100',
      };
      expect(location.rank).toBe('100');
    });
  });

  describe('RawForecast type', () => {
    it('accepts a valid RawForecast object', () => {
      const forecast: RawForecast = {
        startTime: '2024-05-15T15:00:00Z',
        temperature: 72,
        shortForecast: 'Sunny',
        relativeHumidity: { value: 40 },
        windSpeed: '5 mph',
        windDirection: 'NW',
      };
      expect(forecast.temperature).toBe(72);
      expect(forecast.relativeHumidity.value).toBe(40);
    });
  });

  describe('Forecast type (evaluated)', () => {
    it('accepts a valid Forecast with evaluation fields', () => {
      const forecast: Forecast = {
        startTime: '2024-05-15T15:00:00Z',
        temperature: 72,
        shortForecast: 'Sunny',
        relativeHumidity: { value: 40 },
        windSpeed: '5 mph',
        isGood: true,
        failureReasons: [],
        sunEvent: null,
      };
      expect(forecast.isGood).toBe(true);
      expect(forecast.failureReasons).toEqual([]);
      expect(forecast.sunEvent).toBeNull();
    });

    it('accepts failure reasons', () => {
      const reasons: FailureReason[] = ['temperature-high', 'humidity', 'wind'];
      const forecast: Forecast = {
        startTime: '2024-05-15T15:00:00Z',
        temperature: 95,
        shortForecast: 'Sunny',
        relativeHumidity: { value: 90 },
        windSpeed: '25 mph',
        isGood: false,
        failureReasons: reasons,
        sunEvent: null,
      };
      expect(forecast.failureReasons).toContain('temperature-high');
      expect(forecast.failureReasons).toContain('humidity');
      expect(forecast.failureReasons).toContain('wind');
    });

    it('accepts sun event types', () => {
      const sunriseForecast: Forecast = {
        startTime: '2024-05-15T06:00:00Z',
        temperature: 60,
        shortForecast: 'Clear',
        relativeHumidity: { value: 50 },
        windSpeed: '5 mph',
        isGood: true,
        failureReasons: [],
        sunEvent: 'sunrise' as SunEvent,
      };
      expect(sunriseForecast.sunEvent).toBe('sunrise');
    });
  });

  describe('AllFailureReason values', () => {
    it('all known failure reasons are valid', () => {
      const reasons: FailureReason[] = [
        'nighttime',
        'temperature-low',
        'temperature-high',
        'humidity',
        'precipitation',
        'wind',
      ];
      expect(reasons).toHaveLength(6);
    });
  });
});
