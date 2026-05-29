import { describe, it, expect } from 'vitest';
import {
  formatTimeInTimezone,
  formatDateInTimezone,
  formatWeekdayInTimezone,
  dateCellIdInTimezone,
  formatDateLabelInTimezone,
} from './timezone';

describe('timezone', () => {
  const testDate = '2024-05-15T15:30:00Z'; // 3:30 PM UTC

  describe('formatTimeInTimezone', () => {
    it('formats time in Pacific timezone', () => {
      const result = formatTimeInTimezone(testDate, 'America/Los_Angeles');
      expect(result).toMatch(/\d{1,2}\s?(AM|PM)/);
    });

    it('formats time in Eastern timezone', () => {
      const result = formatTimeInTimezone(testDate, 'America/New_York');
      expect(result).toMatch(/\d{1,2}\s?(AM|PM)/);
    });
  });

  describe('formatDateInTimezone', () => {
    it('formats date in specified timezone', () => {
      const result = formatDateInTimezone(testDate, 'America/Los_Angeles');
      expect(result).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
    });
  });

  describe('formatWeekdayInTimezone', () => {
    it('formats weekday in specified timezone', () => {
      const result = formatWeekdayInTimezone(testDate, 'America/Los_Angeles');
      expect(result).toMatch(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/);
    });
  });

  describe('dateCellIdInTimezone', () => {
    it('creates cell ID with correct format', () => {
      const date = new Date(testDate);
      const result = dateCellIdInTimezone(date, 'America/Los_Angeles');
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}$/);
    });
  });

  describe('formatDateLabelInTimezone', () => {
    it('formats date label for calendar headers', () => {
      const date = new Date(testDate);
      const result = formatDateLabelInTimezone(date, 'America/Los_Angeles');
      expect(result).toMatch(/[A-Z][a-z]{2},\s[A-Z][a-z]{2}\s\d{1,2}/);
    });
  });
});
