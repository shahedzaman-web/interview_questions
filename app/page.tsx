//app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center text-slate-800 border-b-4 border-blue-500 pb-3 mb-6">
        Complete Interview Preparation Guide
      </h1>
      <p className="text-center text-gray-600 mb-10">
        JavaScript · React · React Native · OOP · HR & Behavioral · Problem Solving
      </p>

      <Link href="/hrQuestions" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 1: HR &amp; BEHAVIORAL QUESTIONS (with Sample Answers)
      </Link>
      <Link href="/problemSolving" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 2: HOW TO APPROACH SOLVING A PROBLEM / BUG (Step-by-Step)
      </Link>
      <Link href="/javaScriptBehindScenes" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 3: JAVASCRIPT BEHIND THE SCENES (with Sample Answers)
      </Link>
      <Link href="/JavaScriptQuestions" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 4: JAVASCRIPT QUESTIONS (with Sample Answers)
      </Link>
      <Link href="/oopGuide" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 5: OBJECT ORIENTED PROGRAMMING (with Sample Answers)
      </Link>
      <Link href="/reactReactNative" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 6: REACT &amp; REACT NATIVE (with Sample Answers)
      </Link>
      <Link href="/nodeExpressQuestions" className="block text-center text-blue-600 hover:text-blue-800 mb-4">
        PART 7: NODE.JS &amp; EXPRESS.JS (with Sample Answers)
      </Link>
      <div className="mt-12 text-center text-gray-500 text-sm border-t pt-6">
        End of document – complete interview preparation guide covering HR, Problem Solving, JavaScript, OOP, React, and React Native.
      </div>
    </div>
  );
}