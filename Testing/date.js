var date = new Date();

date.getFullYear();
date.setHours(1);
date.setMonth(2);
date.setDate(12);
console.log("Time: "+date.getFullYear()+"-"+date.getHours()+"-"+date.getDate())


/*
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

