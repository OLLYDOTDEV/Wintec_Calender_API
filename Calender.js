


const https = require('https')
var ProxyAgent = require('proxy-agent');
var querystring = require('querystring');

// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.http_proxy || 'http://192.168.1.10:8080';  // mitmporxy is what this is for

const options = {
 hostname: 'timetable.wintec.ac.nz',
 port: '443', // what port
 path: '/student/2021/Reports/Calendar.aspx',
 method: 'Get',
 headers: {
   'Accept-Encoding' : 'deflate, gzip, zstd',  
   'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0',
   'Cookie' : 'ASP.NET_SessionId=4vevhveergycm1puy3fxo51z',
   'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
   'Accept-Language' : 'en-US,en;q=0.5',
   'Referer' : 'https://timetable.wintec.ac.nz/student/2021/',
   'Connection' : 'keep-alive',
   'Upgrade-Insecure-Requests' : '1',
   'Cache-Control' : 'max-age=0',
   'content-length' : '0'

   
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

req.end()