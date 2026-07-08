import { WebSocketServer } from "ws";

const PORT = 3001;
const wss = new WebSocketServer({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

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
