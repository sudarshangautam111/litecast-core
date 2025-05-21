# litecast-core
 ⚡ Framework-agnostic, ultra-light WebSocket broadcast server that runs on any cPanel or VPS — perfect for real-time apps with zero overhead.

 ---

## 🚀✨ Pro Version Coming Soon

> 🔐 **Upgrade to Pro** for advanced features:
>
> - 🎛️ **Dashboard UI**
> - 🔑 **API Key Generator & Manager**
> - ➕ **Add / Remove Projects Easily**
> - 📜 **Real-time Log Viewer**
>
> 🧑‍💻 Built specifically for **developers** — so you can plug in **Litecast Pro** instantly into any project and start broadcasting events with zero hassle.
>
> 📊 The Pro version provides a full control panel to **generate projects**, manage **API keys**, and **monitor activity logs** — giving you better visibility and management of your real-time infrastructure.

> 📦 Stay tuned — **Litecast Pro** is coming to power your real-time apps like never before!

---


# ⚡️ Litecast Core v1.0 - Community Edition

Litecast Core is a lightweight, real-time WebSocket broadcast server that works with **any web project** — whether you're using Laravel, WordPress, plain HTML, Flask, or something else.

> ✅ Built for developers who want fast, reliable, and **zero-bloat** realtime communication — even on **shared hosting or cPanel**.

---

## 🌟 What is Litecast?

Litecast is a **self-hosted WebSocket server** that lets your backend **broadcast live data** to connected users — like chat messages, new orders, or notifications — using just a simple HTTP request.

You can connect from **any front-end** using JavaScript and instantly listen to those updates in real-time.

---

## 🔥 Key Features

- ✅ **Works with any framework** — Laravel, WordPress, plain HTML, Flask, etc.
- ⚡ **Blazing fast & ultra-lightweight** — runs smoothly on 1-core VPS or shared hosting
- 🛰️ **Broadcast events via HTTP** — your backend sends one POST request, all connected users get it instantly
- 🔐 **API key protection** — secure your server with a secret key
- 🌐 **No dependencies** — no Redis, no Pusher, no vendor lock-in
- 🧩 **Multi-channel support** — listen to different event types on different pages
- 💻 **Frontend ready** — connect using plain WebSocket code or your own wrapper

---

### 🚀 Quick Start Guide

### 1. Download & Set Up

```bash
git clone https://github.com/Snrox/litecast-core.git
cd litecast-core/server
npm install

```

### 2. Create Your .env File

```bash
PORT=3000
API_KEY=secret123

```

### 3. Run the Server

```bash
node server.js

```

### 4. Broadcast Endpoint 

```bash
{your_domain}/broadcast
Ex : http://localhost:3000/broadcast

```

### 📡 Broadcast Example (POST Request)
Send an event using curl or any backend (Node, PHP, Python):

```bash
curl -X POST http://localhost:3000/broadcast
-H "Content-Type: application/json"
-d '{
  "api_key": "secret123",
  "channel": "chat",
  "event": "message",
  "data": {
    "user": "John",
    "message": "Hello from Litecast"
  }
}'
```

### Example HTML Client
examples/basic.html

```bash
<!DOCTYPE html>
<html>
<head>
  <title>Litecast Client</title>
</head>
<body>
  <h2>💬 Chat Channel Realtime Updates</h2>
  <pre id="log"></pre>

  <script>
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      socket.send(JSON.stringify({ subscribe: "chat" }));
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      document.getElementById('log').innerText += `\n${msg.event}: ${JSON.stringify(msg.data)}`;
    };
  </script>
</body>
</html>

*Open this in your browser and see updates instantly.

```
