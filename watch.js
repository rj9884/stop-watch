const display = document.querySelector(".display");
const strtBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");


let min = 0;
let sec = 0;
let msec = 0;
let timerId = null;
let setTimer = ()=>{
    msec++;
    if(msec === 100){
        msec = 0;
        sec++;
        if(sec === 60){
            sec = 0;
            min++;
        }
    }
    let mm = min < 10 ? `0${min}` : min;
    let ss = sec < 10 ? `0${sec}` : sec;
    let mss = msec < 10 ? `0${msec}` : msec;
    display.innerHTML = `${mm} : ${ss} : ${mss}`;
};
strtBtn.addEventListener("click",()=>{
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(setTimer, 10);
    
});
stopBtn.addEventListener("click", ()=>{
    clearInterval(timerId);
    
});
resetBtn.addEventListener("click", ()=>{
    clearInterval(timerId);
    display.innerHTML = "00 : 00 : 00";
})

