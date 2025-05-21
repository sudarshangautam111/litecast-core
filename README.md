# litecast-core
 ⚡ Framework-agnostic, ultra-light WebSocket broadcast server that runs on any cPanel or VPS — perfect for real-time apps with zero overhead.

# ⚡️ Litecast Core v1.0 — Community Edition

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

## 🚀 Quick Start Guide

### 1. Download & Set Up

```bash
git clone https://github.com/Snrox/litecast-core.git
cd litecast-core/server
npm install
cp .env.example .env

