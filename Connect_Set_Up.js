

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
      tLinkType: 'information'

    })
    
    const options = {
      hostname: 'timetable.wintec.ac.nz',
      port: '443', // what port
      path: '/student/2021/',
      method: 'POST',
      headers: {
        'Host' : 'timetable.wintec.ac.nz',
       'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0',
       'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
       'Accept-Language' : 'en-US,en;q=0.5',
       'Accept-Encoding' : 'gzip, deflate',
       'Content-Type' : 'application/x-www-form-urlencoded',
        //'Content-Length': '22250',
        'Origin' : 'http://timetable.wintec.ac.nz',
       'Connection' : 'keep-alive',
        'Referer' : 'http://timetable.wintec.ac.nz/student/2021/',
        'Cookie' : 'ASP.NET_SessionId=4vevhveergycm1puy3fxo51z',
        'Upgrade-Insecure-Requests' : '1'
    
    
    
    
    
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
    //   var stream = fs.createWriteStream("Responces/Form_Responses/Connection.txt", {flags:'w'});
    //       stream.write(data + "");
    
    //   stream.end();
    
    
    });
    
    
    
    
    
    
    
    
      
    })
    
    req.on('error', error => {
      console.error(error)
    })
    
    req.write(data)
    req.end()
    
     
    }
    
    
    
    Student_Set();
    
    