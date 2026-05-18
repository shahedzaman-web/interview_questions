import React from "react";
import Image from "next/image";

export default function JavaScriptBehindScenes() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
                🚀 How JavaScript Works Behind the Scenes
            </h2>

            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">1. The JavaScript Engine</h3>
            <p className="mb-2">The <strong>JavaScript engine</strong> is a computer program that reads and executes your code. Every major browser has its own engine:</p>
            <ul className="list-disc list-inside ml-4 mb-3">
                <li><strong>V8</strong> – Google Chrome &amp; Node.js (most popular)</li>
                <li><strong>SpiderMonkey</strong> – Mozilla Firefox</li>
                <li><strong>JavaScriptCore</strong> – Safari</li>
                <li><strong>Chakra</strong> – Internet Explorer</li>
            </ul>
            <Image width={500} height={500} src="https://www.freecodecamp.org/news/content/images/2023/05/09BA18A6-3F7A-4DBE-AA43-C482725CA5E4.jpeg" alt="JavaScript Engine" className="max-w-full h-auto rounded-lg border my-3" />
            <p className="mb-2">Every JavaScript engine contains two main parts:</p>
            <ul className="list-disc list-inside ml-4 mb-3">
                <li><strong>Call Stack</strong> – where the code is actually executed (function calls, execution contexts).</li>
                <li><strong>Heap</strong> – an unstructured memory pool where all objects are stored.</li>
            </ul>
            <Image width={500} height={500}src="https://www.freecodecamp.org/news/content/images/2023/05/FA4EDBD9-0348-4445-B795-8D1FEF904CBE.jpeg" alt="Call Stack" className="max-w-full h-auto rounded-lg border my-3" />
            <p className="mb-2">When your code enters the engine, it goes through multiple stages:</p>
            <ol className="list-decimal list-inside ml-4 mb-3">
                <li><strong>Parsing</strong> – the code is read and converted into an Abstract Syntax Tree (AST).</li>
                <li><strong>Compilation</strong> – the AST is turned into machine code (binary).</li>
                <li><strong>Execution</strong> – the code runs in the call stack, using execution contexts.</li>
            </ol>

            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">2. The JavaScript Runtime Environment</h3>
            <p className="mb-2">Think of the runtime as the &quot;house&quot; that contains everything needed to run JavaScript. In a browser, the runtime consists of:</p>
            <Image width={500} height={500}src="https://www.freecodecamp.org/news/content/images/2023/05/CDFBBA53-5533-478E-91CE-5904714E1043.jpeg" alt="JavaScript Runtime Environment" className="max-w-full h-auto rounded-lg border my-3" />
            <ul className="list-disc list-inside ml-4 mb-3">
                <li><strong>JavaScript Engine</strong> (the core)</li>
                <li><strong>Web APIs</strong> – functionalities provided by the browser (not part of the language itself). Examples: DOM API, Fetch API, timers, etc.</li>
                <li><strong>Callback Queue</strong> – holds callback functions that are ready to be executed (FIFO order).</li>
            </ul>
            <p className="mb-2">The event loop constantly checks if the call stack is empty. When it is, it pushes callbacks from the queue onto the stack for execution.</p>
            <p className="mb-2"><strong>Two main runtime environments:</strong></p>
            <ul className="list-disc list-inside ml-4 mb-3">
                <li><strong>Browser runtime</strong> – gives access to Web APIs (DOM, events, etc.)</li>
                <li><strong>Node.js runtime</strong> – server-side environment. Instead of Web APIs, it uses C++ bindings and a thread pool.</li>
            </ul>

            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">3. Optimization Strategies – How JavaScript Gets Faster</h3>
            <h4 className="font-semibold text-lg mt-3">🔁 Just-in-Time (JIT) Compilation</h4>
            <Image width={500} height={500}src="https://www.freecodecamp.org/news/content/images/2023/05/EB039874-52DC-4CD8-B95C-F9E75F2D2283_4_5005_c.jpeg" alt="JIT Compilation" className="max-w-full h-auto rounded-lg border my-2" />
            <Image width={500} height={500}src="https://www.freecodecamp.org/news/content/images/2023/05/D3DC97A6-3D79-46E0-A2F2-BB3FA694F0EF_4_5005_c.jpeg" alt="JIT Compilation 2" className="max-w-full h-auto rounded-lg border my-2" />
            <Image width={500} height={500}src="https://www.freecodecamp.org/news/content/images/2023/05/E2BA4399-5F52-408C-B2AB-A9E6F74B3238_4_5005_c.jpeg" alt="JIT Compilation 3" className="max-w-full h-auto rounded-lg border my-2" />
            <p className="mb-2">JavaScript used to be purely interpreted (which was slow). Modern engines <strong>combine compilation and interpretation</strong> using JIT:</p>
            <ul className="list-disc list-inside ml-4 mb-3">
                <li>The code is compiled into machine code all at once, but not written to a binary file.</li>
                <li>It executes immediately after compilation.</li>
                <li>The engine first creates an unoptimized version to start quickly, then repeatedly re‑optimizes and re‑compiles in the background.</li>
                <li>This has dramatically improved JavaScript execution speed.</li>
            </ul>

            <h4 className="font-semibold text-lg mt-3">⚡ Inlining</h4>
            <p className="mb-2">When a function is called many times, the engine may replace the function call with the actual code inside the function. This reduces function call overhead and improves performance.</p>
            <p className="mb-2"><strong>Example:</strong> Instead of calling <code className="bg-gray-200 px-1 rounded">add(a, b)</code> repeatedly, the engine inserts <code className="bg-gray-200 px-1 rounded">return a + b</code> directly at the call site.</p>

            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">4. Performance Considerations for Developers</h3>
            <p className="mb-2">While the engine optimises code automatically, you can help it by following these best practices:</p>
            <ul className="list-disc list-inside ml-4 mb-3">
                <li><strong>Minimise DOM manipulation</strong> – frequent DOM access slows down rendering. Batch updates where possible.</li>
                <li><strong>Reduce function calls</strong> – especially inside loops. Inline simple operations when it makes sense.</li>
                <li><strong>Write clean, predictable code</strong> – engines optimise better for patterns they recognise.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                📌 <strong>Key takeaway:</strong> Understanding how JavaScript works behind the scenes helps you write more efficient, scalable, and maintainable code. It also prepares you for future changes like WebAssembly.
            </div>
        </section>
    );
}