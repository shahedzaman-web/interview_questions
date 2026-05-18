// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Small script to clean up any extension‑added attributes before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Remove any data-* attributes added by extensions on the body element
                const body = document.body;
                if (body) {
                  for (const attr of body.attributes) {
                    if (attr.name.startsWith('data-')) {
                      body.removeAttribute(attr.name);
                    }
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-gray-50"
        suppressHydrationWarning
      >
        <NavBar />
        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-6 md:py-10">
            {children}
          </div>
        </main>
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            Complete Interview Preparation Guide – Keep Learning 🚀
          </div>
        </footer>
      </body>
    </html>
  );
}