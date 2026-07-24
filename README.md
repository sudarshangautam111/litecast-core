# Litecast Core ⚡

![Litecast Core](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Welcome to **Litecast Core**, a framework-agnostic, ultra-light WebSocket broadcast server. It runs seamlessly on any cPanel or VPS, making it an ideal choice for real-time applications. With zero overhead, Litecast Core ensures your applications remain responsive and efficient.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Framework-Agnostic**: Works with any framework, including Laravel and Node.js.
- **Lightweight**: Minimal resource usage ensures your applications run smoothly.
- **Real-Time Communication**: Ideal for chat applications, live notifications, and more.
- **Easy Deployment**: Set up on cPanel or VPS with ease.
- **Open Source**: Free to use and modify under the MIT License.

## Installation

To get started with Litecast Core, you need to download the latest release. You can find the releases [here](https://github.com/sudarshangautam111/litecast-core/releases). Download the appropriate file for your environment and execute it to get started.

### Requirements

- A cPanel or VPS environment.
- PHP 7.0 or higher.
- Node.js (if using Node.js features).

## Usage

After installation, you can start using Litecast Core for your real-time applications. Below is a basic example of how to initiate a WebSocket server.

```javascript
const Litecast = require('litecast-core');

const server = new Litecast.Server({
    port: 8080,
    path: '/ws'
});

server.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        server.broadcast(message);
    });
    
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

server.start();
console.log('Server is running on ws://localhost:8080/ws');
```

## Configuration

Litecast Core allows you to configure various settings. Here are some common configurations you might want to set:

```json
{
    "port": 8080,
    "path": "/ws",
    "maxConnections": 100
}
```

### Environment Variables

You can also set environment variables for configuration:

- `LITECAST_PORT`: The port for the WebSocket server.
- `LITECAST_PATH`: The path for the WebSocket connection.

## API Reference

### Server

- **`new Litecast.Server(options)`**: Create a new server instance.
- **`server.start()`**: Start the WebSocket server.
- **`server.broadcast(message)`**: Send a message to all connected clients.

### Events

- **`connection`**: Triggered when a new client connects.
- **`message`**: Triggered when a message is received from a client.
- **`close`**: Triggered when a client disconnects.

## Contributing

We welcome contributions to Litecast Core. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch.
5. Open a pull request.

Please ensure your code follows our coding standards and includes appropriate tests.

## License

Litecast Core is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please reach out to us via the issues section on GitHub. You can also connect with the community for support and discussions.

### Visit the Releases

For the latest updates and releases, visit our [Releases](https://github.com/sudarshangautam111/litecast-core/releases) section.

---

Thank you for choosing Litecast Core! We hope it serves your real-time application needs effectively. Happy coding!