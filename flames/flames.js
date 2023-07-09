const button = document.querySelector('#button');
const player = document.querySelector('#player');
const countdown = document.querySelector('#countdown');

document.addEventListener('DOMContentLoaded', () => {
    player.pause()
})

button.addEventListener("click", timer)

    const time = 1;
    let amountTime = time * 20;
    let numberOfClick = 0;
    let timeID;

function timer() {
    player.play()
    numberOfClick++

    if (numberOfClick%2 != 0) {
        button.textContent = "PAUSE";
        timeID = setInterval(calculate, 1000)
    }

    else {
        button.textContent = "RESUME";
        clearInterval(timeID);
        player.pause();
    }

}

function calculate() {
    let minute = Math.floor(amountTime/60);
    let second = amountTime%60;

    if (second < 10) {
        second = "0" + second;
    }

    countdown.textContent = `${minute} : ${second}`;
    amountTime--
    if (amountTime < 0) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(timeID);
    player.pause();
    button.textContent = "START";
    countdown.textContent = "Relax again?";
    numberOfClick = 0;
    amountTime = time * 10;
}