const fs = require('fs');
const https = require('https');
const http = require('http');

const files = ['index.html', 'products.html', 'product-details.html', 'about.html', 'contact.html', 'js/main.js'];

const imgRegex = /(?:src|href|img|imgEl\.src|this\.src)=['"]([^'"]+)['"]/ig;
const extractedUrls = new Set();

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
        if (match[1].startsWith('http')) {
            extractedUrls.add(match[1]);
        }
    }
});

console.log(`Checking ${extractedUrls.size} unique image URLs...`);

async function checkUrl(url) {
    return new Promise((resolve) => {
        const client = url.startsWith('https') ? https : http;
        const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 400 && res.statusCode !== 403) {
                // some sites return 403 but load in browser, let's just log everything broken
                 resolve({ url, status: res.statusCode, ok: false });
            } else if (res.statusCode === 403) {
                // GSM arena returns 403 on hotlink
                resolve({ url, status: res.statusCode, ok: false });
            } else {
                 resolve({ url, status: res.statusCode, ok: true });
            }
        }).on('error', (err) => {
            resolve({ url, error: err.message, ok: false });
        });
        
        req.setTimeout(5000, () => {
            req.abort();
            resolve({ url, error: 'Timeout', ok: false });
        });
    });
}

(async () => {
    const results = [];
    for (const url of extractedUrls) {
        results.push(await checkUrl(url));
    }
    
    console.log('\n--- BLOCKED / BROKEN URLs ---');
    results.filter(r => !r.ok).forEach(r => {
        console.log(`${r.status || 'ERROR'} - ${r.url} - ${r.error || ''}`);
    });
})();
