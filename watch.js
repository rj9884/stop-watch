const display = document.querySelector(".display");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

let min = 0;
let sec = 0;
let msec = 0;
let timerId = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// More accurate timing implementation
function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    cancelAnimationFrame(timerId);
    elapsedTime = Date.now() - startTime;
}

function resetTimer() {
    isRunning = false;
    cancelAnimationFrame(timerId);
    
    min = 0;
    sec = 0;
    msec = 0;
    elapsedTime = 0;
    
    updateDisplay();
}

function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    // Calculate minutes, seconds and milliseconds
    msec = Math.floor((elapsedTime % 1000) / 10);
    sec = Math.floor((elapsedTime / 1000) % 60);
    min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    
    updateDisplay();
    
    if (isRunning) {
        timerId = requestAnimationFrame(updateTimer);
    }
}

function updateDisplay() {
    let mm = min < 10 ? `0${min}` : min;
    let ss = sec < 10 ? `0${sec}` : sec;
    let ms = msec < 10 ? `0${msec}` : msec;
    display.innerHTML = `${mm} : ${ss} : ${ms}`;
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);