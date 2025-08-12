let timer;
let isRunning = false;
let elapsedTime = 0; // in milliseconds
let startTime;
const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");

// Start Button
document.getElementById("startBtn").addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
    }
});

// Pause Button
document.getElementById("pauseBtn").addEventListener("click", () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
    }
});

// Reset Button
document.getElementById("resetBtn").addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    lapsContainer.innerHTML = "";
});

// Lap Button
document.getElementById("lapBtn").addEventListener("click", () => {
    if (isRunning) {
        const lapTime = display.textContent;
        const li = document.createElement("li");
        li.textContent = lapTime;
        lapsContainer.appendChild(li);
    }
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
