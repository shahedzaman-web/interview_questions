// components/ReactReactNative.tsx
import React from "react";

export default function ReactReactNative() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        React + React Native Interview Questions (Freshers)
      </h2>

      {/* REACT SECTION */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">REACT</h3>

      <div className="space-y-4">
        <div><strong>1. What is React?</strong> – The library for web and native user interfaces. It uses virtual DOM to efficiently update and render components.</div>
        <div><strong>2. What is JSX?</strong> – JavaScript XML – syntax extension that allows writing HTML-like code inside JavaScript. It gets transpiled to <code className="bg-gray-200 px-1 rounded">React.createElement()</code> calls. <code className="bg-gray-200 px-1 rounded">{`const element = <h1>Hello, {name}</h1>;`}</code></div>
        <div><strong>3. Difference between props and state.</strong> – Props are read‑only data passed from parent to child. State is mutable data managed within a component using <code className="bg-gray-200 px-1 rounded">useState</code>.</div>
        <div><strong>4. What are React hooks? Name a few common ones.</strong> – Functions that let you use state and lifecycle in functional components: <code className="bg-gray-200 px-1 rounded">useState</code>, <code className="bg-gray-200 px-1 rounded">useEffect</code>, <code className="bg-gray-200 px-1 rounded">useContext</code>, <code className="bg-gray-200 px-1 rounded">useReducer</code>, <code className="bg-gray-200 px-1 rounded">useRef</code>.</div>
        <div><strong>5. Explain the virtual DOM and how React uses it.</strong> – Lightweight copy of the actual DOM. React diffs changes and updates only the changed parts (reconciliation).</div>
        <div><strong>6. What is the purpose of <code className="bg-gray-200 px-1 rounded">useEffect</code>?</strong> – Runs side effects after render. Can mimic lifecycle methods.</div>
        <div><strong>7. Difference between class and functional components?</strong> – Class: <code className="bg-gray-200 px-1 rounded">this.state</code>, lifecycle methods. Functional: hooks, simpler syntax.</div>
        <div><strong>8. What are keys in React and why are they important?</strong> – Help React identify items in a list. Should be unique and stable. Avoid using index as key if list can reorder.</div>
        <div><strong>9. Explain conditional rendering in React.</strong> – Using ternary (<code className="bg-gray-200 px-1 rounded">condition ? A : B</code>) or logical AND (<code className="bg-gray-200 px-1 rounded">condition &amp;&amp; Component</code>).</div>
        <div><strong>10. What is lifting state up?</strong> – Moving shared state to the closest common ancestor and passing it down via props with callbacks.</div>
        <div><strong>11. Controlled vs uncontrolled components?</strong> – Controlled: form input value controlled by React state. Uncontrolled: input manages its own state using <code className="bg-gray-200 px-1 rounded">ref</code>.</div>
        <div><strong>12. What is React Router?</strong> – Standard library for routing in React apps – enables navigation without page reload.</div>
        <div><strong>13. What is the Context API and when to use it?</strong> – Pass data through component tree without prop drilling. Use for global data like theme, user authentication.</div>
        <div><strong>14. React lifecycle methods (class components)</strong> – Mounting: constructor, render, componentDidMount. Updating: shouldComponentUpdate, render, componentDidUpdate. Unmounting: componentWillUnmount.</div>
      </div>

      {/* REACT HOOKS TABLE (FULLY ESCAPED) */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📋 React Hooks – Complete Reference</h3>
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Hook</th>
              <th className="border border-gray-300 px-3 py-2">Purpose</th>
              <th className="border border-gray-300 px-3 py-2">Basic Example</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useState</code></td><td className="border border-gray-300 px-3 py-2">Reactive local state</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">const [count, setCount] = useState(0);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useEffect</code></td><td className="border border-gray-300 px-3 py-2">Side effects (API calls, subscriptions)</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">useEffect(() =&gt; &#123; fetchData(); &#125;, []);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useContext</code></td><td className="border border-gray-300 px-3 py-2">Consume context without prop drilling</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">const theme = useContext(ThemeContext);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useReducer</code></td><td className="border border-gray-300 px-3 py-2">Complex state logic with actions</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">const [state, dispatch] = useReducer(reducer, initialState);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useRef</code></td><td className="border border-gray-300 px-3 py-2">Persist mutable values, DOM references</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">const inputRef = useRef(null);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useMemo</code></td><td className="border border-gray-300 px-3 py-2">Memoize expensive calculations</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">const memoized = useMemo(() =&gt; compute(a,b), [a,b]);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useCallback</code></td><td className="border border-gray-300 px-3 py-2">Memoize function references</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">const handleClick = useCallback(() =&gt; doSomething(id), [id]);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useLayoutEffect</code></td><td className="border border-gray-300 px-3 py-2">Sync effect before browser paint</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">useLayoutEffect(() =&gt; &#123; measureDOM(); &#125;, [deps]);</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useImperativeHandle</code></td><td className="border border-gray-300 px-3 py-2">Customize ref exposed to parent</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">useImperativeHandle(ref, () =&gt; (&#123; focus() &#123;...&#125; &#125;));</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><code>useDebugValue</code></td><td className="border border-gray-300 px-3 py-2">Label custom hooks in DevTools</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">useDebugValue(isOnline ? "Online" : "Offline");</code></td></tr>
            <tr><td className="border border-gray-300 px-3 py-2"><strong>Custom Hooks</strong></td><td className="border border-gray-300 px-3 py-2">Reusable logic (start with "use")</td><td className="border border-gray-300 px-3 py-2"><code className="text-xs">function useLocalStorage(key, initialValue) &#123;...&#125;</code></td></tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4">
        <div><strong>16. What is a Higher‑Order Component (HOC)? (with Auth example)</strong> – A function that takes a component and returns an enhanced component. Common for reusing component logic like authentication.</div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem('authToken') !== null;
    if (!isLoggedIn) return <div>Please login to access this page.</div>;
    return <WrappedComponent {...props} />;
  };
}`}
        </pre>
        <div><strong>17. What is <code className="bg-gray-200 px-1 rounded">useMemo</code> hook?</strong> – Memoizes a computed value; only recalculates when dependencies change. Optimizes expensive calculations.</div>
        <div><strong>18. What is <code className="bg-gray-200 px-1 rounded">useCallback</code> hook?</strong> – Returns a memoized function reference, preventing unnecessary recreation on re-renders.</div>
        <div><strong>19. Difference between <code className="bg-gray-200 px-1 rounded">useMemo</code> and <code className="bg-gray-200 px-1 rounded">useCallback</code>?</strong> – useMemo returns memoized value; useCallback returns memoized function.</div>
        <div><strong>20. What are custom hooks? Create a <code className="bg-gray-200 px-1 rounded">useFetch</code> example.</strong> – Reusable functions that encapsulate logic using built-in hooks.</div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url]);
  return { data, loading };
}`}
        </pre>
        <div><strong>21. How to optimize a React component for performance?</strong> – React.memo, useMemo, useCallback, code splitting with React.lazy, virtualize long lists, avoid inline functions in render, localize state, stable keys, cache server data.</div>
        <div><strong>22. How does <code className="bg-gray-200 px-1 rounded">React.memo</code> help?</strong> – Prevents re-rendering of a functional component if its props haven't changed.</div>
      </div>

      {/* REACT NATIVE SECTION */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">REACT NATIVE</h3>

      <div className="space-y-4">
        <div><strong>1. What is React Native?</strong> – Framework for building native mobile apps (iOS & Android) using JavaScript and React. Renders with native components.</div>
        <div><strong>2. Difference between React and React Native?</strong> – React: web, DOM elements, CSS. React Native: mobile, native components (View, Text), StyleSheet API.</div>
        <div><strong>3. Core components in React Native?</strong> – View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput.</div>
        <div><strong>4. Difference between <code className="bg-gray-200 px-1 rounded">ScrollView</code> and <code className="bg-gray-200 px-1 rounded">FlatList</code>?</strong> – ScrollView renders all children at once (good for small content). FlatList renders only visible items (ideal for long lists).</div>
        <div><strong>5. How to style components in React Native?</strong> – StyleSheet.create() with camelCase properties.</div>
        <div><strong>6. What is <code className="bg-gray-200 px-1 rounded">SafeAreaView</code>?</strong> – Renders content within safe area boundaries of a device (notches, status bars).</div>
        <div><strong>7. How to debug React Native applications? Tools used?</strong> – Developer Menu (Cmd+R / Ctrl+M), Chrome DevTools, React Developer Tools, React Native Debugger, Flipper, Reactotron.</div>
        <div><strong>8. Timers in React Native?</strong> – setTimeout, setInterval, setImmediate, requestAnimationFrame.</div>
        <div><strong>9. Threads in React Native?</strong> – Main/UI Thread (native rendering), Shadow Thread (layout), JavaScript Thread (JS code).</div>
        <div><strong>10. What is the Bridge in React Native? (Android & iOS)</strong> – Transport layer that asynchronously serializes batched messages between JavaScript and native modules.</div>
      </div>

      {/* APP PUBLISHING PROCESS */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📱 App Publishing Process – Google Play Store & Apple App Store</h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg">Google Play Store</h4>
          <p><strong>Process:</strong></p>
          <ol className="list-decimal list-inside ml-4">
            <li>Prepare a signed release build (AAB – Android App Bundle).</li>
            <li>Create a developer account ($25 one‑time fee).</li>
            <li>Fill store listing (title, description, screenshots, feature graphic, privacy policy).</li>
            <li>Upload the AAB to Play Console → Internal / Closed / Open testing tracks.</li>
            <li>Run tests (internal testing with up to 100 testers).</li>
            <li>Submit for production review (usually 2‑24 hours).</li>
            <li>Roll out gradually (phased rollout available).</li>
          </ol>
          <p><strong>Common difficulties &amp; tips:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>⚠️ <strong>Signing key management:</strong> Losing your upload key prevents updates. <br/>✅ <strong>Tip:</strong> Store the keystore securely (e.g., password manager + offline backup). Use Play App Signing (Google manages your key).</li>
            <li>⚠️ <strong>App size limits:</strong> AAB limit is 150MB per APK; larger apps need extension files. <br/>✅ <strong>Tip:</strong> Use Android App Bundle, enable R8 code shrinking, compress images.</li>
            <li>⚠️ <strong>Rejected for policy violations:</strong> Permissions, privacy, data collection. <br/>✅ <strong>Tip:</strong> Read Google Play Developer Policy carefully. Provide a clear privacy policy URL.</li>
            <li>⚠️ <strong>Testing devices fragmentation:</strong> Many screen sizes, Android versions. <br/>✅ <strong>Tip:</strong> Use Firebase Test Lab or internal testing with real devices.</li>
            <li>⚠️ <strong>Slow review after update rejections:</strong> Can take days. <br/>✅ <strong>Tip:</strong> Always test with closed track before production.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Apple App Store</h4>
          <p><strong>Process:</strong></p>
          <ol className="list-decimal list-inside ml-4">
            <li>Join Apple Developer Program ($99/year).</li>
            <li>Generate distribution certificate and provisioning profile (via Xcode or Developer Portal).</li>
            <li>Archive and upload build using Xcode or Transporter.</li>
            <li>Set up App Store Connect record (description, keywords, screenshots for each device size, app icon).</li>
            <li>Select build and submit for review (test with TestFlight first).</li>
            <li>Wait for review (typically 1‑3 days, sometimes longer).</li>
            <li>Release manually or automatically after approval.</li>
          </ol>
          <p><strong>Common difficulties &amp; tips:</strong></p>
          <ul className="list-disc list-inside ml-4">
            <li>⚠️ <strong>Strict review guidelines:</strong> Rejections for UI similarity, broken links, incomplete information. <br/>✅ <strong>Tip:</strong> Thoroughly test on real device, ensure no placeholder content, include demo account if needed.</li>
            <li>⚠️ <strong>Certificate &amp; profile confusion:</strong> Mismatched bundle IDs or expired certificates. <br/>✅ <strong>Tip:</strong> Use Xcode’s automatic signing for development; for production, manually manage via Developer Portal.</li>
            <li>⚠️ <strong>Screenshot requirements:</strong> Need screenshots for every device size (6.5", 5.5", 12.9", etc.). <br/>✅ <strong>Tip:</strong> Use Fastlane snapshot to generate automatically or resize with tools like AppLaunchpad.</li>
            <li>⚠️ <strong>Long review times for first submission:</strong> Up to a week. <br/>✅ <strong>Tip:</strong> Submit early, use expedited review only for critical bug fixes.</li>
            <li>⚠️ <strong>Privacy questions (nutrition label):</strong> New mandatory disclosure of data collection. <br/>✅ <strong>Tip:</strong> Prepare a detailed privacy policy and list all APIs used (camera, location, etc.).</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-3 rounded">
          <strong>🌟 Key points for both stores:</strong> ASO, localization, analytics (Firebase/Sentry), CI/CD (Fastlane, GitHub Actions), legal privacy policy, TestFlight/internal testing.
        </div>
      </div>

      {/* DEBUGGING TOOLS */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🛠️ Debugging Tools in React Native</h3>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Developer Menu:</strong> Shake device or press <code>Cmd+R / Ctrl+M</code> → Reload, Debug JS Remotely, Enable Live/Hot Reload, Toggle Inspector (shows network, performance).</li>
        <li><strong>Chrome DevTools:</strong> Press “Debug JS Remotely” → opens Chrome DevTools for console, breakpoints, network tab.</li>
        <li><strong>React Developer Tools (desktop app):</strong> Inspect component hierarchy, props, state, and hooks.</li>
        <li><strong>React Native Debugger:</strong> Standalone app that integrates Redux DevTools and React DevTools.</li>
        <li><strong>Flipper:</strong> Official React Native debugging tool (desktop app) – network inspector, logs, layout viewer, and plugins.</li>
        <li><strong>Reactotron:</strong> Lightweight desktop app for logging, errors, API requests, and state inspection.</li>
        <li><strong>LogBox / RedBox:</strong> In‑app error/warning boxes that show stack traces and component info.</li>
      </ul>

      {/* PERFORMANCE OPTIMIZATION */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">⚡ How to Optimize React &amp; React Native Performance</h3>
      <div className="space-y-3">
        <p><strong>For React (Web):</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Use <code>React.memo</code> to prevent unnecessary re‑renders of pure components.</li>
          <li>Memoize expensive functions with <code>useCallback</code> and values with <code>useMemo</code>.</li>
          <li>Code splitting: <code>React.lazy()</code> + <code>Suspense</code> to load components on demand.</li>
          <li>Virtualize long lists (e.g., <code>react-window</code> or <code>react-virtualized</code>).</li>
          <li>Avoid inline objects/functions in JSX props (creates new references on each render).</li>
          <li>Use production build (<code>npm run build</code>) – minified, optimized bundle.</li>
          <li>Analyze bundle size with <code>webpack-bundle-analyzer</code>.</li>
          <li>Optimize images (next/image, lazy loading, modern formats like WebP).</li>
        </ul>
        <p><strong>For React Native (Mobile):</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Use <code>FlatList</code> instead of <code>ScrollView</code> for long lists – <code>FlatList</code> renders only visible items.</li>
          <li>Avoid anonymous functions inside render (use <code>useCallback</code>).</li>
          <li>Minimize bridge calls – batch native module communication.</li>
          <li>Use <code>InteractionManager</code> to defer non‑critical tasks after animations.</li>
          <li>Enable Hermes JavaScript engine (smaller APK size, faster startup).</li>
          <li>Profile JavaScript thread with <code>React DevTools</code> and <code>Performance Monitor</code> (enable from Dev Menu).</li>
          <li>Use <code>getSnapshotBeforeUpdate</code> or <code>useLayoutEffect</code> to avoid layout thrashing.</li>
        </ul>
      </div>

      {/* APP SIZE REDUCTION */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📦 How to Reduce React Native App Size</h3>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Enable Hermes:</strong> Add <code>enableHermes: true</code> in <code>metro.config.js</code> → reduces bytecode size and memory.</li>
        <li><strong>Use Android App Bundle (AAB):</strong> Google Play delivers only required resources per device.</li>
        <li><strong>Enable ProGuard (Android):</strong> Remove unused Java/Kotlin code. In <code>android/app/build.gradle</code> set <code>proguardFiles getDefaultProguardFile(...)</code>.</li>
        <li><strong>Enable R8 code shrinking:</strong> <code>minifyEnabled true</code> and <code>shrinkResources true</code>.</li>
        <li><strong>Remove unused dependencies:</strong> Audit with <code>npm ls</code> or <code>yarn why</code>. Replace large libraries with smaller alternatives (e.g., <code>dayjs</code> instead of <code>moment</code>).</li>
        <li><strong>Compress images:</strong> Use <code>react-native-compressor</code> or <code>sharp</code> at build time. Prefer WebP/AVIF formats.</li>
        <li><strong>Enable iOS App Thinning:</strong> Xcode generates variant builds per device (Slicing, On‑Demand Resources).</li>
        <li><strong>Split JS bundle:</strong> Use React.lazy or Metro’s <code>inlineRequires</code> to lazy‑load modules.</li>
      </ul>

      {/* PRODUCTION CRASH DEBUGGING */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">💥 How to Debug Production App Crashes (Tools)</h3>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Sentry:</strong> Real‑time error tracking and crash reporting with source maps, session replay. Integrates with React and React Native.</li>
        <li><strong>Firebase Crashlytics:</strong> Lightweight crash reporter, supports JS and native crashes, provides detailed stack traces and breadcrumbs.</li>
        <li><strong>BugSnag:</strong> Similar to Sentry – error monitoring, release health, and diagnostic data.</li>
        <li><strong>LogRocket / Instabug:</strong> Record user sessions, network logs, and console output to replay crashes.</li>
        <li><strong>Microsoft App Center Analytics + Crashes:</strong> Free crash reporting and analytics.</li>
        <li><strong>Custom solution:</strong> Send logs to a backend on startup (if crash, user can restart with logging enabled).</li>
      </ul>
      <p><strong>Pro tip:</strong> Always upload source maps for your JS bundle to Symbolicate stack traces. For native crashes, use <code>ndk-stack</code> or symbol tables provided by the crash tool.</p>

      {/* LONG‑TERM SIZE OPTIMIZATION */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📈 How to Optimize App Size When It Increases Over Time</h3>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Regularly analyze bundle size:</strong> Use <code>react-native-bundle-visualizer</code> or <code>webpack-bundle-analyzer</code> for web; for native, check <code>.apk</code> / <code>.ipa</code> structure.</li>
        <li><strong>Detect and remove dead code:</strong> Use <code>depcheck</code>, ESLint (no-unused-vars), and tree‑shaking friendly imports (named imports).</li>
        <li><strong>Audit dependencies monthly:</strong> Replace outdated or bloated libraries. Prefer micro‑libraries when possible.</li>
        <li><strong>Use code splitting / dynamic imports:</strong> Load heavy screens or features only when needed (e.g., <code>React.lazy</code> for web, <code>require</code> for React Native).</li>
        <li><strong>Implement asset cleanup:</strong> Remove unused images, fonts, or other resources. Use <code>resize-image</code> scripts to reduce asset sizes.</li>
        <li><strong>Enable native optimization flags:</strong> On Android – <code>android:extractNativeLibs="false"</code> in <code>AndroidManifest.xml</code>. On iOS – enable “Strip Swift Symbols” and “Dead Code Stripping”.</li>
        <li><strong>Automate size monitoring:</strong> Integrate bundle size checks into CI/CD (e.g., <code>bundlesize</code> for web, DangerJS with custom scripts).</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
        🎯 <strong>Final advice:</strong> Performance and size optimization are ongoing processes. Regularly profile, monitor production crashes with tools like Sentry, and automate size checks to prevent regressions.
      </div>

      {/* ORIGINAL REMAINING CONTENT */}
      <div className="space-y-4 mt-4">
        <div><strong>13. Debugging tools in React Native</strong> – Developer Menu, Chrome DevTools, React DevTools, React Native Debugger, Flipper, Reactotron, RedBox.</div>
        <div><strong>14. How to debug React Native applications in production?</strong> – Use error tracking services like Sentry, Firebase Crashlytics, and analytics events.</div>
        <div><strong>12. (Extra) What is the difference between React Native and Flutter?</strong> – React Native: JavaScript + React, bridges to native components. Flutter: Dart, renders with Skia engine (no bridge, consistent UI but larger app size).</div>
      </div>
    </section>
  );
}