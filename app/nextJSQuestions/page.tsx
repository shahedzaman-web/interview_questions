// /app/nextJSQuestions/page.tsx
import React from "react";

export default function NextJSQuestions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-5xl"> 🚀 </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Next.js Interview Questions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            From fundamentals to App Router, performance optimization, and deployment
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">70+ Questions</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">SSR • SSG • ISR</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">App Router • API Routes</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Table of Contents - Sticky & Improved */}
        <div className="sticky top-6 z-20 mb-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-4 transition-all">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <h2 className="font-bold text-gray-800 text-lg">Quick Navigation</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {[
              { href: "#basics", label: "📘 Basics" },
              { href: "#rendering", label: "⚙️ Rendering" },
              { href: "#app-router", label: "📂 App Router" },
              { href: "#pages-router", label: "📁 Pages Router" },
              { href: "#api-routes", label: "🔌 API Routes" },
              { href: "#middleware", label: "⚙️ Middleware" },
              { href: "#auth", label: "🔐 Auth & Security" },
              { href: "#performance", label: "⚡ Performance" },
              { href: "#deployment", label: "🚀 Deployment" },
              { href: "#extra", label: "➕ Extra" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors py-1 px-2 rounded-lg hover:bg-blue-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Basics Section */}
        <section id="basics" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Basics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">1. What is Next.js and why use it over React?</h3>
                <p className="text-gray-600 leading-relaxed">Next.js is a React framework that provides server‑side rendering (SSR), static site generation (SSG), API routes, file‑based routing, and automatic code splitting. It improves SEO, performance, and developer experience compared to a plain React app.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2. How do you create a new Next.js project?</h3>
                <p className="text-gray-600">Run <code className="bg-gray-100 text-rose-600 px-2 py-0.5 rounded-md font-mono text-sm">npx create-next-app@latest</code> in your terminal.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">3. Key features of Next.js</h3>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>SSR, SSG, ISR, CSR</li>
                    <li>API Routes</li>
                    <li>File‑based routing</li>
                    <li><code className="bg-gray-100 px-1 rounded">next/image</code> optimization</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Incremental Static Regeneration</li>
                    <li>Automatic code splitting</li>
                    <li>TypeScript support</li>
                    <li>Fast Refresh</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">4. What is the <code className="bg-gray-100 px-1 rounded">Link</code> component?</h3>
                <p className="text-gray-600 mb-3">Client‑side navigation between pages.</p>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono">{`import Link from "next/link";
<Link href="/">Home</Link>
<Link href="/about">About</Link>`}</pre>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">5. What is the <code className="bg-gray-100 px-1 rounded">public</code> folder used for?</h3>
                <p className="text-gray-600">Static assets (images, favicon, robots.txt) served from the root URL.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">6. How do you add global CSS in Next.js?</h3>
                <p className="text-gray-600">Import CSS files in <code className="bg-gray-100 px-1 rounded">_app.js</code> (Pages Router) or <code className="bg-gray-100 px-1 rounded">app/layout.js</code> (App Router).</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">7. What is the default port for a Next.js app?</h3>
                <p className="text-gray-600">Port 3000. Change with <code className="bg-gray-100 px-1 rounded">next dev -p 8080</code>.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">8. What is Fast Refresh?</h3>
                <p className="text-gray-600">Instant feedback when editing React components, preserving component state.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">9. What is <code className="bg-gray-100 px-1 rounded">next.config.js</code>?</h3>
                <p className="text-gray-600">Configuration file for customizing Next.js settings (webpack, images, redirects).</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">10. What is the <code className="bg-gray-100 px-1 rounded">useRouter</code> hook?</h3>
                <p className="text-gray-600">Provides access to the router object for programmatic navigation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rendering Strategies Section */}
        <section id="rendering" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Rendering Strategies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">11. Explain SSR, SSG, ISR, and CSR.</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                <li><strong>SSR</strong> (Server‑Side Rendering): page rendered on each request using <code>getServerSideProps</code>.</li>
                <li><strong>SSG</strong> (Static Site Generation): page built at compile time using <code>getStaticProps</code>.</li>
                <li><strong>ISR</strong> (Incremental Static Regeneration): SSG with background revalidation using <code>revalidate</code>.</li>
                <li><strong>CSR</strong> (Client‑Side Rendering): client fetches data after page loads.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">12. What is <code>getStaticProps</code>?</h3>
              <p className="text-gray-600">Runs at build time, fetches data, and passes it as props – used for SSG.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">13. What is <code>getServerSideProps</code>?</h3>
              <p className="text-gray-600">Runs on each request, fetches data, and passes it as props – used for SSR.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">14. What is <code>getStaticPaths</code>?</h3>
              <p className="text-gray-600">Specifies dynamic routes to pre‑render at build time (used with <code>getStaticProps</code>).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">15. What is Incremental Static Regeneration (ISR)?</h3>
              <p className="text-gray-600">Allows updating static pages at runtime without full rebuild. Add <code className="bg-gray-100 px-1 rounded">revalidate: 10</code> to <code>getStaticProps</code> return.</p>
            </div>
          </div>
        </section>

        {/* App Router Section */}
        <section id="app-router" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">App Router (Next.js 13+)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* App Router questions 16-32 – compact but styled similarly */}
            {[
              { q: "16. What is the App Router?", a: "New routing system with folder‑based structure, support for nested layouts, React Server Components, and more flexible data fetching." },
              { q: "17. How does file‑based routing work in App Router?", a: "Each folder with a <code>page.js</code> file becomes a route. Example: <code>app/about/page.js</code> → <code>/about</code>." },
              { q: "18. What is <code>layout.js</code> in App Router?", a: "Shared UI for a route segment and its children. Layouts can be nested and persist across navigation." },
              { q: "19. What is <code>loading.js</code>?", a: "Instant loading UI shown while route segments load (Suspense boundary)." },
              { q: "20. What is <code>error.js</code>?", a: "Error boundary UI for a route segment." },
              { q: "21. What is the <code>not-found.js</code> file?", a: "Custom 404 page for a route segment." },
              { q: "22. Difference between Server and Client Components?", a: "Server Components run on the server (no client JS, can be async). Client Components run in the browser (opt‑in with <code>\"use client\"</code>)." },
              { q: "23. What does <code>\"use client\"</code> do?", a: "Opts a component into client‑side rendering, enabling hooks and interactivity." },
              { q: "24. What does <code>\"use server\"</code> do?", a: "Marks a function as a server‑side action (runs on server, callable from client)." },
              { q: "25. How do you fetch data in App Router?", a: "Directly in Server Components using <code>async/await</code> and <code>fetch</code> (with caching options)." },
              { q: "26. How do you handle metadata in App Router?", a: "Export <code>metadata</code> object or <code>generateMetadata</code> function from a page or layout." },
              { q: "27. What is <code>generateStaticParams</code>?", a: "Used to statically generate dynamic routes at build time (SSG)." },
              { q: "28. How do you create route groups?", a: "Wrap folder name in parentheses: <code>(marketing)</code>. Does not affect URL." },
              { q: "29. What are parallel routes?", a: "Allow rendering multiple pages simultaneously using named slots (<code>@analytics</code>, <code>@team</code>)." },
              { q: "30. What is intercepting routes?", a: "Load a route from another part of the app while keeping context (e.g., modal over current page)." },
              { q: "31. How do you handle redirects in App Router?", a: "Use <code>redirect()</code> from <code>next/navigation</code> in Server Components or middleware." },
              { q: "32. What is the Edge Runtime?", a: "Lightweight runtime using Web APIs, suitable for middleware and route handlers for low latency." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: item.q }} />
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            ))}
          </div>
        </section>

        {/* Pages Router Section */}
        <section id="pages-router" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Pages Router (Legacy)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">33. What is the Pages Router?</h3>
              <p className="text-gray-600">Original file‑based routing: files in <code>pages</code> directory become routes.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">34. What is <code>_app.js</code>?</h3>
              <p className="text-gray-600">Used to initialize pages, wrap with layout, and persist state across navigation.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">35. What is <code>_document.js</code>?</h3>
              <p className="text-gray-600">Customises the HTML document structure (e.g., lang attribute, body classes).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">36. How do you create a 404 page?</h3>
              <p className="text-gray-600">Add <code>pages/404.js</code>.</p>
            </div>
          </div>
        </section>

        {/* API Routes Section */}
        <section id="api-routes" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">API Routes & Route Handlers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">37. What are API Routes?</h3>
              <p className="text-gray-600">Serverless functions in <code>pages/api</code> (Pages Router) or <code>app/api</code> (App Router) that handle backend logic.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">38. How to create a route handler?</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono mt-2">{`// app/api/hello/route.js
export async function GET(request) {
  return new Response(JSON.stringify({ message: "Hello" }), {
    headers: { "Content-Type": "application/json" },
  });
}`}</pre>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">39. How to handle CORS?</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono mt-2">{`export async function GET() {
  return new Response("data", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
    },
  });
}`}</pre>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">40. How to validate input in API routes?</h3>
              <p className="text-gray-600">Use libraries like <code>zod</code> or <code>joi</code> to validate request body/query, return 400 on failure.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">41. How to handle errors in API routes?</h3>
              <p className="text-gray-600">Wrap logic in <code>try/catch</code> and return appropriate HTTP status codes (500, 404, etc.).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">42. How to stream responses from a route handler?</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono mt-2">{`export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode("chunk1"));
      controller.close();
    },
  });
  return new Response(stream);
}`}</pre>
            </div>
          </div>
        </section>

        {/* Middleware Section */}
        <section id="middleware" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Middleware</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">43. What is middleware in Next.js?</h3>
              <p className="text-gray-600">Code that runs before a request is completed – used for authentication, redirects, A/B testing, etc.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">44. How to create middleware?</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono mt-2">{`// middleware.js in root
