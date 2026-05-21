// app/page.tsx
import Link from "next/link";

export default function Home() {
  const sections = [
    { title: "HR & Behavioral", desc: "Sample answers for common HR questions, strengths, weaknesses, and career goals.", href: "/hrQuestions", icon: "💼", color: "from-pink-500 to-rose-500", tag: "Soft Skills" },
    { title: "Problem Solving", desc: "Step‑by‑step method to debug and solve technical problems in interviews.", href: "/problemSolving", icon: "🔍", color: "from-amber-500 to-orange-500", tag: "Logic" },
    { title: "JS Behind Scenes", desc: "Event loop, call stack, hoisting – how JavaScript really works.", href: "/javaScriptBehindScenes", icon: "⚙️", color: "from-slate-600 to-gray-700", tag: "Core" },
    { title: "JavaScript Q&A", desc: "Core & advanced JS concepts, ES6, async patterns, 32+ essential questions.", href: "/JavaScriptQuestions", icon: "📜", color: "from-yellow-500 to-amber-600", tag: "Language" },
    { title: "OOP", desc: "Classes, prototypes, inheritance, polymorphism, private fields, and more.", href: "/oopGuide", icon: "📘", color: "from-green-500 to-emerald-600", tag: "Paradigm" },
    { title: "React + React Native", desc: "Hooks, HOCs, performance, debugging, app publishing, scenarios.", href: "/reactReactNative", icon: "⚛️", color: "from-cyan-500 to-blue-500", tag: "Frontend" },
    { title: "Node.js + Express", desc: "Event loop, middleware, clustering, security, scaling, microservices.", href: "/nodeExpressQuestions", icon: "🚀", color: "from-lime-500 to-green-600", tag: "Backend" },
    { title: "Database (NoSQL & SQL)", desc: "MongoDB, PostgreSQL, Prisma ORM, ACID, indexing, queries.", href: "/databaseQuestions", icon: "🗄️", color: "from-indigo-500 to-purple-600", tag: "Data" },
    { title: "Next.js Framework", desc: "SSR, SSG, ISR, API routes, middleware, App Router, optimization.", href: "/nextJSQuestions", icon: "▲", color: "from-gray-800 to-black", tag: "Fullstack" },
    { title: "Deployment & CI/CD", desc: "VPS, PM2, Nginx, Docker, GitHub Actions, monitoring.", href: "/devOpsQuestions", icon: "☁️", color: "from-sky-500 to-blue-600", tag: "DevOps" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-16 sm:py-20 md:py-24 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 text-sm font-medium">
            <span className="mr-2">🚀</span> Master Modern Web Development
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
            Complete Interview Preparation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            JavaScript · React · Next.js · Node.js · Databases · DevOps
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-blue-200">Topics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm text-blue-200">Questions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-blue-200">Free</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Explore Interview Topics</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Comprehensive guides covering everything you need to ace your next technical interview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
                    {section.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {section.desc}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Start exploring <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-bold text-gray-800 mb-1">Structured Learning</h3>
              <p className="text-sm text-gray-600">Organised by difficulty and topic</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-bold text-gray-800 mb-1">Real Interview Questions</h3>
              <p className="text-sm text-gray-600">Based on actual interview experiences</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-gray-800 mb-1">Practical Answers</h3>
              <p className="text-sm text-gray-600">Sample answers with key points</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm border-t pt-6">
            📚 Curated for freshers and junior developers – updated regularly.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Built with Next.js & Tailwind CSS – all content open source
          </p>
        </div>
      </div>
    </div>
  );
}