const displayTimer = document.querySelector('.display-timer');
let timer;
let sec = 0;

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('start')) {
        clearInterval(timer);
        startTimer(displayTimer);

        timer = setInterval(function() {
            displayTimer.innerText = getTime();
        }, 1000);
    }

    if (el.classList.contains('pause')) {
        clearInterval(timer);
        stopTimer(displayTimer);
    }

    if (el.classList.contains('reset')) {
        clearInterval(timer);
        startTimer(displayTimer);
        sec = 0;
        displayTimer.innerText = '00:00:00';
    }
});

function getTime() {
    sec++;
    const date = new Date(sec * 1000);
    const time = date.toLocaleTimeString('pt-br', {
        timeZone: 'GMT',
        hour12: false
    });

    return time
}

function startTimer(el) {
    if (el.classList.contains('time-stop')) el.classList.remove('time-stop');
}

function stopTimer(el) {
    if (!el.classList.contains('time-stop')) el.classList.add('time-stop');
}
