let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hours = document.querySelector(".hour");
let mins = document.querySelector(".minute");
let secs = document.querySelector(".second");
let hour = 0;
let minute = 0;
let second = 0;

let interval;

start.addEventListener("click", function() {
    interval = setInterval(function(){
        if (second < 59) {
            second += 1;
            secs.innerHTML = second < 10 ? " 0" + second : second;
        } else{
            second = 0;
            secs.innerHTML = second < 10 ? " 0" + second : second;
            if (minute < 59){
                minute += 1;
                mins.innerHTML = minute < 10 ? "0" + minute + ":" : minute + ":";
            } else{
                hour += 1;
                hours.innerHTML = hour < 10 ? "0" + hour + ":" : hour + ":";
            }
        }
    }, 1000);

    start.style.pointerEvents = "none";
});

stop.addEventListener("click", function(){
    clearInterval(interval);
    start.style.pointerEvents = "visible";
});

reset.addEventListener("click", function(){
    location.reload();
});