// components/ReactReactNative.tsx
import Image from "next/image";
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
        <div><strong>23. What is the difference between useEffect and useLayoutEffect? </strong>
          <ul className="list-disc">
            <li>useEffect runs after DOM updates / useEffect runs after the component is rendered on the screen.</li>
            <li>useLayoutEffect runs before DOM updates / useLayoutEffect runs before the paint, allowing layout changes to happen without visual flicker.</li>
          </ul>
        </div>
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
        <div><strong>11. What is <code className="bg-gray-200 px-1 rounded">AsyncStorage</code>?</strong> – Persistent key-value store for React Native apps.</div>
        <div><strong>12. How to store sensitive data in React Native?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>react-native-keychain: The community standard for storing small credentials like tokens and passwords. It uses Keychain Services on iOS and Keystore on Android.</li>
            <li>expo-secure-store: The go-to for Expo projects. It provides a simple API to encrypt and store data locally.</li>
            <li>react-native-encrypted-storage: A lightweight wrapper for EncryptedSharedPreferences (Android) and Keychain (iOS), suitable for general sensitive key-value pairs.</li>
            <li>react-native-sensitive-info: Offers advanced features like hardware-backed encryption gated by biometrics (FaceID/Fingerprint).</li>
          </ul>
        </div>
        <div><strong>13. How to handle navigation in React Native?</strong> – Stack Navigation, Tab Navigation, Drawer Navigation.</div>
        <div><strong>14. What is Flexbox and how is it used in React Native?</strong> – Flexbox is a layout system used to align and distribute space among components. It helps in making the UI responsive. Key properties include flexDirection, justifyContent, and alignItems.</div>
        <div><strong>15. What is a VirtualizedList?</strong> – VirtualizedList is the base component behind FlatList and SectionList. It efficiently renders only a small subset of items in a long list, improving performance on large datasets.</div>
        <div><strong>15. What is the difference between  FlatList and SectionList?</strong>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2">FlatList</th>
                <th className="border border-gray-300 px-3 py-2">SectionList</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-3 py-2">FlatList renders all items at once</td><td className="border border-gray-300 px-3 py-2">SectionList renders sections of items</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">FlatList is suitable for rendering long lists</td><td className="border border-gray-300 px-3 py-2">SectionList is suitable for rendering long lists with sections</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">FlatList is suitable for rendering large datasets</td><td className="border border-gray-300 px-3 py-2">SectionList is suitable for rendering large datasets with sections</td></tr>
            </tbody>
          </table>
        </div>
        <div><strong>16. What is Watchman in React Native?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Watchman is a file system monitoring tool that is used to detect changes in files and directories.</li>
            <li>It is used to detect changes in files and directories and trigger actions based on those changes.</li>
          </ul>
        </div>
        <div><strong>17. What are common React Native performance pitfalls you’ve seen?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Unoptimized FlatLists</li>
            <li>Heavy operations on the UI thread</li>
            <li>Re-rendering due to props/state changes</li>
            <li>Large images</li>
            <li>Memory leaks via unmounted timers/listeners</li>
          </ul>
        </div>
        <div><strong>18. What are the biggest trade-offs of React Native in enterprise?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Native performance can be harder to match</li>
            <li>Some libraries may lag behind platform updates</li>
            <li>Requires team expertise in both native and JS</li>
            <li>Dependency management across native platforms can be challenging</li>
          </ul>
        </div>
        <div><strong>19. What is the role of the bridge in React Native?</strong>
          <p>The bridge connects JavaScript and native code. It serializes and sends messages asynchronously.
            While it works well, it can be a bottleneck,
            which is why the new architecture (Fabric + TurboModules) aims to reduce its use.</p>
        </div>
        <div><strong>20. What are threads in General ? and explain Different Threads in ReactNative with Use of Each?</strong>
          <Image src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/163/original/Image-2.png?1615801411"
            alt="Threads in React Native"
            width={500}
            height={500} />
          <p>The single sequential flow of control within a program can be controlled by a thread.</p>
          <strong>React Native right now uses 3 threads:</strong>
          <ul>
            <li><strong>Main/UI Thread:</strong> Native UI rendering.</li>
            <li><strong>Shadow Thread:</strong> Calculates layout (Yoga engine).</li>
            <li><strong>JavaScript Thread:</strong> Runs JS code and business logic.</li>
          </ul>
        </div>
        <div><strong>21. Name core Components in React Native and the analogy of those components when compared with the web.</strong>
          <table className="min-w-full border border-gray-300 text-sm">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2">REACT NATIVE UI COMPONENT</th>
                <th className="border border-gray-300 px-3 py-2">ANDROID VIEW</th>
                <th className="border border-gray-300 px-3 py-2">IOS VIEW</th>
                <th className="border border-gray-300 px-3 py-2">WEB ANALOG</th>
                <th className="border border-gray-300 px-3 py-2">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 px-3 py-2">View</td><td className="border border-gray-300 px-3 py-2">ViewGroup</td><td className="border border-gray-300 px-3 py-2">UIView</td><td className="border border-gray-300 px-3 py-2">div</td><td className="border border-gray-300 px-3 py-2">Container</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">Text</td><td className="border border-gray-300 px-3 py-2">TextView</td><td className="border border-gray-300 px-3 py-2">UILabel</td><td className="border border-gray-300 px-3 py-2">span</td><td className="border border-gray-300 px-3 py-2">Text</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">Image</td><td className="border border-gray-300 px-3 py-2">ImageView</td><td className="border border-gray-300 px-3 py-2">UIImageView</td><td className="border border-gray-300 px-3 py-2">img</td><td className="border border-gray-300 px-3 py-2">Image</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">ScrollView</td><td className="border border-gray-300 px-3 py-2">ScrollView</td><td className="border border-gray-300 px-3 py-2">UIScrollView</td><td className="border border-gray-300 px-3 py-2">div</td><td className="border border-gray-300 px-3 py-2">Scrollable container</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">FlatList</td><td className="border border-gray-300 px-3 py-2">RecyclerView</td><td className="border border-gray-300 px-3 py-2">UITableView</td><td className="border border-gray-300 px-3 py-2">ul</td><td className="border border-gray-300 px-3 py-2">Performant list with lazy loading</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">TouchableOpacity</td><td className="border border-gray-300 px-3 py-2">Button</td><td className="border border-gray-300 px-3 py-2">UIButton</td><td className="border border-gray-300 px-3 py-2">a</td><td className="border border-gray-300 px-3 py-2">Touch interactions</td></tr>
              <tr><td className="border border-gray-300 px-3 py-2">TextInput</td><td className="border border-gray-300 px-3 py-2">EditText</td><td className="border border-gray-300 px-3 py-2">UITextField</td><td className="border border-gray-300 px-3 py-2">input</td><td className="border border-gray-300 px-3 py-2">Text input</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* APP PUBLISHING PROCESS */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📱 App Publishing Process – Google Play Store &amp; Apple App Store</h3>
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
            <li>⚠️ <strong>Signing key management:</strong> Losing your upload key prevents updates. <br />✅ <strong>Tip:</strong> Store the keystore securely (e.g., password manager + offline backup). Use Play App Signing (Google manages your key).</li>
            <li>⚠️ <strong>App size limits:</strong> AAB limit is 150MB per APK; larger apps need extension files. <br />✅ <strong>Tip:</strong> Use Android App Bundle, enable R8 code shrinking, compress images.</li>
            <li>⚠️ <strong>Rejected for policy violations:</strong> Permissions, privacy, data collection. <br />✅ <strong>Tip:</strong> Read Google Play Developer Policy carefully. Provide a clear privacy policy URL.</li>
            <li>⚠️ <strong>Testing devices fragmentation:</strong> Many screen sizes, Android versions. <br />✅ <strong>Tip:</strong> Use Firebase Test Lab or internal testing with real devices.</li>
            <li>⚠️ <strong>Slow review after update rejections:</strong> Can take days. <br />✅ <strong>Tip:</strong> Always test with closed track before production.</li>
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
            <li>⚠️ <strong>Strict review guidelines:</strong> Rejections for UI similarity, broken links, incomplete information. <br />✅ <strong>Tip:</strong> Thoroughly test on real device, ensure no placeholder content, include demo account if needed.</li>
            <li>⚠️ <strong>Certificate &amp; profile confusion:</strong> Mismatched bundle IDs or expired certificates. <br />✅ <strong>Tip:</strong> Use Xcode’s automatic signing for development; for production, manually manage via Developer Portal.</li>
            <li>⚠️ <strong>Screenshot requirements:</strong> Need screenshots for every device size (6.5", 5.5", 12.9", etc.). <br />✅ <strong>Tip:</strong> Use Fastlane snapshot to generate automatically or resize with tools like AppLaunchpad.</li>
            <li>⚠️ <strong>Long review times for first submission:</strong> Up to a week. <br />✅ <strong>Tip:</strong> Submit early, use expedited review only for critical bug fixes.</li>
            <li>⚠️ <strong>Privacy questions (nutrition label):</strong> New mandatory disclosure of data collection. <br />✅ <strong>Tip:</strong> Prepare a detailed privacy policy and list all APIs used (camera, location, etc.).</li>
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
          <li>Use FlatList over ScrollView</li>
          <li>Avoid anonymous functions in render</li>
          <li>Use memoization (React.memo, useCallback)</li>
          <li>Optimize images</li>
          <li>Avoid unnecessary re-renders</li>
        </ul>
        <p><strong>For React Native (Mobile):</strong></p>
        <ul className="list-disc list-inside ml-4">
          <li>Use <code>FlatList</code> instead of <code>ScrollView</code> for long lists – <code>FlatList</code> renders only visible items.</li>
          <li>Avoid anonymous functions inside render (use <code>useCallback</code>).</li>
          <li>Minimize bridge calls – batch native module communication.</li>
          <li>Use <code>InteractionManager</code> to defer non‑critical tasks after animations.</li>
          <li>Enable Hermes JavaScript engine (smaller APK size, faster startup, better memory usage).</li>
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

      {/* ==================== NEW SCENARIO-BASED QUESTIONS (147–166) ==================== */}
      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📌 Advanced Scenario‑Based Questions</h3>
      <div className="space-y-5">
        <div><strong>1. Scenario: Your app crashes only in the Android release build, not in debug. What steps do you take?</strong>
          <p className="mt-1 text-gray-700">This typically points to Proguard or missing native configurations. Here’s how I’d debug it:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Check proguard‑rules.pro: If you’re using libraries like Firebase, Realm, or Retrofit, they may need specific rules.</li>
            <li>Enable crash logging using <code>adb logcat</code> for release builds.</li>
            <li>Use tools like Firebase Crashlytics or Sentry to capture release crashes.</li>
            <li>Disable minify temporarily to isolate the issue: <code>minifyEnabled false</code> and <code>shrinkResources false</code>.</li>
          </ul>
        </div>
        <div><strong>2. Scenario: You need to support a 5‑step onboarding flow with conditional navigation based on user input. How would you structure it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>react-navigation</code> and create a stack navigator for the onboarding screens.</li>
            <li>Manage conditional flow using Context or local state.</li>
            <li>Use conditional logic in <code>navigation.navigate()</code> to decide the next screen based on form input.</li>
            <li>If onboarding is needed only once, store a flag like <code>hasOnboarded</code> in AsyncStorage or secure storage.</li>
          </ul>
        </div>
        <div><strong>3. Scenario: You notice memory leaks when modals are opened and closed repeatedly. What’s your approach?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use the Flipper memory plugin or Xcode Instruments/Android Profiler to track memory.</li>
            <li>Check if any event listeners or intervals inside modals aren’t cleaned up on close.</li>
            <li>Use <code>useEffect</code> cleanup: <code>return () =&gt; clearInterval(interval);</code></li>
            <li>Avoid unnecessary re‑renders by memoizing large components or using <code>React.memo</code>.</li>
          </ul>
        </div>
        <div><strong>4. Scenario: You have to store tokens and user data securely. How do you handle it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>react-native-keychain</code> or <code>expo-secure-store</code> for storing sensitive data like tokens.</li>
            <li>Avoid AsyncStorage for confidential data.</li>
            <li>On logout, always clear secure storage and AsyncStorage.</li>
            <li>Implement token rotation with refresh tokens and check expiry before each API call.</li>
          </ul>
        </div>
        <div><strong>5. Scenario: You need real‑time updates in a chat app. What’s your stack and how do you handle it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use WebSockets with libraries like <code>socket.io-client</code> or Firebase’s real‑time DB.</li>
            <li>Connect WebSocket in a <code>useEffect</code> inside a global context or message screen.</li>
            <li>Emit and listen to events like <code>message:new</code> or <code>user:typing</code>.</li>
            <li>Debounce typing indicators and ensure cleanup on component unmount.</li>
          </ul>
        </div>
        <div><strong>6. Scenario: Your feed screen with videos/images drops frames while scrolling. How do you fix it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>FlatList</code> with <code>windowSize</code>, <code>removeClippedSubviews</code>, and <code>initialNumToRender</code> props for optimization.</li>
            <li>Avoid inline styles and functions in <code>renderItem</code>.</li>
            <li>Use <code>react-native-fast-image</code> for optimized image loading.</li>
            <li>Avoid auto‑playing multiple videos; only play one using <code>onViewableItemsChanged</code>.</li>
          </ul>
        </div>
        <div><strong>7. Scenario: You need to support dark mode and runtime theme switching across 100+ components. What’s your approach?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use Context API or Zustand to manage theme state.</li>
            <li>Define global themes (light/dark/custom) with tokens like <code>colors.primary</code>, <code>text</code>, etc.</li>
            <li>Use <code>useContext(ThemeContext)</code> in components to apply styles dynamically.</li>
            <li>Persist theme preference in AsyncStorage and sync on app start.</li>
          </ul>
        </div>
        <div><strong>8. Scenario: You need to scale your React Native app in a monorepo for multiple teams. How would you set it up?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use Nx, Turborepo, or Lerna for monorepo management.</li>
            <li>Organize the codebase into packages: <code>@app/mobile</code>, <code>@shared/ui</code>, <code>@shared/hooks</code>.</li>
            <li>Use TypeScript project references and aliases for import paths.</li>
            <li>Apply CI workflows to lint/test only affected packages.</li>
          </ul>
        </div>
        <div><strong>9. Scenario: Push notifications work on Android but silently fail on iOS. How do you debug this?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Confirm APNs key/cert setup on Apple Developer Portal.</li>
            <li>Use a test tool like Pusher or Firebase console to send a notification directly.</li>
            <li>Check iOS‑specific settings: Capabilities → Push Notification; Background Modes → Remote notifications.</li>
            <li>Log device tokens and errors during registration.</li>
            <li>Ensure notification payload has the <code>aps</code> key and correct structure.</li>
          </ul>
        </div>
        <div><strong>10. Scenario: You need to support both deep links and universal links. What are the steps?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>react-navigation</code>’s linking config and <code>Linking.addEventListener</code>.</li>
            <li>On Android, configure intent filters in <code>AndroidManifest.xml</code>.</li>
            <li>On iOS, configure Associated Domains in Xcode and <code>apple-app-site-association</code> file on your server.</li>
            <li>Parse the path and navigate accordingly:</li>
          </ul>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">{`const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'user/:id'
    }
  }
};`}</pre>
        </div>
        <div><strong>11. Scenario: You’re asked to migrate an existing app from React Native CLI to Expo. What considerations and challenges do you foresee?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Check for unsupported native modules. Expo has limits unless you use the “bare workflow.”</li>
            <li>Evaluate OTA update strategy — Expo makes it easier using <code>expo-updates</code>.</li>
            <li>Review <code>app.json</code> setup and migrate config files (<code>AndroidManifest.xml</code>, <code>Info.plist</code> → <code>app.json</code>).</li>
            <li>Expo uses its own build service (EAS), so CI/CD needs updates.</li>
            <li>Some platform‑specific customizations may require ejecting again — a risk to assess.</li>
          </ul>
        </div>
        <div><strong>12. Scenario: Your Android app crashes on certain devices with lower RAM during image‑heavy flows. How do you approach it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>react-native-fast-image</code> for caching and optimized rendering.</li>
            <li>Downscale large images before loading (server‑side or locally).</li>
            <li>Monitor memory usage using Android Profiler.</li>
            <li>Use <code>Image.getSize()</code> to load optimized dimensions dynamically.</li>
            <li>Use lazy loading techniques — avoid rendering all images at once (e.g., in FlatList).</li>
          </ul>
        </div>
        <div><strong>13. Scenario: You need to support biometric authentication (FaceID/Fingerprint) in the app. What is your implementation plan?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>react-native-keychain</code> or <code>expo-local-authentication</code>.</li>
            <li>Detect availability using APIs like <code>LocalAuthentication.hasHardwareAsync()</code>.</li>
            <li>Use biometric data to unlock stored credentials or secure content.</li>
            <li>Add fallbacks (PIN/password) for unsupported devices.</li>
            <li>Handle biometric permission rejection gracefully.</li>
          </ul>
        </div>
        <div><strong>14. Scenario: A third‑party SDK is not working with React Native. It only supports native platforms. What do you do?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Wrap the native SDK using a Native Module.</li>
            <li>For Android: write a <code>MySDKModule.java</code> class.</li>
            <li>For iOS: write a <code>MySDKModule.swift</code> or Obj‑C class.</li>
            <li>Register the module and expose methods to JavaScript via <code>NativeModules</code>.</li>
            <li>Write tests for the bridge to ensure accurate behavior.</li>
            <li>If SDKs include UI, expose them via <code>requireNativeComponent</code>.</li>
          </ul>
        </div>
        <div><strong>15. Scenario: Your app has an AsyncStorage migration issue after an update. Some users report data loss. How do you handle it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Create a versioning mechanism for storage. Save <code>storageVersion</code> in AsyncStorage.</li>
            <li>On app launch, check version and apply migration logic if outdated.</li>
            <li>Back up important data before overwriting.</li>
            <li>Use <code>@react-native-async-storage/async-storage</code> and avoid key collisions.</li>
          </ul>
        </div>
        <div><strong>16. Scenario: You’re implementing deep links with custom domains. Links work on Android but not on iOS. What might be wrong?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>apple‑app‑site‑association file is missing or misconfigured.</li>
            <li>App ID doesn’t match the one in Apple Developer Portal.</li>
            <li>Associated Domains entitlements aren’t added correctly in Xcode.</li>
            <li>Use Apple’s validation tool or Safari debug logs to trace issues.</li>
            <li>Ensure HTTPS is enforced; iOS requires secure universal links.</li>
          </ul>
        </div>
        <div><strong>17. Scenario: You must write tests for a component using camera access. How do you do it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use mocking for camera modules (<code>react-native-camera</code>, <code>expo-camera</code>).</li>
            <li>Write unit tests for logic, not the actual camera behavior.</li>
            <li>Use <code>jest.mock()</code> to avoid native errors during tests.</li>
            <li>For end‑to‑end (E2E), use Detox or Appium with mocked camera access or pre‑recorded video feed.</li>
          </ul>
        </div>
        <div><strong>18. Scenario: You need to support RTL (Right‑to‑Left) languages like Arabic or Hebrew. What changes are needed?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use <code>I18nManager</code> to enable RTL: <code>I18nManager.forceRTL(true);</code></li>
            <li>Update styles to use <code>flexDirection: 'row-reverse'</code> or <code>start</code>/<code>end</code> instead of <code>left</code>/<code>right</code>.</li>
            <li>Wrap strings with an internationalization library like <code>i18n-js</code> or <code>react-i18next</code>.</li>
            <li>Ensure flip options are respected in custom components.</li>
          </ul>
        </div>
        <div><strong>19. Scenario: You notice your Redux store is bloated with too much temporary UI state. What’s your plan to refactor?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Move UI‑specific state (modals, spinners, form errors) to component‑level state (<code>useState</code>) or Context.</li>
            <li>Keep Redux for shared/business‑critical data (auth, user, cart, theme).</li>
            <li>Split reducers into domains and use selectors to avoid tight coupling.</li>
            <li>Possibly use Zustand or Recoil for isolated state slices.</li>
          </ul>
        </div>
        <div><strong>20. Scenario: A client wants the app to support code push (OTA updates). What are the challenges and how do you implement it?</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Use Microsoft CodePush or Expo Updates.</li>
            <li>Ensure no sensitive logic or API keys are exposed in JS bundle.</li>
            <li>Prepare for version conflicts — native changes require App Store/Play Store updates.</li>
            <li>Plan for rollback in case of bad deployment.</li>
            <li>Track app version and update logs to ensure visibility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}