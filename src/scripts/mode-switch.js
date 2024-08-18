
const MODE_LOCALSTORAGE_KEY = 'mode';
const $button = document.getElementById('mode-switch');

let mode = localStorage.getItem(MODE_LOCALSTORAGE_KEY);

function update() {
    $button.dataset.mode = mode;
    document.body.style.setProperty('color-scheme', mode);
}

function init(ev) {
    mode = ev.matches ? 'light' : 'dark';
    update();
}

$button.addEventListener('click', () => {
    mode = ['light', 'dark'].find((m) => mode !== m);
    update();
});

init(window.matchMedia('(prefers-color-scheme: light)'));

