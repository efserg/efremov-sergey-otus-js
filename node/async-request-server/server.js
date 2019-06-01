const http = require('http');
const {port, hostname} = require('./config.json');

http.createServer((request, response) => {
    console.log(`Receive request`);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    setTimeout(() => response.end('Received'), 100);
})
    .listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}:${port}`)
    });