// components/JavaScriptQuestions.tsx
import React from "react";

export default function JavaScriptQuestions() {
  const questions = [
    {
      id: 1,
      title: "What are the different data types present in JavaScript?",
      content: (
        <>
          <p>JavaScript has two categories: <strong>primitive</strong> and <strong>non‑primitive</strong>. Use <code className="bg-gray-100 px-1 rounded">typeof</code> to check a variable’s type.</p>
          <h4 className="font-semibold mt-3 mb-2">Primitive Types</h4>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>String</strong> – series of characters (quotes). <br /><code className="bg-gray-100 px-1 rounded">var str = "Vivek Singh Bisht";</code></li>
            <li><strong>Number</strong> – integers or decimals. <br /><code className="bg-gray-100 px-1 rounded">var x = 3; var y = 3.6;</code></li>
            <li><strong>BigInt</strong> – large integers beyond Number limit. <br /><code className="bg-gray-100 px-1 rounded">var big = 23456789012345678901234567890n;</code></li>
            <li><strong>Boolean</strong> – <code className="bg-gray-100 px-1 rounded">true</code> or <code className="bg-gray-100 px-1 rounded">false</code>.</li>
            <li><strong>Undefined</strong> – declared but not assigned. <br /><code className="bg-gray-100 px-1 rounded">var x;</code></li>
            <li><strong>Null</strong> – intentional absence of value. <br /><code className="bg-gray-100 px-1 rounded">var z = null;</code></li>
            <li><strong>Symbol</strong> (ES6) – unique and anonymous. <br /><code className="bg-gray-100 px-1 rounded">var sym = Symbol('id');</code></li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`typeof "John"      // "string"
typeof 3.14         // "number"
typeof true         // "boolean"
typeof 123n         // "bigint"
typeof undefined    // "undefined"
typeof null         // "object"  (historic bug)
typeof Symbol()     // "symbol"`}</pre>
          <h4 className="font-semibold mt-3 mb-2">Non‑primitive Types</h4>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Object</strong> – key‑value pairs. <br /><code className="bg-gray-100 px-1 rounded">var obj = &#123; x: 43, y: "Hello" &#125;;</code></li>
            <li><strong>Array</strong> – ordered list. <br /><code className="bg-gray-100 px-1 rounded">var arr = [5, "Hello", true];</code></li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Explain hoisting in JavaScript.",
      content: (
        <>
          <p>Hoisting moves all declarations (variables and functions) to the top of their scope before execution.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`hoistedVar = 3;
console.log(hoistedVar); // 3
var hoistedVar;

hoistedFunction(); // "Hello!"
function hoistedFunction() { console.log("Hello!"); }`}</pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-2 text-sm">Only declarations are hoisted, not initializations. <code className="bg-gray-200 px-1 rounded">console.log(x); var x = 23;</code> outputs <code className="bg-gray-200 px-1 rounded">undefined</code>.</div>
        </>
      ),
    },
    {
      id: 3,
      title: "Difference between == and ===",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><code className="bg-gray-100 px-1 rounded">==</code> – compares values (type conversion allowed).</li>
            <li><code className="bg-gray-100 px-1 rounded">===</code> – compares values <strong>and</strong> types (strict equality).</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`var x = 2, y = "2";
(x == y)  // true
(x === y) // false`}</pre>
        </>
      ),
    },
    {
      id: 4,
      title: "Difference between var, let, and const",
      content: (
        <>
          <div className="overflow-x-auto my-2">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr><th className="border px-3 py-2">Feature</th><th className="border px-3 py-2">var</th><th className="border px-3 py-2">let</th><th className="border px-3 py-2">const</th></tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">Scope</td><td className="border px-3 py-2">Function</td><td className="border px-3 py-2">Block</td><td className="border px-3 py-2">Block</td></tr>
                <tr><td className="border px-3 py-2">Reassignment</td><td className="border px-3 py-2">Yes</td><td className="border px-3 py-2">Yes</td><td className="border px-3 py-2">No</td></tr>
                <tr><td className="border px-3 py-2">Redeclaration</td><td className="border px-3 py-2">Yes</td><td className="border px-3 py-2">No</td><td className="border px-3 py-2">No</td></tr>
                <tr><td className="border px-3 py-2">Hoisted</td><td className="border px-3 py-2">Yes (undefined)</td><td className="border px-3 py-2">Yes (TDZ)</td><td className="border px-3 py-2">Yes (TDZ)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-2 text-sm">TDZ = Temporal Dead Zone – accessing before declaration throws <code className="bg-gray-200 px-1 rounded">ReferenceError</code>.</div>
        </>
      ),
    },
    {
      id: 5,
      title: "Is JavaScript statically or dynamically typed?",
      content: (
        <>
          <p><strong>Dynamically typed</strong> – types are checked at runtime, and a variable can hold any type.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`var a = 23;      // number
a = "Hello";     // now string`}</pre>
        </>
      ),
    },
    {
      id: 6,
      title: "What is NaN?",
      content: (
        <>
          <p><code>NaN</code> stands for “Not‑a‑Number”. <code>typeof NaN</code> returns <code>"number"</code>. Use <code>isNaN()</code> to check.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`isNaN("Hello")   // true
isNaN(345)       // false
isNaN('1')       // false (converted to 1)
isNaN(undefined) // true`}</pre>
        </>
      ),
    },
    {
      id: 7,
      title: "What is an IIFE?",
      content: (
        <>
          <p>Immediately Invoked Function Expression – runs as soon as it is defined.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`(function() {
  console.log("IIFE runs!");
})();`}</pre>
        </>
      ),
    },
    {
      id: 8,
      title: "Explain Higher Order Functions.",
      content: (
        <>
          <p>Functions that take other functions as arguments or return a function.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function higherOrder(fn) { fn(); }
higherOrder(() => console.log("Hello"));

function returnFn() { return () => "Do something"; }
var x = returnFn();
x(); // "Do something"`}</pre>
        </>
      ),
    },
    {
      id: 9,
      title: "Explain the this keyword.",
      content: (
        <>
          <p><code>this</code> refers to the object that owns the function call (the object left of the dot at invocation).</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`var obj = {
  name: "vivek",
  getName() { console.log(this.name); }
};
obj.getName(); // "vivek"`}</pre>
        </>
      ),
    },
    {
      id: 10,
      title: "call(), apply(), and bind()",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><code>call()</code> – invokes immediately, arguments one by one.</li>
            <li><code>apply()</code> – invokes immediately, arguments as array.</li>
            <li><code>bind()</code> – returns a new function with fixed <code>this</code>.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const person = { name: "Shahed" };
function greet(city, country) {
  console.log(\`Hello \${this.name} from \${city}, \${country}\`);
}
greet.call(person, "Dhaka", "Bangladesh");
greet.apply(person, ["Dhaka", "Bangladesh"]);
const bound = greet.bind(person);
bound("Dhaka", "Bangladesh");`}</pre>
        </>
      ),
    },
    {
      id: 11,
      title: "Scope and Scope Chain",
      content: (
        <>
          <p><strong>Global scope</strong> – accessible everywhere. <strong>Function scope</strong> – inside function only. <strong>Block scope</strong> (<code>let</code>/<code>const</code>) – inside <code>{}</code>.</p>
          <p><strong>Scope chain:</strong> JS looks for a variable in current scope → outer scope → global scope → error if not found.</p>
        </>
      ),
    },
    {
      id: 12,
      title: "Closures",
      content: (
        <>
          <p>A function remembers variables from its outer scope even after the outer function returns.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2`}</pre>
        </>
      ),
    },
    {
      id: 13,
      title: "Callbacks",
      content: (
        <>
          <p>A function passed as an argument to another function, executed later.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function processUserInput(callback) {
  let name = "John";
  callback(name);
}
processUserInput((name) => console.log("Hello " + name));`}</pre>
        </>
      ),
    },
    {
      id: 14,
      title: "Recursion",
      content: (
        <>
          <p>A function that calls itself with a base case to stop.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
factorial(5); // 120`}</pre>
        </>
      ),
    },
    {
      id: 15,
      title: "Constructor Functions",
      content: (
        <>
          <p>Blueprints to create multiple similar objects. Use <code>new</code> keyword.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Vivek", 25);`}</pre>
        </>
      ),
    },
    {
      id: 16,
      title: "What is DOM?",
      content: <p>Document Object Model – a tree representation of HTML that JavaScript can manipulate.</p>,
    },
    {
      id: 17,
      title: "What is BOM?",
      content: <p>Browser Object Model – provides objects like <code>window</code>, <code>navigator</code>, <code>location</code>, <code>history</code> to interact with the browser.</p>,
    },
    {
      id: 18,
      title: "Client‑side vs Server‑side JavaScript",
      content: (
        <ul className="list-disc list-inside ml-4">
          <li><strong>Client‑side</strong> – runs in browser, manipulates DOM/BOM.</li>
          <li><strong>Server‑side</strong> – runs on server (Node.js), handles requests, databases, files.</li>
        </ul>
      ),
    },
    {
      id: 19,
      title: "Rest parameter vs Spread operator",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Rest (<code>...args</code>)</strong> – collects remaining arguments into an array (function parameter).</li>
            <li><strong>Spread (<code>...iterable</code>)</strong> – expands an array/object into individual elements.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`// Rest
function sum(...nums) { return nums.reduce((a,b)=>a+b); }
sum(1,2,3); // 6

// Spread
const arr = [1,2,3];
const copy = [...arr];
const merged = { ...{a:1}, ...{b:2} };`}</pre>
        </>
      ),
    },
    {
      id: 20,
      title: "Promises",
      content: (
        <>
          <p>Handle asynchronous operations. States: Pending, Fulfilled, Rejected, Settled.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
myPromise.then(result => console.log(result));`}</pre>
        </>
      ),
    },
    {
      id: 21,
      title: "map(), filter(), reduce() + custom map()",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><code>map()</code> – transforms each element → new array.</li>
            <li><code>filter()</code> – selects elements that pass a test.</li>
            <li><code>reduce()</code> – accumulates to a single value.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const nums = [1,2,3,4];
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
}`}</pre>
        </>
      ),
    },
    {
      id: 22,
      title: "How does JavaScript work? (Execution Context, Call Stack, Event Loop)",
      content: (
        <>
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
          <p>Every time code runs, it does so inside an Execution Context (Global, Function, or Eval). Each context has a creation phase (hoisting, <code>this</code>, scope chain) and an execution phase.</p>
          <h4 className="font-semibold mt-3">Heap</h4>
          <p>Stores all variables and functions. Memory is allocated on the heap.</p>
          <h4 className="font-semibold mt-3">Call Stack (LIFO)</h4>
          <p>Manages function calls. If a function calls itself infinitely → stack overflow.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function first() { console.log("First"); }
function second() { first(); console.log("Second"); }
second(); // Stack: second → first → log → first returns → log → second returns`}</pre>
          <h4 className="font-semibold mt-3">Event Loop &amp; Asynchronous Behavior</h4>
          <p>Web APIs (setTimeout, fetch, DOM events) are handled outside the call stack. When they complete, their callbacks go to the <strong>task queue</strong> (or microtask queue). The <strong>event loop</strong> constantly checks if the call stack is empty; if empty, it pushes callbacks from the queue to the stack.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2

Promise.resolve().then(() => console.log("microtask"));
console.log("4");
// Output: 4, "microtask"  (microtasks run before next tasks)`}</pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-2 text-sm"><strong>Microtasks</strong> (Promises, queueMicrotask) have higher priority than regular tasks (setTimeout, I/O).</div>
        </>
      ),
    },
    {
      id: 23,
      title: "Difference between null and undefined",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><code>undefined</code> means a variable has been declared but not assigned any value.</li>
            <li><code>null</code> is an assignment value representing no value or empty object.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  (historical bug)`}</pre>
        </>
      ),
    },
    {
      id: 24,
      title: "Explain async/await and how it differs from Promises",
      content: (
        <>
          <p><code>async/await</code> is syntactic sugar over Promises, making asynchronous code look synchronous and easier to read.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`// Promise version
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
}`}</pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-2 text-sm">Always use <code>try/catch</code> with <code>await</code> to handle errors. An <code>async</code> function always returns a Promise.</div>
        </>
      ),
    },
    {
      id: 25,
      title: "localStorage, sessionStorage, and cookies – differences",
      content: (
        <>
          <div className="overflow-x-auto my-3">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr><th className="border px-3 py-2">Feature</th><th className="border px-3 py-2">localStorage</th><th className="border px-3 py-2">sessionStorage</th><th className="border px-3 py-2">Cookie</th></tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">Capacity</td><td className="border px-3 py-2">~10MB</td><td className="border px-3 py-2">~5MB</td><td className="border px-3 py-2">~4KB</td></tr>
                <tr><td className="border px-3 py-2">Expiry</td><td className="border px-3 py-2">Never (manual clear)</td><td className="border px-3 py-2">Tab/window closed</td><td className="border px-3 py-2">Manual or set date</td></tr>
                <tr><td className="border px-3 py-2">Accessible from</td><td className="border px-3 py-2">Any window</td><td className="border px-3 py-2">Same tab only</td><td className="border px-3 py-2">Any window</td></tr>
                <tr><td className="border px-3 py-2">Sent to server</td><td className="border px-3 py-2">No</td><td className="border px-3 py-2">No</td><td className="border px-3 py-2">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`// localStorage example
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme')); // dark
localStorage.removeItem('theme');`}</pre>
        </>
      ),
    },
    {
      id: 26,
      title: "What is event delegation? Why is it useful?",
      content: (
        <>
          <p>Event delegation is a technique where a single event listener is added to a parent element instead of individual child elements. It leverages event bubbling.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`// Instead of adding click listeners to each button
