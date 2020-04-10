const fs = require('fs');
const http = require('http');

//Exemplo de pura readStream, fazendo o listening de quando o chunk chega com o event('data') MANUAL
const exampleReadStream = () =>{
    let readStream  = fs.createReadStream(`${__dirname}/readThisStream.txt`, {encoding:"utf8"});

    readStream.on('data', (chunk)=>{
        console.log(`\n--------------------PEDAÇO RECEBIDO DO BUFFER-------------------------------- \n`);
        console.log(chunk);
    });
    

};

//Exemplo de writeStream, escrevendo os dados recebidos de uma readStream. MANUAL
const exampleWriteStream = ()=>{
    let readStream  = fs.createReadStream(`${__dirname}/readThisStream.txt`, {encoding:"utf8"});
    let writeStream = fs.createWriteStream(`${__dirname}/writedThisStream.txt`);

    readStream.on('data', (chunk)=>{
        console.log(`\n----------------------PEDAÇO RECEBIDO DO BUFFER-------------------------------- \n`);
        writeStream.write(chunk);
    });
    

};

//Exemplo de PIPE, which basically pipes the data from a readable stream into a writable stream AUTOMATICALLY
const examplePipe = ()=> {
    let readStream = fs.createReadStream(`${__dirname}/readThisStream.txt`, {encoding:'utf8'});
    let writeStream = fs.createWriteStream(`${__dirname}/writedThisStreamWithPipe.txt`);
    readStream.pipe(writeStream);
};

const exampleServerPiping = () => {
    const server = http.createServer( (request, response) => {
        let readStream = fs.createReadStream(`${__dirname}/readThisStream.txt`, {encoding:'utf8'});
        
        console.log(`A request was made on: ${request.url}`);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        readStream.pipe(response)
    } );

    server.listen(3000, '127.0.0.1');
    console.log('Server is listening on port: 3000');

    
};
