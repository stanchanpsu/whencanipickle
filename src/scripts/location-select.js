const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $locations = document.getElementById('locations');
const ARROW_KEYS = ['ArrowUp', 'ArrowDown'];
const WEATHER_GOV_BASE = 'https://api.weather.gov';

const lowTempThreshold = 60;
const highTempThreshold = 85;
const humidityThreshold = 55;
const windSpeedThreshold = 12;

/**
 * Creates a normalized location name.
 * 
 * @param {Object} location - A location entry. 
 * @returns {String} - A normalized location name.
 */
function formatLabel(location) {
    return `${location.city}, ${location.state}`;
}

/**
 * Determines a good time to play.
 * 
 * @param {String} startTime - ISO8601 Datetime string.
 * @returns {Boolean}
 */
function isFuture(startTime) {
    return new Date(startTime) >= new Date()
}

/**
 * Determines a good temperature to play.
 * 
 * @param {Number} temp - Temperature.
 * @returns {Boolean}
 */
function goodTemperature(temp) {
    return temp >= lowTempThreshold
        && temp <= highTempThreshold;
}

/**
 * Determines if precipitation is adequate.
 * 
 * @param {String} shortForecast - Forecast description. 
 * @returns {Boolean}
 */
function goodPrecip(shortForecast) {
    const exclude = ['rain', 'shower'].map((word) => `(?!.*\\b${word}\\b)`).join('');
    const rgx = new RegExp(`^${exclude}.*$`, 'i');
    return rgx.test(shortForecast);
}

/**
 * Determines if the humidity is adequate.
 * 
 * @param {Number} - The relativeHumidity value from the forecast. 
 * @returns {Boolean}
 */
function goodHumidity(relativeHumidity) {
    return relativeHumidity.value <= humidityThreshold;
}

/**
 * Determines if the windspeed is adequate.
 * 
 * @param {String} windspeed - The windspeed from the forecast. 
 * @returns {Boolean}
 */
function goodWindspeed(windspeed) {
    return parseInt(windspeed.replace(/\D+/, ''), 10) < windSpeedThreshold;
}

/**
 * Determines which of the given forecasts are adequate using Array.reduce().
 * 
 * @param {Array<Object>} acc - Accumulation of good forecasts.
 * @param {Object} forecast - A forecast to check.
 * @returns {Array<Object>} - The final accumulation of good forecasts.
 */
function goodForecasts(acc, forecast) {
    const {
        temperature,
        startTime,
        isDaytime,
        shortForecast,
        relativeHumidity,
        windSpeed
    } = forecast;

    if (
        !isDaytime
        || !isFuture(startTime)
        || !goodTemperature(temperature)
        || !goodHumidity(relativeHumidity)
        || !goodPrecip(shortForecast)
        || !goodWindspeed(windSpeed)
    ) return acc;
    return acc.concat(forecast);
}

/**
 * Moves the tabindex between buttons in the flyout using the up/down arrow keys.
 * 
 * @param {KeyboardEvent} ev - Native DOM keyboard event 
 * @returns {Element|undefined} The next element to focus
 */
function keyboardTraverse(ev) {
    if (!ARROW_KEYS.includes(ev.key)) return;
    ev.stopPropagation();
    const visible = [...$locations.querySelectorAll('button:not([style*="none"])')];
    const current = visible.findIndex(($btn) => $btn.tabIndex === 0);
    if (!~current) return updateTabIndex(visible.at(0));
    const direction = (ARROW_KEYS.indexOf(ev.key) * 2) - 1;
    const next = (current + direction + visible.length) % visible.length;
    return updateTabIndex(visible.at(next));
}

/**
 * Updates the tabIndex of all buttons in the flyout.
 * 
 * @param {Element} $current - The element meant to be newly tabbable
 * @returns {Element} - The element meant to be newly tabbable
 */
function updateTabIndex($current) {
    if (!$current) return;
    [...$locations.children].forEach(($btn) => {
        $btn.tabIndex = $btn === $current ? 0 : -1;
    });
    $current.scrollIntoView({ block: 'nearest' });
    return $current;
}

// Show or hide the flyout depending on if the input has a value.
$input.addEventListener('click', (ev) => 
    $input.setAttribute('aria-expanded', Boolean(ev.target.value))
);

// Filter the list of options during input.
$input.addEventListener('input', (ev) => {
    // Update the size of the input to accommodate the value.
    $input.style.minWidth = `${ev.target.value.length}ch`;
    // Show the flyout of options.
    $input.setAttribute('aria-expanded', Boolean(ev.target.value));
    // Show or hide the options based on the input value.
    const rgx = new RegExp(`${ev.target.value}`, 'gmisu');
    const visible = [...$locations.children].filter(($btn) => {
        const exclude = Boolean(ev.target.value) && !rgx.test($btn.textContent);
        $btn.style.display = exclude ? 'none' : 'block';
        return exclude;
    });
    // Ensure something is tabbable, otherwise set the first visible option as tabbable.
    if(!visible.some(($btn) => $btn.tabIndex === 0)) updateTabIndex(visible.at(0));
});

// If tabbed into the list, continues to move up/down with arrow keys.
$locations.addEventListener('keydown', (ev) => keyboardTraverse(ev)?.focus());

// If flyout is open and outside click, close flyout.
document.body.addEventListener('click', (ev) => {
    const isExpanded = $input.getAttribute('aria-expanded') === 'true';
    const outsideForm = ![...ev.composedPath()].includes($form);
    if (isExpanded && outsideForm) $input.setAttribute('aria-expanded', false);
});

// On load, fetch locations.json for input field, render as options.
fetch('/locations.json').then((res) => res.json()).then((locations) => {
    $locations.innerHTML = locations.map((entry, index) => {
        return `<button 
            tabIndex="-1"
            type="button"
            value="${index}">
            ${formatLabel(entry)}
        </button>`;
    }).join('');

    /**
     * Triggers series of requests to fetch weather data.
     * 
     * @param {Number} index - The index of the target in the locations array
     * @returns {void}
     */
    function onLocationSelect(index) {
        if (!locations?.[index]) return;
        const location = locations[index];

        // Replace the input value with city alone.
        $input.value = location.city;
        $input.style.minWidth = `${location.city.length}ch`;

        // Event is read by <Map/> component.
        window.dispatchEvent(new CustomEvent('city', { detail: formatLabel(location) }));

        // Construct the URL for the forecast request.
        const url = new URL(
            `/points/${location.latitude},${location.longitude}`,
            WEATHER_GOV_BASE
        );

        // Execute the fetch request.
        fetch(url.toString())
            .then((res) => res.json())
            .then(({ properties }) => fetch(properties.forecastHourly))
            .then((res) => res.json())
            .then(({ properties }) => {
                const forecasts = properties.periods.reduce(goodForecasts, []);
                // Event is read by <Results/> and <Calendar/> components.
                window.dispatchEvent(new CustomEvent('forecasts', { detail: forecasts }));
            });
    }

    /**
     * Triggers several functions when a location is selected.
     * 
     * @param {Element} $btn - The element selected by the user
     */
    function userChosen($btn = $locations.querySelector('button[tabIndex="0"]')) {
        $input.setAttribute('aria-expanded', false);
        updateTabIndex($btn);
        onLocationSelect(Number($btn.value));
    }

    $input.addEventListener('keydown', (ev) => {
        if (['Enter'].includes(ev.key)) return userChosen();
        keyboardTraverse(ev);
    });

    // When an option in the dropdown is clicked, get city by index.
    $locations.addEventListener('click', (ev) =>  userChosen(ev.target));

    // Load the first option by default.
    onLocationSelect(0);
});
