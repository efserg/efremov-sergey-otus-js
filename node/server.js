const http = require('http');
const {port, hostname} = require('./config.json');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    setTimeout(() => {
        res.end('Ok');
    }, 100);
    console.log("Send");
})
    .listen(port, hostname, () => {
        console.log(`Server is running at http://${hostname}:${port}`)
    });