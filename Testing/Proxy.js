// var Http = require('http');

// var req = Http.request({
//     host: '192.168.1.10',
//     // proxy IP
//     port: 8080,
//     // proxy port
//     method: 'GET',
//     path: 'https://www.vanamco.com/ghostlab/' // full URL as path
//     }, function (res) {
//         res.on('data', function (data) {
//         console.log(data.toString());
//     });
// });

// req.end();


// HTTPS https://www.vanamco.com/2014/06/24/proxy-requests-in-node-js/

var http = require('https');
var ProxyAgent = require('proxy-agent');


// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.http_proxy || 'http://192.168.1.10:8080';  // mitmporxy is what this is for

var opts = {
  method: 'POST',
  host: 'www.google.com',
  path: '/',
  // this is the important part!
  // If no proxyUri is specified, then https://www.npmjs.com/package/proxy-from-env
  // is used to get the proxyUri.
  agent: new ProxyAgent(proxyUri)
};

// the rest works just like any other normal HTTP request
http.get(opts, onresponse);

function onresponse (res) {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
}
