import { WebSocketServer } from "ws";
import { readFileSync, existsSync } from "fs";
import { createServer } from "https";
import { createServer as createHttpServer } from "http";
import { extname, join, resolve } from "path";

const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === "production";

let server;
if (process.env.RENDER) {
  server = createHttpServer();
} else if (existsSync("../localhost-key.pem")) {
  server = createHttpServer();
} else {
  server = createHttpServer();
}

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const msg = data.toString();
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(msg);
      }
    });
  });
});

if (isProduction) {
  const distDir = resolve("dist");
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".json": "application/json",
  };

  server.on("request", (req, res) => {
    let path = req.url === "/" ? "/index.html" : req.url;
    const filePath = join(distDir, path);

    if (existsSync(filePath)) {
      const ext = extname(filePath);
      const contentType = mimeTypes[ext] || "application/octet-stream";
      const content = readFileSync(filePath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    } else {
      const content = readFileSync(join(distDir, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
