import React from "react";

export default function ProblemSolving() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        PART 2: HOW TO APPROACH SOLVING A PROBLEM / BUG (Step‑by‑Step)
      </h2>
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-5">
        <strong>Interviewers often ask: “Walk me through how you debug a problem.”</strong> Use this structured approach.
      </div>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li><strong>Understand the problem</strong> – Reproduce the bug consistently. Read error messages carefully. Ask clarifying questions.</li>
        <li><strong>Isolate the cause</strong> – Use console logs, breakpoints, or React DevTools to narrow down where the issue occurs. Check if it’s a state/prop issue, API call, or rendering.</li>
        <li><strong>Form a hypothesis</strong> – Based on evidence, guess what might be wrong (e.g., “maybe the state is not updating because of a missing dependency in useEffect”).</li>
        <li><strong>Test the hypothesis</strong> – Make a small change to verify. Use <code className="bg-gray-200 px-1 rounded">console.log</code>, debugger, or comment out code.</li>
        <li><strong>Fix and verify</strong> – Apply the correct fix and test thoroughly, including edge cases.</li>
        <li><strong>Learn &amp; prevent</strong> – Understand why the bug happened. Add a test if possible. Document for future reference.</li>
      </ol>
      <p className="mt-3 text-gray-700"><strong>Example debugging scenario (React Native):</strong> “List not updating after API call → check if state is being set, if useEffect dependencies are correct, if network request succeeded → add error handling and loading states.”</p>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-3">
        <strong>Key tools mentioned in interviews:</strong> Chrome DevTools, React DevTools, React Native Debugger, console.log, breakpoints, network tab.
      </div>
    </section>
  );
}