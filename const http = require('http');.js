const http = require('http');
var data = require('./data');
var module2 = require('./module2');
const fs = require('fs');
const hostname = '127.0.0.1'
const port = 3000;

fs.readFile('data.js', (err,javascript) => {
    if(err){
        throw err;
    }


const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(module.x);
    data.people();
    res.end();

});

server.listen(port, hostname, () => {
    console.log('Server started on port' +port);
});
});
