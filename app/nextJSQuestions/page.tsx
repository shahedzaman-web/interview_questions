// nextJSQuestions/page.tsx
import React from "react";

export default function NextJSQuestions() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        Next.js Interview Questions
      </h2>

      <div className="space-y-4">
        <div>
          <strong>1. What is Next.js and why would you use it over React?</strong>
          <p className="mt-1 text-gray-700">Next.js is a React framework that provides server‑side rendering (SSR), static site generation (SSG), API routes, file‑based routing, and automatic code splitting. It improves SEO, performance, and developer experience compared to a plain React app.</p>
        </div>
        <div>
          <strong>2. Explain the different rendering strategies in Next.js (SSR, SSG, ISR, CSR).</strong>
          <p className="mt-1 text-gray-700">– <strong>SSR (Server‑Side Rendering)</strong>: page is rendered on each request using `getServerSideProps`.<br/>– <strong>SSG (Static Site Generation)</strong>: page is built at compile time using `getStaticProps`.<br/>– <strong>ISR (Incremental Static Regeneration)</strong>: SSG with background revalidation using `revalidate`.<br/>– <strong>CSR (Client‑Side Rendering)</strong>: client fetches data after page loads.</p>
        </div>
        <div>
          <strong>3. What are API Routes in Next.js and how do you create them?</strong>
          <p className="mt-1 text-gray-700">API Routes are serverless functions that handle backend logic. In the `pages/api` or `app/api` directory, each file exports a function (req, res) that responds to requests. They can be used for form submissions, database queries, authentication, etc.</p>
        </div>
        <div>
          <strong>4. How does file‑based routing work in Next.js (Pages Router vs App Router)?</strong>
          <p className="mt-1 text-gray-700">In Pages Router, files in the `pages` folder become routes (e.g., `pages/about.js` → `/about`). Dynamic routes use brackets (`[id].js`). The App Router (Next.js 13+) uses a folder‑based structure with `page.js` and `layout.js` inside each segment, supporting nested layouts and React Server Components.</p>
        </div>
        <div>
          <strong>5. What is the purpose of `next/image` and how does it optimise images?</strong>
          <p className="mt-1 text-gray-700">`next/image` automatically optimises images by lazy loading, resizing, and serving modern formats (WebP/AVIF). It prevents layout shift and supports responsive images. External domains must be whitelisted in `next.config.js`.</p>
        </div>
        <div>
          <strong>6. Explain middleware in Next.js and give a use case.</strong>
          <p className="mt-1 text-gray-700">Middleware runs before requests are completed, allowing you to modify responses, redirect, rewrite URLs, or set headers. Use cases: authentication (protect routes), A/B testing, bot detection, internationalisation. Middleware executes on the Edge Runtime.</p>
        </div>
        <div>
          <strong>7. How do you handle authentication in Next.js?</strong>
          <p className="mt-1 text-gray-700">Common approaches: NextAuth.js (full‑featured), JWT with HTTP‑only cookies, OAuth. Use middleware for protecting routes, API routes for session validation, and server‑side props for authenticated data fetching.</p>
        </div>
        <div>
          <strong>8. What are environment variables in Next.js and how do you use them securely?</strong>
          <p className="mt-1 text-gray-700">Define variables in `.env.local` prefixed with `NEXT_PUBLIC_` for browser access. Server‑only variables are not exposed to the client. Use `process.env.VAR` in code. For sensitive keys (database, API secrets), keep them server‑side only.</p>
        </div>
        <div>
          <strong>9. How do you optimise a Next.js application for production?</strong>
          <p className="mt-1 text-gray-700">– Use `next build` to generate optimised output.<br/>– Enable `compress: true` in `next.config.js` for gzip.<br/>– Use static generation (SSG) where possible.<br/>– Analyse bundles with `next/bundle-analyzer`.<br/>– Implement lazy loading with `next/dynamic`.<br/>– Use `next/image` for images.<br/>– Set up caching headers for static assets.</p>
        </div>
        <div>
          <strong>10. Explain the difference between `getServerSideProps`, `getStaticProps`, and `getStaticPaths`.</strong>
          <p className="mt-1 text-gray-700">– `getServerSideProps`: fetches data on each request (SSR).<br/>– `getStaticProps`: fetches data at build time (SSG).<br/>– `getStaticPaths`: defines dynamic routes to pre‑render at build time (used with `getStaticProps`).</p>
        </div>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
        💡 <strong>Remember:</strong> In Next.js 13+ App Router, data fetching is done directly inside Server Components using `async` functions, and `getServerSideProps` etc. are replaced by `fetch` with caching options.
      </div>
    </section>
  );
}