// components/NodeExpressFull.tsx
import React from "react";

export default function NodeExpressFull() {
  const beginnerQuestions = [
    { q: "1. How does Node.js work?", a: "Node.js works on a single-threaded, event-driven architecture using the V8 JavaScript engine. V8 compiles JavaScript into fast machine code. The event loop handles asynchronous tasks (I/O, timers, requests) without blocking the main thread. Libuv library provides a thread pool and handles background tasks like file system operations and networking. Non-blocking I/O lets Node.js process thousands of concurrent requests efficiently without creating multiple threads." },
    { q: "2. What is NPM?", a: "NPM (Node Package Manager) is the default package manager for Node.js. It is used to install and manage packages (libraries or dependencies) required for JavaScript applications. It uses package.json to manage project dependencies and metadata and works through CLI commands like <code>npm install</code>, <code>npm update</code>, and <code>npm uninstall</code>." },
    { q: "3. Why is Node.js single-threaded?", a: "Node.js is single-threaded because it's based on the asynchronous, non-blocking nature of JavaScript. This design makes it simpler to develop and maintain, and it allows Node.js to handle many concurrent requests efficiently." },
    { q: "4. If Node.js is single-threaded, then how does it handle concurrency?", a: "Node.js is single-threaded but handles concurrency efficiently through its event-driven, non-blocking I/O model. It uses a single-threaded event loop to handle requests. I/O operations run asynchronously, so other tasks continue without blocking. Completed tasks add callbacks to a queue, which the event loop executes." },
    { q: "5. Why is Node.js preferred over other backend technologies like Java and PHP?", a: "Reasons: fast performance (I/O-heavy tasks), NPM ecosystem (over 50,000 bundles), perfect for real-time apps, unified codebase (same code for server and client), and easy for JavaScript developers." },
    { q: "6. What is the difference between synchronous and asynchronous functions?", a: "Synchronous functions block execution until the task completes and execute sequentially. Asynchronous functions do not block; they allow other tasks to proceed concurrently, typically returning a promise or callback. Asynchronous functions are ideal for I/O-bound operations." },
    { q: "7. What are modules in Node.js?", a: "A Module is a reusable block of code that provides specific functionality. Modules help simplify applications by dividing code into smaller, manageable parts. Examples: http, fs, os, path." },
    { q: "8. What is the purpose of the 'require' keyword?", a: "The <code>require</code> keyword is used to include and import modules (external or built-in) into a Node.js application. Example: <code>const http = require('http');</code>" },
    { q: "9. What is the V8 engine in Node.js?", a: "The V8 engine is an open-source JavaScript engine developed by Google, written in C++. It compiles JavaScript to machine code for fast execution, handles memory management and garbage collection, and provides the core runtime to run JavaScript outside the browser." },
    { q: "10. How to handle environment variables in Node.js?", a: "Use <code>process.env</code>. To load from a .env file, install the dotenv package: <code>npm install dotenv</code>, then <code>require('dotenv').config()</code>. Access variables via <code>process.env.VARIABLE_NAME</code>." },
    { q: "11. What is control flow in Node.js?", a: "Control flow refers to the order in which asynchronous operations (file reads, API calls, DB queries) are executed and how their results are handled. Since Node.js is non-blocking and event-driven, control flow ensures tasks are managed correctly." },
    { q: "12. What is the event loop in Node.js?", a: "The event loop is a mechanism that allows Node.js to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions. Example: <code>console.log(\"Start\"); setTimeout(() =&gt; console.log(\"Timeout\"), 0); console.log(\"End\");</code> outputs \"Start\", \"End\", then \"Timeout\"." },
    { q: "13. What is REPL in Node.js?", a: "REPL stands for Read, Evaluate, Print, and Loop. It is an interactive computer environment similar to a shell, useful for writing and debugging code as it executes code on the go." },
    { q: "14. How to import a module in Node.js?", a: "CommonJS (default): <code>const fs = require('fs');</code>. ES Modules (modern): <code>import fs from 'fs';</code> (requires <code>\"type\": \"module\"</code> in package.json)." },
    { q: "15. What is package.json?", a: "package.json is a metadata file that contains project-specific information such as dependencies, scripts, version, author details, and other configuration settings." },
    { q: "16. How to create a simple HTTP server in Node.js?", a: "", code: "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, World!');\n});\nserver.listen(3000, () => console.log('Server running on port 3000'));" },
    { q: "17. What are the most commonly used libraries in Node.js?", a: "ExpressJS (web framework) and Mongoose (ODM for MongoDB) are the two most common. Others include Socket.io, Passport, and Axios." },
    { q: "18. What are promises in Node.js?", a: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It helps avoid callback hell by enabling chaining with <code>.then()</code> and <code>.catch()</code>." },
    { q: "19. How do you install, update, and delete a dependency?", a: "Install: <code>npm install &lt;package&gt;</code>. Update: <code>npm update &lt;package&gt;</code>. Delete: <code>npm uninstall &lt;package&gt;</code>." },
    { q: "20. Which command imports external libraries?", a: "<code>require()</code> (CommonJS) or <code>import</code> (ES Modules)." }
  ];

  const intermediateQuestions = [
    { q: "21. What is event-driven programming in Node.js?", a: "Event-driven programming synchronises the occurrence of multiple events. Components: a callback function (event handler) called when an event is triggered, and an event loop that listens for triggers and calls handlers." },
    { q: "22. What is a buffer in Node.js?", a: "The Buffer class handles raw binary data. Buffers are fixed-size memory allocations outside the V8 heap, used for handling binary data like images or encrypted information." },
    { q: "23. What are streams in Node.js? Name the four types.", a: "Streams handle data in chunks rather than loading everything into memory. Types: Readable (read data), Writable (write data), Duplex (read + write), Transform (modify data as it passes through)." },
    { q: "24. Explain the crypto module in Node.js.", a: "The crypto module is used for encrypting, decrypting, or hashing data, helping to secure and add authentication to data." },
    { q: "25. What is callback hell?", a: "Callback hell is an issue caused by deeply nested callbacks, creating a pyramid-like structure that is hard to read. It can be overcome with Promises or async/await." },
    { q: "26. Explain the use of the timers module in Node.js.", a: "The timers module provides <code>setTimeout()</code> (execute once after delay), <code>setImmediate()</code> (execute after current event loop cycle), and <code>setInterval()</code> (execute repeatedly with a fixed delay)." },
    { q: "27. Difference between setImmediate() and process.nextTick().", a: "<code>setImmediate()</code> runs after I/O events (check phase), lower priority. <code>process.nextTick()</code> runs immediately after the current operation, before I/O, higher priority." },
    { q: "28. What are the different types of HTTP requests?", a: "GET (retrieve), POST (create), PUT (update entire), PATCH (partial update), DELETE (remove)." },
    { q: "29. Difference between spawn() and fork()?", a: "<code>spawn()</code> runs any system command, returns streams. <code>fork()</code> is a special case of spawn() for Node.js modules, establishes IPC communication." },
    { q: "30. What is CORS in Node.js?", a: "CORS (Cross-Origin Resource Sharing) is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. The <code>cors</code> package tackles CORS errors." },
    { q: "31. Explain the tls module.", a: "The tls module provides implementation of TLS (Transport Layer Security) and SSL protocols built on OpenSSL, enabling secure network connections." },
    { q: "32. Can you access DOM in Node?", a: "No. Node.js is server-side and has no access to the browser's DOM." },
    { q: "33. How do you manage packages in a Node.js project?", a: "Using npm (Node Package Manager) to install, update, and remove third-party packages, and to manage dependencies via package.json." },
    { q: "34. What is the purpose of NODE_ENV?", a: "NODE_ENV specifies the environment (development, testing, production) and allows customisation of application behaviour based on that environment." },
    { q: "35. What is a test pyramid in Node.js?", a: "The test pyramid is a strategy with three levels: Unit Tests (many, fast), Integration Tests (fewer), End-to-End Tests (few, slow)." },
    { q: "36. Describe the phases of the Node.js event loop.", a: "Six phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Microtasks (process.nextTick, Promise.then) run between phases." },
    { q: "37. How does clustering work in Node.js?", a: "", code: "const cluster = require('cluster');\nconst http = require('http');\nconst os = require('os');\nif (cluster.isMaster) {\n  for (let i = 0; i < os.cpus().length; i++) cluster.fork();\n} else {\n  http.createServer((req, res) => res.end('Hello')).listen(8000);\n}" }
  ];

  const advancedQuestions = [
    { q: "38. How would you architect a scalable, maintainable Node.js application?", a: "Use modular architecture, microservices or serverless patterns, message queues (RabbitMQ, Kafka), caching (Redis), horizontal scaling, load balancing, and container orchestration (Kubernetes)." },
    { q: "39. Explain microservices and why Node.js fits.", a: "Microservices decompose an application into small, independent services. Node.js is lightweight, fast I/O, and excellent for HTTP/REST and messaging protocols, making it ideal for microservices." },
    { q: "40. How do you handle inter-service communication?", a: "Using HTTP/REST, message queues (RabbitMQ, Kafka), or gRPC for high performance." },
    { q: "41. Discuss pros and cons of Serverless with Node.js.", a: "Pros: no server management, auto-scaling, pay-per-use. Cons: vendor lock-in, cold start latency, debugging complexity." },
    { q: "42. How to monitor and observe a production Node.js app?", a: "Use logging (Elastic Stack), metrics (Prometheus), and tracing (OpenTelemetry) for observability." },
    { q: "43. Best practices for handling CPU-intensive tasks?", a: "Offload to worker threads (worker_threads) or separate microservices to avoid blocking the event loop." },
    { q: "44. How to optimise a high-traffic Node.js API?", a: "Implement caching (Redis), clustering, database query optimisation, non-blocking I/O, and use modern async patterns." },
    { q: "45. Benefits of TypeScript in a Node.js project?", a: "Static typing catches bugs early, provides better tooling, improved readability, and easier refactoring for large projects." },
    { q: "46. How to set up a CI/CD pipeline for Node.js?", a: "Use GitHub Actions, GitLab CI, or Jenkins. Steps: install dependencies, run tests, build Docker image, deploy to staging/production." },
    { q: "47. Difference between fork() and spawn() process models?", a: "<code>spawn()</code> launches a process with streams. <code>fork()</code> is a special spawn for Node.js processes with an IPC channel for messaging." },
    { q: "48. How to prevent resource starvation?", a: "Set timeouts on I/O operations, use a well-managed thread pool, and implement load balancing." },
    { q: "49. How to implement secure HTTP headers in Express?", a: "Use the <code>helmet</code> middleware to set headers like X-Content-Type-Options, CSP, HSTS." },
    { q: "50. What is OpenTelemetry?", a: "An open-source observability framework for generating telemetry data (metrics, logs, traces) to monitor distributed systems." },
    { q: "51. How to handle unhandled exceptions?", a: "Use <code>process.on('uncaughtException')</code> and <code>process.on('unhandledRejection')</code>, but then gracefully shut down and restart the process." },
    { q: "52. How does require.resolve() work?", a: "Finds the full path to a module without loading it. Useful for checking module availability or dynamic loading." },
    { q: "53. How to ensure high availability and load balancing?", a: "Use a load balancer (Nginx, HAProxy) to distribute traffic across multiple instances running on different servers/containers." },
    { q: "54. What is the reactor pattern?", a: "An I/O handling pattern that demultiplexes incoming events and dispatches them to handlers, fundamental to Node.js's event loop." },
    { q: "55. What is the significance of the zlib module?", a: "Provides compression/decompression, used by Express compression middleware to reduce bandwidth." },
    { q: "56. Describe net and dgram modules.", a: "<code>net</code> for TCP servers/clients, <code>dgram</code> for UDP datagram sockets." },
    { q: "57. What is Docker and how to deploy Node.js with it?", a: "Docker containerizes an application and its dependencies. Create a Dockerfile, build an image, and run the container." },
    { q: "58. How to implement rate-limiting on an API?", a: "Use <code>express-rate-limit</code> middleware as shown:", code: "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });\napp.use(limiter);" }
  ];

  const expressQuestions = [
    { q: "59. What is the default port for Express?", a: "Express does not have a fixed default. Developers commonly use port 3000 by convention." },
    { q: "60. What is middleware in Express?", a: "Middleware functions have access to <code>req</code>, <code>res</code>, and <code>next</code>. They can execute code, modify request/response, end the cycle, or call <code>next()</code>." },
    { q: "61. Role of next() in middleware?", a: "<code>next()</code> passes control to the next middleware. If not called, the request hangs." },
    { q: "62. What is routing in Express?", a: "Routing defines how endpoints (URIs) respond to client requests. Example: <code>app.get('/home', (req, res) =&gt; res.send('Welcome'));</code>" },
    { q: "63. Difference between app.use() and app.get()?", a: "<code>app.use()</code> mounts middleware for all HTTP methods/paths. <code>app.get()</code> handles only GET requests to a specific path." },
    { q: "64. List features of ExpressJS.", a: "Routing, middleware, HTTP utility methods, static file serving (express.static), security (helmet)." },
    { q: "65. Popular alternatives to Express?", a: "Koa.js, Hapi.js, Sails.js, Fastify." },
    { q: "66. What is .env file used for?", a: "Storing sensitive configuration (passwords, database strings) as key-value pairs, loaded via <code>dotenv</code>." },
    { q: "67. What are JWT?", a: "JSON Web Tokens – used for authentication and information exchange. Contains header, payload, and signature." },
    { q: "68. Create a simple validation middleware.", a: "", code: "const validateUser = (req, res, next) => {\n  const user = req.user;\n  if (!user) return res.status(401).json({ error: 'Unauthorized' });\n  next();\n};\napp.get('/profile', validateUser, (req, res) => res.json({ message: 'Profile page' }));" },
    { q: "69. What is Bcrypt used for?", a: "Password hashing – slow and computationally intensive to resist brute-force attacks." },
    { q: "70. Why separate Express app and server?", a: "Modularity, ease of testing, reusability, configuration management, scalability." },
    { q: "71. What is ESLint?", a: "A linting tool for automatically detecting incorrect patterns in JavaScript code, improving code quality and consistency." },
    { q: "72. Differentiate res.send() and res.json().", a: "<code>res.send()</code> can send any type (string, object, buffer). <code>res.json()</code> only sends JSON and automatically sets Content-Type to application/json." },
    { q: "73. What is scaffolding in Express?", a: "Generating a basic project structure automatically. Express application generator (<code>express-generator</code>) does this." },
    { q: "74. What is CORS in Express?", a: "CORS middleware enables Cross-Origin Resource Sharing by setting appropriate HTTP headers." },
    { q: "75. What are built-in middlewares?", a: "express.json(), express.static(), express.urlencoded(), express.raw(), express.text()." },
    { q: "76. How to set properties in Express?", a: "<code>app.set(name, value)</code> configures application settings." },
    { q: "77. Which template engines does Express support?", a: "Any that follow the <code>(path, locals, callback)</code> signature, e.g., Pug, EJS, Handlebars." },
    { q: "78. How to render plain HTML?", a: "<code>res.send('&lt;h1&gt;Hello&lt;/h1&gt;');</code> or <code>res.sendFile(path)</code>." },
    { q: "79. What is response.cookie()?", a: "Sets a cookie in the HTTP response. <code>res.cookie(name, value, options);</code>" },
    { q: "80. When does CORS fail?", a: "When server doesn't include CORS headers, origin mismatches, disallowed HTTP methods, or credentials not allowed." },
    { q: "81. What is Pug template engine?", a: "A template engine that uses indentation and concise tags to generate dynamic HTML server-side." },
    { q: "82. What is sanitising input?", a: "Cleaning and validating user input to prevent XSS, SQL injection, and other security attacks." },
    { q: "83. How to generate a skeleton Express app?", a: "<code>npm install -g express-generator</code> then <code>express my-app</code>." },
    { q: "84. How to secure Express apps?", a: "Use Helmet.js, sanitise inputs, enable HTTPS, implement rate limiting, keep dependencies updated." },
    { q: "85. Types of middleware?", a: "Application-level, router-level, error-handling, built-in, third-party." },
    { q: "86. List built-in middleware functions.", a: "express.json(), express.static(), express.urlencoded(), express.raw(), express.text()." },
    { q: "87. Name third-party middleware.", a: "body-parser, cors, morgan, helmet, express-session, passport." },
    { q: "88. When is application-level middleware used?", a: "Bound to an Express instance and executed for every incoming request (e.g., logging, authentication)." },
    { q: "89. What is router-level middleware?", a: "Bound to an express.Router() instance, applied only to routes handled by that router." },
    { q: "90. What is express.Router()?", a: "Creates a new router object for modular route handling." },
    { q: "91. What are arguments to a route handler?", a: "<code>req</code> (request), <code>res</code> (response), <code>next</code> (callback to pass control)." },
    { q: "92. How to handle errors in Express?", a: "Use error-handling middleware with four parameters: <code>(err, req, res, next)</code>. Call <code>next(err)</code> to trigger it." },
    { q: "93. Difference between traditional server and Express server?", a: "Traditional (PHP/Java) uses multi-threaded, blocking I/O. Express (Node.js) uses single-threaded, non-blocking I/O with event loop." },
    { q: "94. Purpose of next() function?", a: "Passes control to the next middleware; if not called, the request-response cycle terminates." },
    { q: "95. Difference between app.route() and app.use()?", a: "<code>app.route()</code> defines multiple HTTP methods for a single route. <code>app.use()</code> mounts middleware or routers." },
    { q: "96. What is dynamic routing?", a: "Routes with parameters (e.g., <code>/users/:userId</code>). Values accessible via <code>req.params.userId</code>." },
    { q: "97. How to serve static files?", a: "<code>app.use(express.static('public'))</code>" },
    { q: "98. Use of app.use()?", a: "Adds global or route‑specific middleware functions." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
            🚀 Node.js & Express.js – Complete Interview Guide
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Beginner → Advanced | Event Loop | Security | CORS | Helmet | Clustering | Microservices
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Event Loop</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Middleware</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Security</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Clustering</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 mb-10 border border-emerald-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">📘</div>
            <div>
              <h2 className="font-bold text-xl text-emerald-800 mb-2">Master Node.js & Express.js</h2>
              <p className="text-gray-700">This guide covers everything from fundamental concepts to advanced topics: event loop, streams, clustering, security (CORS, Helmet), microservices, and deployment.</p>
            </div>
          </div>
        </div>

        {/* Beginner Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">🟢 Beginner Level</h2>
          </div>
          <div className="grid gap-4">
            {beginnerQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-green-100 text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <p className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intermediate Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">🟠 Intermediate Level</h2>
          </div>
          <div className="grid gap-4">
            {intermediateQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-orange-100 text-orange-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 21}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <p className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">🔴 Advanced Level</h2>
          </div>
          <div className="grid gap-4">
            {advancedQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-red-100 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 38}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <p className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Express.js Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">⚙️ Express.js Specific Questions</h2>
          </div>
          <div className="grid gap-4">
            {expressQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 59}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <p className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Middleware Deep Dive */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">🔐 Security & Middleware Deep Dive</h2>
          </div>
          <div className="grid gap-4">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800">Detailed: CORS configuration</h3>
              <p className="text-gray-600 text-sm mt-1">The <code>cors</code> package allows fine‑grained control: <code>origin</code>, <code>methods</code>, <code>allowedHeaders</code>, <code>exposedHeaders</code>, <code>credentials</code>. To enable credentials (cookies) you must set <code>credentials: true</code> and the client must set <code>withCredentials: true</code>.</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{`app.use(cors({
  origin: 'https://myfrontend.com',
  credentials: true,
  methods: ['GET','POST','PUT','DELETE']
}));`}</pre>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800">Detailed: cookie‑parser options</h3>
              <p className="text-gray-600 text-sm mt-1"><code>cookie-parser</code> can also parse signed cookies if you provide a secret. Signed cookies prevent tampering.</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{`app.use(cookieParser('my-secret'));
res.cookie('name', 'value', { signed: true });
// later: req.signedCookies.name`}</pre>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <h3 className="font-bold text-gray-800">Detailed: Helmet configuration</h3>
              <p className="text-gray-600 text-sm mt-1">Helmet can be customized: disable a header, set custom CSP directives.</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{`app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com']
    }
  }
}));`}</pre>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Quick Reference</h3>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Concept</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Command / Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-4 py-2 border-t border-gray-100">Start Node.js app with debugging</td><td className="px-4 py-2 border-t border-gray-100"><code>node --inspect app.js</code></td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-4 py-2 border-t border-gray-100">PM2 cluster mode</td><td className="px-4 py-2 border-t border-gray-100"><code>pm2 start app.js -i max</code></td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-4 py-2 border-t border-gray-100">Express JSON body parser</td><td className="px-4 py-2 border-t border-gray-100"><code>app.use(express.json())</code></td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-4 py-2 border-t border-gray-100">Nginx reverse proxy config</td><td className="px-4 py-2 border-t border-gray-100"><code>proxy_pass http://localhost:3000;</code></td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-4 py-2 border-t border-gray-100">Generate a JWT</td><td className="px-4 py-2 border-t border-gray-100"><code>jwt.sign(payload, secret)</code></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Advice */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg text-emerald-800">Key advice for interviews</h3>
              <p className="text-gray-700">For interviews, practice explaining the event loop with a diagram, understand the difference between scaling (clustering vs. worker threads), and be ready to write a small Express server with middleware, CORS, and Helmet. Show that you know how to handle errors and secure the app.</p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-6 right-6">
          <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110" aria-label="Back to top">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}