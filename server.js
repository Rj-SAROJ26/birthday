const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const port = Number(process.env.PORT) || 3000;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp'
};

function findFile(urlPath) {
  const requestPath = decodeURIComponent((urlPath || '/').split('?')[0]);
  const cleanPath = requestPath.replace(/^\/+/,'');

  const candidates = [];
  if (!cleanPath) {
    candidates.push(path.resolve(rootDir, 'index.html'));
  } else {
    const resolvedPath = path.resolve(rootDir, cleanPath);
    candidates.push(resolvedPath);

    if (!path.extname(cleanPath)) {
      candidates.push(path.resolve(rootDir, `${cleanPath}.html`));
      candidates.push(path.resolve(rootDir, cleanPath, 'index.html'));
    }
  }

  for (const candidate of candidates) {
    if (candidate.startsWith(rootDir) && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return null;
}

http.createServer((req, res) => {
  const filePath = findFile(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`Birthday site running at http://localhost:${port}`);
});
