type MessageHandler = (data: string) => void;

let ws: WebSocket | null = null;
const listeners = new Set<MessageHandler>();

const WS_URL = location.protocol === "https:" ? `wss://${location.host}` : `ws://${location.host}`;

export const connectSocket = () => {
  if (ws?.readyState === WebSocket.OPEN) return;

  ws = new WebSocket(WS_URL);

  ws.onopen = () => {
    console.log("WebSocket connected");
  };

  ws.onmessage = (event) => {
    listeners.forEach((fn) => fn(event.data));
  };

  ws.onclose = () => {
    console.log("WebSocket disconnected, reconnecting in 2s...");
    setTimeout(connectSocket, 2000);
  };

  ws.onerror = () => {
    ws?.close();
  };
};

export const sendMessage = (data: string) => {
  if (ws?.readyState === WebSocket.OPEN) {
    ws.send(data);
  }
};

export const onMessage = (fn: MessageHandler) => {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
};