import { NextResponse } from "next/server";
export function middleware(request) {
  const token = request.cookies.get("token");
  if (!token) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/dashboard/:path*"] };`}</pre>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">45. Can middleware use the Edge Runtime?</h3>
              <p className="text-gray-600">Yes, middleware runs on the Edge by default.</p>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        <section id="auth" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Authentication & Security</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">46. How to handle authentication in Next.js?</h3>
              <p className="text-gray-600">Use NextAuth.js (Auth.js), JWT with HTTP‑only cookies, or custom OAuth. Protect routes via middleware or API route checks.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">47. How do you store JWTs in Next.js?</h3>
              <p className="text-gray-600">Store JWT in an HTTP‑only cookie for security (prevents XSS).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">48. How do you protect API routes?</h3>
              <p className="text-gray-600">Verify the JWT token from cookies or Authorization header inside the route handler.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">49. What are environment variables and how to use them securely?</h3>
              <p className="text-gray-600">Define in <code>.env.local</code>, prefix with <code>NEXT_PUBLIC_</code> for client exposure. Keep secrets server‑only.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">50. How do you add CORS to API routes?</h3>
              <p className="text-gray-600">Set response headers <code>Access-Control-Allow-Origin</code>, etc., or use the <code>cors</code> helper library.</p>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section id="performance" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-lime-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Performance & Optimization</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">51. What is the purpose of <code>next/image</code>?</h3>
              <p className="text-gray-600">Automatically optimises images: lazy loading, resizing, serving modern formats (WebP/AVIF), preventing layout shift.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">52. How do you optimise fonts?</h3>
              <p className="text-gray-600">Use <code>next/font</code> to load Google Fonts or custom fonts with automatic optimisation and fallback.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">53. What is code splitting?</h3>
              <p className="text-gray-600">Next.js automatically splits code per page. Use <code>next/dynamic</code> for component‑level lazy loading.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">54. How do you analyse bundle size?</h3>
              <p className="text-gray-600">Add <code>next-bundle-analyzer</code> to your <code>next.config.js</code>.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">55. What is the <code>next/script</code> component?</h3>
              <p className="text-gray-600">Optimises loading of third‑party scripts with strategies like <code>afterInteractive</code>, <code>lazyOnload</code>.</p>
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section id="deployment" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Deployment & DevOps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">56. How do you deploy a Next.js app to Vercel?</h3>
              <p className="text-gray-600">Connect GitHub repository, Vercel auto‑detects Next.js and configures build settings.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">57. How do you deploy on a VPS (self‑hosted)?</h3>
              <p className="text-gray-600">Build the app (<code>npm run build</code>), run with <code>next start</code> or use PM2, and set up a reverse proxy (Nginx).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">58. Difference between <code>next start</code> and <code>next export</code>?</h3>
              <p className="text-gray-600"><code>next start</code> starts a production server (supports SSR/ISR). <code>next export</code> generates a static HTML only version (no server features).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">59. How to set up environment variables in production?</h3>
              <p className="text-gray-600">Add variables to your hosting platform (Vercel, AWS) or to <code>.env.production</code> (for self‑hosted).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">60. How do you enable HTTPS for a Next.js app?</h3>
              <p className="text-gray-600">Use a reverse proxy (Nginx) with Let’s Encrypt, or deploy to platforms like Vercel/Netlify that provide HTTPS automatically.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">61. What is the <code>next export</code> command?</h3>
              <p className="text-gray-600">Generates a static HTML/CSS/JS version of your app (no server).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">62. How do you handle redirects and rewrites in production?</h3>
              <p className="text-gray-600">Configure <code>redirects</code> and <code>rewrites</code> in <code>next.config.js</code>.</p>
            </div>
          </div>
        </section>

        {/* Extra Section */}
        <section id="extra" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Additional Interview Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">63. What are the limitations of Next.js?</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Requires a Node.js server for SSR (unless static export).</li>
                <li>Learning curve for routing and data fetching.</li>
                <li>Some features not compatible with SSG.</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">64. Is Next.js a full‑stack framework?</h3>
              <p className="text-gray-600">Yes – you can build frontend and backend (API routes) in the same project.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">65. How do you handle internationalisation (i18n)?</h3>
              <p className="text-gray-600">Built‑in i18n routing or libraries like <code>next-i18next</code>.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">66. What is React Strict Mode and how to enable it?</h3>
              <p className="text-gray-600">Enabled by default in App Router; in Pages Router set <code>reactStrictMode: true</code> in <code>next.config.js</code>.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">67. Difference between <code>next/head</code> and <code>metadata</code> export?</h3>
              <p className="text-gray-600"><code>next/head</code> is a component used in Pages Router; <code>metadata</code> export is the modern way in App Router (static or dynamic).</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">68. How do you add a sitemap in Next.js?</h3>
              <p className="text-gray-600">Use <code>next-sitemap</code> package to generate <code>sitemap.xml</code> automatically.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">69. Difference between App Router and Pages Router?</h3>
              <p className="text-gray-600">App Router offers nested layouts, server components, and more flexible data fetching; Pages Router is simpler but less powerful.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">70. Can you use both routers together?</h3>
              <p className="text-gray-600">Yes, you can have both <code>app</code> and <code>pages</code> directories; routes are merged with App Router taking precedence.</p>
            </div>
          </div>
        </section>

        {/* Closing Tip */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-bold text-lg text-blue-800">Pro Tip for Interviews</h3>
              <p className="text-gray-700">Understand the difference between SSG, SSR, ISR, and CSR. Be able to explain when to use Server Components vs Client Components, and how to optimise performance with <code className="bg-white px-1 rounded">next/image</code> and dynamic imports. Practice building a small Next.js app with the App Router to solidify your knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}