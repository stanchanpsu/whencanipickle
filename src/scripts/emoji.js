/**
 * Each value in the lookup is a case-insensitive RegExp test
 * that will return a Boolean identifying if the key (emoji) is
 * meant to represent the forecast description.
 */
const emojiLookup = {
    '☀️': (s) => /clear|sunny/i.test(s),
    '☁️': (s) => /cloud/i.test(s),
    '🌧️': (s) => /rain|drizzle/i.test(s),
    '⛈️': (s) => /thunderstorm/i.test(s),
    '❄️': (s) => /snow/i.test(s),
    '🌫️': (s) => /mist|fog/i.test(s),
    '💨': (s) => /wind/i.test(s)
};

/**
 * Matches an emoji with the forecast description.
 * 
 * @param {String} shortForecast - Forecast description from the weather API.
 * @returns {String} - The emoji that matches the description.
 */
export default function getWeatherEmoji(shortForecast) {
    return Object.entries(emojiLookup).reduce((acc, [em, fn]) => fn(shortForecast) ? em : acc, '☁️');
}
