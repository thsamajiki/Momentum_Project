const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    var date = new Date();
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();