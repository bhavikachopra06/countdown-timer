let time = 0;
let timerDays = 0;
let timerHours = 0;
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval = 0;  



const addTrailingZero = (num) => {
    return num < 10 ? `0${num}` : num;
}; 


const getTime = () => {
    days = parseInt(window.prompt("Enter days"));
    hours = parseInt(window.prompt("Enter hours"));
    minutes = parseInt(window.prompt("Enter minutes"));
    seconds = parseInt(window.prompt("Enter seconds"));

    
    time = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
    
    setTime();
};



const setTime = () => {
    timerDays = Math.floor(time / 86400);
    timerHours = Math.floor((time % 86400) / 3600);
    timerMinutes = Math.floor((time % 3600) / 60);
    timerSeconds = Math.floor(time % 60);

    
    $("#timer-days").html(addTrailingZero(timerDays));   
    $("#timer-hours").html(addTrailingZero(timerHours));
    $("#timer-minutes").html(addTrailingZero(timerMinutes));
    $("#timer-seconds").html(addTrailingZero(timerSeconds));
};

const timer = () => {
    time--;
    if (time === 0) {
        stopTime();
        timeup();
    }

    
    timerDays = Math.floor(time / 86400);
    timerHours = Math.floor((time % 86400) / 3600);
    timerMinutes = Math.floor((time % 3600) / 60);
    timerSeconds = Math.floor(time % 60);

    $("#timer-days").html(addTrailingZero(timerDays));
    $("#timer-hours").html(addTrailingZero(timerHours));
    $("#timer-minutes").html(addTrailingZero(timerMinutes));
    $("#timer-seconds").html(addTrailingZero(timerSeconds));

    timeup(); 
};

const startTime = () => {
  
    if (time === 0) {
        getTime();
    } else {
        timerInterval = setInterval(timer, 1000);
        $("#start-timer").hide();
        $("#stop-timer").show();
    }
};

const stopTime = () => {
    clearInterval(timerInterval);
    $("#start-timer").show();
    $("#stop-timer").hide();
};

const resetTime = () => {
    stopTime();
    time = 0;
    setTime();
};


const timeup = () => {
    if (time === 0) {
        stopTime();
        beep.play();
        setTimeout(() =>{
            beep.pause();
            beep.currentTime = 0;

        },5000);
  
        
    }
};



$("#start-timer").click(() => {
    startTime();
});

$("#stop-timer").click(() => {
    stopTime();
});

$("#reset-timer").click(() => {
    resetTime();
});
beep = new Audio("beep.mp3");