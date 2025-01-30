const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = '';

    switch (req.url) {
        case '/home':
            filePath = path.join(__dirname, 'public', 'home.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            break;
        case '/about':
            filePath = path.join(__dirname, 'public', 'about.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            break;
        case '/contact':
            filePath = path.join(__dirname, 'public', 'contact.html');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            break;
        default:
            filePath = path.join(__dirname, 'public', '404.html');
            res.writeHead(404, { 'Content-Type': 'text/html' });
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
        } else {
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
