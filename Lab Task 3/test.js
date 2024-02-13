import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/home') {
        res.end('<h2>B</h2>');
    }
    if (req.url === '/login') {
        res.end('<h2>Lets Login</h2>');
    }
}
);
//scaffolding

server.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);