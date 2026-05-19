// components/HRQuestions.tsx
import React from "react";

export default function HRQuestions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-16 px-4 rounded">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            HR & Behavioral Questions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Sample answers, key points, and tips to ace your interview
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">12+ Questions</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">STAR Method</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Sample Answers</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">💼</div>
            <div>
              <h2 className="font-bold text-xl text-blue-800 mb-2">Why Behavioral Questions Matter</h2>
              <p className="text-gray-700">HR and behavioral questions help employers understand your soft skills, work ethic, problem-solving abilities, and cultural fit. Use the <strong>STAR method</strong> (Situation, Task, Action, Result) to structure your answers effectively.</p>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <h3 className="text-xl font-bold text-gray-800">Introduce yourself</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “Hello, my name is Shahed. I recently graduated from the Department of Physics at the University of Chittagong. Alongside my academic studies, I developed a strong interest in software development, especially mobile application development.
                  <br /><br />
                  I have been working with Flutter and React Native, building responsive mobile applications with features like authentication systems, API integration, dark/light mode, and clean UI implementation. Recently, I completed a React Native assessment project that included a landing page and authentication flow using APIs.
                  <br /><br />
                  I enjoy problem-solving, learning new technologies, and building practical applications. Currently, I’m looking for an opportunity where I can grow as a developer, contribute to real projects, and improve my professional skills.”
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🎓 Name + education</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">💻 Tech skills</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📱 Recent projects</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">💪 Strengths</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🎯 Career goal</span>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <h3 className="text-xl font-bold text-gray-800">Why do you want to switch your job? (or Why are you looking for a change?)</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “I’m looking for a role where I can work on more challenging and larger‑scale projects while continuing to grow as a React Native developer. In my current role, I’ve gained practical experience working with responsive UI development, API integration, authentication systems, and application features. Now I want to work in an environment where I can collaborate with experienced developers, improve my engineering practices, and contribute to impactful products. My goal is long‑term growth in software development, especially in React and React Native technologies.”
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📈 Growth</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📚 Learning</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🎯 Better challenges</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🤝 Team collaboration</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">💡 Impact</span>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <h3 className="text-xl font-bold text-gray-800">Describe your best project.</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer (STAR Method):</p>
                <p className="text-gray-700 leading-relaxed">
                  “One of my best projects was a React Native application where I developed a landing page and authentication system using provided APIs. The application included responsive mobile UI, login/registration, API integration, dark/light mode, reusable components, and FlatList for efficient rendering. My main responsibility was implementing the frontend, handling API integration, and ensuring the app worked smoothly across screen sizes. One challenge I faced was managing authentication flow and UI state properly while keeping the user experience smooth. I solved it by organizing components cleanly and separating API logic from UI logic. This project improved my understanding of React Native architecture, state handling, debugging, and writing maintainable code.”
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">⭐ STAR Method</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📱 Tech stack</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🎯 Your role</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">⚠️ Challenge</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📚 Lessons learned</span>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                <h3 className="text-xl font-bold text-gray-800">What is your current job role? / What have you been doing after graduation?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer (Fresher/Physics graduate):</p>
                <p className="text-gray-700 leading-relaxed">
                  “After graduating in Physics, I dedicated my time to learning software development. I took online courses and built projects using React and React Native. I focused on practical skills like building responsive UIs, integrating REST APIs, managing state with hooks, and debugging. I have also worked on a few freelance projects and contributed to open‑source. Currently, I am looking for my first full‑time role as a front‑end or React Native developer.”
                </p>
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
                <h3 className="text-xl font-bold text-gray-800">You are a Physics graduate. Why do you want to switch to the development sector?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “My academic background in Physics helped me develop analytical thinking and strong problem‑solving skills. During university, I became interested in programming and started learning web and mobile application development alongside my studies. Over time, I realized I genuinely enjoyed building applications and solving practical problems through technology. I focused on React and React Native development, worked on projects involving APIs, authentication systems, and responsive UI, and continuously improved my skills through hands‑on practice. At this point, software development is the career path I want to pursue long‑term because I enjoy the problem‑solving, creativity, and continuous learning involved in development.”
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🧠 Analytical thinking</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🔍 Problem-solving</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">💡 Genuine interest</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📚 Self-learning ability</span>
              </div>
            </div>
          </div>

          {/* Question 6 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span>
                <h3 className="text-xl font-bold text-gray-800">Why should we hire you?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “I believe I’m a strong fit because I’m adaptable, self‑motivated, and eager to learn. Even though my academic background is in Physics, I transitioned into software development through continuous practice and project‑based learning. I already have practical experience with React Native, React concepts, API integration, authentication systems, and responsive UI development. I’m also comfortable learning new technologies quickly and working collaboratively in a team environment.”
                </p>
              </div>
            </div>
          </div>

          {/* Question 7 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">7</span>
                <h3 className="text-xl font-bold text-gray-800">What are your strengths?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “One of my biggest strengths is self‑learning. Since transitioning from Physics to software development, I learned most technologies through hands‑on practice and building projects independently. I’m also persistent when solving technical problems and I enjoy understanding how things work internally rather than only memorizing solutions. Additionally, I pay attention to code quality and reusability.”
                </p>
              </div>
            </div>
          </div>

          {/* Question 8 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">8</span>
                <h3 className="text-xl font-bold text-gray-800">What is your weakness?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “Earlier, I used to spend too much time perfecting small implementation details. Over time, I learned how to balance code quality with deadlines and prioritize tasks more effectively. I now focus on delivering working features first, then refactoring and optimizing. I’m also working on improving my estimation skills for complex tasks.”
                </p>
              </div>
              <p className="mt-2 text-gray-500 text-sm">💡 Tip: Always mention a real weakness but show how you are improving it.</p>
            </div>
          </div>

          {/* Question 9 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">9</span>
                <h3 className="text-xl font-bold text-gray-800">Where do you see yourself in 5 years?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “In 5 years, I see myself as a skilled senior front‑end or mobile developer, possibly leading small teams or mentoring juniors. I want to have deep expertise in React and React Native, contribute to open‑source projects, and be able to architect scalable applications. I’m also open to learning backend technologies to become a well‑rounded developer.”
                </p>
              </div>
            </div>
          </div>

          {/* Question 10 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">10</span>
                <h3 className="text-xl font-bold text-gray-800">Tell me about a time you faced a challenge at work / in a project. How did you overcome it?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “In one of my React Native projects, I had a bug where the FlatList was re‑rendering all items on every state change, causing performance issues. I used React DevTools to profile the renders, identified that every item was re‑rendering because I was passing an inline function as a prop. I solved it by using <code className="bg-gray-200 px-1 rounded">useCallback</code> to memoize the function and <code className="bg-gray-200 px-1 rounded">React.memo</code> for list items. This reduced renders significantly and improved scrolling smoothness.”
                </p>
              </div>
            </div>
          </div>

          {/* Question 11 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">11</span>
                <h3 className="text-xl font-bold text-gray-800">Do you think AI will replace your job?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “I think AI will significantly change how developers work, but I don’t believe it will completely replace software engineers. AI is a powerful tool that can help automate repetitive tasks, speed up development, and improve productivity.
                  <br /><br />
                  However, real-world software development still requires problem-solving, understanding business requirements, communication, decision-making, architecture planning, and collaboration with teams and clients. Those areas still depend heavily on human judgment and creativity.
                  <br /><br />
                  I see AI as something developers should learn to work with rather than fear. I’m interested in using AI tools to become more efficient and improve my workflow.”
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🧩 Problem-solving</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">💼 Business requirements</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🗣️ Communication</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🏗️ Architecture planning</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🤝 Collaboration</span>
              </div>
            </div>
          </div>

          {/* Question 12 */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">12</span>
                <h3 className="text-xl font-bold text-gray-800">How do you handle tight deadlines or pressure?</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800 mb-2">💬 Sample Answer:</p>
                <p className="text-gray-700 leading-relaxed">
                  “When facing tight deadlines, I break down the work into smaller, manageable tasks and prioritize based on impact. I also communicate early with my team or manager about what can realistically be delivered on time. I avoid perfectionism in the first iteration – I focus on delivering a working feature first, then refine it. I also make sure to take short breaks to maintain focus and avoid burnout. This approach has helped me consistently meet deadlines without sacrificing quality.”
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">📋 Prioritization</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🔨 Break down tasks</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🗣️ Clear communication</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🔄 Iterative delivery</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">🧘 Maintain focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Tip */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg text-blue-800">Final Advice for HR Interviews</h3>
              <p className="text-gray-700">Be honest, confident, and concise. Use the STAR method for behavioral questions. Show that you are self-aware, eager to learn, and ready to contribute. Practice your answers out loud, and remember that interviews are conversations – not interrogations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}