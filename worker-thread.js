const { parentPort } = require("node:worker_threads");

let j = 0;
for (let i = 0; i < 3000000000; i++){
    // The loop has 3000000000 iterations which is intended to simulate a slow page loading.
    j++;
}

parentPort.postMessage(j);
