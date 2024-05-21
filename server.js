import http from 'http';
import roundRobin from './roundRobin.js';
import { serverConfig } from './config.js';

const servers = serverConfig.servers.map(server => ({
    ...server
}));

const loadBalancerAlgo = 'roundRobin';

const server = http.createServer((req, res) => {
    if (loadBalancerAlgo === 'roundRobin') {
        roundRobin(servers, req, res);
    } else {
        res.writeHead(500);
        res.end('Invalid load balancing algorithm');
    }
});

server.listen(3000, () => {
    console.log('Load balancer running on port 3000');
});
