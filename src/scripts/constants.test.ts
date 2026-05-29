import { describe, it, expect } from 'vitest';
import { LOW_TEMP_THRESHOLD, HIGH_TEMP_THRESHOLD, HUMIDITY_THRESHOLD, WIND_SPEED_THRESHOLD } from './constants';

describe('weather constants', () => {
  it('temperature range is valid', () => {
    expect(LOW_TEMP_THRESHOLD).toBeLessThan(HIGH_TEMP_THRESHOLD);
  });

  it('humidity threshold is between 0 and 100', () => {
    expect(HUMIDITY_THRESHOLD).toBeGreaterThan(0);
    expect(HUMIDITY_THRESHOLD).toBeLessThanOrEqual(100);
  });

  it('wind speed threshold is positive', () => {
    expect(WIND_SPEED_THRESHOLD).toBeGreaterThan(0);
  });
});
