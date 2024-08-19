
const MODE_LOCALSTORAGE_KEY = 'mode';
const $button = document.getElementById('mode-switch');

/**
 * Updates the UI to the new mode.
 * 
 * @param {String} mode - New mode to apply.
 */
function update(mode) {
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
function init(ev) {
    const storage = localStorage.getItem(MODE_LOCALSTORAGE_KEY);
    if (typeof storage === 'string') return update(storage);
    else if (ev.matches) return update('light');
    else return update('dark');
}

$button.addEventListener('click', () => {
    const mode = ['light', 'dark'].find((m) => $button.dataset.mode !== m);
    localStorage.setItem(MODE_LOCALSTORAGE_KEY, mode);
    update(mode);
});

init(window.matchMedia('(prefers-color-scheme: light)'));
