import * as clockData from "./clock.js";
import * as domElements from "./dom.js";

domElements.timeDisplay.innerText = `Local time: ${clockData.hour}:${clockData.minutes}:${clockData.seconds}`;
domElements.dayoftheweekDisplay.innerText = `Day of the week: ${clockData.day}`;
domElements.yearDisplay.innerText = `Year: ${clockData.year}`;
domElements.timezoneDisplay.innerText = `Time zone: ${clockData.zone}`;


setInterval(() => {
    domElements.timeDisplay.innerText = `Local time: ${clockData.hour}:${clockData.minutes}:${clockData.seconds}`;
    domElements.dayoftheweekDisplay.innerText = `Day of the week: ${clockData.day}`;
    domElements.yearDisplay.innerText = `Year: ${clockData.year}`;
    domElements.timezoneDisplay.innerText = `Time zone: ${clockData.zone}`;
}, 1000);