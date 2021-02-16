 
// take raw HTTP captcha conver to node js





const https = require('https')
var ProxyAgent = require('proxy-agent');
var querystring = require('querystring');

// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.http_proxy || 'http://192.168.1.10:8080';  // mitmporxy is what this is for
const data = querystring.stringify({
    __EVENTTARGET: '__Page',
    __EVENTARGUMENT: '',
    __LASTFOCUS: '/wEPDwUKLTY4MTc4OTgyMQ9kFgJmD2QWAgIDD2QWAgIBD2QWAgIHDxYCHgRUZXh0ZWRkaMqPnjqKjYbt2+YNS/UID/PHl6Dzm3iukbwV3Kk9Cus=',
    __VIEWSTATE: ' 5172F523',
    __EVENTVALIDATION: '/wEdAAMVV8goitaZdmqSylj8gXBPkLSE7BpPorAFj4r4SV8gRt8BdlG8xmWRNqro4Q17n6gg9hAUnZF0DhlEXGpuDghaUKt0biN4f4RiFtr0qgDDuw==',
    ctl00$MainContent$DateTextBox: '2021-01-18',
    ctl00$MainContent$OverrideWeek: '2021-01-04'




    
})




const options = {
 hostname: 'timetable.wintec.ac.nz',
 port: '443', // what port
 path: '/student/2021/Reports/Calendar.aspx',
 method: 'Get',
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



 res.on('data', d => {
   process.stdout.write(d)
 })
})

req.on('error', error => {
 console.error(error)
})

req.write(data)
req.end()