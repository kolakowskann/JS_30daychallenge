var secondhand = document.querySelector('.seconds');
var minutehand = document.querySelector('.minutes');
var hourhand = document.querySelector('.hours');
now = new Date();

var setupClock = function () {
    var secs = now.getSeconds(),
        mins = now.getMinutes() * 60,
        hours = now.getHours() * 3600;

    console.log(hours, mins, secs);

    secondhand.style.animationDelay = '-' + secs + 's';
    minutehand.style.animationDelay = '-' + mins + 's';
    hourhand.style.animationDelay = '-' + hours + 's';

}

setupClock();
