Date_List_Generator = () => {


function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}


var yearbydays = new Date();
// set date to start of the year
yearbydays.getFullYear();
yearbydays.setHours(1);
yearbydays.setMonth(0);
yearbydays.setDate(1);


var Dates_Of_year = [];

for (i = 0; i < days_of_a_year(yearbydays.getFullYear()); i++) { // make loop for every day of the year 
  var Set_Date =  yearbydays.getFullYear()+"-"+yearbydays.getMonth()+"-"+yearbydays.getDate();
  Dates_Of_year.push(Set_Date);
//console.log(Set_Date); // human readable output for debug
yearbydays.setDate(yearbydays.getDate() + 1);
}


return Dates_Of_year;
}



Calender_next = (datevalue) => {
  var Dates = Date_List_Generator();
  Dates.forEach(item => console.log(item)) // gets array of dates with in the year then outputs as debug to cli 
  //---------------------
  
  // https://www.foreachjavascript.com/
  Dates.forEach((item, index) => {
    // console.log(item) //value
    // console.log(index) //index


  const https = require('https')
  var ProxyAgent = require('proxy-agent');
  var querystring = require('querystring');
  fs = require('fs');
  // HTTP, HTTPS, or SOCKS proxy to use
  var proxyUri = process.env.http_proxy || 'http://192.168.1.10:8080';  // mitmporxy is what this is for
  const data = querystring.stringify({
      __EVENTTARGET: '__Page',
      __EVENTARGUMENT: '',
      __LASTFOCUS: '/wEPDwUKLTY4MTc4OTgyMQ9kFgJmD2QWAgIDD2QWAgIBD2QWAgIHDxYCHgRUZXh0ZWRkaMqPnjqKjYbt2+YNS/UID/PHl6Dzm3iukbwV3Kk9Cus=',
      __VIEWSTATE: ' 5172F523',
      __EVENTVALIDATION: '/wEdAAMVV8goitaZdmqSylj8gXBPkLSE7BpPorAFj4r4SV8gRt8BdlG8xmWRNqro4Q17n6gg9hAUnZF0DhlEXGpuDghaUKt0biN4f4RiFtr0qgDDuw==',
      ctl00$MainContent$DateTextBox: `${item}`,
    // ctl00$MainContent$OverrideWeek: '2021-01-04'
  
  
  
  
      
  })
  
  
  
  
  const options = {
   hostname: 'timetable.wintec.ac.nz',
   port: '443', // what port
   path: '/student/2021/Reports/Calendar.aspx',
   method: 'Post',
   headers: {
   'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0',
   'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
   'Accept-Language' : 'en-US,en;q=0.5',
   'Accept-Encoding' : 'gzip, deflate, br',
   'Content-Type' : 'application/x-www-form-urlencoded',
   'Connection' : 'keep-alive',
   'Referer' : 'https://timetable.wintec.ac.nz/student/2021/Reports/Calendar.aspx',
   'Cookie' : 'ASP.NET_SessionId=4vevhveergycm1puy3fxo51z',
   'Upgrade-Insecure-Requests' : '1',
  
   },
   agent: new ProxyAgent(proxyUri)
  }
  
  const req = https.request(options, res => {
   console.log(res.statusCode, res.headers);
  
  
  
   let data = [];
  
   res.on('data', (chunk) => {
      console.log(Buffer.from(chunk).toString())
      data.push(Buffer.from(chunk).toString())
  
    });
  
   res.on("end", () => {
    // https://stackoverflow.com/a/43370201 
    // 
  
  
  
    var stream = fs.createWriteStream(`Responces/Calender_Responses/${item}.txt`, {flags:'w'}); // 
    stream.write(data + ""); // hacky way to convert to string but without "" it toString(data) would only write [object Undefined] to file as 
  
    stream.end();
  
  
  });
  
  
  
  
  
  
  })
  
  req.on('error', error => {
   console.error(error)
  })
  
  req.write(data)
  req.end();
  
  


 })
}



Calender_next();




