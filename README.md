# worker-threads
If multi-threading is not implemented, a slow page request can block access to the home page, causing significant delays.

When handling requests with a single-threaded worker, each request must be processed one after the other. In a typical scenario, the home page request takes around 2 milliseconds to process.

・Home page 
![image](https://github.com/syuusei3/worker-threads/assets/49019219/e10773f8-2190-474f-929d-1a781639473c)
On the other hand, a slow page request can take anywhere from 3.0 to 8.0 seconds to complete.

・Slow page
![image](https://github.com/syuusei3/worker-threads/assets/49019219/6bf7723b-889b-4382-8865-0020b6755b98)


If a slow page request is made before a home page request, the processing of the home page request will be blocked until the slow page request is finished. This means that instead of the home page loading quickly in 2 milliseconds, it will be delayed by the time it takes to process the slow page, which can be several seconds.

Here's the sequence:

1. Request for the slow page is made.During the slow page processing time, any subsequent requests, including the home page, must wait.
![image](https://github.com/syuusei3/worker-threads/assets/49019219/cb7be8ab-ec67-48f7-8d98-abb321616a6e)

2. Only after the slow page request is completed, the home page request will be processed
![image](https://github.com/syuusei3/worker-threads/assets/49019219/46cb575d-4125-4e74-8181-7061a3d692ab)

Without multi-threading, the slow page request holds up the processing queue, significantly delaying the response time for the home page and any other requests that follow.


If you would like to try no-thread.

'''
node main-thread.js
'''

If you would like to try multi-thread.
'''
node main-multithread.js
'''