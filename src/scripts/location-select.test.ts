import { describe, it, expect } from 'vitest';

/**
 * Filters locations based on search input (extracted for testing).
 * This mirrors the logic in location-select.ts input handler.
 *
 * @param locations - Array of location objects with city and state
 * @param searchTerm - The search term to filter by
 * @returns Filtered array of locations matching the search term
 */
function filterLocations(
  locations: Array<{ city: string; state: string }>,
  searchTerm: string
): Array<{ city: string; state: string }> {
  if (!searchTerm) return locations;
  return locations.filter(
    (loc) =>
      loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.state.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

describe('location filtering', () => {
  const testLocations = [
    { city: 'Portland', state: 'Oregon' },
    { city: 'Seattle', state: 'Washington' },
    { city: 'San Francisco', state: 'California' },
    { city: 'Los Angeles', state: 'California' },
    { city: 'Denver', state: 'Colorado' },
  ];

  it('returns all locations when search term is empty', () => {
    const result = filterLocations(testLocations, '');
    expect(result).toHaveLength(5);
  });

  it('filters by city name', () => {
    const result = filterLocations(testLocations, 'Portland');
    expect(result).toHaveLength(1);
    expect(result[0].city).toBe('Portland');
  });

  it('filters by state name', () => {
    const result = filterLocations(testLocations, 'California');
    expect(result).toHaveLength(2);
  });

  it('is case insensitive', () => {
    const result = filterLocations(testLocations, 'portland');
    expect(result).toHaveLength(1);
    expect(result[0].city).toBe('Portland');
  });

  it('handles special characters without throwing', () => {
    // These would cause SyntaxError with unescaped regex
    const specialChars = ['(', ')', '*', '+', '?', '[', ']', '{', '}', '\\'];
    specialChars.forEach((char) => {
      expect(() => filterLocations(testLocations, char)).not.toThrow();
    });
  });

  it('returns empty array when no matches found', () => {
    const result = filterLocations(testLocations, 'Miami');
    expect(result).toHaveLength(0);
  });

  it('handles partial matches', () => {
    const result = filterLocations(testLocations, 'Port');
    expect(result).toHaveLength(1);
    expect(result[0].city).toBe('Portland');
  });

  it('handles multiple results', () => {
    const result = filterLocations(testLocations, 'an');
    expect(result).toHaveLength(3); // Portland, San Francisco, Los Angeles
  });
});
