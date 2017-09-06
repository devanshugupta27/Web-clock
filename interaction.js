const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//Adjusting the hands for the effect of the time as it passes by. If this is not done, at 0945 hrs, hour hand will point to 9 whereas it should be close to 10.
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runClock(){
//Making a function that can update the position of hands every second, by means of rotations.
          hrPosition = hrPosition+(3/360);
          minPosition = minPosition+(6/60);
          secPosition = secPosition+6;

          HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
          MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
          SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
//Use to re-run the function every 1000 milliseconds.
var interval = setInterval(runClock,1000);
