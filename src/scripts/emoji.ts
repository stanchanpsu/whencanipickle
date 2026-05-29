/**
 * Each value in the lookup is a case-insensitive RegExp test
 * that will return a Boolean identifying if the key (emoji) is
 * meant to represent the forecast description.
 */
const emojiLookup = {
  "☀️": (s: string) => /clear|sunny/i.test(s),
  "☁️": (s: string) => /cloud/i.test(s),
  "🌧️": (s: string) => /rain|drizzle/i.test(s),
  "⛈️": (s: string) => /thunderstorm/i.test(s),
  "❄️": (s: string) => /snow/i.test(s),
  "🌫️": (s: string) => /mist|fog/i.test(s),
  "💨": (s: string) => /wind/i.test(s),
};

/**
 * Matches an emoji with the forecast description.
 *
 * @param {String} shortForecast - Forecast description from the weather API.
 * @returns {String} - The emoji that matches the description.
 */
export default function getWeatherEmoji(shortForecast: string): string {
  return Object.entries(emojiLookup).reduce(
    (acc: string, [em, fn]: [string, (s: string) => boolean]) =>
      fn(shortForecast) ? em : acc,
    "☁️",
  );
}

/**
 * Maps failure reasons to emoji and label for bad weather indicators.
 *
 * @param {String} reason - The failure reason (e.g., 'wind', 'temperature-high').
 * @returns {Object} - { emoji: string, label: string }
 */
export function getFailureIndicator(reason: string): {
  emoji: string;
  label: string;
} {
  const indicatorMap = {
    wind: { emoji: "💨", label: "windy" },
    "temperature-low": { emoji: "🥶", label: "cold" },
    "temperature-high": { emoji: "☀️", label: "hot" },
    humidity: { emoji: "💧", label: "humid" },
    precipitation: { emoji: "🌧️", label: "rainy" },
    nighttime: { emoji: "🌙", label: "night" },
  };
  return indicatorMap[reason] || { emoji: "❓", label: "unknown" };
}
