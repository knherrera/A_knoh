/*
   Event Timer
   Author: profhamachi
   Date:   1/10/2022

*/
showClock();
setInterval("showClock()", 1000);

/* Function to create and run the countdown clock */
function showClock() {
   /* Store the current date and time */
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + " " + localTime + "</span>";

   var j4Date = nextClassDay(thisDay);
   j4Date.setHours(18);

   /* Calculate the days, hours, minutes, and seconds until specified date and time */
   var days = (j4Date - thisDay)/(1000*60*60*24);
   var hrs = (days - Math.floor(days))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;

   /* Display the time left until specified date at 6p */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextClassDay(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("6/20/22");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear);
   return jDate;
}