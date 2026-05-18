// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete Interview Prep",
  description: "JavaScript · React · Node · OOP · HR & Problem Solving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/hrQuestions", label: "HR" },
    { href: "/problemSolving", label: "Problem Solving" },
    { href: "/javaScriptBehindScenes", label: "JS Behind Scenes" },
    { href: "/JavaScriptQuestions", label: "JS Questions" },
    { href: "/oopGuide", label: "OOP" },
    { href: "/reactReactNative", label: "React + RN" },
    { href: "/nodeExpressQuestions", label: "Node + Express" },
    { href: "/databaseQuestions", label: "Database" },
    { href: "/nextJSQuestions", label: "Next.js" },
    { href: "/devOpsQuestions", label: "DevOps" },

  ];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        {/* Sticky Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm sm:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
            {children}
          </div>
        </main>

        {/* Optional Footer */}
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            Complete Interview Preparation Guide – Keep Learning 🚀
          </div>
        </footer>
      </body>
    </html>
  );
}