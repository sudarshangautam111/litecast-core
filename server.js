require("dotenv").config();
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "secret123";

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const channels = {};

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    try {
      const payload = JSON.parse(msg);
      if (payload.subscribe) {
        const channel = payload.subscribe;
        if (!channels[channel]) channels[channel] = [];
        channels[channel].push(ws);
      }
    } catch (e) {
      console.log("Invalid subscribe message");
    }
  });

  ws.on("close", () => {
    for (const channel in channels) {
      channels[channel] = channels[channel].filter((c) => c !== ws);
    }
  });
});

app.post("/broadcast", (req, res) => {
  const { api_key, channel, event, data } = req.body;

  console.log("API KEY sent:", req.body.api_key);
  console.log("Expected KEY:", API_KEY);

  if (api_key !== API_KEY) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const message = JSON.stringify({ event, data });
  if (channels[channel]) {
    channels[channel] = channels[channel].filter(
      (c) => c.readyState === WebSocket.OPEN
    );
    channels[channel].forEach((client) => client.send(message));
  }

  res.json({ success: true });
});

server.listen(PORT, () => {
  console.log(`Litecast server running at http://localhost:${PORT}`);
});
