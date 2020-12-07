import items from './menu.json'
import itemsTemplate from './templates/gallery-items.hbs'
import './styles.css';

const dishesList = document.querySelector('.js-menu')
const markup = itemsTemplate(items)
const switchToggle = document.querySelector('.theme-switch__toggle')
const body = document.querySelector("body")

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

dishesList.insertAdjacentHTML('afterbegin', markup)
switchToggle.addEventListener('change', checkboxState)

if (localStorage.getItem("theme")) {
    const checked = JSON.parse(localStorage.getItem("theme"))
    switchToggle.checked = checked
    switchToggle.checked ? onDarkTheme() : onLightTheme()
}

function onDarkTheme() {
    body.classList.add(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
}

function onLightTheme() {
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
}


function checkboxState(event) {
    localStorage.setItem("theme", JSON.stringify(event.target.checked))
    event.target.checked ? onDarkTheme() : onLightTheme()
}
