const http = require('http');
var data = require('./data');

const fs = require('fs');
const hostname = '127.0.0.1'
const port = 3000;

fs.readFile('index.html', (err, html) => {
    if(err){
        throw err;
    }


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('hello');
    res.write(html);
    data.people();
    res.write(javascript);
    res.end();

    });

    server.listen(port, hostname, () => {
    console.log('Server started on port' +port);
    });
});


 





