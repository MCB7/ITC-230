  

var http = require("http");
const data = require("./data") 
http.createServer(function(req,res) {
  console.log(req.url)
  const url = req.url;
    if (url === "/") {
        res.write("home" + "\n\n");
        res.write(data.getAll());
        res.end();
    
    } else if (url === "/about") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('my name is Morgan Bligh and I am a student at SCC');

      
    } else {
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('404 error not found');
      
    }
}).listen(process.env.PORT || 3000); 