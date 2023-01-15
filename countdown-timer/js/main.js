const monthDisplay = document.querySelector('#month');
const dayDisplay = document.querySelector('#day');
const hourDisplay = document.querySelector('#hour');
const minuteDisplay = document.querySelector('#minute');
const secondDisplay = document.querySelector('#seconds');

function calcMonth(time) {
    return 12 - (time.getMonth() + 1);
}

function calcDay(time) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return months[time.getMonth()] - time.getDate()
}

function calcHour(time) {
    return 23 - time.getHours()
}

function calcMinute(time) {
    return 59 - time.getMinutes()
}

function calcSecond(time) {
    return 59 - time.getSeconds()
}

function showTime() {
    const time = new Date();
    const m = calcMonth(time);
    const d = calcDay(time);
    const h = calcHour(time);
    const min = calcMinute(time);
    const s = calcSecond(time);

    appendTime(m, d, h, min, s);
}

function appendTime(m, d, h, min, s) {
    monthDisplay.innerHTML = m;
    dayDisplay.innerHTML = d;
    hourDisplay.innerHTML = h;
    minuteDisplay.innerHTML = min;
    secondDisplay.innerHTML = s;
}

setInterval(() => { showTime(); }, 1000);