document.getElementById('button-container').addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.innerText);
  }
});`}</pre>
          <p><strong>Benefits:</strong> Better performance (fewer listeners), works for dynamically added elements.</p>
        </>
      ),
    },
    {
      id: 27,
      title: "Explain prototypal inheritance in JavaScript.",
      content: (
        <>
          <p>Every object has an internal property <code>[[Prototype]]</code> (accessed via <code>__proto__</code> or <code>Object.getPrototypeOf()</code>). When a property/method is not found on the object itself, JavaScript looks up the prototype chain.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const parent = { greet() { console.log("Hello"); } };
const child = Object.create(parent);
child.greet(); // "Hello" – inherited

// Constructor function inheritance
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { console.log(\`\${this.name} makes sound\`); };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d = new Dog("Rex");
d.speak(); // "Rex makes sound"`}</pre>
        </>
      ),
    },
    {
      id: 28,
      title: "Difference between slice() and splice()",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><code>slice(start, end)</code> – returns a new array from <code>start</code> to <code>end-1</code>; does NOT modify original array.</li>
            <li><code>splice(start, deleteCount, ...items)</code> – changes original array (remove/replace/add).</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const arr = [1,2,3,4,5];
const sliced = arr.slice(1,4);                  // [2,3,4]
const spliced = arr.splice(1,2);                // removes 2,3 ; arr becomes [1,4,5]`}</pre>
        </>
      ),
    },
    {
      id: 29,
      title: "Difference between for...in and for...of",
      content: (
        <>
          <ul className="list-disc list-inside ml-4">
            <li><code>for...in</code> iterates over <strong>enumerable property keys</strong> (including inherited ones). Use for objects.</li>
            <li><code>for...of</code> iterates over <strong>iterable values</strong> (arrays, strings, maps, sets). Use for arrays/collections.</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const arr = ['a', 'b', 'c'];
for (let i in arr) console.log(i);       // "0", "1", "2" (indices)
for (let v of arr) console.log(v);       // "a", "b", "c" (values)

const obj = { x: 1, y: 2 };
for (let key in obj) console.log(key);   // "x", "y"`}</pre>
        </>
      ),
    },
    {
      id: 30,
      title: "What is JSON and common methods?",
      content: (
        <>
          <p>JSON (JavaScript Object Notation) is a lightweight data interchange format. JavaScript provides <code>JSON.stringify()</code> and <code>JSON.parse()</code>.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const obj = { name: "John", age: 30 };
const jsonStr = JSON.stringify(obj);    // '{"name":"John","age":30}'
const parsedObj = JSON.parse(jsonStr);  // { name: "John", age: 30 }`}</pre>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 my-2 text-sm">Keys and strings use double quotes. Functions and <code>undefined</code> are omitted.</div>
        </>
      ),
    },
    {
      id: 31,
      title: "Explain try...catch...finally and error handling.",
      content: (
        <>
          <p>Used to handle runtime errors gracefully without crashing the script.</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
} finally {
  console.log("This always runs");
}`}</pre>
          <p>The <code>finally</code> block executes regardless of error or success (e.g., closing files or cleaning up).</p>
        </>
      ),
    },
    {
      id: 32,
      title: "What are default parameters and template literals in ES6?",
      content: (
        <>
          <h4 className="font-semibold mt-2">Default parameters</h4>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`function greet(name = "Guest") {
  console.log(\`Hello, \${name}\`);
}
greet();        // Hello, Guest
greet("John");  // Hello, John`}</pre>
          <h4 className="font-semibold mt-2">Template literals (backticks <code>`</code>)</h4>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm my-3">{`const name = "World";
console.log(\`Hello \${name}!\`); // Hello World!

// Multi-line strings
const html = \`
  <div>
    <p>Line 1</p>
  </div>
\`;`}</pre>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
            <span className="text-5xl">📜 </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
            JavaScript Interview Questions
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
            Core concepts, ES6, async patterns, and common pitfalls – 32 essential questions
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">32+ Questions</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">ES6</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Async Patterns</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Common Pitfalls</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-10 border border-yellow-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">💡</div>
            <div>
              <h2 className="font-bold text-xl text-yellow-800 mb-2">Why JavaScript Fundamentals Matter</h2>
              <p className="text-gray-700">JavaScript is the language of the web. Mastering its core concepts – from data types and closures to the event loop and async patterns – is essential for any frontend or backend developer. These questions cover everything a fresher needs to know.</p>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid gap-6">
          {questions.map((q) => (
            <div key={q.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-100 text-yellow-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">{q.id}</span>
                  <h3 className="text-xl font-bold text-gray-800">{q.title}</h3>
                </div>
                <div className="text-gray-700 space-y-3">
                  {q.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Advice */}
        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg text-yellow-800">Final Advice for JavaScript Interviews</h3>
              <p className="text-gray-700">Practice writing code on paper or a whiteboard. Understand how the event loop works – it's a favourite topic. Be prepared to explain concepts like hoisting, closures, and async/await with examples. Use platforms like LeetCode to practice problem-solving, but don't neglect the fundamentals.</p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}