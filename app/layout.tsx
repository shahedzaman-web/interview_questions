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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
            {children}
          </div>
        </main>
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            Complete Interview Preparation Guide – Keep Learning 🚀
          </div>
        </footer>
      </body>
    </html>
  );
}