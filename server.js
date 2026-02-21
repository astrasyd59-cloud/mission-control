const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8899;
const DATA_FILE = path.join(__dirname, 'mc-data.json');
const ACTIVITY_FILE = path.join(__dirname, 'mc-activity.json');

// Initialize data files if they don't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({}));
}
if (!fs.existsSync(ACTIVITY_FILE)) {
    fs.writeFileSync(ACTIVITY_FILE, JSON.stringify([]));
}

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Route: GET /mc/status
    if (pathname === '/mc/status' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
            status: 'online', 
            uptime: process.uptime(), 
            timestamp: new Date().toISOString(),
            health: 'healthy'
        }));
    }
    // Route: GET /mc/data
    else if (pathname === '/mc/data' && req.method === 'GET') {
        try {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read data' }));
        }
    }
    // Route: POST /mc/data
    else if (pathname === '/mc/data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                fs.writeFileSync(DATA_FILE, body);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to write data' }));
            }
        });
    }
    // Route: GET /mc/weather?city=Sydney
    else if (pathname === '/mc/weather' && req.method === 'GET') {
        const city = parsedUrl.query.city || 'Sydney';
        const https = require('https');
        https.get(`https://wttr.in/${city}?format=j1`, (weatherRes) => {
            let weatherData = '';
            weatherRes.on('data', chunk => { weatherData += chunk; });
            weatherRes.on('end', () => {
                try {
                    const parsed = JSON.parse(weatherData);
                    const current = parsed.current_condition[0];
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        city: city,
                        temperature: current.temp_C,
                        condition: current.weatherDesc[0].value,
                        feels_like: current.FeelsLikeC,
                        humidity: current.humidity,
                        wind_speed: current.windspeedKmph
                    }));
                } catch (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Failed to parse weather' }));
                }
            });
        }).on('error', () => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to fetch weather' }));
        });
    }
    // Route: GET /mc/activity
    else if (pathname === '/mc/activity' && req.method === 'GET') {
        try {
            const data = JSON.parse(fs.readFileSync(ACTIVITY_FILE, 'utf8'));
            const last50 = data.slice(-50);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(last50));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read activity' }));
        }
    }
    // Route: POST /mc/activity
    else if (pathname === '/mc/activity' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const activity = JSON.parse(body);
                activity.timestamp = new Date().toISOString();
                const data = JSON.parse(fs.readFileSync(ACTIVITY_FILE, 'utf8'));
                data.push(activity);
                fs.writeFileSync(ACTIVITY_FILE, JSON.stringify(data));
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to write activity' }));
            }
        });
    }
    // Route: Serve mission-control.html
    else if (pathname === '/' && req.method === 'GET') {
        try {
            const html = fs.readFileSync(path.join(__dirname, 'mission-control.html'), 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('mission-control.html not found');
        }
    }
    // 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`🗡️ Mission Control running at http://localhost:${PORT}`);
});
