// app/page.tsx
import Link from "next/link";

export default function Home() {
  const sections = [
    {
      title: "HR & Behavioral Questions",
      description: "Sample answers for common HR questions, strengths, weaknesses, and career goals.",
      href: "/hrQuestions",
      icon: "💼",
    },
    {
      title: "Problem Solving Approach",
      description: "Step‑by‑step method to debug and solve technical problems in interviews.",
      href: "/problemSolving",
      icon: "🔍",
    },
    {
      title: "JavaScript Behind the Scenes",
      description: "Event loop, call stack, hoisting, closures – how JS really works.",
      href: "/javaScriptBehindScenes",
      icon: "⚙️",
    },
    {
      title: "JavaScript Questions (32+)",
      description: "Core & advanced JS concepts, ES6, async patterns, and common pitfalls.",
      href: "/JavaScriptQuestions",
      icon: "📜",
    },
    {
      title: "Object‑Oriented Programming (OOP)",
      description: "Classes, prototypes, inheritance, polymorphism, private fields, getters/setters.",
      href: "/oopGuide",
      icon: "📘",
    },
    {
      title: "React & React Native",
      description: "Hooks, HOCs, performance, debugging, app publishing, size optimization.",
      href: "/reactReactNative",
      icon: "⚛️",
    },
    {
      title: "Node.js & Express.js",
      description: "Event loop, middleware, clustering, security, scaling, and Next.js integration.",
      href: "/nodeExpressQuestions",
      icon: "🚀",
    },
    {
      title: "Database (MongoDB, PostgreSQL, Prisma)",
      description: "NoSQL vs SQL, sharding, ACID, indexes, ORM with Prisma, migrations, relations.",
      href: "/databaseQuestions",
      icon: "🗄️",
    },
    {
      title: "Next.js Framework",
      description: "SSR, SSG, ISR, API routes, middleware, image optimization, App Router.",
      href: "/nextJSQuestions",
      icon: "▲",
    },
    {
      title: "Deployment & CI/CD",
      description: "VPS, PM2, Nginx, Docker, GitHub Actions, monitoring, environment secrets.",
      href: "/devOpsQuestions",
      icon: "☁️",
    },
  ];

  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Complete Interview Preparation</h1>
        <p className="text-lg text-gray-600">
          JavaScript · React · React Native · Node.js · OOP · HR & Problem Solving
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="block group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-xl font-semibold text-blue-700 group-hover:text-blue-800">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm">{section.description}</p>
              <div className="mt-4 text-blue-500 text-sm font-medium flex items-center gap-1">
                Start learning →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t pt-6">
        📚 All questions and answers are curated for freshers and junior developers. Happy learning!
      </div>
    </>
  );
}