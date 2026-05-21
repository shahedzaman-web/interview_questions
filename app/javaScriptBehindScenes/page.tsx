// app/javaScriptBehindScenes/page.tsx
import React from "react";
import Image from "next/image";

export default function JavaScriptBehindScenes() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-5xl"> 🚀 </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        How JavaScript Works Behind the Scenes
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Understand the event loop, call stack, JIT compilation, and more
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Event Loop</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Call Stack</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">JIT Compilation</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Web APIs</span>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">1. The JavaScript Engine</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <p className="text-gray-700 mb-4 leading-relaxed">The <strong className="text-amber-700">JavaScript engine</strong> is a computer program that reads and executes your code. Every major browser has its own engine:</p>
                            <ul className="list-disc list-inside ml-4 mb-6 text-gray-700 space-y-1">
                                <li><strong>V8</strong> – Google Chrome &amp; Node.js (most popular)</li>
                                <li><strong>SpiderMonkey</strong> – Mozilla Firefox</li>
                                <li><strong>JavaScriptCore</strong> – Safari</li>
                                <li><strong>Chakra</strong> – Internet Explorer</li>
                            </ul>
                            <div className="my-6 rounded-xl overflow-hidden shadow-md">
                                <Image width={800} height={400} src="https://www.freecodecamp.org/news/content/images/2023/05/09BA18A6-3F7A-4DBE-AA43-C482725CA5E4.jpeg" alt="JavaScript Engine" className="w-full h-auto object-cover" loading="eager" />
                            </div>
                            <p className="text-gray-700 mb-3">Every JavaScript engine contains two main parts:</p>
                            <ul className="list-disc list-inside ml-4 mb-6 text-gray-700 space-y-1">
                                <li><strong>Call Stack</strong> – where the code is actually executed (function calls, execution contexts).</li>
                                <li><strong>Heap</strong> – an unstructured memory pool where all objects are stored.</li>
                            </ul>
                            <div className="my-6 rounded-xl overflow-hidden shadow-md">
                                <Image width={800} height={400} src="https://www.freecodecamp.org/news/content/images/2023/05/FA4EDBD9-0348-4445-B795-8D1FEF904CBE.jpeg" alt="Call Stack" className="w-full h-auto object-cover" />
                            </div>
                            <p className="text-gray-700 mb-2">When your code enters the engine, it goes through multiple stages:</p>
                            <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-1">
                                <li><strong>Parsing</strong> – the code is read and converted into an Abstract Syntax Tree (AST).</li>
                                <li><strong>Compilation</strong> – the AST is turned into machine code (binary).</li>
                                <li><strong>Execution</strong> – the code runs in the call stack, using execution contexts.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">2. The JavaScript Runtime Environment</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">Think of the runtime as the "house" that contains everything needed to run JavaScript. In a browser, the runtime consists of:</p>
                            <div className="my-6 rounded-xl overflow-hidden shadow-md">
                                <Image width={800} height={400} src="https://www.freecodecamp.org/news/content/images/2023/05/CDFBBA53-5533-478E-91CE-5904714E1043.jpeg" alt="JavaScript Runtime Environment" className="w-full h-auto object-cover" />
                            </div>
                            <ul className="list-disc list-inside ml-4 mb-6 text-gray-700 space-y-1">
                                <li><strong>JavaScript Engine</strong> (the core)</li>
                                <li><strong>Web APIs</strong> – functionalities provided by the browser (not part of the language itself). Examples: DOM API, Fetch API, timers, etc.</li>
                                <li><strong>Callback Queue</strong> – holds callback functions that are ready to be executed (FIFO order).</li>
                            </ul>
                            <p className="text-gray-700 mb-4">The event loop constantly checks if the call stack is empty. When it is, it pushes callbacks from the queue onto the stack for execution.</p>
                            <p className="text-gray-700 mb-2"><strong>Two main runtime environments:</strong></p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                                <li><strong>Browser runtime</strong> – gives access to Web APIs (DOM, events, etc.)</li>
                                <li><strong>Node.js runtime</strong> – server-side environment. Instead of Web APIs, it uses C++ bindings and a thread pool.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">3. Optimization Strategies – How JavaScript Gets Faster</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">🔁 Just-in-Time (JIT) Compilation</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                                <div className="rounded-xl overflow-hidden shadow-md">
                                    <Image width={300} height={200} src="https://www.freecodecamp.org/news/content/images/2023/05/EB039874-52DC-4CD8-B95C-F9E75F2D2283_4_5005_c.jpeg" alt="JIT Compilation" className="w-full h-auto" loading="eager" />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-md">
                                    <Image width={300} height={200} src="https://www.freecodecamp.org/news/content/images/2023/05/D3DC97A6-3D79-46E0-A2F2-BB3FA694F0EF_4_5005_c.jpeg" alt="JIT Compilation 2" className="w-full h-auto" loading="eager" />
                                </div>
                                <div className="rounded-xl overflow-hidden shadow-md">
                                    <Image width={300} height={200} src="https://www.freecodecamp.org/news/content/images/2023/05/E2BA4399-5F52-408C-B2AB-A9E6F74B3238_4_5005_c.jpeg" alt="JIT Compilation 3" className="w-full h-auto" loading="eager" />
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">JavaScript used to be purely interpreted (which was slow). Modern engines <strong>combine compilation and interpretation</strong> using JIT:</p>
                            <ul className="list-disc list-inside ml-4 mb-8 text-gray-700 space-y-1">
                                <li>The code is compiled into machine code all at once, but not written to a binary file.</li>
                                <li>It executes immediately after compilation.</li>
                                <li>The engine first creates an unoptimized version to start quickly, then repeatedly re‑optimizes and re‑compiles in the background.</li>
                                <li>This has dramatically improved JavaScript execution speed.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Inlining</h3>
                            <p className="text-gray-700 mb-3">When a function is called many times, the engine may replace the function call with the actual code inside the function. This reduces function call overhead and improves performance.</p>
                            <p className="text-gray-700"><strong>Example:</strong> Instead of calling <code className="bg-gray-100 px-1 rounded">add(a, b)</code> repeatedly, the engine inserts <code className="bg-gray-100 px-1 rounded">return a + b</code> directly at the call site.</p>
                        </div>
                    </div>
                </div>

                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">4. Performance Considerations for Developers</h2>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">While the engine optimises code automatically, you can help it by following these best practices:</p>
                            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
                                <li><strong>Minimise DOM manipulation</strong> – frequent DOM access slows down rendering. Batch updates where possible.</li>
                                <li><strong>Reduce function calls</strong> – especially inside loops. Inline simple operations when it makes sense.</li>
                                <li><strong>Write clean, predictable code</strong> – engines optimise better for patterns they recognise.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="text-3xl">📌</div>
                        <div>
                            <h3 className="font-bold text-lg text-blue-800">Key takeaway</h3>
                            <p className="text-gray-700">Understanding how JavaScript works behind the scenes helps you write more efficient, scalable, and maintainable code. It also prepares you for future changes like WebAssembly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}