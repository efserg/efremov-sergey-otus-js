const REQUEST_TYPE_KEY = 'type';
const REQUEST_COUNT_KEY = 'N';

const ASYNC_REQUEST = 'async';
const SYNC_REQUEST = 'sync';
const AVAILABLE_REQUEST_TYPES = [ASYNC_REQUEST, SYNC_REQUEST];

const argv = require('minimist')(process.argv.slice(2));

const [requestType, requestCount] = [argv[REQUEST_TYPE_KEY] || SYNC_REQUEST, Number(argv[REQUEST_COUNT_KEY]) || 10];

if (!AVAILABLE_REQUEST_TYPES.includes(requestType)) {
    console.log("Invalid request type. Available types: ", AVAILABLE_REQUEST_TYPES);
    process.exit(1);
}

const http = require('http');
const {port, hostname} = require('./config.json');

const options = {
    host: hostname,
    port
};

const sendRequest = () => new Promise((resolve, reject) => {
        http.get(options, (resp) => {
            let data = '';
            resp.on('data', (chunk) => data += chunk);
            resp.on('end', () => resolve(data));
        }).on("error", (err) => {
            console.log(err);
            return reject(err.message);
        });
    }
);

const executeSync = count => Array
    .from(Array(count).keys())
    .map((i) => sendRequest()
        .then(response => console.log(`${i} ${response}`)));

const executeAsync = count => Promise
    .all(Array.from(Array(count).keys())
        .map(() => sendRequest()))
    .then(console.log);

console.log(`Execute '${requestType}' ${requestCount} times`);

if (requestType === ASYNC_REQUEST) {
    executeAsync(requestCount);
} else if (requestType === SYNC_REQUEST) {
    executeSync(requestCount);
}
