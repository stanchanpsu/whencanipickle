const MODE_LOCALSTORAGE_KEY = 'mode';
const $button = document.getElementById('mode-switch');

/**
 * Updates the UI to the new mode.
 *
 * @param {String} mode - New mode to apply.
 */
function update(mode: string) {
    if ($button === null) return;
    $button.dataset.mode = mode;
    document.body.style.setProperty('color-scheme', mode);
}

/**
 * Initializes the mode switch.
 * Determines how to set based on saved setting,
 * or OS preference.
 *
 * @param {MediaEvent} ev - Media Event object
 */
function init(ev: MediaQueryList) {
    const storage = localStorage.getItem(MODE_LOCALSTORAGE_KEY);
    if (typeof storage === 'string') return update(storage);
    else if (ev.matches) return update('light');
    else return update('dark');
}

if ($button !== null) {
    $button.addEventListener('click', () => {
        const mode = ['light', 'dark'].find((m) => $button.dataset.mode !== m) || 'light';
        localStorage.setItem(MODE_LOCALSTORAGE_KEY, mode);
        update(mode);
    });
}

// Use a polyfill for matchMedia if needed
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
init(mediaQuery);
