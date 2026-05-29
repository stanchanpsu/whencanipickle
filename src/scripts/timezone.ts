/**
 * Formats a time string in the specified timezone.
 *
 * @param {string} startTime - ISO8601 Datetime string.
 * @param {string} timezone - IANA timezone identifier (e.g., "America/Los_Angeles").
 * @returns {string} - Formatted time string (e.g., "3 PM").
 */
export function formatTimeInTimezone(startTime: string, timezone: string): string {
  const date = new Date(startTime);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    timeZone: timezone,
  });
}

/**
 * Formats a date string in the specified timezone.
 *
 * @param {string} startTime - ISO8601 Datetime string.
 * @param {string} timezone - IANA timezone identifier.
 * @returns {string} - Formatted date string (e.g., "5/15/2024").
 */
export function formatDateInTimezone(startTime: string, timezone: string): string {
  const date = new Date(startTime);
  return date.toLocaleDateString("en-US", {
    timeZone: timezone,
  });
}

/**
 * Formats a weekday string in the specified timezone.
 *
 * @param {string} startTime - ISO8601 Datetime string.
 * @param {string} timezone - IANA timezone identifier.
 * @returns {string} - Formatted weekday string (e.g., "Wednesday").
 */
export function formatWeekdayInTimezone(startTime: string, timezone: string): string {
  const date = new Date(startTime);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: timezone,
  });
}

/**
 * Creates a cell ID for the calendar using the date in the specified timezone.
 *
 * @param {Date} date - Date object.
 * @param {string} timezone - IANA timezone identifier.
 * @returns {string} - Cell ID string (e.g., "2024-05-15T15").
 */
export function dateCellIdInTimezone(date: Date, timezone: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    hour12: false,
    timeZone: timezone,
  });
  const parts = formatter.formatToParts(date);
  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const hour = parts.find((p) => p.type === "hour")?.value;
  return `${year}-${month}-${day}T${hour}`;
}

/**
 * Formats a date label for calendar headers in the specified timezone.
 *
 * @param {Date} date - Date object.
 * @param {string} timezone - IANA timezone identifier.
 * @returns {string} - Formatted date label (e.g., "Wed, May 15").
 */
export function formatDateLabelInTimezone(date: Date, timezone: string): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: timezone,
  });
}
