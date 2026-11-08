import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..", "out");
const PORT = process.env.PORT || 3001;

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".mjs": "application/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=UTF-8",
  ".xml": "application/xml; charset=UTF-8",
  ".webmanifest": "application/manifest+json; charset=UTF-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);
  let filePath = path.join(ROOT_DIR, pathname);

  // Normalize path traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  // If request is a directory without trailing slash, redirect to trailing slash
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory() && !pathname.endsWith("/")) {
    res.writeHead(301, { Location: `${pathname}/${parsedUrl.search}` });
    res.end();
    return;
  }

  // Handle directory requests -> index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  } else if (!fs.existsSync(filePath) && fs.existsSync(`${filePath}.html`)) {
    filePath = `${filePath}.html`;
  } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, "index.html"))) {
    filePath = path.join(filePath, "index.html");
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    // Disable caching in preview mode so rebuilds never serve stale or mismatched assets
    res.writeHead(200, {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } else {
    console.warn(`[404] Not Found: ${pathname}`);
    // 404 Fallback
    const notFoundPath = path.join(ROOT_DIR, "404.html");
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      });
      fs.createReadStream(notFoundPath).pipe(res);
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`✓ Production Static Preview running at http://localhost:${PORT}`);
  console.log(`✓ Serving from: ${ROOT_DIR}`);
});
