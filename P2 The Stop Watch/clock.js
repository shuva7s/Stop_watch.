const childs = document.querySelectorAll(".child")

for (let i = 0, deg = -60; i < childs.length; ++i, deg += 30) {
    let radians = deg * (Math.PI / 180);
    childs[i].style.transform = `translate(
        calc(${Math.cos(radians)} * var(--distance)),
        calc(${Math.sin(radians)} * var(--distance))
        )`;
}

const sec = document.querySelector(".sec")
const min = document.querySelector(".min")
const hr = document.querySelector(".hr")
const clock = document.querySelector(".parent")

var startTime;
var stopwatchInterval;

function startStopwatch() {
    stopStopwatch();
    sec.classList.add("secrot");
    min.classList.add("minrot");
    hr.classList.add("hrnrot");
    clock.style.boxShadow = "0 0 2rem 4px rgba(126, 195, 255, 0.5)";
    startTime = new Date().getTime();
    stopwatchInterval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    var minutes = Math.floor(elapsedTime / (1000 * 60));
    var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    var stopwatchDisplay = document.getElementById("stopwatch");
    stopwatchDisplay.textContent = minutes + ":" + seconds + "." + milliseconds;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    sec.classList.remove("secrot");
    min.classList.remove("minrot");
    hr.classList.remove("hrnrot");
    clock.style.boxShadow = "0 0 1.3rem 2px rgba(196, 228, 255, 0.4)";
}

function resetStopwatch() {
    stopStopwatch();
    var stopwatchDisplay = document.getElementById("stopwatch");
    stopwatchDisplay.textContent = "00:00.00";
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");


startButton.addEventListener("click", () => {
    changeState(startButton, stopButton);
})
stopButton.addEventListener("click", () => {
    changeState(stopButton, startButton);
})
resetButton.addEventListener("click", () => {
    changeState(stopButton, startButton);
})

function changeState(hide, visible) {
    hide.style.display = "none";
    visible.style.display = "inline";
}


