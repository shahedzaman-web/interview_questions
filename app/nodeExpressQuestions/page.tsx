// app/nodeExpressQuestions/page.tsx
import React from "react";

export default function NodeExpressQuestions() {
  // ======================== BEGINNER QUESTIONS ========================
  const beginnerQuestions = [
    { q: "How does Node.js work?", a: "Node.js works on a single-threaded, event-driven architecture using the V8 JavaScript engine. V8 compiles JavaScript into fast machine code. The event loop handles asynchronous tasks (I/O, timers, requests) without blocking the main thread. Libuv library provides a thread pool and handles background tasks like file system operations and networking. Non-blocking I/O lets Node.js process thousands of concurrent requests efficiently without creating multiple threads." },
    { q: "What is NPM?", a: "NPM (Node Package Manager) is the default package manager for Node.js. It is used to install and manage packages (libraries or dependencies) required for JavaScript applications. It uses package.json to manage project dependencies and metadata and works through CLI commands like <code>npm install</code>, <code>npm update</code>, and <code>npm uninstall</code>." },
    { q: "Why is Node.js single-threaded?", a: "Node.js is single-threaded because it's based on the asynchronous, non-blocking nature of JavaScript. This design makes it simpler to develop and maintain, and it allows Node.js to handle many concurrent requests efficiently." },
    { q: "If Node.js is single-threaded, then how does it handle concurrency?", a: "Node.js is single-threaded but handles concurrency efficiently through its event-driven, non-blocking I/O model. It uses a single-threaded event loop to handle requests. I/O operations run asynchronously, so other tasks continue without blocking. Completed tasks add callbacks to a queue, which the event loop executes. <br/><br/><strong>Note: Concurrency in Node.js refers to the ability of Node.js to handle multiple tasks at the same time by efficiently managing asynchronous operations—without necessarily executing multiple pieces of JavaScript in parallel on multiple CPU cores.</strong>" },
    { q: "Why is Node.js preferred over other backend technologies like Java and PHP?", a: "Reasons: fast performance (I/O-heavy tasks), NPM ecosystem (over 50,000 bundles), perfect for real-time apps, unified codebase (same code for server and client), and easy for JavaScript developers." },
    { q: "What is the difference between synchronous and asynchronous functions?", a: "Synchronous functions block execution until the task completes and execute sequentially. Asynchronous functions do not block; they allow other tasks to proceed concurrently, typically returning a promise or callback. Asynchronous functions are ideal for I/O-bound operations." },
    { q: "What are modules in Node.js?", a: "A Module is a reusable block of code that provides specific functionality. Modules help simplify applications by dividing code into smaller, manageable parts. Examples: http, fs, os, path.", code: "const fs = require('fs');\nconst data = fs.readFileSync('file.txt', 'utf-8');\nconsole.log(data);" },
    { q: "What is the purpose of the 'require' keyword?", a: "The <code>require</code> keyword is used to include and import modules (external or built-in) into a Node.js application. Example:", code: "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, World!');\n});\nserver.listen(3000, () => console.log('Server running on port 3000'));" },
    {
      q: "What is the V8 engine in Node.js?",
      a: "The V8 engine is an open-source JavaScript engine developed by Google, written in C++. It compiles JavaScript to machine code for fast execution, handles memory management and garbage collection, and provides the core runtime to run JavaScript outside the browser."
    },
    { q: "How to handle environment variables in Node.js?", a: "Use <code>process.env</code>. To load from a .env file, install the dotenv package: <code>npm install dotenv</code>, then <code>require('dotenv').config()</code>. Access variables via <code>process.env.VARIABLE_NAME</code>." },
    {
      q: "What is control flow in Node.js?",
      a: "Control flow refers to the order in which asynchronous operations (file reads, API calls, DB queries) are executed and how their results are handled. Since Node.js is non-blocking and event-driven, control flow ensures tasks are managed correctly. <br/><br/><strong className=\"text-lg font-bold\">A queue system where synchronous code runs immediately, and asynchronous tasks are scheduled and executed later when ready.</strong>"
    },
    { q: "What is the event loop in Node.js?", a: "The event loop is a mechanism that allows Node.js to handle multiple asynchronous tasks concurrently within a single thread. It continuously listens for events and executes associated callback functions. Example: <code>console.log(\"Start\"); setTimeout(() =&gt; console.log(\"Timeout\"), 0); console.log(\"End\");</code> outputs \"Start\", \"End\", then \"Timeout\"." },
    {
      q: "What is REPL in Node.js?",
      a: "REPL stands for Read, Evaluate, Print, and Loop. It is an interactive computer environment similar to a shell, useful for writing and debugging code as it executes code on the go.",
      code: "node\n> 2 + 3\n5\n> const fs = require('fs');\n> fs.readFileSync('file.txt', 'utf-8');\n'File contents here'"
    },
    {
      q: "How to import a module in Node.js?",
      a: "CommonJS (default): <code>const fs = require('fs');</code>. ES Modules (modern): <code>import fs from 'fs';</code> (requires <code>\"type\": \"module\"</code> in package.json).",
      code: "const fs = require('fs');\n// or\nimport fs from 'fs';"
    },
    {
      q: "What is package.json?",
      a: "package.json is a metadata file that contains project-specific information such as dependencies, scripts, version, author details, and other configuration settings.",
      code: `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My project description",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "John Doe",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "mysql": "^2.18.1"  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }}`
    },
    { q: "How to create a simple HTTP server in Node.js?", a: "", code: "const http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello, World!');\n});\nserver.listen(3000, () => console.log('Server running on port 3000'));" },
    { q: "What are the most commonly used libraries in Node.js?", a: "ExpressJS (web framework) and Mongoose (ODM for MongoDB) are the two most common. Others include Socket.io, Passport, and Axios." },
    { q: "What are promises in Node.js?", a: "A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It helps avoid callback hell by enabling chaining with <code>.then()</code> and <code>.catch()</code>." },
    { q: "How do you install, update, and delete a dependency?", a: "Install: <code>npm install &lt;package&gt;</code>. Update: <code>npm update &lt;package&gt;</code>. Delete: <code>npm uninstall &lt;package&gt;</code>." },
    { q: "Which command imports external libraries?", a: "<code>require()</code> (CommonJS) or <code>import</code> (ES Modules)." }
  ];

  // ======================== INTERMEDIATE QUESTIONS ========================
  const intermediateQuestions = [
    { q: "What is event-driven programming in Node.js?", a: "Event-driven programming synchronises the occurrence of multiple events. Components: a callback function (event handler) called when an event is triggered, and an event loop that listens for triggers and calls handlers." },
    { q: "What is a buffer in Node.js?", a: "The Buffer class handles raw binary data. Buffers are fixed-size memory allocations outside the V8 heap, used for handling binary data like images or encrypted information." },
    { q: "What are streams in Node.js? Name the four types.", a: "Streams handle data in chunks rather than loading everything into memory. Types: Readable (read data), Writable (write data), Duplex (read + write), Transform (modify data as it passes through)." },
    { q: "Explain the crypto module in Node.js.", a: "The crypto module is used for encrypting, decrypting, or hashing data, helping to secure and add authentication to data." },
    { q: "What is callback hell?", a: "Callback hell is an issue caused by deeply nested callbacks, creating a pyramid-like structure that is hard to read. It can be overcome with Promises or async/await." },
    { q: "Explain the use of the timers module in Node.js.", a: "The timers module provides <code>setTimeout()</code> (execute once after delay), <code>setImmediate()</code> (execute after current event loop cycle), and <code>setInterval()</code> (execute repeatedly with a fixed delay)." },
    { q: "Difference between setImmediate() and process.nextTick().", a: "<code>setImmediate()</code> runs after I/O events (check phase), lower priority. <code>process.nextTick()</code> runs immediately after the current operation, before I/O, higher priority." },
    { q: "What are the different types of HTTP requests?", a: "<strong>GET</strong> (read) <br/><strong>POST</strong> (create) <br/> <strong>PUT</strong> (update entire) <br/> <strong>PATCH</strong> (partial update) <br/><strong>DELETE</strong> (remove)." },
    {
      q: "Difference between spawn() and fork()?",
      a: "<code>spawn()</code> is used to run any system command or external executable and returns output as streams (<code>stdout</code>, <code>stderr</code>). <code>fork()</code> is a specialized version of <code>spawn()</code> used specifically to run Node.js modules and automatically creates an IPC channel for message-based communication between parent and child processes."
    },
    { q: "What is CORS in Node.js?", a: "CORS (Cross-Origin Resource Sharing) is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. The <code>cors</code> package tackles CORS errors." },
    { q: "Explain the tls module.", a: "The tls module provides implementation of TLS (Transport Layer Security) and SSL protocols built on OpenSSL, enabling secure network connections." },
    { q: "Can you access DOM in Node?", a: "No. Node.js is server-side and has no access to the browser's DOM." },
    { q: "How do you manage packages in a Node.js project?", a: "Using npm (Node Package Manager) to install, update, and remove third-party packages, and to manage dependencies via package.json." },
    { q: "What is the purpose of NODE_ENV?", a: "NODE_ENV specifies the environment (development, testing, production) and allows customisation of application behaviour based on that environment." },
    { q: "What is a test pyramid in Node.js?", a: "The test pyramid is a strategy with three levels: Unit Tests (many, fast), Integration Tests (fewer), End-to-End Tests (few, slow)." },
    { q: "Describe the phases of the Node.js event loop.", a: "Six phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Microtasks (process.nextTick, Promise.then) run between phases." },
    { q: "How does clustering work in Node.js?", a: "", code: "const cluster = require('cluster');\nconst http = require('http');\nconst os = require('os');\nif (cluster.isMaster) {\n  for (let i = 0; i < os.cpus().length; i++) cluster.fork();\n} else {\n  http.createServer((req, res) => res.end('Hello')).listen(8000);\n}" }
  ];

  // ======================== ADVANCED QUESTIONS ========================
  const advancedQuestions = [
    { q: "How would you architect a scalable, maintainable Node.js application?", a: "Use modular architecture, microservices or serverless patterns, message queues (RabbitMQ, Kafka), caching (Redis), horizontal scaling, load balancing, and container orchestration (Kubernetes)." },
    { q: "Explain microservices and why Node.js fits.", a: "Microservices decompose an application into small, independent services. Node.js is lightweight, fast I/O, and excellent for HTTP/REST and messaging protocols, making it ideal for microservices." },
    { q: "How do you handle inter-service communication?", a: "Using HTTP/REST, message queues (RabbitMQ, Kafka), or gRPC for high performance." },
    { q: "Discuss pros and cons of Serverless with Node.js.", a: "Pros: no server management, auto-scaling, pay-per-use. Cons: vendor lock-in, cold start latency, debugging complexity." },
    { q: "How to monitor and observe a production Node.js app?", a: "Use logging (Elastic Stack), metrics (Prometheus), and tracing (OpenTelemetry) for observability." },
    { q: "Best practices for handling CPU-intensive tasks?", a: "Offload to worker threads (worker_threads) or separate microservices to avoid blocking the event loop." },
    { q: "How to optimise a high-traffic Node.js API?", a: "Implement caching (Redis), clustering, database query optimisation, non-blocking I/O, and use modern async patterns." },
    { q: "Benefits of TypeScript in a Node.js project?", a: "Static typing catches bugs early, provides better tooling, improved readability, and easier refactoring for large projects." },
    { q: "How to set up a CI/CD pipeline for Node.js?", a: "Use GitHub Actions, GitLab CI, or Jenkins. Steps: install dependencies, run tests, build Docker image, deploy to staging/production." },
    { q: "Difference between fork() and spawn() process models?", a: "<code>spawn()</code> launches a process with streams. <code>fork()</code> is a special spawn for Node.js processes with an IPC channel for messaging." },
    { q: "How to prevent resource starvation?", a: "Set timeouts on I/O operations, use a well-managed thread pool, and implement load balancing." },
    { q: "How to implement secure HTTP headers in Express?", a: "Use the <code>helmet</code> middleware to set headers like X-Content-Type-Options, CSP, HSTS." },
    { q: "What is OpenTelemetry?", a: "An open-source observability framework for generating telemetry data (metrics, logs, traces) to monitor distributed systems." },
    { q: "How to handle unhandled exceptions?", a: "Use <code>process.on('uncaughtException')</code> and <code>process.on('unhandledRejection')</code>, but then gracefully shut down and restart the process." },
    { q: "How does require.resolve() work?", a: "Finds the full path to a module without loading it. Useful for checking module availability or dynamic loading." },
    { q: "How to ensure high availability and load balancing?", a: "Use a load balancer (Nginx, HAProxy) to distribute traffic across multiple instances running on different servers/containers." },
    { q: "What is the reactor pattern?", a: "An I/O handling pattern that demultiplexes incoming events and dispatches them to handlers, fundamental to Node.js's event loop." },
    { q: "What is the significance of the zlib module?", a: "Provides compression/decompression, used by Express compression middleware to reduce bandwidth." },
    { q: "Describe net and dgram modules.", a: "<code>net</code> for TCP servers/clients, <code>dgram</code> for UDP datagram sockets." },
    { q: "What is Docker and how to deploy Node.js with it?", a: "Docker containerizes an application and its dependencies. Create a Dockerfile, build an image, and run the container." },
    { q: "How to implement rate-limiting on an API?", a: "Use <code>express-rate-limit</code> middleware as shown:", code: "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });\napp.use(limiter);" }
  ];

  // ======================== EXPRESS QUESTIONS ========================
  const expressQuestions = [
    { q: "What is the default port for Express?", a: "Express does not have a fixed default. Developers commonly use port 3000 by convention." },
    { q: "What is middleware in Express?", a: "Middleware functions have access to <code>req</code>, <code>res</code>, and <code>next</code>. They can execute code, modify request/response, end the cycle, or call <code>next()</code>." },
    { q: "Role of next() in middleware?", a: "<code>next()</code> passes control to the next middleware. If not called, the request hangs." },
    { q: "What is routing in Express?", a: "Routing defines how endpoints (URIs) respond to client requests. Example: <code>app.get('/home', (req, res) =&gt; res.send('Welcome'));</code>" },
    { q: "Difference between app.use() and app.get()?", a: "<code>app.use()</code> mounts middleware for all HTTP methods/paths. <code>app.get()</code> handles only GET requests to a specific path." },
    { q: "List features of ExpressJS.", a: "Routing, middleware, HTTP utility methods, static file serving (express.static), security (helmet)." },
    { q: "Popular alternatives to Express?", a: "Koa.js, Hapi.js, Sails.js, Fastify." },
    { q: "What is .env file used for?", a: "Storing sensitive configuration (passwords, database strings) as key-value pairs, loaded via <code>dotenv</code>." },
    { q: "What are JWT?", a: "JSON Web Tokens – used for authentication and information exchange. Contains header, payload, and signature." },
    { q: "Create a simple validation middleware.", a: "", code: "const validateUser = (req, res, next) => {\n  const user = req.user;\n  if (!user) return res.status(401).json({ error: 'Unauthorized' });\n  next();\n};\napp.get('/profile', validateUser, (req, res) => res.json({ message: 'Profile page' }));" },
    { q: "What is Bcrypt used for?", a: "Password hashing – slow and computationally intensive to resist brute-force attacks." },
    { q: "Why separate Express app and server?", a: "Modularity, ease of testing, reusability, configuration management, scalability." },
    { q: "What is ESLint?", a: "A linting tool for automatically detecting incorrect patterns in JavaScript code, improving code quality and consistency." },
    { q: "Differentiate res.send() and res.json().", a: "<code>res.send()</code> can send any type (string, object, buffer). <code>res.json()</code> only sends JSON and automatically sets Content-Type to application/json." },
    { q: "What is scaffolding in Express?", a: "Generating a basic project structure automatically. Express application generator (<code>express-generator</code>) does this." },
    { q: "What is CORS in Express?", a: "CORS middleware enables Cross-Origin Resource Sharing by setting appropriate HTTP headers." },
    { q: "What are built-in middlewares?", a: "express.json(), express.static(), express.urlencoded(), express.raw(), express.text()." },
    { q: "How to set properties in Express?", a: "<code>app.set(name, value)</code> configures application settings." },
    { q: "Which template engines does Express support?", a: "Any that follow the <code>(path, locals, callback)</code> signature, e.g., Pug, EJS, Handlebars." },
    { q: "How to render plain HTML?", a: "<code>res.send('&lt;h1&gt;Hello&lt;/h1&gt;');</code> or <code>res.sendFile(path)</code>." },
    { q: "What is response.cookie()?", a: "Sets a cookie in the HTTP response. <code>res.cookie(name, value, options);</code>" },
    { q: "When does CORS fail?", a: "When server doesn't include CORS headers, origin mismatches, disallowed HTTP methods, or credentials not allowed." },
    { q: "What is Pug template engine?", a: "A template engine that uses indentation and concise tags to generate dynamic HTML server-side." },
    { q: "What is sanitising input?", a: "Cleaning and validating user input to prevent XSS, SQL injection, and other security attacks." },
    { q: "How to generate a skeleton Express app?", a: "<code>npm install -g express-generator</code> then <code>express my-app</code>." },
    { q: "How to secure Express apps?", a: "Use Helmet.js, sanitise inputs, enable HTTPS, implement rate limiting, keep dependencies updated." },
    { q: "Types of middleware?", a: "Application-level, router-level, error-handling, built-in, third-party." },
    { q: "List built-in middleware functions.", a: "express.json(), express.static(), express.urlencoded(), express.raw(), express.text()." },
    { q: "Name third-party middleware.", a: "body-parser, cors, morgan, helmet, express-session, passport." },
    { q: "When is application-level middleware used?", a: "Bound to an Express instance and executed for every incoming request (e.g., logging, authentication)." },
    { q: "What is router-level middleware?", a: "Bound to an express.Router() instance, applied only to routes handled by that router." },
    { q: "What is express.Router()?", a: "Creates a new router object for modular route handling." },
    { q: "What are arguments to a route handler?", a: "<code>req</code> (request), <code>res</code> (response), <code>next</code> (callback to pass control)." },
    { q: "How to handle errors in Express?", a: "Use error-handling middleware with four parameters: <code>(err, req, res, next)</code>. Call <code>next(err)</code> to trigger it." },
    { q: "Difference between traditional server and Express server?", a: "Traditional (PHP/Java) uses multi-threaded, blocking I/O. Express (Node.js) uses single-threaded, non-blocking I/O with event loop." },
    { q: "Purpose of next() function?", a: "Passes control to the next middleware; if not called, the request-response cycle terminates." },
    { q: "Difference between app.route() and app.use()?", a: "<code>app.route()</code> defines multiple HTTP methods for a single route. <code>app.use()</code> mounts middleware or routers." },
    { q: "What is dynamic routing?", a: "Routes with parameters (e.g., <code>/users/:userId</code>). Values accessible via <code>req.params.userId</code>." },
    { q: "How to serve static files?", a: "<code>app.use(express.static('public'))</code>" },
    { q: "Use of app.use()?", a: "Adds global or route‑specific middleware functions." }
  ];

  // Helper to render HTML safely from answers (allow basic inline code)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section - Responsive */}
      <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-teal-800 text-white py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-5xl"> 🚀 </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200 break-words">
            Node.js & Express.js – Complete Interview Guide
          </h1>
          <p className="text-base md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Beginner → Advanced | Event Loop | Security | CORS | Helmet | Clustering | Microservices
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">Event Loop</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">Middleware</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">Security</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">Clustering</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 md:p-6 mb-8 md:mb-10 border border-emerald-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">📘</div>
            <div>
              <h2 className="font-bold text-lg md:text-xl text-emerald-800 mb-2">Master Node.js & Express.js</h2>
              <p className="text-sm md:text-base text-gray-700">This guide covers everything from fundamental concepts to advanced topics: event loop, streams, clustering, security (CORS, Helmet), microservices, and deployment.</p>
            </div>
          </div>
        </div>

        {/* BEGINNER SECTION */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-center gap-3 mb-4 md:mb-6 flex-wrap">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">🟢 Beginner Level</h2>
          </div>
          {/* Key Takeaways */}
          <div className="bg-green-50 border-l-4 border-green-500 p-3 md:p-4 mb-4 md:mb-6 rounded-r-xl">
            <p className="font-semibold text-green-800 mb-1 text-sm md:text-base">📌 Key takeaways (Beginner)</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 space-y-1">
              <li>Node.js = single‑threaded event loop + non‑blocking I/O → handles thousands of concurrent connections.</li>
              <li>NPM manages packages; <code>package.json</code> holds project metadata.</li>
              <li>V8 engine compiles JS to machine code; libuv handles async I/O.</li>
              <li>Modules are reusable blocks – use <code>require()</code> (CommonJS) or <code>import</code> (ESM).</li>
              <li>Environment variables via <code>process.env</code> + <code>dotenv</code>.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1  gap-4">
            {beginnerQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="bg-green-100 text-green-700 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base break-words" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <div className="text-gray-600 text-xs md:text-sm mt-1 break-words" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Memorization Tip */}
          <div className="mt-4 md:mt-6 bg-green-100 rounded-xl p-3 md:p-4 border border-green-200">
            <p className="text-green-800 text-xs md:text-sm font-medium">💡 <strong>Easy memorization tip (Beginner):</strong> <br />
              Remember <strong>“V8 + libuv + event loop = Node.js”</strong>. For Express: <strong>“app.get/post, use middleware, send JSON”</strong>.</p>
          </div>
        </div>

        {/* INTERMEDIATE SECTION */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-center gap-3 mb-4 md:mb-6 flex-wrap">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">🟠 Intermediate Level</h2>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-3 md:p-4 mb-4 md:mb-6 rounded-r-xl">
            <p className="font-semibold text-orange-800 mb-1 text-sm md:text-base">📌 Key takeaways (Intermediate)</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 space-y-1">
              <li><strong>Streams</strong>: Readable, Writable, Duplex, Transform – process data chunk‑by‑chunk.</li>
              <li><strong>Buffers</strong> handle binary data (images, files).</li>
              <li><strong>Event loop phases</strong>: timers → I/O → poll → check → close. Microtasks (nextTick, Promises) run between phases.</li>
              <li><code>setImmediate()</code> vs <code>process.nextTick()</code>: nextTick runs before any I/O, setImmediate after I/O.</li>
              <li><strong>Clustering</strong> forks multiple workers (one per CPU core) to utilise multi‑core systems.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1  gap-4">
            {intermediateQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="bg-orange-100 text-orange-700 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 21}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base break-words" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <div className="text-gray-600 text-xs md:text-sm mt-1 break-words" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 md:mt-6 bg-orange-100 rounded-xl p-3 md:p-4 border border-orange-200">
            <p className="text-orange-800 text-xs md:text-sm font-medium">💡 <strong>Easy memorization tip (Intermediate):</strong> <br />
              Event loop order: <strong>“Timers → Poll → Check → Close”</strong> + microtasks after each phase. <br />
              Streams: <strong>“RWD – Read, Write, Duplex”</strong> (and Transform).</p>
          </div>
        </div>

        {/* ADVANCED SECTION */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-center gap-3 mb-4 md:mb-6 flex-wrap">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">🔴 Advanced Level</h2>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-3 md:p-4 mb-4 md:mb-6 rounded-r-xl">
            <p className="font-semibold text-red-800 mb-1 text-sm md:text-base">📌 Key takeaways (Advanced)</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 space-y-1">
              <li><strong>Microservices</strong> + Node.js = natural fit (lightweight, fast I/O).</li>
              <li><strong>Worker threads</strong> for CPU‑heavy tasks (avoid blocking event loop).</li>
              <li><strong>Observability</strong>: logging (Elastic), metrics (Prometheus), tracing (OpenTelemetry).</li>
              <li><strong>Security best practices</strong>: Helmet, rate limiting, JWT, bcrypt, input sanitisation.</li>
              <li><strong>Containerisation</strong> with Docker + orchestration (Kubernetes) for scaling.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1  gap-4">
            {advancedQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="bg-red-100 text-red-700 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 38}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base break-words" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <div className="text-gray-600 text-xs md:text-sm mt-1 break-words" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 md:mt-6 bg-red-100 rounded-xl p-3 md:p-4 border border-red-200">
            <p className="text-red-800 text-xs md:text-sm font-medium">💡 <strong>Easy memorization tip (Advanced):</strong> <br />
              <strong>“CPU work → worker_threads; I/O work → event loop”</strong>. <br />
              Scalability: <strong>“Clone (clustering) → Decompose (microservices) → Cache (Redis) → Queue (RabbitMQ)”</strong>.</p>
          </div>
        </div>

        {/* EXPRESS SECTION */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-center gap-3 mb-4 md:mb-6 flex-wrap">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">⚙️ Express.js Specific Questions</h2>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 mb-4 md:mb-6 rounded-r-xl">
            <p className="font-semibold text-blue-800 mb-1 text-sm md:text-base">📌 Key takeaways (Express)</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 space-y-1">
              <li><strong>Middleware</strong> = functions that run in order: <code>app.use()</code> (global), <code>app.METHOD()</code> (route‑specific).</li>
              <li><strong>Built‑in middleware</strong>: <code>express.json()</code>, <code>express.urlencoded()</code>, <code>express.static()</code>.</li>
              <li><strong>Error‑handling middleware</strong> has 4 parameters <code>(err, req, res, next)</code>.</li>
              <li><strong>Security</strong>: helmet (headers), cors (cross‑origin), express‑rate‑limit (brute force).</li>
              <li><strong>Routing</strong>: <code>app.route('/path').get().post()</code> and <code>express.Router()</code> for modularity.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1  gap-4">
            {expressQuestions.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="bg-blue-100 text-blue-700 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 59}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm md:text-base break-words" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <div className="text-gray-600 text-xs md:text-sm mt-1 break-words" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{item.code}</pre>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 md:mt-6 bg-blue-100 rounded-xl p-3 md:p-4 border border-blue-200">
            <p className="text-blue-800 text-xs md:text-sm font-medium">💡 <strong>Easy memorization tip (Express):</strong> <br />
              <strong>“app.use(cors(), helmet(), express.json())”</strong> → these three are almost always at the top of your main file. <br />
              Middleware order matters: place error‑handling middleware last.</p>
          </div>
        </div>

        {/* SECURITY DEEP DIVE */}
        <div className="mb-12 md:mb-14">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">🔐 Security & Middleware Deep Dive</h2>
          </div>
          <div className="grid grid-cols-1  gap-4">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
              <h3 className="font-bold text-gray-800 text-sm md:text-base">Detailed: CORS configuration</h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1">The <code>cors</code> package allows fine‑grained control: <code>origin</code>, <code>methods</code>, <code>allowedHeaders</code>, <code>exposedHeaders</code>, <code>credentials</code>. To enable credentials (cookies) you must set <code>credentials: true</code> and the client must set <code>withCredentials: true</code>.</p>
              <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{`app.use(cors({
        origin: 'https://myfrontend.com',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
      }));`}</pre>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
              <h3 className="font-bold text-gray-800 text-sm md:text-base">Detailed: cookie‑parser options</h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1"><code>cookie-parser</code> can also parse signed cookies if you provide a secret. Signed cookies prevent tampering.</p>
              <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{`app.use(cookieParser('my-secret'));
  res.cookie('name', 'value', { signed: true });
// later: req.signedCookies.name`}</pre>
            </div >
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
              <h3 className="font-bold text-gray-800 text-sm md:text-base">Detailed: Helmet configuration</h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1">Helmet can be customized: disable a header, set custom CSP directives.</p>
              <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs mt-2">{`app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com']
    }
  }
}));`}</pre>
            </div>
          </div >
        </div >

        {/* QUICK REFERENCE TABLE - Fully responsive with escaped braces */}
        <div className="mb-12 md:mb-14" >
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">📋 Quick Reference & Memorization Table</h3>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-[500px] md:min-w-full bg-white">
              <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <tr>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Concept</th>
                  <th className="px-3 py-2 md:px-4 md:py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Command / Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Start Node.js app with debugging</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>node --inspect app.js</code></td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">PM2 cluster mode</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>pm2 start app.js -i max</code></td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Express JSON body parser</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>app.use(express.json())</code></td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Nginx reverse proxy config</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>proxy_pass http://localhost:3000;</code></td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Generate a JWT</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>jwt.sign(payload, secret)</code></td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Environment variable</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>process.env.PORT || 3000</code></td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Rate limiting (Express)</td>
                  {/* ESCAPED BRACES FIX */}
                  <td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>app.use(rateLimit(&#123; windowMs, max &#125;))</code></td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 md:px-4 md:py-2 border-t text-xs md:text-sm">Password hashing</td><td className="px-3 py-2 md:px-4 md:py-2 border-t font-mono text-xs md:text-sm"><code>bcrypt.hash(password, saltRounds)</code></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FINAL ADVICE */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 md:p-6 border border-emerald-100" >
          <div className="flex items-start gap-3">
            <div className="text-2xl md:text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-emerald-800">Key advice for interviews</h3>
              <p className="text-sm md:text-base text-gray-700">For interviews, practice explaining the event loop with a diagram, understand the difference between scaling (clustering vs. worker threads), and be ready to write a small Express server with middleware, CORS, and Helmet. Show that you know how to handle errors and secure the app.</p>
              <div className="mt-3 bg-white/50 rounded-lg p-3 text-xs md:text-sm text-gray-800">
                <strong>⏱️ Quick revision phrases:</strong><br />
                • “Node.js: single thread + event loop = concurrency without threads.”<br />
                • “Express middleware: req → res flow, call next() to continue.”<br />
                • “Security: Helmet for headers, Cors for cross‑origin, Rate limiting for DDoS, JWT + bcrypt for auth.”<br />
                • “Scaling: Cluster (multi‑process) or Worker threads (CPU tasks).”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}