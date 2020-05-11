const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const lightMode = {
    bg: getStyle(html, '--bg'),
    bgPanel: getStyle(html, '--bg-panel'),
    coloHeadings: getStyle(html, '--color-headings'),
    colorText: getStyle(html, '--color-text'),
}

const darkMode = {
    bg: '#1D1F20',
    bgPanel: '#434343',
    coloHeadings: '#B5B5B5',
    colorText: '#B5B5B5',
}

const transformKey = key =>
    '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(lightMode)
})
