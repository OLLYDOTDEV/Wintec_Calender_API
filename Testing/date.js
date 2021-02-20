//https://www.w3resource.com/javascript-exercises/javascript-date-exercise-14.php
function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}









var date = new Date();
// set date to start of the year
date.getFullYear();
date.setHours(1);
date.setMonth(0);
date.setDate(1);


for (i = 0; i < days_of_a_year(date.getFullYear()); i++) { // make loop for every day of the year 
console.log('' + date)
console.log("Time: "+date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()); // human readable output for debug
date.setDate(date.getDate() + 1);
}

/*
List of info you can get from date's
new Date().getDate()          // Return the day as a number (1-31)
new Date().getDay()           // Return the weekday as a number (0-6)
new Date().getFullYear()      // Return the four digit year (yyyy)
new Date().getHours()         // Return the hour (0-23)
new Date().getMilliseconds()  // Return the milliseconds (0-999)
new Date().getMinutes()       // Return the minutes (0-59)
new Date().getMonth()         // Return the month (0-11)
new Date().getSeconds()       // Return the seconds (0-59)
new Date().getTime()          // Return the time (milliseconds since January 1, 1970)
*/