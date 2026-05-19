// components/ReactReactNative.tsx
import React from "react";
import Image from "next/image";

export default function ReactReactNative() {
  const reactBasics = [
    { q: "1. What is React?", a: "The library for web and native user interfaces. It uses virtual DOM to efficiently update and render components." },
    { q: "2. What is JSX?", a: "JavaScript XML – syntax extension that allows writing HTML-like code inside JavaScript. It gets transpiled to <code>React.createElement()</code> calls. <code>const element = &lt;h1&gt;Hello, {name}&lt;/h1&gt;;</code>" },
    { q: "3. Difference between props and state.", a: "Props are read‑only data passed from parent to child. State is mutable data managed within a component using <code>useState</code>." },
    { q: "4. What are React hooks? Name a few common ones.", a: "Functions that let you use state and lifecycle in functional components: <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, <code>useReducer</code>, <code>useRef</code>." },
    { q: "5. Explain the virtual DOM and how React uses it.", a: "Lightweight copy of the actual DOM. React diffs changes and updates only the changed parts (reconciliation)." },
    { q: "6. What is the purpose of <code>useEffect</code>?", a: "Runs side effects after render. Can mimic lifecycle methods." },
    { q: "7. Difference between class and functional components?", a: "Class: <code>this.state</code>, lifecycle methods. Functional: hooks, simpler syntax." },
    { q: "8. What are keys in React and why are they important?", a: "Help React identify items in a list. Should be unique and stable. Avoid using index as key if list can reorder." },
    { q: "9. Explain conditional rendering in React.", a: "Using ternary (<code>condition ? A : B</code>) or logical AND (<code>condition &amp;&amp; Component</code>)." },
    { q: "10. What is lifting state up?", a: "Moving shared state to the closest common ancestor and passing it down via props with callbacks." },
    { q: "11. Controlled vs uncontrolled components?", a: "Controlled: form input value controlled by React state. Uncontrolled: input manages its own state using <code>ref</code>." },
    { q: "12. What is React Router?", a: "Standard library for routing in React apps – enables navigation without page reload." },
    { q: "13. What is the Context API and when to use it?", a: "Pass data through component tree without prop drilling. Use for global data like theme, user authentication." },
    { q: "14. React lifecycle methods (class components)", a: "Mounting: constructor, render, componentDidMount. Updating: shouldComponentUpdate, render, componentDidUpdate. Unmounting: componentWillUnmount." },
  ];

  const hooksTable = [
    { hook: "useState", purpose: "Reactive local state", example: "const [count, setCount] = useState(0);" },
    { hook: "useEffect", purpose: "Side effects (API calls, subscriptions)", example: "useEffect(() =&gt; { fetchData(); }, []);" },
    { hook: "useContext", purpose: "Consume context without prop drilling", example: "const theme = useContext(ThemeContext);" },
    { hook: "useReducer", purpose: "Complex state logic with actions", example: "const [state, dispatch] = useReducer(reducer, initialState);" },
    { hook: "useRef", purpose: "Persist mutable values, DOM references", example: "const inputRef = useRef(null);" },
    { hook: "useMemo", purpose: "Memoize expensive calculations", example: "const memoized = useMemo(() =&gt; compute(a,b), [a,b]);" },
    { hook: "useCallback", purpose: "Memoize function references", example: "const handleClick = useCallback(() =&gt; doSomething(id), [id]);" },
    { hook: "useLayoutEffect", purpose: "Sync effect before browser paint", example: "useLayoutEffect(() =&gt; { measureDOM(); }, [deps]);" },
    { hook: "useImperativeHandle", purpose: "Customize ref exposed to parent", example: "useImperativeHandle(ref, () =&gt; ({ focus() {...} }));" },
    { hook: "useDebugValue", purpose: "Label custom hooks in DevTools", example: "useDebugValue(isOnline ? 'Online' : 'Offline');" },
    { hook: "Custom Hooks", purpose: "Reusable logic (start with 'use')", example: "function useLocalStorage(key, initialValue) {...}" },
  ];

  const reactNativeBasics = [
    { q: "1. What is React Native?", a: "Framework for building native mobile apps (iOS & Android) using JavaScript and React. Renders with native components." },
    { q: "2. Difference between React and React Native?", a: "React: web, DOM elements, CSS. React Native: mobile, native components (View, Text), StyleSheet API." },
    { q: "3. Core components in React Native?", a: "View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput." },
    { q: "4. Difference between ScrollView and FlatList?", a: "ScrollView renders all children at once (good for small content). FlatList renders only visible items (ideal for long lists)." },
    { q: "5. How to style components in React Native?", a: "StyleSheet.create() with camelCase properties." },
    { q: "6. What is SafeAreaView?", a: "Renders content within safe area boundaries of a device (notches, status bars)." },
    { q: "7. How to debug React Native applications? Tools used?", a: "Developer Menu (Cmd+R / Ctrl+M), Chrome DevTools, React Developer Tools, React Native Debugger, Flipper, Reactotron." },
    { q: "8. Timers in React Native?", a: "setTimeout, setInterval, setImmediate, requestAnimationFrame." },
    { q: "9. Threads in React Native?", a: "Main/UI Thread (native rendering), Shadow Thread (layout), JavaScript Thread (JS code)." },
    { q: "10. What is the Bridge in React Native?", a: "Transport layer that asynchronously serializes batched messages between JavaScript and native modules." },
    { q: "11. What is AsyncStorage?", a: "Persistent key-value store for React Native apps." },
    { q: "12. How to store sensitive data in React Native?", a: "Use react-native-keychain, expo-secure-store, react-native-encrypted-storage, or react-native-sensitive-info." },
    { q: "13. How to handle navigation in React Native?", a: "Stack Navigation, Tab Navigation, Drawer Navigation using react-navigation." },
    { q: "14. What is Flexbox and how is it used?", a: "Flexbox is a layout system used to align and distribute space. Key properties: flexDirection, justifyContent, alignItems." },
    { q: "15. What is a VirtualizedList?", a: "Base component behind FlatList and SectionList. Renders only a small subset of items for performance." },
    { q: "16. What is Watchman?", a: "File system monitoring tool that detects changes in files and directories." },
  ];

  const performanceTips = [
    "Use <code>React.memo</code> to prevent unnecessary re‑renders",
    "Memoize functions with <code>useCallback</code> and values with <code>useMemo</code>",
    "Code splitting with <code>React.lazy()</code> + <code>Suspense</code>",
    "Virtualize long lists (<code>react-window</code> or <code>FlatList</code>)",
    "Avoid inline objects/functions in JSX props",
    "Use production build (<code>npm run build</code>)",
    "Analyze bundle size with <code>webpack-bundle-analyzer</code>",
    "Optimize images (lazy loading, WebP)",
    "Use <code>FlatList</code> over <code>ScrollView</code> for long lists",
    "Enable Hermes engine for smaller APK and faster startup",
  ];

  const appSizeTips = [
    "Enable Hermes in <code>metro.config.js</code>",
    "Use Android App Bundle (AAB)",
    "Enable ProGuard and R8 code shrinking",
    "Remove unused dependencies",
    "Compress images (WebP/AVIF)",
    "Enable iOS App Thinning",
    "Split JS bundle with dynamic imports",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white py-20 px-4 rounded">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-5xl"> ⚛️ </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            React + React Native Interview Questions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
            Comprehensive guide for freshers – hooks, performance, app publishing, and advanced scenarios
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">React Hooks</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">React Native</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Performance</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">App Publishing</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-10 border border-cyan-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">📱</div>
            <div>
              <h2 className="font-bold text-xl text-cyan-800 mb-2">Master React & React Native</h2>
              <p className="text-gray-700">This guide covers everything from React fundamentals to advanced React Native topics: hooks, performance optimization, app publishing, debugging tools, and real‑world scenarios.</p>
            </div>
          </div>
        </div>

        {/* React Basics Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">React Fundamentals</h2>
          </div>
          <div className="grid gap-4">
            {reactBasics.map((item, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</span>
                  <div>
                    <h3 className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <p className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* React Hooks Table - Improved UI */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">React Hooks – Complete Reference</h2>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Hook</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Purpose</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Basic Example</th>
                </tr>
              </thead>
              <tbody>
                {hooksTable.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"} style={{ transition: "background-color 0.2s" }}>
                    <td className="px-4 py-2 text-sm font-mono text-gray-800 border-t border-gray-100">{item.hook}</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-t border-gray-100">{item.purpose}</td>
                    <td className="px-4 py-2 text-sm font-mono text-gray-600 border-t border-gray-100">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional React Concepts */}
        <div className="mb-12">
          <div className="grid gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h3 className="font-bold text-gray-800">16. What is a Higher‑Order Component (HOC)?</h3>
              <p className="text-gray-600 text-sm mt-1">A function that takes a component and returns an enhanced component. Common for reusing component logic like authentication.</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{`function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem('authToken') !== null;
    if (!isLoggedIn) return <div>Please login</div>;
    return <WrappedComponent {...props} />;
  };
}`}</pre>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h3 className="font-bold text-gray-800">17-20. useMemo, useCallback, custom hooks</h3>
              <p className="text-gray-600 text-sm mt-1">useMemo memoizes values, useCallback memoizes functions. Custom hooks (e.g., useFetch) encapsulate reusable logic.</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-2">{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url]);
  return { data, loading };
}`}</pre>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <h3 className="font-bold text-gray-800">21-23. Performance & useEffect vs useLayoutEffect</h3>
              <p className="text-gray-600 text-sm mt-1">Optimize with React.memo, useMemo, useCallback, React.lazy. useEffect runs after paint, useLayoutEffect runs before paint (synchronous).</p>
            </div>
          </div>
        </div>

        {/* React Native Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">React Native Fundamentals</h2>
          </div>
          <div className="grid gap-4">
            {reactNativeBasics.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-4">
                <div className="flex items-start gap-3">
                  <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</span>
                  <div>
                    <h3 className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <p className="text-gray-600 text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Components Table - Improved UI */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Core Components – Web Analogies</h3>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-emerald-50 to-teal-50">
                <tr>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">React Native</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Android</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">iOS</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Web</th>
                  <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 border-t border-gray-100">View</td><td className="px-3 py-2 border-t border-gray-100">ViewGroup</td><td className="px-3 py-2 border-t border-gray-100">UIView</td><td className="px-3 py-2 border-t border-gray-100">div</td><td className="px-3 py-2 border-t border-gray-100">Container</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 border-t border-gray-100">Text</td><td className="px-3 py-2 border-t border-gray-100">TextView</td><td className="px-3 py-2 border-t border-gray-100">UILabel</td><td className="px-3 py-2 border-t border-gray-100">span</td><td className="px-3 py-2 border-t border-gray-100">Text</td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 border-t border-gray-100">Image</td><td className="px-3 py-2 border-t border-gray-100">ImageView</td><td className="px-3 py-2 border-t border-gray-100">UIImageView</td><td className="px-3 py-2 border-t border-gray-100">img</td><td className="px-3 py-2 border-t border-gray-100">Image</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 border-t border-gray-100">ScrollView</td><td className="px-3 py-2 border-t border-gray-100">ScrollView</td><td className="px-3 py-2 border-t border-gray-100">UIScrollView</td><td className="px-3 py-2 border-t border-gray-100">div</td><td className="px-3 py-2 border-t border-gray-100">Scrollable container</td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 border-t border-gray-100">FlatList</td><td className="px-3 py-2 border-t border-gray-100">RecyclerView</td><td className="px-3 py-2 border-t border-gray-100">UITableView</td><td className="px-3 py-2 border-t border-gray-100">ul</td><td className="px-3 py-2 border-t border-gray-100">Performant list</td></tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition"><td className="px-3 py-2 border-t border-gray-100">TouchableOpacity</td><td className="px-3 py-2 border-t border-gray-100">Button</td><td className="px-3 py-2 border-t border-gray-100">UIButton</td><td className="px-3 py-2 border-t border-gray-100">a</td><td className="px-3 py-2 border-t border-gray-100">Touch interactions</td></tr>
                <tr className="bg-white hover:bg-gray-50 transition"><td className="px-3 py-2 border-t border-gray-100">TextInput</td><td className="px-3 py-2 border-t border-gray-100">EditText</td><td className="px-3 py-2 border-t border-gray-100">UITextField</td><td className="px-3 py-2 border-t border-gray-100">input</td><td className="px-3 py-2 border-t border-gray-100">Text input</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Threads Image */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Threads in React Native</h3>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <Image src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/163/original/Image-2.png?1615801411" alt="Threads in React Native" width={500} height={300} className="rounded-lg mb-3" />
            <p className="text-gray-600">Main/UI Thread (native rendering), Shadow Thread (layout), JavaScript Thread (business logic).</p>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Performance & Optimization</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-bold text-blue-700 mb-2">⚡ React (Web)</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {performanceTips.slice(0, 8).map((tip, i) => <li key={i} dangerouslySetInnerHTML={{ __html: tip }} />)}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <h3 className="font-bold text-emerald-700 mb-2">📱 React Native (Mobile)</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Use FlatList instead of ScrollView</li>
                <li>Avoid anonymous functions in render (use useCallback)</li>
                <li>Minimize bridge calls</li>
                <li>Use InteractionManager for non-critical tasks</li>
                <li>Enable Hermes engine</li>
                <li>Profile with React DevTools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Publishing Process */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">App Publishing Process</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-green-600 text-lg mb-2">📱 Google Play Store</h3>
              <p className="text-sm text-gray-600"><strong>Process:</strong> Signed AAB, developer account ($25), store listing, testing tracks, production review (2-24h).</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Tips:</strong> Use Play App Signing, R8 code shrinking, Firebase Test Lab.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-blue-600 text-lg mb-2">🍎 Apple App Store</h3>
              <p className="text-sm text-gray-600"><strong>Process:</strong> Apple Developer Program ($99/year), certificate, Xcode archive, TestFlight, review (1-3 days).</p>
              <p className="text-sm text-gray-600 mt-2"><strong>Tips:</strong> Use Fastlane snapshot, ensure HTTPS, prepare privacy policy.</p>
            </div>
          </div>
        </div>

        {/* Debugging Tools */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Debugging Tools</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Developer Menu", "Chrome DevTools", "React DevTools", "React Native Debugger", "Flipper", "Reactotron", "LogBox/RedBox"].map(tool => (
              <span key={tool} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tool}</span>
            ))}
          </div>
        </div>

        {/* App Size Reduction */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📦 Reduce App Size</h3>
          <div className="flex flex-wrap gap-2">
            {appSizeTips.map((tip, i) => <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm" dangerouslySetInnerHTML={{ __html: tip }} />)}
          </div>
        </div>

        {/* Scenario-based Questions - Full answers */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Advanced Scenario‑Based Questions</h2>
          </div>
          <div className="grid gap-5">
            {/* Full detailed answers for all 20 scenarios - exactly as originally provided */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span><h3 className="font-bold text-gray-800">Scenario: Your app crashes only in the Android release build, not in debug. What steps do you take?</h3></div>
              <p className="text-gray-600 text-sm">This typically points to Proguard or missing native configurations. Here’s how I’d debug it: check proguard‑rules.pro (if using libraries like Firebase, Realm, or Retrofit, they may need specific rules). Enable crash logging using <code>adb logcat</code> for release builds. Use tools like Firebase Crashlytics or Sentry to capture release crashes. Disable minify temporarily to isolate the issue: <code>minifyEnabled false</code> and <code>shrinkResources false</code>.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span><h3 className="font-bold text-gray-800">Scenario: You need to support a 5‑step onboarding flow with conditional navigation based on user input. How would you structure it?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>react-navigation</code> and create a stack navigator for the onboarding screens. Manage conditional flow using Context or local state. Use conditional logic in <code>navigation.navigate()</code> to decide the next screen based on form input. If onboarding is needed only once, store a flag like <code>hasOnboarded</code> in AsyncStorage or secure storage.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span><h3 className="font-bold text-gray-800">Scenario: You notice memory leaks when modals are opened and closed repeatedly. What’s your approach?</h3></div>
              <p className="text-gray-600 text-sm">Use the Flipper memory plugin or Xcode Instruments/Android Profiler to track memory. Check if any event listeners or intervals inside modals aren’t cleaned up on close. Use <code>useEffect</code> cleanup: <code>return () =&gt; clearInterval(interval);</code> Avoid unnecessary re‑renders by memoizing large components or using <code>React.memo</code>.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">4</span><h3 className="font-bold text-gray-800">Scenario: You have to store tokens and user data securely. How do you handle it?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>react-native-keychain</code> or <code>expo-secure-store</code> for storing sensitive data like tokens. Avoid AsyncStorage for confidential data. On logout, always clear secure storage and AsyncStorage. Implement token rotation with refresh tokens and check expiry before each API call.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">5</span><h3 className="font-bold text-gray-800">Scenario: You need real‑time updates in a chat app. What’s your stack and how do you handle it?</h3></div>
              <p className="text-gray-600 text-sm">Use WebSockets with libraries like <code>socket.io-client</code> or Firebase’s real‑time DB. Connect WebSocket in a <code>useEffect</code> inside a global context or message screen. Emit and listen to events like <code>message:new</code> or <code>user:typing</code>. Debounce typing indicators and ensure cleanup on component unmount.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">6</span><h3 className="font-bold text-gray-800">Scenario: Your feed screen with videos/images drops frames while scrolling. How do you fix it?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>FlatList</code> with <code>windowSize</code>, <code>removeClippedSubviews</code>, and <code>initialNumToRender</code> props for optimization. Avoid inline styles and functions in <code>renderItem</code>. Use <code>react-native-fast-image</code> for optimized image loading. Avoid auto‑playing multiple videos; only play one using <code>onViewableItemsChanged</code>.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">7</span><h3 className="font-bold text-gray-800">Scenario: You need to support dark mode and runtime theme switching across 100+ components. What’s your approach?</h3></div>
              <p className="text-gray-600 text-sm">Use Context API or Zustand to manage theme state. Define global themes (light/dark/custom) with tokens like <code>colors.primary</code>, <code>text</code>, etc. Use <code>useContext(ThemeContext)</code> in components to apply styles dynamically. Persist theme preference in AsyncStorage and sync on app start.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">8</span><h3 className="font-bold text-gray-800">Scenario: You need to scale your React Native app in a monorepo for multiple teams. How would you set it up?</h3></div>
              <p className="text-gray-600 text-sm">Use Nx, Turborepo, or Lerna for monorepo management. Organise the codebase into packages: <code>@app/mobile</code>, <code>@shared/ui</code>, <code>@shared/hooks</code>. Use TypeScript project references and aliases for import paths. Apply CI workflows to lint/test only affected packages.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">9</span><h3 className="font-bold text-gray-800">Scenario: Push notifications work on Android but silently fail on iOS. How do you debug this?</h3></div>
              <p className="text-gray-600 text-sm">Confirm APNs key/cert setup on Apple Developer Portal. Use a test tool like Pusher or Firebase console to send a notification directly. Check iOS‑specific settings: Capabilities → Push Notification; Background Modes → Remote notifications. Log device tokens and errors during registration. Ensure notification payload has the <code>aps</code> key and correct structure.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">10</span><h3 className="font-bold text-gray-800">Scenario: You need to support both deep links and universal links. What are the steps?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>react-navigation</code>’s linking config and <code>Linking.addEventListener</code>. On Android, configure intent filters in <code>AndroidManifest.xml</code>. On iOS, configure Associated Domains in Xcode and <code>apple-app-site-association</code> file on your server. Parse the path and navigate accordingly.</p>
              <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">{`const linking = { prefixes: ['myapp://','https://myapp.com'], config: { screens: { Home: 'home', Profile: 'user/:id' } } };`}</pre>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">11</span><h3 className="font-bold text-gray-800">Scenario: You’re asked to migrate an existing app from React Native CLI to Expo. What considerations and challenges do you foresee?</h3></div>
              <p className="text-gray-600 text-sm">Check for unsupported native modules. Expo has limits unless you use the “bare workflow.” Evaluate OTA update strategy — Expo makes it easier using <code>expo-updates</code>. Review <code>app.json</code> setup and migrate config files (<code>AndroidManifest.xml</code>, <code>Info.plist</code> → <code>app.json</code>). Expo uses its own build service (EAS), so CI/CD needs updates. Some platform‑specific customizations may require ejecting again — a risk to assess.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">12</span><h3 className="font-bold text-gray-800">Scenario: Your Android app crashes on certain devices with lower RAM during image‑heavy flows. How do you approach it?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>react-native-fast-image</code> for caching and optimized rendering. Downscale large images before loading (server‑side or locally). Monitor memory usage using Android Profiler. Use <code>Image.getSize()</code> to load optimized dimensions dynamically. Use lazy loading techniques — avoid rendering all images at once (e.g., in FlatList).</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">13</span><h3 className="font-bold text-gray-800">Scenario: You need to support biometric authentication (FaceID/Fingerprint) in the app. What is your implementation plan?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>react-native-keychain</code> or <code>expo-local-authentication</code>. Detect availability using APIs like <code>LocalAuthentication.hasHardwareAsync()</code>. Use biometric data to unlock stored credentials or secure content. Add fallbacks (PIN/password) for unsupported devices. Handle biometric permission rejection gracefully.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">14</span><h3 className="font-bold text-gray-800">Scenario: A third‑party SDK is not working with React Native. It only supports native platforms. What do you do?</h3></div>
              <p className="text-gray-600 text-sm">Wrap the native SDK using a Native Module. For Android: write a <code>MySDKModule.java</code> class. For iOS: write a <code>MySDKModule.swift</code> or Obj‑C class. Register the module and expose methods to JavaScript via <code>NativeModules</code>. Write tests for the bridge to ensure accurate behavior. If SDKs include UI, expose them via <code>requireNativeComponent</code>.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">15</span><h3 className="font-bold text-gray-800">Scenario: Your app has an AsyncStorage migration issue after an update. Some users report data loss. How do you handle it?</h3></div>
              <p className="text-gray-600 text-sm">Create a versioning mechanism for storage. Save <code>storageVersion</code> in AsyncStorage. On app launch, check version and apply migration logic if outdated. Back up important data before overwriting. Use <code>@react-native-async-storage/async-storage</code> and avoid key collisions.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">16</span><h3 className="font-bold text-gray-800">Scenario: You’re implementing deep links with custom domains. Links work on Android but not on iOS. What might be wrong?</h3></div>
              <p className="text-gray-600 text-sm">apple‑app‑site‑association file is missing or misconfigured. App ID doesn’t match the one in Apple Developer Portal. Associated Domains entitlements aren’t added correctly in Xcode. Use Apple’s validation tool or Safari debug logs to trace issues. Ensure HTTPS is enforced; iOS requires secure universal links.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">17</span><h3 className="font-bold text-gray-800">Scenario: You must write tests for a component using camera access. How do you do it?</h3></div>
              <p className="text-gray-600 text-sm">Use mocking for camera modules (<code>react-native-camera</code>, <code>expo-camera</code>). Write unit tests for logic, not the actual camera behavior. Use <code>jest.mock()</code> to avoid native errors during tests. For end‑to‑end (E2E), use Detox or Appium with mocked camera access or pre‑recorded video feed.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">18</span><h3 className="font-bold text-gray-800">Scenario: You need to support RTL (Right‑to‑Left) languages like Arabic or Hebrew. What changes are needed?</h3></div>
              <p className="text-gray-600 text-sm">Use <code>I18nManager</code> to enable RTL: <code>I18nManager.forceRTL(true);</code> Update styles to use <code>flexDirection: 'row-reverse'</code> or <code>start</code>/<code>end</code> instead of <code>left</code>/<code>right</code>. Wrap strings with an internationalization library like <code>i18n-js</code> or <code>react-i18next</code>. Ensure flip options are respected in custom components.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">19</span><h3 className="font-bold text-gray-800">Scenario: You notice your Redux store is bloated with too much temporary UI state. What’s your plan to refactor?</h3></div>
              <p className="text-gray-600 text-sm">Move UI‑specific state (modals, spinners, form errors) to component‑level state (<code>useState</code>) or Context. Keep Redux for shared/business‑critical data (auth, user, cart, theme). Split reducers into domains and use selectors to avoid tight coupling. Possibly use Zustand or Recoil for isolated state slices.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2"><span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">20</span><h3 className="font-bold text-gray-800">Scenario: A client wants the app to support code push (OTA updates). What are the challenges and how do you implement it?</h3></div>
              <p className="text-gray-600 text-sm">Use Microsoft CodePush or Expo Updates. Ensure no sensitive logic or API keys are exposed in JS bundle. Prepare for version conflicts — native changes require App Store/Play Store updates. Plan for rollback in case of bad deployment. Track app version and update logs to ensure visibility.</p>
            </div>
          </div>
        </div>

        {/* Final Advice */}
        <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg text-cyan-800">Final Advice</h3>
              <p className="text-gray-700">Performance and size optimization are ongoing processes. Regularly profile, monitor production crashes with tools like Sentry, and automate size checks to prevent regressions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}