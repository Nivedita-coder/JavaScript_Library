var targetDate = moment('2020-07-12T17:06');
var interval;
var $days = $("#days"),
    $hours = $("#hours"),
    $minutes = $("#minutes"),
    $seconds = $("#seconds");
var endTime = document.getElementById("endTime");
var countdownHeading = document.getElementById("countdown-heading");


// for debudgging
console.log("end",document.getElementById(countdownHeading));
console.log(targetDate);


// function for getting end time entered by client
var receiveEndTime = () => {
    targetDate = moment(endTime.value);
    countdownHeading.textContent = "Let's Countdown... ";

    // function which repetedly calls itself after every 10 millisec 
    interval = setInterval(() => {
        var now = moment();
        var timeDifference = moment.duration(targetDate.diff(now));
        updateClock(timeDifference);
    }, 10);

    // for debudgging
    console.log(endTime.value);
    console.log(targetDate)
}


// function which updates the countdown in UI
var updateClock = (timeDifference) => {

    // if the time entered has alredy passed stop setInterval function(self calling func)
    // make changes to UI
    if (timeDifference._milliseconds <= 0) {
        clearInterval(interval);
        let str = "0";
        countdownHeading.textContent = "OOPS!\t This time has alredy passed";
        $("#days").text(padNumber(str));
        $("#hours").text(padNumber(str));
        $("#minutes").text(padNumber(str));
        $("#seconds").text(padNumber(str));
        return;
    }


    let days = Math.floor(timeDifference.asDays()),
        hrs = Math.floor(timeDifference.asHours()) % 24,
        mins = Math.floor(timeDifference.asMinutes()) % 60,
        secs = Math.floor(timeDifference.asSeconds()) % 60;

    $("#days").text(padNumber(days));
    $("#hours").text(padNumber(hrs));
    $("#minutes").text(padNumber(mins));
    $("#seconds").text(padNumber(secs));
}
//
// <<<<<<< HEAD
//
// // if there is a single digit left like 2 seconds append zero to it ie 02
// =======
// <<<<<<< HEAD
// =======
//
// >>>>>>> bcff3bd9b1d902d19e8d5057cce4d6ad91641b7f
// // if there is a single digit left like 2 seconds append zero to it make 02
// >>>>>>> 13e7574ada579cffe80425db6323f44b03e398fa
var padNumber = (number) => {
    var paddedNumber = number;
    if (number < 10) {
        paddedNumber = "0" + number;
    }
    return paddedNumber;
}
