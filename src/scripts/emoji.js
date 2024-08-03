const emojiLookup = {
    '☀️': (s) => /clear|sunny/i.test(s),
    '☁️': (s) => /cloud/i.test(s),
    '🌧️': (s) => /rain|drizzle/i.test(s),
    '⛈️': (s) => /thunderstorm/i.test(s),
    '❄️': (s) => /snow/i.test(s),
    '🌫️': (s) => /mist|fog/i.test(s),
    '💨': (s) => /wind/i.test(s)
};

export default function getWeatherEmoji(shortForecast) {
    return Object.entries(emojiLookup).reduce((acc, [em, fn]) => fn(shortForecast) ? em : acc, '☁️');
}
