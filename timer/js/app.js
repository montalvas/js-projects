const display = document.querySelector('.display-timer');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let hour = 0, min = 0, sec = 0, timer;

start.addEventListener('click', () => {
    removeClass(display);
    clearInterval(timer);

    timer = setInterval(function() { 
        startTimer();
        insertTimer(display)
     }, 1000);
});

pause.addEventListener('click', () => {
    addClass(display);
    clearInterval(timer);
});

reset.addEventListener('click', () => {
    removeClass(display);
    clearInterval(timer);
    resetDisplay(display);
});

function startTimer() {
    sec++;
    if (sec > 59) { min++; sec = 0; }
    if (min > 59) { hour++; min = 0; }
}

function insertTimer(display) {
    const h = formatTime(hour);
    const m = formatTime(min);
    const s = formatTime(sec);
    const timer = `${h}:${m}:${s}`;

    display.innerText = timer;
}

function formatTime(t) {
    const ft = t > 9 ? t : '0' + t;
    return ft
}

function removeClass(display) {
    if (display.classList.contains('time-stop')) {
        display.classList.remove('time-stop');
    }
}

function addClass(display) {
    if (!display.classList.contains('time-stop')) {
        display.classList.add('time-stop');
    }
}

function resetDisplay(display) {
    clearInterval(timer);

    hour = 0, min = 0, sec = 0;
    
    insertTimer(display);
}