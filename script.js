// time data 
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

// buttons 
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval;

startButton.addEventListener('click', (e) => {
    if(interval) clearInterval(interval)
    interval = setInterval(startTimer, 10)
});

pauseButton.addEventListener('click', (e) => {
    if(interval) clearInterval(interval)    
});

 resetButton.addEventListener('click', (e) => {
    if(interval) clearInterval(interval)
   crearTime()

});

//main function
function startTimer() {
    millisecond++

// MIlliseconds
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }

//seconds
    if (second < 9) {
        secondElement.innerText = '0' + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
     }
//minutes
    if (minute < 9) {
        minuteElement.innerText = '0' + minute
    }
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    if (minute >59) {
        hour++
        hourElement.innerText = '0' + hour
        minute = 0
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }
// hours
    if (hour < 9) {
        hourElement.innerText = '0' + hour
    }
    if (hour > 9) {
        hourElement.innerText = hour
    }
    
};

// reset time function
function crearTime() {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
};