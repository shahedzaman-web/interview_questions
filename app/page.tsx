// app/page.tsx
import Link from "next/link";

export default function Home() {
  const sections = [
    { title: "HR & Behavioral", desc: "Sample answers for common HR questions, strengths, weaknesses.", href: "/hrQuestions", icon: "💼", color: "from-pink-500 to-rose-500" },
    { title: "Problem Solving", desc: "Step‑by‑step method to debug and solve technical problems.", href: "/problemSolving", icon: "🔍", color: "from-amber-500 to-orange-500" },
    { title: "JS Behind Scenes", desc: "Event loop, call stack, hoisting – how JS really works.", href: "/javaScriptBehindScenes", icon: "⚙️", color: "from-slate-600 to-gray-700" },
    { title: "JavaScript Q&A", desc: "Core & advanced JS concepts, ES6, async, 32+ questions.", href: "/JavaScriptQuestions", icon: "📜", color: "from-yellow-500 to-amber-600" },
    { title: "OOP", desc: "Classes, prototypes, inheritance, polymorphism, private fields.", href: "/oopGuide", icon: "📘", color: "from-green-500 to-emerald-600" },
    { title: "React + React Native", desc: "Hooks, HOCs, performance, debugging, app publishing.", href: "/reactReactNative", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { title: "Node.js + Express", desc: "Event loop, middleware, clustering, security, scaling.", href: "/nodeExpressQuestions", icon: "🚀", color: "from-lime-500 to-green-600" },
    { title: "Database (NoSQL & SQL)", desc: "MongoDB, PostgreSQL, Prisma ORM, ACID, indexing.", href: "/databaseQuestions", icon: "🗄️", color: "from-indigo-500 to-purple-600" },
    { title: "Next.js Framework", desc: "SSR, SSG, ISR, API routes, middleware, App Router.", href: "/nextJSQuestions", icon: "▲", color: "from-gray-800 to-black" },
    { title: "Deployment & CI/CD", desc: "VPS, PM2, Nginx, Docker, GitHub Actions.", href: "/devOpsQuestions", icon: "☁️", color: "from-sky-500 to-blue-600" },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Complete Interview Preparation
        </h1>
        <p className="text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
          Master JavaScript · React · Next.js · Node.js · Databases · DevOps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{section.icon}</span>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{section.desc}</p>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                Start learning →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-400 text-sm border-t pt-6">
        📚 Curated for freshers and junior developers – updated regularly.
      </div>
    </>
  );
}