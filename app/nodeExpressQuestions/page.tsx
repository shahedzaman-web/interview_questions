// components/NodeExpressFull.tsx
import React from "react";

export default function NodeExpressFull() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        Node.js & Express.js – Complete Interview Guide
      </h2>
      <p className="text-gray-600 mb-6">Beginner → Advanced | Event Loop | Security | CORS | Helmet | Clustering | Microservices</p>

      {/* ==================== BEGINNER SECTION ==================== */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-teal-700 border-b border-teal-200 pb-1 mb-3">🟢 Beginner Level</h3>
        <div className="space-y-5">
          <div><strong>1. What is Node.js? How is it different from a browser’s JavaScript runtime?</strong><p className="mt-1 text-gray-700">Node.js is an open‑source, cross‑platform runtime environment that executes JavaScript outside a web browser, built on Chrome’s V8 engine. Unlike a browser, Node.js provides server‑side APIs (file system, HTTP, crypto, etc.) and does not have a DOM or window object. It is designed for building scalable network applications.</p></div>
          <div><strong>2. Explain the purpose of the V8 engine in Node.js.</strong><p className="mt-1 text-gray-700">V8 is Google’s high‑performance JavaScript engine written in C++. It compiles JavaScript directly to native machine code (JIT – Just‑In‑Time compilation) and manages memory allocation and garbage collection. Node.js embeds V8 to execute JavaScript on the server.</p></div>
          <div><strong>3. Why is Node.js single‑threaded? How does the event loop handle concurrency?</strong><p className="mt-1 text-gray-700">Node.js has a single main thread for executing JavaScript code, but it uses an event‑driven, non‑blocking I/O model. The event loop allows Node.js to perform other tasks while waiting for I/O operations (file reads, network requests). Concurrency is achieved by delegating blocking operations to a thread pool (libuv) and then notifying the event loop when they complete.</p></div>
          <div><strong>4. What is NPM? What does package.json contain?</strong><p className="mt-1 text-gray-700">NPM (Node Package Manager) is the default package manager for Node.js. <code>package.json</code> holds metadata about the project: name, version, scripts, dependencies (<code>dependencies</code>, <code>devDependencies</code>), and configuration. It allows sharing and installing packages easily.</p></div>
          <div><strong>5. Write a simple HTTP server using the built-in <code>http</code> module.</strong><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\\n');
});
server.listen(3000, () => console.log('Server running on port 3000'));`}</pre></div>
          <div><strong>6. What is the difference between <code>require</code> and <code>import</code>?</strong><p className="mt-1 text-gray-700"><code>require()</code> is the CommonJS module system, synchronous, and can be called conditionally. <code>import</code> is ES6 module syntax, asynchronous, supports static analysis, and is the standard for modern JavaScript. Node.js supports both, but you need to set <code>"type": "module"</code> in package.json to use ES modules by default.</p></div>
          <div><strong>7. Explain the concept of a callback function with an example.</strong><p className="mt-1 text-gray-700">A callback is a function passed as an argument to another function and executed after the outer function completes. It enables asynchronous programming.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // callback runs after file is read
});`}</pre></div>
          <div><strong>8. What are Promises? How do they improve over callbacks?</strong><p className="mt-1 text-gray-700">Promises represent the eventual result of an asynchronous operation. They have three states: pending, fulfilled, rejected. Promises avoid callback hell by allowing chaining with <code>.then()</code> and <code>.catch()</code>. They also enable better error handling and composition (<code>Promise.all</code>, <code>Promise.race</code>).</p></div>
          <div><strong>9. Explain <code>async/await</code> with an example.</strong><p className="mt-1 text-gray-700"><code>async/await</code> is syntactic sugar over Promises, making asynchronous code look synchronous. An <code>async</code> function returns a promise, and <code>await</code> pauses execution until the promise resolves.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`async function fetchData() {
  try {
    const data = await someAsyncOperation();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`}</pre></div>
          <div><strong>10. What is the <code>fs</code> module? Give an example of reading a file asynchronously.</strong><p className="mt-1 text-gray-700">The built‑in <code>fs</code> module provides file system operations. <code>fs.readFile</code> reads a file non‑blockingly.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});`}</pre></div>
          <div><strong>11. What are streams? Name the four types.</strong><p className="mt-1 text-gray-700">Streams allow processing data chunk‑by‑chunk without loading everything into memory. Types: <strong>Readable</strong> (read data), <strong>Writable</strong> (write data), <strong>Duplex</strong> (read + write), <strong>Transform</strong> (modify data as it passes through).</p></div>
          <div><strong>12. What is an EventEmitter? Provide an example.</strong><p className="mt-1 text-gray-700">EventEmitter is a class that allows objects to emit named events and register listeners. It’s central to Node.js’s event‑driven architecture.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', (name) => console.log(\`Hello \${name}\`));
emitter.emit('greet', 'Node.js');`}</pre></div>
          <div><strong>13. How do you get and set environment variables?</strong><p className="mt-1 text-gray-700">Use <code>process.env</code>. Example: <code>const PORT = process.env.PORT || 3000;</code>. To load from a <code>.env</code> file, install <code>dotenv</code> and call <code>require('dotenv').config()</code>.</p></div>
          <div><strong>14. What is middleware in Express.js? Give an example of logging middleware.</strong><p className="mt-1 text-gray-700">Middleware functions have access to <code>req</code>, <code>res</code>, and <code>next</code>. They can modify request/response or end the cycle. Example:</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});`}</pre></div>
          <div><strong>15. What is the difference between <code>app.get</code> and <code>app.use</code> in Express?</strong><p className="mt-1 text-gray-700"><code>app.use</code> mounts middleware that runs for all HTTP methods and any path that starts with the given path. <code>app.get</code> only responds to GET requests and exact path matching (unless route parameters are used).</p></div>
        </div>
      </div>

      {/* ==================== INTERMEDIATE SECTION ==================== */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-teal-700 border-b border-teal-200 pb-1 mb-3">🟠 Intermediate Level</h3>
        <div className="space-y-5">
          <div><strong>16. Explain the phases of the Node.js event loop.</strong><p className="mt-1 text-gray-700">The event loop runs in six phases: <strong>timers</strong> (setTimeout, setInterval), <strong>pending callbacks</strong> (I/O callbacks deferred to next loop), <strong>idle/prepare</strong> (internal), <strong>poll</strong> (retrieve new I/O events and execute their callbacks), <strong>check</strong> (setImmediate), <strong>close callbacks</strong> (socket.on('close')). Microtasks (process.nextTick, Promise.then) run between phases.</p></div>
          <div><strong>17. What is the difference between <code>process.nextTick</code> and <code>setImmediate</code>?</strong><p className="mt-1 text-gray-700"><code>process.nextTick()</code> queues the callback at the beginning of the current event loop phase, before any I/O. It can starve I/O if overused. <code>setImmediate()</code> queues the callback in the check phase, after I/O callbacks.</p></div>
          <div><strong>18. How does clustering work in Node.js? Write an example.</strong><p className="mt-1 text-gray-700">The <code>cluster</code> module allows creating multiple child processes (workers) that share the same server port. This improves throughput on multi‑core systems.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const cluster = require('cluster');
const http = require('http');
const os = require('os');
if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end('Hello')).listen(8000);
}`}</pre></div>
          <div><strong>19. What is the difference between <code>child_process.spawn</code> and <code>child_process.fork</code>?</strong><p className="mt-1 text-gray-700"><code>spawn</code> launches a new process with a given command and returns a <code>ChildProcess</code> object with streams for stdin/stdout. <code>fork</code> is a special case of <code>spawn</code> that creates a Node.js child process and automatically sets up an IPC channel for message passing. <code>fork</code> is used for offloading JavaScript tasks.</p></div>
          <div><strong>20. How do you handle uncaught exceptions and promise rejections?</strong><p className="mt-1 text-gray-700">Use <code>process.on('uncaughtException', callback)</code> for synchronous errors, but it’s recommended to shut down the process after logging. For unhandled promise rejections, use <code>process.on('unhandledRejection', callback)</code>. Always have a fallback error handler and restart the process (e.g., with PM2).</p></div>
          <div><strong>21. What is CORS and how do you enable it in Express?</strong><p className="mt-1 text-gray-700">CORS (Cross‑Origin Resource Sharing) is a mechanism that allows a server to specify which origins can access its resources. In Express, use the <code>cors</code> package: <code>npm install cors</code> then <code>app.use(cors())</code>. You can configure origin, methods, and credentials.</p></div>
          <div><strong>22. Explain <code>cookie-parser</code> middleware and session management.</strong><p className="mt-1 text-gray-700"><code>cookie-parser</code> parses the <code>Cookie</code> header and populates <code>req.cookies</code>. For session management, combine it with <code>express-session</code>:</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const session = require('express-session');
