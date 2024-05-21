import http from 'http';
import { serverConfig } from './config.js';

const createServer = (host, port) => {
    http.createServer((req, res) => {
        res.statusCode = 200;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Server response on port: ${port}`);
    }).listen(port, host, () => {
        console.log(`Server running at: http://${host}:${port}`);
    });
};

serverConfig.servers.forEach(server => {
    createServer(server.host, server.port);
});