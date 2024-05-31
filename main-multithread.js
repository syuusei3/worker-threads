// Importing the http module from Node.js
const http = require("http");
// Importing the Worker class from the worker_threads module in Node.js
const { Worker } = require("node:worker_threads");

// Creating a server using the http module
const server = http.createServer((req, rest) => {
    // If the requested URL is the root ("/"), the server will respond with "Home page"
    if(req.url === "/") {
        rest.writeHead(200, { "Content-Type": "text/plain" });
        rest.end("Home page");
    } else if (req.url === "/slow-page") {
        // If the requested URL is "/slow-page", a worker thread is created to handle the request
        const worker = new Worker("./worker-thread.js");
        // When the worker sends a message, the server responds with "Slow page" and the message content
        worker.on("message", (j) => {
            rest.writeHead(200, {"Content-Type": "text/plain"});
            rest.end(`Slow page ${j}`);
        });
    }
});

// The server starts listening on port 8000 and logs a message to the console once it's running
server.listen(8000, () => console.log("Server is running on port 8000"));
