// components/NodeExpressQuestions.tsx
import React from "react";

export default function NodeExpressQuestions() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        Node.js &amp; Express.js Interview Questions
      </h2>

      <p className="text-center text-gray-600 mb-6">
        From event loop fundamentals to Express.js middleware &amp; API design
      </p>

      {/* ==================== NODE.JS BASICS ==================== */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">Node.js Basics</h3>
        <div className="space-y-4">
          <div>
            <strong>1. What is Node.js and how does it work?</strong>
            <p className="mt-1 text-gray-700">Node.js is an open-source, cross-platform runtime environment that executes JavaScript code on the server side[reference:0]. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight and efficient[reference:1].</p>
            <p className="mt-1 text-gray-700">Node.js works on a single-threaded, event-driven architecture using the V8 engine (compiles JS to machine code), the event loop (handles asynchronous tasks without blocking), and the libuv library (provides a thread pool for background tasks like file system and networking operations)[reference:2].</p>
          </div>
          <div>
            <strong>2. What is NPM and what does it stand for?</strong>
            <p className="mt-1 text-gray-700">NPM stands for Node Package Manager. It is used in Node.js to install and manage packages (libraries or dependencies) required for JavaScript applications. It uses package.json to manage project dependencies and metadata and works through CLI commands like npm install, npm update, and npm uninstall[reference:3].</p>
          </div>
          <div>
            <strong>3. Why is Node.js single-threaded? How does it handle concurrency?</strong>
            <p className="mt-1 text-gray-700">Node.js is single-threaded because it is based on the asynchronous, non-blocking nature of JavaScript. This design makes it simpler to develop and maintain, allowing Node.js to handle many concurrent requests efficiently[reference:4]. It handles concurrency through its event-driven, non-blocking I/O model: I/O operations run asynchronously, so other tasks continue without blocking, and completed tasks add callbacks to a queue which the event loop executes[reference:5].</p>
          </div>
          <div>
            <strong>4. What is the difference between synchronous and asynchronous functions?</strong>
            <p className="mt-1 text-gray-700">Synchronous functions block execution until the task completes and execute tasks sequentially. Asynchronous functions do not block execution; they allow other tasks to proceed concurrently, typically returning a promise or callback to handle the result upon completion[reference:6].</p>
          </div>
          <div>
            <strong>5. What is the purpose of module.exports?</strong>
            <p className="mt-1 text-gray-700">module.exports is used to expose functions or variables of a particular module or file to be used elsewhere in the project. This helps encapsulate similar functions in a file, which improves project structure[reference:7].</p>
          </div>
        </div>
      </div>

      {/* ==================== CORE NODE.JS CONCEPTS ==================== */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">Core Concepts (Event Loop, Async, Streams)</h3>
        <div className="space-y-4">
          <div>
            <strong>6. Explain the concept of the event loop in Node.js and how it enables non-blocking I/O operations.</strong>
            <p className="mt-1 text-gray-700">The event loop is the heart of Node.js, allowing JavaScript to handle asynchronous operations efficiently on a single thread. When a non-blocking operation like a network request is initiated, the event loop doesn't wait for it to complete; instead, it moves on to the next task in the queue. Once the I/O operation finishes, the event loop triggers a callback function to handle the result. This allows Node.js to handle multiple concurrent requests efficiently[reference:8].</p>
          </div>
          <div>
            <strong>7. What are the phases of the Node.js event loop?</strong>
            <p className="mt-1 text-gray-700">The event loop iterates through six phases in fixed order: timers (runs setTimeout/setInterval callbacks), pending callbacks (I/O callbacks), idle/prepare (used internally), poll (waits for new I/O and runs I/O callbacks), check (runs setImmediate callbacks), and close callbacks (runs close event handlers like socket.on('close')). Microtasks like process.nextTick() and Promise callbacks run between phases[reference:9][reference:10].</p>
          </div>
          <div>
            <strong>8. What are streams in Node.js? Name the types of streams.</strong>
            <p className="mt-1 text-gray-700">Streams are objects that allow you to read or write data continuously, making them efficient for handling large amounts of data without loading everything into memory at once[reference:11]. There are four types of streams in Node.js: <strong>Readable</strong> (from which data can be read), <strong>Writable</strong> (to which data can be written), <strong>Duplex</strong> (both readable and writable), and <strong>Transform</strong> (a type of duplex stream that can modify or transform the data as it is written and read)[reference:12][reference:13].</p>
          </div>
          <div>
            <strong>9. What is the role of libuv in Node.js? What is the thread pool?</strong>
            <p className="mt-1 text-gray-700">libuv is a C library used internally by Node.js to support asynchronous operations. It provides the event loop mechanism, manages non-blocking I/O operations across platforms, and maintains a thread pool to handle blocking tasks like file system operations, DNS lookups, crypto functions, and compression (zlib). The default thread pool size is 4 threads[reference:14].</p>
          </div>
          <div>
            <strong>10. Explain the difference between callbacks and promises for handling asynchronous operations in Node.js.</strong>
            <p className="mt-1 text-gray-700">Callbacks are the traditional method where a callback function is passed as an argument and invoked once the operation finishes. While simple, nested callbacks can lead to "callback hell" making code difficult to read and maintain. Promises offer a more structured approach, representing the eventual completion of an asynchronous operation. Promises allow chaining with .then() and .catch(), providing better error handling and readability. async/await is syntactic sugar over promises, making asynchronous code look synchronous[reference:15].</p>
          </div>
        </div>
      </div>

      {/* ==================== EXPRESS.JS SECTION ==================== */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">Express.js Fundamentals</h3>
        <div className="space-y-4">
          <div>
            <strong>11. What is Express.js and why is it used?</strong>
            <p className="mt-1 text-gray-700">Express.js is a lightweight and flexible web framework built on top of Node.js to create APIs easily. It is used because it simplifies routing, middleware handling, and request-response logic, making backend development faster and more structured. In the MERN stack, Express serves as the backend framework[reference:16].</p>
          </div>
          <div>
            <strong>12. What is middleware in Express.js? Give examples of built-in and custom middleware.</strong>
            <p className="mt-1 text-gray-700">Middleware is a function that runs between the request coming in and the response going out. It is commonly used for tasks like authentication, logging, request validation, and error handling[reference:17]. Built-in middleware examples include express.json() (parses JSON bodies), express.static() (serves static files), and express.urlencoded() (parses URL-encoded bodies). Custom middleware is user-defined functions that can modify req/res objects, end the request-response cycle, or call next() to pass control to the next middleware.</p>
          </div>
          <div>
            <strong>13. How do you implement centralized error handling in Express?</strong>
            <p className="mt-1 text-gray-700">Centralized error handling is done using a special middleware function that takes four parameters (err, req, res, next) instead of three. Express identifies error-handling middleware by this function arity. Errors are passed to this middleware by calling next(err) from any route or middleware, and it sends a consistent error response to the client[reference:18][reference:19].</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-2 text-sm font-mono">
{`function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
}
app.use(errorHandler);`}
            </pre>
          </div>
          <div>
            <strong>14. How does routing work in Express? What is the difference between app and Router?</strong>
            <p className="mt-1 text-gray-700">Routing in Express maps HTTP methods (GET, POST, PUT, DELETE) and URL patterns to specific handler functions. Routes can read data from URL parameters (req.params), query strings (req.query), or the request body (req.body)[reference:20]. The main difference between app and Router is that Router is used to create modular, mountable route handlers. Router instances are complete middleware and routing systems, allowing you to organize routes into separate files and mount them on specific URL paths using app.use().</p>
          </div>
          <div>
            <strong>15. How do you configure CORS in Express and why is it needed?</strong>
            <p className="mt-1 text-gray-700">CORS (Cross-Origin Resource Sharing) is configured using middleware to control which domains can access the API. It is needed to allow frontend applications hosted on different origins to safely communicate with the backend without security issues. The cors package is commonly used: const cors = require('cors'); app.use(cors({ origin: 'https://example.com' }))[reference:21][reference:22].</p>
          </div>
        </div>
      </div>

      {/* ==================== ADVANCED NODE.JS & EXPRESS ==================== */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">Advanced Topics (Performance, Security, Scaling)</h3>
        <div className="space-y-4">
          <div>
            <strong>16. How do you improve Node.js app performance?</strong>
            <p className="mt-1 text-gray-700">Use async/non-blocking code, implement caching (in-memory like node-cache or distributed like Redis), use clustering to utilize all CPU cores, implement connection pooling for databases, and add proper error handling. Profile and remove bottlenecks using tools like clinic.js or node --prof. Stream large files instead of reading them entirely, and offload CPU-heavy tasks to worker threads or separate microservices[reference:23].</p>
          </div>
          <div>
            <strong>17. What is clustering in Node.js and why use it?</strong>
            <p className="mt-1 text-gray-700">Clustering uses multiple worker processes to utilize all CPU cores, enabling better concurrency and performance for Node.js applications. The built-in cluster module creates child processes that share the same server port, with the master process distributing incoming connections among workers. PM2 (process manager) automatically handles worker processes for production deployment with auto-restart, load balancing, monitoring, and log management[reference:24].</p>
          </div>
          <div>
            <strong>18. How do you handle CPU-bound (heavy processing) tasks in Node.js?</strong>
            <p className="mt-1 text-gray-700">For CPU-bound tasks, you should offload them to worker threads (using the worker_threads module) or separate microservices to avoid blocking the event loop. Worker threads can share memory, making them more efficient for certain workloads compared to child processes. For less intensive tasks, you can also use the thread pool (libuv) which handles operations like crypto and file system I/O asynchronously[reference:25][reference:26].</p>
          </div>
          <div>
            <strong>19. What are Node.js security best practices?</strong>
            <p className="mt-1 text-gray-700">Avoid eval() and unsafe code execution, sanitize all user inputs to prevent XSS/SQL injection, use HTTPS and secure headers, keep dependencies updated, limit request rates to prevent DoS attacks, implement proper authentication and authorization (JWT, OAuth), and use environment variables for sensitive configuration[reference:27].</p>
          </div>
          <div>
            <strong>20. How do you secure a Node.js application?</strong>
            <p className="mt-1 text-gray-700">Use HTTPS and secure headers (helmet middleware), validate and sanitize all user inputs, avoid eval() and unsafe code execution, implement rate limiting (express-rate-limit), use parameterized queries/prepared statements for SQL databases, store passwords using bcrypt or scrypt, keep dependencies updated (npm audit), and implement proper CORS configuration[reference:28].</p>
          </div>
          <div>
            <strong>21. What is the difference between child_process and worker_threads?</strong>
            <p className="mt-1 text-gray-700">child_process spawns separate processes with their own memory space, making them good for running independent tasks or scripts but with higher memory overhead and slower communication. worker_threads create threads within the same process, can share memory (allowing faster communication via SharedArrayBuffer), and are more lightweight. Worker threads are preferred for CPU-intensive JavaScript tasks that need to avoid blocking the event loop, while child processes are useful when you need complete isolation[reference:29][reference:30].</p>
          </div>
        </div>
      </div>

      {/* ==================== NODE.JS & NEXT.JS ==================== */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">Node.js &amp; Next.js Integration</h3>
        <div className="space-y-4">
          <div>
            <strong>22. How does Next.js utilize Node.js?</strong>
            <p className="mt-1 text-gray-700">Next.js is built on top of Node.js and React. It uses Node.js to enable server-side rendering (SSR), API routes (as serverless functions or standalone server), middleware, and incremental static regeneration (ISR). The Node.js runtime in Next.js handles all backend logic, including database connections, authentication, and API integration, while the React framework manages the frontend UI.</p>
          </div>
          <div>
            <strong>23. What are API Routes in Next.js and how do they relate to Express?</strong>
            <p className="mt-1 text-gray-700">API Routes in Next.js are server-side endpoints created inside the pages/api or app/api directory. They function similarly to Express routes but are built on Node.js's http module. Each API route is a Node.js function that handles requests and responses, making it easy to build backend logic without a separate Express server. For complex routing, you can also integrate Express with Next.js using custom server configurations.</p>
          </div>
          <div>
            <strong>24. What is middleware in Next.js and how is it different from Express middleware?</strong>
            <p className="mt-1 text-gray-700">Next.js middleware (introduced in Next.js 12) runs before requests are completed, allowing you to modify responses, redirect, rewrite URLs, or set headers. Unlike Express middleware which runs on the server only, Next.js middleware can execute on the edge (Edge Runtime) for lower latency. Express middleware focuses on request/response processing within the application, while Next.js middleware is designed for routing and authentication at the edge.</p>
          </div>
          <div>
            <strong>25. How can you integrate Express with Next.js?</strong>
            <p className="mt-1 text-gray-700">You can create a custom Next.js server by using a custom server.js file that initializes both Next.js and Express. This allows you to combine Express's robust routing and middleware ecosystem with Next.js's React framework features. However, the official recommendation is to use Next.js's built-in API routes for most use cases, as custom servers lose automatic static optimization and serverless deployment benefits.</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-2 text-sm font-mono">
{`// Example: Custom server with Express
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.all('*', (req, res) => handle(req, res));
  server.listen(3000);
});`}
            </pre>
          </div>
        </div>
      </div>

      {/* ==================== SUMMARY TABLE ==================== */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">📋 Node.js &amp; Express.js Quick Reference</h3>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Topic</th>
              <th className="border border-gray-300 px-3 py-2">Key Concepts</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-3 py-2">Node.js Architecture</td><td className="border border-gray-300 px-3 py-2">Event loop, libuv, thread pool, V8 engine, single-threaded, non-blocking I/O</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Async Patterns</td><td className="border border-gray-300 px-3 py-2">Callbacks, Promises, async/await, callback hell, microtasks (nextTick, Promise.then)</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Express.js</td><td className="border border-gray-300 px-3 py-2">Middleware (app.use), routing (app.get/post/put/delete), Router, error handling middleware</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Performance &amp; Scaling</td><td className="border border-gray-300 px-3 py-2">Clustering (cluster module or PM2), worker_threads, caching (Redis), streaming, horizontal scaling</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Security</td><td className="border border-gray-300 px-3 py-2">Helmet (secure headers), CORS, input validation/sanitization, rate limiting, bcrypt, HTTPS</td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Package Management</td><td className="border border-gray-300 px-3 py-2">NPM (Node Package Manager), package.json, dependencies vs devDependencies, semantic versioning</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
        🎯 <strong>Final advice:</strong> Understanding the event loop is crucial for Node.js interviews. Be prepared to explain how async operations work under the hood, the difference between setImmediate and process.nextTick, and how to avoid blocking the event loop. For Express.js, focus on middleware execution order, error handling patterns, and RESTful API design principles.
      </div>
    </section>
  );
}