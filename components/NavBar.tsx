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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/hrQuestions", label: "HR", icon: "💼" },
    { href: "/problemSolving", label: "Problem Solving", icon: "🔍" },
    { href: "/javaScriptBehindScenes", label: "JS Engine", icon: "⚙️" },
    { href: "/JavaScriptQuestions", label: "JS Q&A", icon: "📜" },
    { href: "/oopGuide", label: "OOP", icon: "📘" },
    { href: "/reactReactNative", label: "React + RN", icon: "⚛️" },
    { href: "/nodeExpressQuestions", label: "Node + Express", icon: "🚀" },
    { href: "/databaseQuestions", label: "Database", icon: "🗄️" },
    { href: "/nextJSQuestions", label: "Next.js", icon: "▲" },
    { href: "/devOpsQuestions", label: "DevOps", icon: "☁️" },
  ];

  const isActive = (path: string) => pathname === path;

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
              Interview Prep
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-2xl border-b border-white/20"
            : "bg-white/40 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="group flex items-center space-x-2 text-xl font-extrabold tracking-tight"
            >
              <span className="relative text-3xl transition-transform group-hover:scale-110 duration-300">
                📘
                <span className="absolute inset-0 animate-ping opacity-0 group-hover:opacity-100 duration-300"></span>
              </span>
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-blue-800 hover:via-purple-700 hover:to-pink-700 transition-all text-base sm:text-xl">
                Interview Prep
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-white/50 hover:text-blue-600"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-base">{link.icon}</span>
                    <span className="hidden lg:inline">{link.label}</span>
                    <span className="lg:hidden">{link.icon}</span>
                  </span>
                  {isActive(link.href) && (
                    <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-white/40 focus:outline-none transition-all duration-300"
              aria-label="Menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 top-2" : "top-0"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 top-2 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 top-2" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-x-0 top-16 z-40 backdrop-blur-xl bg-white/90 shadow-2xl transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="overflow-y-auto h-full py-6 px-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-[1.02]"
                      : "text-gray-700 hover:bg-gray-100/80 hover:scale-[1.01]"
                  }`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}