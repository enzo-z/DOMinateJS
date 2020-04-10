const fs = require('fs');
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log('Request made on:'+request.url);
    
    response.writeHead(200, {'Content-Type':'text/html'});
    let readStream = fs.createReadStream(`${__dirname}/index.html`, {encoding:'utf8'});
    readStream.pipe(response);
    
    
    
}); 


const port = 1234;
server.listen(port, '127.0.0.1', () => {
    console.log(`Listening on port: ${port}...`);
    
});