const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, resp) => {
    console.log('Request made on:'+req.url);

    let fileJSON = JSON.parse(fs.readFileSync('./file.json'));
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.end(JSON.stringify(fileJSON));
    
});

server.listen(3000);
console.log('Listening on port: 3000...');
