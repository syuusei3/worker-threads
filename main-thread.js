// Importing the http module from Node.js
const http = require("http");
// Creating a server using the http module.
const server = http.createServer((req, rest) => {
    // If the requested URL is the root ("/"), the server will respond with "Home page".
    if(req.url === "/") {
        rest.writeHead(200, { "Content-Type": "text/plain" });
        rest.end("Home page");
    }else if (req.url === "/slow-page"){
        // If the requested URL is "/slow-page", the server will respond with "Slow page" and a count from the loop. 
        let j = 0;
        for (let i = 0; i < 3000000000; i++){
            // The loop has 3000000000 iterations which is intended to simulate a slow page loading.
            j++;
        }
        rest.writeHead(200, {"Content-Type": "text/plain"});
        rest.end(`Slow page ${j}`);
    }
});
// The server starts listening on port 8000 and logs a message to the console once it's runnin
server.listen(8000, () => console.log("Server is running on port 8000"));