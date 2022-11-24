let date = new Date;

export let month = date.getMonth();
export let year = date.getFullYear();
export let day = date.getDay();
export let hour = date.getHours();
export let minutes = date.getMinutes();
export let seconds = date.getSeconds();
export let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function formatHMS() {
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    if (hour < 10) {
        hour = `0${hour}`;
    }
}

formatHMS();

switch(day) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
}

setInterval(() => {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDay();
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    zone = Intl.DateTimeFormat().resolvedOptions().timeZone;


    formatHMS();

    switch(day) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    }
}, 1000)