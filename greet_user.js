const form = document.querySelector('.greetingForm'),
    input = form.querySelector('input'),
    greeting = document.querySelector('js-greeting');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';



function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function callName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askForName();
    }
    printGreeting(currentUser);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}


function printGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = 'Hello $(text)';
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    printGreeting(currentValue);
    saveName(currentValue);
}

function init() {
    callName();
}

init();