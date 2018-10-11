//use query selector to target the hour arm of the clock, and save it in a JS variable of your choice
var HOURHAND = document.querySelector("#hour");

//use query selector to target the minute arm of the clock, and save it in a JS variable of your choice
var MINUTEHAND = document.querySelector("#minute");

//use query selector to target the minute arm of the clock, and save it in a JS variable of your choice
var SECONDHAND = document.querySelector("#second");

//look at the following reference, and understand how to declare system JS object, Date
//https://www.w3schools.com/jsref/jsref_obj_date.asp
var date = new Date();
console.log(date);

//look at the following reference under object method section, and understand how to extract hourse, minutes and seconds into
//three seperate variables, sec, min, and hr.
//https://www.w3schools.com/jsref/jsref_obj_date.asp
var sec = date.getSeconds();
var min = date.getMinutes();
var hr = date.getHours();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);


//set up three variables, secPoistion, miPosition, and hrPosition
//use the three variables from above, perform mathmatic calculations to change their numeric values into rotation angles.
var secPosition = sec*360/60;
var minPosition = (min*360/60)+(sec*(360/60)/60);
var hrPosition = (hr*360/12)+(min*(360/60)/12);

//for every passing second, update the second, miniute, and hour angles.
function runTheClock() {
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000);