app.use(session({ secret: 'key', resave: false, saveUninitialized: true }));`}</pre><p className="mt-1 text-gray-700">Sessions store user data on the server, sending only a session ID cookie to the client.</p></div>
          <div><strong>23. What is Helmet.js and why use it?</strong><p className="mt-1 text-gray-700">Helmet is a collection of middleware functions that set security‑related HTTP headers (e.g., <code>X-Content-Type-Options</code>, <code>X-Frame-Options</code>, <code>Content-Security-Policy</code>) to protect against common web vulnerabilities like clickjacking, XSS, and MIME type sniffing. Use it with <code>app.use(require('helmet')())</code>.</p></div>
          <div><strong>24. How do you implement rate limiting in Express?</strong><p className="mt-1 text-gray-700">Install <code>express-rate-limit</code> and apply middleware:</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const rateLimit = require('express-rate-limit');
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use(limiter);`}</pre><p className="mt-1 text-gray-700">This limits each IP to 100 requests per 15 minutes.</p></div>
          <div><strong>25. What are worker threads? When would you use them?</strong><p className="mt-1 text-gray-700">Worker threads (<code>worker_threads</code> module) allow parallel execution of JavaScript code using threads (not processes). They share memory via <code>SharedArrayBuffer</code> and are ideal for CPU‑intensive tasks (e.g., image processing, complex calculations) without blocking the event loop.</p></div>
        </div>
      </div>

      {/* ==================== ADVANCED SECTION ==================== */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-teal-700 border-b border-teal-200 pb-1 mb-3">🔴 Advanced Level</h3>
        <div className="space-y-5">
          <div><strong>26. How would you design a scalable, high‑availability Node.js application?</strong><p className="mt-1 text-gray-700">Use a reverse proxy (Nginx/HAProxy) for load balancing across multiple Node.js instances (clustering or separate servers). Implement stateless services (store sessions in Redis), use horizontal scaling (multiple VPS/containers), set up a message queue for background tasks (RabbitMQ), and use caching (Redis). Also, adopt a microservices architecture and use container orchestration (Kubernetes).</p></div>
          <div><strong>27. What is the difference between a load balancer and a reverse proxy?</strong><p className="mt-1 text-gray-700">A reverse proxy receives client requests and forwards them to an internal server, can cache content, and can terminate SSL. A load balancer distributes traffic across multiple servers; it is a type of reverse proxy but focuses on balancing load. Nginx can act as both.</p></div>
          <div><strong>28. Explain the concept of microservices and how Node.js fits.</strong><p className="mt-1 text-gray-700">Microservices decompose an application into small, independent services, each with its own database and deployed separately. Node.js’s lightweight, fast I/O, and good support for HTTP/REST and messaging protocols make it excellent for building microservices. Common tools: Express, Fastify, gRPC, and message brokers.</p></div>
          <div><strong>29. What is the purpose of the <code>cluster</code> module vs. a process manager like PM2?</strong><p className="mt-1 text-gray-700">The <code>cluster</code> module creates workers programmatically and handles load distribution across cores. PM2 is a process manager that can also run a Node.js app in cluster mode (<code>pm2 start app.js -i max</code>). PM2 adds features like automatic restart, log management, monitoring, and zero‑downtime reloads.</p></div>
          <div><strong>30. How do you perform zero‑down time deployments for a Node.js app?</strong><p className="mt-1 text-gray-700">Use a reverse proxy (Nginx) that points to two or more backend instances. Deploy new version to standby instance, test it, then switch the proxy. Alternatively, use PM2’s <code>pm2 reload</code> which restarts workers one by one, or use container orchestration (Kubernetes rolling updates).</p></div>
          <div><strong>31. What are some advanced security measures for Node.js production apps?</strong><p className="mt-1 text-gray-700">In addition to Helmet and CORS: use environment variables for secrets, never commit <code>.env</code> files, enable HTTPS (SSL/TLS), implement rate limiting, validate and sanitize user input (express‑validator), set <code>NODE_ENV=production</code> to enable optimizations, run static analysis (ESLint security plugins), and use dependency scanning (<code>npm audit</code>).</p></div>
          <div><strong>32. How do you debug memory leaks in a Node.js application?</strong><p className="mt-1 text-gray-700">Use the <code>--inspect</code> flag and Chrome DevTools to take heap snapshots, compare them to find retained objects. Also use <code>clinic</code> (Clinic.js) doctor, flame, or bubbleprof. Monitor memory usage with <code>process.memoryUsage()</code> and look for steady increase without decline. Common causes: global variables, unremoved event listeners, cached data without expiry.</p></div>
          <div><strong>33. What is the difference between <code>setTimeout</code>, <code>setImmediate</code>, and <code>process.nextTick</code> in terms of event loop priority?</strong><p className="mt-1 text-gray-700"><code>nextTick</code> runs first (same phase, before I/O), then timers (setTimeout/setInterval), then <code>setImmediate</code> (check phase). Within timers, order depends on their timeout values; zero‑delay timers may be deferred. <code>setImmediate</code> always runs after poll phase.</p></div>
          <div><strong>34. How can you implement a distributed tracing system in Node.js?</strong><p className="mt-1 text-gray-700">Use OpenTelemetry to instrument your code and export spans to a backend like Jaeger or Zipkin. Libraries such as <code>@opentelemetry/instrumentation-http</code> and <code>@opentelemetry/instrumentation-express</code> auto‑collect traces. This helps trace requests across microservices.</p></div>
          <div><strong>35. Explain the role of <code>libuv</code> in Node.js.</strong><p className="mt-1 text-gray-700">libuv is a cross‑platform library that provides the event loop, thread pool for asynchronous I/O, and non‑blocking file system, network, and signal handling. It abstracts away OS differences (epoll on Linux, kqueue on BSD, IOCP on Windows).</p></div>
        </div>
      </div>

      {/* ==================== CORS, COOKIE PARSER, HELMET DETAILS ==================== */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-teal-700 border-b border-teal-200 pb-1 mb-3">🔐 Security & Middleware Deep Dive</h3>
        <div className="space-y-5">
          <div><strong>Detailed: CORS configuration</strong><p className="mt-1 text-gray-700">The <code>cors</code> package allows fine‑grained control: <code>origin</code>, <code>methods</code>, <code>allowedHeaders</code>, <code>exposedHeaders</code>, <code>credentials</code>. To enable credentials (cookies) you must set <code>credentials: true</code> and the client must set <code>withCredentials: true</code>.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`app.use(cors({
  origin: 'https://myfrontend.com',
  credentials: true,
  methods: ['GET','POST','PUT','DELETE']
}));`}</pre></div>
          <div><strong>Detailed: cookie‑parser options</strong><p className="mt-1 text-gray-700"><code>cookie-parser</code> can also parse signed cookies if you provide a secret. Signed cookies prevent tampering.</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`app.use(cookieParser('my-secret'));
// set a signed cookie
res.cookie('name', 'value', { signed: true });
// read
req.signedCookies.name`}</pre></div>
          <div><strong>Detailed: Helmet configuration</strong><p className="mt-1 text-gray-700">Helmet can be customized: disable a header, set custom CSP directives. Example:</p><pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com']
    }
  }
}));`}</pre></div>
        </div>
      </div>

      {/* ==================== QUICK REFERENCE TABLE ==================== */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">📋 Quick Reference</h3>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100"><tr><th className="border border-gray-300 px-3 py-2">Concept</th><th className="border border-gray-300 px-3 py-2">Command / Code</th></tr></thead>
          <tbody>
            <tr><td className="border border-gray-300 px-3 py-2">Start Node.js app with debugging</td><td className="border border-gray-300 px-3 py-2"><code>node --inspect app.js</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">PM2 cluster mode</td><td className="border border-gray-300 px-3 py-2"><code>pm2 start app.js -i max</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Express JSON body parser</td><td className="border border-gray-300 px-3 py-2"><code>app.use(express.json())</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Nginx reverse proxy config</td><td className="border border-gray-300 px-3 py-2"><code>proxy_pass http://localhost:3000;</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2">Generate a JWT</td><td className="border border-gray-300 px-3 py-2"><code>jwt.sign(payload, secret)</code></td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
        🎯 <strong>Key advice:</strong> For interviews, practice explaining the event loop with a diagram, understand the difference between scaling (clustering vs. worker threads), and be ready to write a small Express server with middleware, CORS, and Helmet. Show that you know how to handle errors and secure the app.
      </div>
    </section>
  );
}