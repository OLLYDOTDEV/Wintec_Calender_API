Student_Set = ()=> {


const https = require('https')
 var ProxyAgent = require('proxy-agent');
 var querystring = require('querystring');
 fs = require('fs');
// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.http_proxy || 'http://192.168.1.10:8080';  // mitmporxy is what this is for
const data = querystring.stringify({
  __EVENTTARGET: 'LinkBtn_student_sets',
  __EVENTARGUMENT: '',
  __VIEWSTATE: '/wEPDwULLTIwNzM0MTAzODQPZBYCAgMPZBYGAgMPDxYEHglEaXJlY3Rpb24LKipTeXN0ZW0uV2ViLlVJLldlYkNvbnRyb2xzLkNvbnRlbnREaXJlY3Rpb24BHgRfIVNCAoCACGRkAgUPZBYiAgEPZBYCAgEPDxYCHgRUZXh0BQtJbmZvcm1hdGlvbmRkAgMPDxYEHghDc3NDbGFzc2UfAQICZBYCAgEPDxYGHwMFB0luZm9Cb3gfAgXMAzxoMz5XZWxjb21lIHRvIFdpbnRlYyBUaW1ldGFibGVzPC9oMz48YnI+IDxiPkZpcnN0IHRpbWUgdXNpbmcgV2ludGVjIFRpbWV0YWJsZXM/PC9iPiA8cD5Gb3IgaGVscCB1c2luZyBXaW50ZWMgVGltZXRhYmxlcywgcGxlYXNlIGNoZWNrIG91dCBvdXIgZ3VpZGVzIGZ1cnRoZXIgZG93biB0aGUgcGFnZS48L3A+IDxwPlRvIGdldCBzdGFydGVkIHBsZWFzZSBjbGljayBvbiB0aGUgeWVsbG93ICJNb2R1bGVzIiBvciAiU3R1ZGVudCBTZXRzIiB0YWJzIGFib3ZlLjwvcD4gPHA+IDxzdHJvbmc+TW9kdWxlczwvc3Ryb25nPiAtIENyZWF0ZSBhIHRpbWV0YWJsZSBmb3Igb25seSBzZWxlY3RlZCBtb2R1bGVzIChwYXBlcnMgeW914oCZcmUgZW5yb2xsZWQgaW4pLjxicj4gPHN0cm9uZz5TdHVkZW50IFNldHM8L3N0cm9uZz4gLSBUaGUgZWFzeSB3YXkgdG8gdmlldyB5b3VyIFdpbnRlYyBUaW1ldGFibGUuPC9wPg0NDQ0fAQICZGQCBQ8PFgIeB1Zpc2libGVoZBYCAgMPEGRkFgBkAgcPDxYCHwRoZBYCAgMPEGRkFgBkAgkPDxYCHwRoZGQCCw8PFgIfBGhkFgICAw8QZGQWAGQCDQ8PFgIfBGhkZAIPDw8WAh8EaGRkAhEPDxYCHwRoZBYCAgMPEGRkFgBkAhMPDxYCHwRoZBYCAgMPEGRkFgBkAhUPZBYCAgcPPCsACgEADxYCHgJTRBYBBgDABeXal8oIZGQCFw9kFgICBw88KwAKAQAPFgIfBRYBBgDABeXal8oIZGQCGQ8PFgIfBGhkFgICAw8QZGQWAGQCGw8PFgIfBGhkFgICAw8QZGQWAGQCHQ8PFgIfBGhkFgICAw8QZGQWAGQCHw8PFgIfBGhkFgICAw8QZGQWAGQCIQ9kFgQCAQ8PFgIfBGhkZAIDDw8WAh8EaGRkAgcPDxYCHwRoZGRk/yyl1+8Ajzbm2yhy7nEVgFxI07euHrdW256Uhj5N/qE=',
  _VIEWSTATEGENERATOR: '5B54BAEA&',
  __EVENTVALIDATION: '/wEdAAXs+tw3mZagkDhRlFp145w10P7WeBx9oxOQJqI/Lb5eWGJPBMr9YehrPnp7RCL6J/bSrGHXbXF7+Wbw3dY6scGuu5ocTzjm3NhwXXh6grQMPziYIfv4+zaWPt/c6e/0kGrlmaVSxLrDzg4QVdytqg7P',
  tLinkType: 'information',


 // dlFilter: '%',
 // tWildcard: 'CEID',
 // dlObject: '#SPLUS837D69',
  //lbWeeks: 't',
//  lbDays: '1-5;1;2;3;4;5',
 // dlPeriod: '1-24;1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;21;2;23;24',
//  dlType: 'student_set_grid;cyon_reports_calendar_url;dummy',
//  bGetTimetable: 'View+Timetable'


})

const options = {
  hostname: 'timetable.wintec.ac.nz',
  port: '443', // what port
  path: '/student/2021/',
  method: 'POST',
  headers: {
    
    'Accept-Encoding' : 'gzip, deflate, br',
    'Connection' : 'keep-alive',
    'Cache-Control' : 'max-age=0',
    'Origin' : 'https://timetable.wintec.ac.nz',
    'Upgrade-Insecure-Requests' : '1',
    'DNT' : '1',
    'Content-Type' : 'application/x-www-form-urlencoded',
    'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site' : 'same-origin',
    'Sec-Fetch-Mode' : 'navigate',
    'Sec-Fetch-User' : '?1',
    'Sec-Fetch-Dest' : 'document',
    'Referer' : 'https://timetable.wintec.ac.nz/student/2021/',
    'Accept-Language' : 'en-US,en;q=0.9',
    'Cookie' : 'ASP.NET_SessionId=4vevhveergycm1puy3fxo51z',
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
  var stream = fs.createWriteStream("Responces/Form_Responses/StudentSets.txt", {flags:'w'});
      stream.write(data + "");

  stream.end();


});








  
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

 
}// End of StudentSet Function  



Student_Set();
