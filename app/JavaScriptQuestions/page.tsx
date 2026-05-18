import React from "react";

export default function JavaScriptQuestions() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        JavaScript Interview Questions for Freshers
      </h2>
      <p className="text-center text-gray-600 mb-6">Complete organized guide – includes core concepts, ES6, async, and common pitfalls</p>

      <div className="space-y-6">
        {/* 1. Data types */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">1. What are the different data types present in JavaScript?</h3>
          <p>JavaScript has two categories: <strong>primitive</strong> and <strong>non‑primitive</strong>. Use <code className="bg-gray-200 px-1 rounded">typeof</code> to check a variable’s type.</p>
          <h4 className="font-semibold mt-2">Primitive Types</h4>
          <ul className="list-disc list-inside ml-4">
            <li><strong>String</strong> – series of characters (quotes). <br /><code className="bg-gray-200 px-1 rounded">var str = "Vivek Singh Bisht";</code></li>
            <li><strong>Number</strong> – integers or decimals. <br /><code className="bg-gray-200 px-1 rounded">var x = 3; var y = 3.6;</code></li>
            <li><strong>BigInt</strong> – large integers beyond Number limit. <br /><code className="bg-gray-200 px-1 rounded">var big = 23456789012345678901234567890n;</code></li>
            <li><strong>Boolean</strong> – <code className="bg-gray-200 px-1 rounded">true</code> or <code className="bg-gray-200 px-1 rounded">false</code>.</li>
            <li><strong>Undefined</strong> – declared but not assigned. <br /><code className="bg-gray-200 px-1 rounded">var x;</code></li>
            <li><strong>Null</strong> – intentional absence of value. <br /><code className="bg-gray-200 px-1 rounded">var z = null;</code></li>
            <li><strong>Symbol</strong> (ES6) – unique and anonymous. <br /><code className="bg-gray-200 px-1 rounded">var sym = Symbol('id');</code></li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`typeof "John"      // "string"
typeof 3.14         // "number"
typeof true         // "boolean"
typeof 123n         // "bigint"
typeof undefined    // "undefined"
typeof null         // "object"  (historic bug)
typeof Symbol()     // "symbol"`}
          </pre>
          <h4 className="font-semibold mt-2">Non‑primitive Types</h4>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Object</strong> – key‑value pairs. <br /><code className="bg-gray-200 px-1 rounded">var obj = &#123; x: 43, y: "Hello" &#125;;</code></li>
            <li><strong>Array</strong> – ordered list. <br /><code className="bg-gray-200 px-1 rounded">var arr = [5, "Hello", true];</code></li>
          </ul>
        </div>

        {/* 2. Hoisting */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">2. Explain hoisting in JavaScript.</h3>
          <p>Hoisting moves all declarations (variables and functions) to the top of their scope before execution.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`hoistedVar = 3;
console.log(hoistedVar); // 3
var hoistedVar;

hoistedFunction(); // "Hello!"
function hoistedFunction() { console.log("Hello!"); }`}
          </pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3">Only declarations are hoisted, not initializations. <code className="bg-gray-200 px-1 rounded">console.log(x); var x = 23;</code> outputs <code className="bg-gray-200 px-1 rounded">undefined</code>.</div>
        </div>

        {/* 3. == vs === */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">3. Difference between <code className="bg-gray-200 px-1 rounded">==</code> and <code className="bg-gray-200 px-1 rounded">===</code></h3>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-200 px-1 rounded">==</code> – compares values (type conversion allowed).</li>
            <li><code className="bg-gray-200 px-1 rounded">===</code> – compares values <strong>and</strong> types (strict equality).</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`var x = 2, y = "2";
(x == y)  // true
(x === y) // false`}
          </pre>
        </div>

        {/* 4. var, let, const */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">4. Difference between <code className="bg-gray-200 px-1 rounded">var</code>, <code className="bg-gray-200 px-1 rounded">let</code>, and <code className="bg-gray-200 px-1 rounded">const</code></h3>
          <div className="overflow-x-auto my-3">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr><th className="border border-gray-300 px-3 py-2">Feature</th><th className="border border-gray-300 px-3 py-2">var</th><th className="border border-gray-300 px-3 py-2">let</th><th className="border border-gray-300 px-3 py-2">const</th></tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-3 py-2">Scope</td><td className="border border-gray-300 px-3 py-2">Function</td><td className="border border-gray-300 px-3 py-2">Block</td><td className="border border-gray-300 px-3 py-2">Block</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Reassignment</td><td className="border border-gray-300 px-3 py-2">Yes</td><td className="border border-gray-300 px-3 py-2">Yes</td><td className="border border-gray-300 px-3 py-2">No</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Redeclaration</td><td className="border border-gray-300 px-3 py-2">Yes</td><td className="border border-gray-300 px-3 py-2">No</td><td className="border border-gray-300 px-3 py-2">No</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Hoisted</td><td className="border border-gray-300 px-3 py-2">Yes (undefined)</td><td className="border border-gray-300 px-3 py-2">Yes (TDZ)</td><td className="border border-gray-300 px-3 py-2">Yes (TDZ)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3">TDZ = Temporal Dead Zone – accessing before declaration throws <code className="bg-gray-200 px-1 rounded">ReferenceError</code>.</div>
        </div>

        {/* 5. Dynamically typed */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">5. Is JavaScript statically or dynamically typed?</h3>
          <p><strong>Dynamically typed</strong> – types are checked at runtime, and a variable can hold any type.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`var a = 23;      // number
a = "Hello";     // now string`}
          </pre>
        </div>

        {/* 6. NaN */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">6. What is <code className="bg-gray-200 px-1 rounded">NaN</code>?</h3>
          <p><code className="bg-gray-200 px-1 rounded">NaN</code> stands for “Not‑a‑Number”. <code className="bg-gray-200 px-1 rounded">typeof NaN</code> returns <code className="bg-gray-200 px-1 rounded">"number"</code>. Use <code className="bg-gray-200 px-1 rounded">isNaN()</code> to check.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`isNaN("Hello")   // true
isNaN(345)       // false
isNaN('1')       // false (converted to 1)
isNaN(undefined) // true`}
          </pre>
        </div>

        {/* 7. IIFE */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">7. What is an IIFE?</h3>
          <p>Immediately Invoked Function Expression – runs as soon as it is defined.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`(function() {
  console.log("IIFE runs!");
})();`}
          </pre>
        </div>

        {/* 8. Higher order functions */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">8. Explain Higher Order Functions.</h3>
          <p>Functions that take other functions as arguments or return a function.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function higherOrder(fn) { fn(); }
higherOrder(() => console.log("Hello"));

function returnFn() { return () => "Do something"; }
var x = returnFn();
x(); // "Do something"`}
          </pre>
        </div>

        {/* 9. this */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">9. Explain the <code className="bg-gray-200 px-1 rounded">this</code> keyword.</h3>
          <p><code className="bg-gray-200 px-1 rounded">this</code> refers to the object that owns the function call (the object left of the dot at invocation).</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`var obj = {
  name: "vivek",
  getName() { console.log(this.name); }
};
obj.getName(); // "vivek"`}
          </pre>
        </div>

        {/* 10. call, apply, bind */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">10. <code className="bg-gray-200 px-1 rounded">call()</code>, <code className="bg-gray-200 px-1 rounded">apply()</code>, and <code className="bg-gray-200 px-1 rounded">bind()</code></h3>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-200 px-1 rounded">call()</code> – invokes immediately, arguments one by one.</li>
            <li><code className="bg-gray-200 px-1 rounded">apply()</code> – invokes immediately, arguments as array.</li>
            <li><code className="bg-gray-200 px-1 rounded">bind()</code> – returns a new function with fixed <code className="bg-gray-200 px-1 rounded">this</code>.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const person = { name: "Shahed" };
function greet(city, country) {
  console.log(\`Hello \${this.name} from \${city}, \${country}\`);
}
greet.call(person, "Dhaka", "Bangladesh");
greet.apply(person, ["Dhaka", "Bangladesh"]);
const bound = greet.bind(person);
bound("Dhaka", "Bangladesh");`}
          </pre>
        </div>

        {/* 11. Scope */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">11. Scope and Scope Chain</h3>
          <p><strong>Global scope</strong> – accessible everywhere. <strong>Function scope</strong> – inside function only. <strong>Block scope</strong> (<code className="bg-gray-200 px-1 rounded">let</code>/<code className="bg-gray-200 px-1 rounded">const</code>) – inside <code className="bg-gray-200 px-1 rounded">{}</code>.</p>
          <p><strong>Scope chain:</strong> JS looks for a variable in current scope → outer scope → global scope → error if not found.</p>
        </div>

        {/* 12. Closures */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">12. Closures</h3>
          <p>A function remembers variables from its outer scope even after the outer function returns.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2`}
          </pre>
        </div>

        {/* 13. Callbacks */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">13. Callbacks</h3>
          <p>A function passed as an argument to another function, executed later.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function processUserInput(callback) {
  let name = "John";
  callback(name);
}
processUserInput((name) => console.log("Hello " + name));`}
          </pre>
        </div>

        {/* 14. Recursion */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">14. Recursion</h3>
          <p>A function that calls itself with a base case to stop.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
factorial(5); // 120`}
          </pre>
        </div>

        {/* 15. Constructor functions */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">15. Constructor Functions</h3>
          <p>Blueprints to create multiple similar objects. Use <code className="bg-gray-200 px-1 rounded">new</code> keyword.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Vivek", 25);`}
          </pre>
        </div>

        {/* 16. DOM */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">16. What is DOM?</h3>
          <p>Document Object Model – a tree representation of HTML that JavaScript can manipulate.</p>
        </div>

        {/* 17. BOM */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">17. What is BOM?</h3>
          <p>Browser Object Model – provides objects like <code className="bg-gray-200 px-1 rounded">window</code>, <code className="bg-gray-200 px-1 rounded">navigator</code>, <code className="bg-gray-200 px-1 rounded">location</code>, <code className="bg-gray-200 px-1 rounded">history</code> to interact with the browser.</p>
        </div>

        {/* 18. Client vs server */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">18. Client‑side vs Server‑side JavaScript</h3>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Client‑side</strong> – runs in browser, manipulates DOM/BOM.</li>
            <li><strong>Server‑side</strong> – runs on server (Node.js), handles requests, databases, files.</li>
          </ul>
        </div>

        {/* 19. Rest vs Spread */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">19. Rest parameter vs Spread operator</h3>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Rest (<code className="bg-gray-200 px-1 rounded">...args</code>)</strong> – collects remaining arguments into an array (function parameter).</li>
            <li><strong>Spread (<code className="bg-gray-200 px-1 rounded">...iterable</code>)</strong> – expands an array/object into individual elements.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`// Rest
function sum(...nums) { return nums.reduce((a,b)=>a+b); }
sum(1,2,3); // 6

// Spread
const arr = [1,2,3];
const copy = [...arr];
const merged = { ...{a:1}, ...{b:2} };`}
          </pre>
        </div>

        {/* 20. Promises */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">20. Promises</h3>
          <p>Handle asynchronous operations. States: Pending, Fulfilled, Rejected, Settled.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(result => console.log(result));`}
          </pre>
        </div>

        {/* 21. map, filter, reduce */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">21. <code className="bg-gray-200 px-1 rounded">map()</code>, <code className="bg-gray-200 px-1 rounded">filter()</code>, <code className="bg-gray-200 px-1 rounded">reduce()</code> + custom <code className="bg-gray-200 px-1 rounded">map()</code></h3>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-200 px-1 rounded">map()</code> – transforms each element → new array.</li>
            <li><code className="bg-gray-200 px-1 rounded">filter()</code> – selects elements that pass a test.</li>
            <li><code className="bg-gray-200 px-1 rounded">reduce()</code> – accumulates to a single value.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const nums = [1,2,3,4];
const doubled = nums.map(n => n*2);      // [2,4,6,8]
const evens = nums.filter(n => n%2===0); // [2,4]
const sum = nums.reduce((acc,n)=>acc+n,0); // 10

// Custom map
function myMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}`}
          </pre>
        </div>

        {/* 22. Event loop */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">22. How does JavaScript work? (Execution Context, Call Stack, Event Loop)</h3>
          <img src="https://felixgerschau.com/static/79486d91b22a7c1b4044fce88a4cae20/5a190/js-event-loop-explained.png" alt="Event Loop" className="max-w-full h-auto rounded-lg border my-3" />
          <p>JavaScript is single‑threaded and uses an <strong>event‑driven</strong> model.</p>
          <p>Every major browser has a JavaScript engine that executes JavaScript code.</p>
          <ul className="list-disc list-inside ml-4 mb-3">
            <li>Chrome – V8 (Google Chrome V8 engine. Google’s V8 powers Google Chrome and Node.js, a back-end JavaScript runtime environment used to build server-side applications.)</li>
            <li>Firefox – SpiderMonkey (The Firefox SpiderMonkey engine powers Firefox, Thunderbird, and SeaMonkey.)</li>
            <li>Safari – JavaScriptCore (Safari uses the JavaScriptCore engine, which powers Safari, Safari Technology Preview, Safari on iOS, and Safari on Mac.)</li>
            <li>Edge – Chakra (Microsoft Edge uses the Chakra engine, which powers Microsoft Edge, Microsoft Edge on iOS, and Microsoft Edge on Mac.)</li>
          </ul>
          <h4 className="font-semibold mt-3">Execution Context</h4>
          <p>Every time code runs, it does so inside an Execution Context (Global, Function, or Eval). Each context has a creation phase (hoisting, <code className="bg-gray-200 px-1 rounded">this</code>, scope chain) and an execution phase.</p>
          <h4 className="font-semibold mt-3">Heap</h4>
          <p>Stores all variables and functions. Memory is allocated on the heap.</p>
          <h4 className="font-semibold mt-3">Call Stack (LIFO)</h4>
          <p>Manages function calls. If a function calls itself infinitely → stack overflow.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function first() { console.log("First"); }
function second() { first(); console.log("Second"); }
second(); // Stack: second → first → log → first returns → log → second returns`}
          </pre>
          <h4 className="font-semibold mt-3">Event Loop &amp; Asynchronous Behavior</h4>
          <p>Web APIs (setTimeout, fetch, DOM events) are handled outside the call stack. When they complete, their callbacks go to the <strong>task queue</strong> (or microtask queue). The <strong>event loop</strong> constantly checks if the call stack is empty; if empty, it pushes callbacks from the queue to the stack.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2

Promise.resolve().then(() => console.log("microtask"));
console.log("4");
// Output: 4, "microtask"  (microtasks run before next tasks)`}
          </pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3"><strong>Microtasks</strong> (Promises, queueMicrotask) have higher priority than regular tasks (setTimeout, I/O).</div>
        </div>

        {/* 23. null vs undefined */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">23. What is the difference between <code className="bg-gray-200 px-1 rounded">null</code> and <code className="bg-gray-200 px-1 rounded">undefined</code>?</h3>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-200 px-1 rounded">undefined</code> means a variable has been declared but not assigned any value.</li>
            <li><code className="bg-gray-200 px-1 rounded">null</code> is an assignment value representing no value or empty object.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  (historical bug)`}
          </pre>
        </div>

        {/* 24. async/await */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">24. Explain <code className="bg-gray-200 px-1 rounded">async/await</code> and how it differs from Promises.</h3>
          <p><code className="bg-gray-200 px-1 rounded">async/await</code> is syntactic sugar over Promises, making asynchronous code look synchronous and easier to read.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`// Promise version
function fetchData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Async/await version
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`}
          </pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3">Always use <code className="bg-gray-200 px-1 rounded">try/catch</code> with <code className="bg-gray-200 px-1 rounded">await</code> to handle errors. An <code className="bg-gray-200 px-1 rounded">async</code> function always returns a Promise.</div>
        </div>

        {/* 25. localStorage, sessionStorage, cookies */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">25. What are <code className="bg-gray-200 px-1 rounded">localStorage</code>, <code className="bg-gray-200 px-1 rounded">sessionStorage</code>, and cookies? Differences.</h3>
          <div className="overflow-x-auto my-3">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100"><tr><th className="border border-gray-300 px-3 py-2">Feature</th><th className="border border-gray-300 px-3 py-2">localStorage</th><th className="border border-gray-300 px-3 py-2">sessionStorage</th><th className="border border-gray-300 px-3 py-2">Cookie</th></tr></thead>
              <tbody>
                <tr><td className="border border-gray-300 px-3 py-2">Capacity</td><td className="border border-gray-300 px-3 py-2">~10MB</td><td className="border border-gray-300 px-3 py-2">~5MB</td><td className="border border-gray-300 px-3 py-2">~4KB</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Expiry</td><td className="border border-gray-300 px-3 py-2">Never (manual clear)</td><td className="border border-gray-300 px-3 py-2">Tab/window closed</td><td className="border border-gray-300 px-3 py-2">Manual or set date</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Accessible from</td><td className="border border-gray-300 px-3 py-2">Any window</td><td className="border border-gray-300 px-3 py-2">Same tab only</td><td className="border border-gray-300 px-3 py-2">Any window</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Sent to server</td><td className="border border-gray-300 px-3 py-2">No</td><td className="border border-gray-300 px-3 py-2">No</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`// localStorage example
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme')); // dark
localStorage.removeItem('theme');`}
          </pre>
        </div>

        {/* 26. Event delegation */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">26. What is event delegation? Why is it useful?</h3>
          <p>Event delegation is a technique where a single event listener is added to a parent element instead of individual child elements. It leverages event bubbling.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`// Instead of adding click listeners to each button
document.getElementById('button-container').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.innerText);
  }
});`}
          </pre>
          <p><strong>Benefits:</strong> Better performance (fewer listeners), works for dynamically added elements.</p>
        </div>

        {/* 27. Prototypal inheritance */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">27. Explain prototypal inheritance in JavaScript.</h3>
          <p>Every object has an internal property <code className="bg-gray-200 px-1 rounded">[[Prototype]]</code> (accessed via <code className="bg-gray-200 px-1 rounded">__proto__</code> or <code className="bg-gray-200 px-1 rounded">Object.getPrototypeOf()</code>). When a property/method is not found on the object itself, JavaScript looks up the prototype chain.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const parent = { greet() { console.log("Hello"); } };
const child = Object.create(parent);
child.greet(); // "Hello" – inherited

// Constructor function inheritance
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { console.log(\`\${this.name} makes sound\`); };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d = new Dog("Rex");
d.speak(); // "Rex makes sound"`}
          </pre>
        </div>

        {/* 28. slice vs splice */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">28. What is the difference between <code className="bg-gray-200 px-1 rounded">slice()</code> and <code className="bg-gray-200 px-1 rounded">splice()</code>?</h3>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-200 px-1 rounded">slice(start, end)</code> – returns a new array from <code className="bg-gray-200 px-1 rounded">start</code> to <code className="bg-gray-200 px-1 rounded">end-1</code>; does NOT modify original array.</li>
            <li><code className="bg-gray-200 px-1 rounded">splice(start, deleteCount, ...items)</code> – changes original array (remove/replace/add).</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const arr = [1,2,3,4,5];
const sliced = arr.slice(1,4);                  // [2,3,4]
const spliced = arr.splice(1,2);                // removes 2,3 ; arr becomes [1,4,5]`}
          </pre>
        </div>

        {/* 29. for...in vs for...of */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">29. What is the difference between <code className="bg-gray-200 px-1 rounded">for...in</code> and <code className="bg-gray-200 px-1 rounded">for...of</code>?</h3>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-200 px-1 rounded">for...in</code> iterates over <strong>enumerable property keys</strong> (including inherited ones). Use for objects.</li>
            <li><code className="bg-gray-200 px-1 rounded">for...of</code> iterates over <strong>iterable values</strong> (arrays, strings, maps, sets). Use for arrays/collections.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const arr = ['a', 'b', 'c'];
for (let i in arr) console.log(i);       // "0", "1", "2" (indices)
for (let v of arr) console.log(v);       // "a", "b", "c" (values)

const obj = { x: 1, y: 2 };
for (let key in obj) console.log(key);   // "x", "y"`}
          </pre>
        </div>

        {/* 30. JSON */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">30. What is <code className="bg-gray-200 px-1 rounded">JSON</code> and common methods?</h3>
          <p>JSON (JavaScript Object Notation) is a lightweight data interchange format. JavaScript provides <code className="bg-gray-200 px-1 rounded">JSON.stringify()</code> and <code className="bg-gray-200 px-1 rounded">JSON.parse()</code>.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const obj = { name: "John", age: 30 };
const jsonStr = JSON.stringify(obj);    // '{"name":"John","age":30}'
const parsedObj = JSON.parse(jsonStr);  // { name: "John", age: 30 }`}
          </pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-3">Keys and strings use double quotes. Functions and <code className="bg-gray-200 px-1 rounded">undefined</code> are omitted.</div>
        </div>

        {/* 31. try-catch-finally */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">31. Explain <code className="bg-gray-200 px-1 rounded">try...catch...finally</code> and error handling.</h3>
          <p>Used to handle runtime errors gracefully without crashing the script.</p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
} finally {
  console.log("This always runs");
}`}
          </pre>
          <p>The <code className="bg-gray-200 px-1 rounded">finally</code> block executes regardless of error or success (e.g., closing files or cleaning up).</p>
        </div>

        {/* 32. default parameters, template literals */}
        <div>
          <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">32. What are default parameters and template literals in ES6?</h3>
          <h4 className="font-semibold mt-2">Default parameters</h4>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function greet(name = "Guest") {
  console.log(\`Hello, \${name}\`);
}
greet();        // Hello, Guest
greet("John");  // Hello, John`}
          </pre>
          <h4 className="font-semibold mt-2">Template literals (backticks <code className="bg-gray-200 px-1 rounded">`</code>)</h4>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const name = "World";
console.log(\`Hello \${name}!\`); // Hello World!

// Multi-line strings
const html = \`
  &lt;div&gt;
    &lt;p&gt;Line 1&lt;/p&gt;
  &lt;/div&gt;
\`;`}
          </pre>
        </div>
      </div>
    </section>
  );
}