// app/problemSolving/page.tsx
import React from "react";

export default function ProblemSolving() {
  const steps = [
    { number: 1, title: "Understand the problem", description: "Reproduce the bug consistently. Read error messages carefully. Ask clarifying questions.", icon: "🔍" },
    { number: 2, title: "Isolate the cause", description: "Use console logs, breakpoints, or React DevTools to narrow down where the issue occurs. Check if it’s a state/prop issue, API call, or rendering.", icon: "🎯" },
    { number: 3, title: "Form a hypothesis", description: "Based on evidence, guess what might be wrong (e.g., “maybe the state is not updating because of a missing dependency in useEffect”).", icon: "💡" },
    { number: 4, title: "Test the hypothesis", description: "Make a small change to verify. Use <code>console.log</code>, debugger, or comment out code.", icon: "🧪" },
    { number: 5, title: "Fix and verify", description: "Apply the correct fix and test thoroughly, including edge cases.", icon: "✅" },
    { number: 6, title: "Learn & prevent", description: "Understand why the bug happened. Add a test if possible. Document for future reference.", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
            How to Approach Solving a Problem / Bug
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            A structured, step-by-step method to debug and solve technical problems in interviews
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">6 Steps</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Debugging</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Tools & Tips</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-10 border border-amber-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">💬</div>
            <div>
              <h2 className="font-bold text-xl text-amber-800 mb-2">Interviewers often ask:</h2>
              <p className="text-gray-700">“Walk me through how you debug a problem.” Use this structured approach to show your analytical thinking and systematic debugging skills.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 text-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-sm">
                      {step.number}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed sm:ml-16" dangerouslySetInnerHTML={{ __html: step.description }} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="text-xl font-bold text-gray-800">Example Debugging Scenario (React Native)</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">“List not updating after API call → check if state is being set, if useEffect dependencies are correct, if network request succeeded → add error handling and loading states.”</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-3xl">🛠️</div>
            <h3 className="font-bold text-xl text-blue-800">Key Tools Mentioned in Interviews</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Chrome DevTools", "React DevTools", "React Native Debugger", "console.log", "breakpoints", "network tab"].map((tool) => (
              <span key={tool} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">{tool}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg text-amber-800">Pro Tip</h3>
              <p className="text-gray-700">Always explain your thought process out loud. Interviewers want to see how you think, not just the final answer. Use the 6 steps as a mental framework, and adapt them to any problem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}