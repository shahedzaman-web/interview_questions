// components/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only showing interactive UI after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const navLinks = [
    { href: "/", label: "🏠 Home" },
    { href: "/hrQuestions", label: "💼 HR" },
    { href: "/problemSolving", label: "🔍 Problem Solving" },
    { href: "/javaScriptBehindScenes", label: "⚙️ JS Engine" },
    { href: "/JavaScriptQuestions", label: "📜 JS Q&A" },
    { href: "/oopGuide", label: "📘 OOP" },
    { href: "/reactReactNative", label: "⚛️ React + RN" },
    { href: "/nodeExpressQuestions", label: "🚀 Node + Express" },
    { href: "/databaseQuestions", label: "🗄️ Database" },
    { href: "/nextJSQuestions", label: "▲ Next.js" },
    { href: "/devOpsQuestions", label: "☁️ DevOps" },
  ];

  const isActive = (path: string) => pathname === path;

  // Render a placeholder that matches server content until client hydrates
  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-700">Interview Prep</div>
            <div className="hidden md:flex space-x-1">
              {navLinks.map((link) => (
                <div key={link.href} className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600">
                  {link.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-200/50"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent hover:from-blue-800 hover:to-purple-700 transition-all"
          >
            Interview Prep
          </Link>

          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-blue-100 text-blue-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive(link.href)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}