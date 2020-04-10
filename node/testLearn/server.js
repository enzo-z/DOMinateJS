const http =  require('http');


const server = http.createServer( (requisition, response) => {
    response.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
    response.end('<h1>OLÁ</h1>');
});

server.listen(3000, '127.0.0.1');