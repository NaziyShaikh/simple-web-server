const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

async function serveFile(res, filePath, contentType = 'text/html', statusCode = 200) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(content);
    } catch (error) {
        console.error(`Error serving file ${filePath}:`, error);
        await serveErrorPage(res);
    }
}

async function serveErrorPage(res) {
    const errorPath = path.join(PUBLIC_DIR, '404.html');
    try {
        const content = await fs.readFile(errorPath, 'utf8');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
}

const server = http.createServer(async (req, res) => {
    // Normalize the URL path
    const normalizedPath = req.url.toLowerCase();
    
    // Serve static CSS file
    if (normalizedPath === '/styles.css') {
        try {
            const cssPath = path.join(PUBLIC_DIR, 'styles.css');
            const content = await fs.readFile(cssPath, 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
            return;
        } catch (error) {
            console.error('Error serving CSS:', error);
        }
    }

    // Route handling
    switch (normalizedPath) {
        case '/':
        case '/home':
            await serveFile(res, path.join(PUBLIC_DIR, 'home.html'));
            break;
        case '/about':
            await serveFile(res, path.join(PUBLIC_DIR, 'about.html'));
            break;
        case '/contact':
            await serveFile(res, path.join(PUBLIC_DIR, 'contact.html'));
            break;
        default:
            await serveErrorPage(res);
            break;
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Handle server errors
server.on('error', (error) => {
    console.error('Server error:', error);
});