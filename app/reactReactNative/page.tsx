// /app/ReactReactNative/page.tsx
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

  const scenarios = [
    {
      "id": 1,
      "scenario": "Your app crashes only in the Android release build, not in debug. What steps do you take?",
      "answer": "This typically points to ProGuard or missing native configurations.\n\n**Steps to debug:**\n1. Check `proguard-rules.pro` – many libraries need explicit rules. Example for Firebase:\n   ```\n   -keep class com.google.firebase.** { *; }\n   ```\n2. Enable crash logging for release builds using `adb logcat`:\n   ```bash\n   adb logcat | grep -i \"AndroidRuntime\"\n   ```\n3. Integrate Firebase Crashlytics to capture release crashes automatically.\n4. Temporarily disable minification to isolate the issue:\n   ```gradle\n   buildTypes {\n       release {\n           minifyEnabled false\n           shrinkResources false\n           proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n       }\n   }\n   ```\n5. Once identified, add missing keep rules and re‑enable minification."
    },
    {
      "id": 2,
      "scenario": "You need to support a 5‑step onboarding flow with conditional navigation based on user input. How would you structure it?",
      "answer": "Use `react-navigation` with a stack navigator dedicated to onboarding.\n\n**Implementation plan:**\n- Create an `OnboardingContext` to share user choices across steps.\n- After each step, decide the next screen conditionally.\n- Store `hasOnboarded` in `AsyncStorage` after completion.\n\n**Code example:**\n```javascript\n// OnboardingContext.js\nconst OnboardingContext = React.createContext();\n\nexport const OnboardingProvider = ({ children }) => {\n  const [data, setData] = useState({});\n  const saveAndNavigate = (stepData, nextScreen) => {\n    setData({ ...data, ...stepData });\n    navigation.navigate(nextScreen);\n  };\n  // ...\n};\n\n// In Step1 component\nconst { saveAndNavigate } = useContext(OnboardingContext);\nconst onNext = () => {\n  if (userInput === 'business') saveAndNavigate({ type: 'business' }, 'BusinessStep');\n  else saveAndNavigate({ type: 'personal' }, 'PersonalStep');\n};\n```"
    },
    {
      "id": 3,
      "scenario": "You notice memory leaks when modals are opened and closed repeatedly. What’s your approach?",
      "answer": "Memory leaks in modals often come from uncleaned subscriptions, timers, or event listeners.\n\n**Diagnosis:** Use React DevTools Profiler or Flipper to track retained objects.\n\n**Fix with cleanup functions:**\n```javascript\nuseEffect(() => {\n  const subscription = someEventEmitter.addListener('event', handler);\n  const interval = setInterval(() => {}, 1000);\n\n  return () => {\n    subscription.remove();\n    clearInterval(interval);\n  };\n}, []);\n```\n**Additional tips:**\n- Avoid storing large objects in state that outlives the modal.\n- Use `React.memo` on heavy list items.\n- Ensure animations are cancelled in cleanup (`stopAnimation`)."
    },
    {
      "id": 4,
      "scenario": "You have to store tokens and user data securely. How do you handle it?",
      "answer": "Sensitive data must never go into `AsyncStorage` (unencrypted).\n\n**Secure storage options:**\n- iOS/Android: `react-native-keychain`\n- Expo: `expo-secure-store`\n\n**Implementation:**\n```javascript\nimport * as Keychain from 'react-native-keychain';\n\n// Store token\nawait Keychain.setGenericPassword('auth', accessToken, {\n  service: 'com.myapp.auth',\n});\n\n// Retrieve token\nconst credentials = await Keychain.getGenericPassword();\nconst token = credentials ? credentials.password : null;\n\n// On logout\nawait Keychain.resetGenericPassword();\n```\n**Token rotation:** Intercept 401 responses, use refresh token to obtain new access token, and update secure storage."
    },
    {
      "id": 5,
      "scenario": "You need real‑time updates in a chat app. What’s your stack and how do you handle it?",
      "answer": "**Stack options:**\n- WebSockets with `socket.io-client`\n- Firebase Realtime Database / Firestore\n- GraphQL subscriptions (Apollo)\n\n**Example using Socket.io:**\n```javascript\nimport io from 'socket.io-client';\n\nconst useChatSocket = () => {\n  const socketRef = useRef(null);\n\n  useEffect(() => {\n    socketRef.current = io('https://api.myapp.com', {\n      transports: ['websocket'],\n    });\n\n    socketRef.current.on('new_message', (msg) => {\n      // update state / Redux store\n    });\n\n    return () => socketRef.current.disconnect();\n  }, []);\n\n  const sendMessage = (text) => {\n    socketRef.current.emit('send_message', { text, timestamp: Date.now() });\n  };\n\n  return { sendMessage };\n};\n```\n**Performance:** Debounce typing indicators, limit message history, and use `FlatList` with inverted layout."
    },
    {
      "id": 6,
      "scenario": "Your feed screen with videos/images drops frames while scrolling. How do you fix it?",
      "answer": "**Optimizations for `FlatList`:**\n```jsx\n<FlatList\n  data={items}\n  renderItem={({ item }) => <ListItem data={item} />}\n  windowSize={5}\n  removeClippedSubviews={true}\n  initialNumToRender={4}\n  maxToRenderPerBatch={5}\n  updateCellsBatchingPeriod={50}\n/>\n```\n**Image loading:** Use `react-native-fast-image` instead of `Image`:\n```jsx\nimport FastImage from 'react-native-fast-image';\n\n<FastImage\n  source={{ uri: item.url, priority: FastImage.priority.normal }}\n  resizeMode={FastImage.resizeMode.cover}\n/>\n```\n**Video:** Use `react-native-video` with `paused` prop controlled by viewability.\n```javascript\nconst onViewableItemsChanged = ({ viewableItems }) => {\n  const visibleId = viewableItems[0]?.item.id;\n  setPlayingId(visibleId);\n};\n```"
    },
    {
      "id": 7,
      "scenario": "You need to support dark mode and runtime theme switching across 100+ components. What’s your approach?",
      "answer": "**Theme provider using Context:**\n```javascript\nconst ThemeContext = React.createContext();\n\nexport const themes = {\n  light: {\n    background: '#fff',\n    text: '#000',\n    primary: '#2563eb',\n  },\n  dark: {\n    background: '#121212',\n    text: '#fff',\n    primary: '#3b82f6',\n  },\n};\n\nexport const ThemeProvider = ({ children }) => {\n  const [theme, setTheme] = useState('light');\n  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');\n\n  useEffect(() => {\n    AsyncStorage.setItem('theme', theme);\n  }, [theme]);\n\n  return (\n    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n};\n\n// Usage in component\nconst MyComponent = () => {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return <View style={{ backgroundColor: theme.background }} />;\n};\n```\n**Alternative:** Use `styled-components` with theme provider."
    },
    {
      "id": 8,
      "scenario": "You need to scale your React Native app in a monorepo for multiple teams. How would you set it up?",
      "answer": "**Tooling:** Turborepo, Nx, or Lerna.\n\n**Folder structure:**\n```\nmonorepo/\n  packages/\n    mobile/          # React Native app\n    shared-ui/       # reusable components\n    shared-hooks/    # custom hooks\n    shared-utils/    # helpers, API clients\n    configs/         # ESLint, TS, Metro configs\n```\n**Example `turbo.json`:**\n```json\n{\n  \"pipeline\": {\n    \"build\": {\n      \"dependsOn\": [\"^build\"],\n      \"outputs\": [\"dist/**\"]\n    },\n    \"test\": {\n      \"dependsOn\": [\"build\"]\n    }\n  }\n}\n```\n**Aliases in `metro.config.js`:**\n```javascript\nconst path = require('path');\n\nmodule.exports = {\n  resolver: {\n    extraNodeModules: {\n      '@shared/ui': path.resolve(__dirname, '../shared-ui/src'),\n    },\n  },\n};\n```\n**CI:** Use `turbo run test --filter=...` to test only changed packages."
    },
    {
      "id": 9,
      "scenario": "Push notifications work on Android but silently fail on iOS. How do you debug this?",
      "answer": "**Common iOS issues & fixes:**\n\n1. **APNs configuration** – Ensure APNs key (.p8) is uploaded to Firebase Console.\n2. **Capabilities** – In Xcode, enable:\n   - Push Notifications\n   - Background Modes → Remote notifications\n3. **Device token registration** – Log the token and errors:\n```javascript\nimport messaging from '@react-native-firebase/messaging';\n\nasync function requestUserPermission() {\n  const authStatus = await messaging().requestPermission();\n  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED;\n  if (enabled) {\n    const token = await messaging().getToken();\n    console.log('FCM token', token);\n  }\n}\n\n// Listen to registration errors\nmessaging().onTokenRefresh(token => console.log('New token', token));\n```\n4. **Test with direct APNs payload** using tools like `pusher` or `curl`:\n```bash\ncurl -v -H \"apns-topic: com.myapp.bundle\" -H \"authorization: bearer $JWT\" --data '{\"aps\":{\"alert\":\"test\"}}' https://api.push.apple.com/3/device/$DEVICE_TOKEN\n```"
    },
    {
      "id": 10,
      "scenario": "You need to support both deep links and universal links. What are the steps?",
      "answer": "**Configuration using `react-navigation`:**\n\n```javascript\nconst linking = {\n  prefixes: ['myapp://', 'https://myapp.com', 'https://www.myapp.com'],\n  config: {\n    screens: {\n      Home: '',\n      Profile: 'user/:id',\n      Settings: 'settings',\n      Product: 'product/:sku',\n    },\n  },\n};\n\nreturn <NavigationContainer linking={linking}>{/* ... */}</NavigationContainer>;\n```\n**Android – `AndroidManifest.xml`:**\n```xml\n<intent-filter>\n  <action android:name=\"android.intent.action.VIEW\" />\n  <category android:name=\"android.intent.category.DEFAULT\" />\n  <category android:name=\"android.intent.category.BROWSABLE\" />\n  <data android:scheme=\"myapp\" android:host=\"open\" />\n  <data android:scheme=\"https\" android:host=\"myapp.com\" />\n</intent-filter>\n```\n**iOS – `apple-app-site-association`** hosted at `https://myapp.com/.well-known/apple-app-site-association`:\n```json\n{\n  \"applinks\": {\n    \"apps\": [],\n    \"details\": [\n      {\n        \"appID\": \"TEAMID.com.myapp\",\n        \"paths\": [\"*\", \"!/exclude/*\"]\n      }\n    ]\n  }\n}\n```\n**Handle incoming links manually:**\n```javascript\nuseEffect(() => {\n  const subscription = Linking.addEventListener('url', ({ url }) => {\n    const route = parseURL(url);\n    navigation.navigate(route.screen, route.params);\n  });\n  return () => subscription.remove();\n}, []);\n```"
    },
    {
      "id": 11,
      "scenario": "You’re asked to migrate an existing app from React Native CLI to Expo. What considerations and challenges do you foresee?",
      "answer": "**Considerations:**\n- Expo’s **managed workflow** does not support all native modules (e.g., custom native code). Use **bare workflow** if you have unsupported dependencies.\n- Expo Go can only run modules that are part of Expo SDK. For custom native modules you must use **development builds**.\n\n**Challenges & solutions:**\n1. **Migrating native configs** – Move `AndroidManifest.xml` and `Info.plist` settings into `app.json`:\n```json\n{\n  \"expo\": {\n    \"android\": {\n      \"permissions\": [\"CAMERA\"],\n      \"intentFilters\": [...]\n    },\n    \"ios\": {\n      \"bundleIdentifier\": \"com.myapp\",\n      \"googleServicesFile\": \"./GoogleService-Info.plist\"\n    }\n  }\n}\n```\n2. **CI/CD** – Switch from custom Fastlane scripts to **EAS Build**.\n3. **OTA updates** – Use `expo-updates` instead of CodePush.\n4. **Risk of ejecting** – If you later need a library that is incompatible, you might have to eject to bare workflow, losing some Expo conveniences.\n\n**Migration steps:**\n```bash\nnpx expo init --template bare-minimum\n# copy source files, install dependencies, then adjust imports\n```"
    },
    {
      "id": 12,
      "scenario": "Your Android app crashes on certain devices with lower RAM during image‑heavy flows. How do you approach it?",
      "answer": "**Memory profiling:** Use Android Profiler (Android Studio) to monitor heap usage.\n\n**Solutions:**\n1. **Use `react-native-fast-image`** which caches and downscales images automatically.\n2. **Downscale at source** – Request smaller image size from API.\n```javascript\nconst imageUrl = `${baseUrl}/image.jpg?w=300&h=300&fit=crop`;\n```\n3. **Lazy load in `FlatList`** – Only render visible items using `windowSize` and `removeClippedSubviews`.\n4. **Clear cache manually** when leaving screen:\n```javascript\nimport { Image } from 'react-native';\nImage.queryCache?.(urls).then(() => Image.clearCache?.(urls));\n```\n5. **Implement `onEndReached` pagination** to avoid loading all images at once.\n6. **Use `Image.getSize`** to determine if downscaling is needed client-side:\n```javascript\nImage.getSize(uri, (width, height) => {\n  if (width > 1000) {\n    // load lower resolution version\n  }\n});\n```"
    },
    {
      "id": 13,
      "scenario": "You need to support biometric authentication (FaceID/Fingerprint) in the app. What is your implementation plan?",
      "answer": "**Library:** `react-native-keychain` or `expo-local-authentication`.\n\n**Implementation steps:**\n1. **Check biometric availability:**\n```javascript\nimport * as LocalAuthentication from 'expo-local-authentication';\n\nconst isBiometricSupported = async () => {\n  const hasHardware = await LocalAuthentication.hasHardwareAsync();\n  const isEnrolled = await LocalAuthentication.isEnrolledAsync();\n  return hasHardware && isEnrolled;\n};\n```\n2. **Authenticate before accessing sensitive content:**\n```javascript\nconst authenticate = async () => {\n  const result = await LocalAuthentication.authenticateAsync({\n    promptMessage: 'Log in with biometrics',\n    fallbackLabel: 'Use PIN',\n  });\n  if (result.success) {\n    // grant access, fetch token from secure storage\n  } else {\n    // fallback to PIN/password\n  }\n};\n```\n3. **Securely store tokens after biometric success:**\n```javascript\nimport * as Keychain from 'react-native-keychain';\nawait Keychain.setGenericPassword('user', token, { accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY });\n```\n4. **Handle rejection gracefully** – Offer alternative login method and never force biometrics without fallback."
    },
    {
      "id": 14,
      "scenario": "A third‑party SDK is not working with React Native. It only supports native platforms. What do you do?",
      "answer": "**Create a Native Module wrapper.**\n\n**Android example:**\n```java\n// MySDKModule.java\npackage com.myapp;\n\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReactContextBaseJavaModule;\nimport com.facebook.react.bridge.ReactMethod;\nimport com.facebook.react.bridge.Promise;\n\npublic class MySDKModule extends ReactContextBaseJavaModule {\n  MySDKModule(ReactApplicationContext context) { super(context); }\n\n  @Override\n  public String getName() { return \"MySDKModule\"; }\n\n  @ReactMethod\n  public void initialize(String apiKey, Promise promise) {\n    try {\n      ThirdPartySDK.init(apiKey);\n      promise.resolve(true);\n    } catch (Exception e) {\n      promise.reject(\"INIT_ERROR\", e);\n    }\n  }\n}\n```\n**Register module:**\n```java\n// MainApplication.java\nimport com.myapp.MySDKModule;\n...\n@Override\npublic List<ReactPackage> getPackages() {\n  return Arrays.asList(\n    new MainReactPackage(),\n    new ReactPackage() {\n      @Override\n      public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {\n        return Arrays.asList(new MySDKModule(reactContext));\n      }\n      // ... other overrides\n    }\n  );\n}\n```\n**JS usage:**\n```javascript\nimport { NativeModules } from 'react-native';\nconst { MySDKModule } = NativeModules;\n\nMySDKModule.initialize('api-key-here')\n  .then(() => console.log('SDK ready'))\n  .catch(err => console.error(err));\n```\n**For UI components** use `requireNativeComponent`."
    },
    {
      "id": 15,
      "scenario": "Your app has an AsyncStorage migration issue after an update. Some users report data loss. How do you handle it?",
      "answer": "**Implement versioned storage with migration logic.**\n\n**Step 1: Store current version on first launch**\n```javascript\nconst STORAGE_VERSION_KEY = '@app/storage_version';\nconst CURRENT_VERSION = 2;\n\nasync function checkAndMigrate() {\n  const storedVersion = await AsyncStorage.getItem(STORAGE_VERSION_KEY);\n  if (!storedVersion) {\n    // fresh install, set version\n    await AsyncStorage.setItem(STORAGE_VERSION_KEY, String(CURRENT_VERSION));\n    return;\n  }\n  const version = parseInt(storedVersion, 10);\n  if (version < CURRENT_VERSION) {\n    await runMigrations(version);\n    await AsyncStorage.setItem(STORAGE_VERSION_KEY, String(CURRENT_VERSION));\n  }\n}\n```\n**Step 2: Migration functions**\n```javascript\nasync function runMigrations(fromVersion) {\n  if (fromVersion === 1) {\n    // migrate old user data structure\n    const oldUser = await AsyncStorage.getItem('user');\n    if (oldUser) {\n      const parsed = JSON.parse(oldUser);\n      // new schema: add emailVerified field\n      const newUser = { ...parsed, emailVerified: false };\n      await AsyncStorage.setItem('user', JSON.stringify(newUser));\n    }\n    // remove deprecated keys\n    await AsyncStorage.removeItem('old_preferences');\n  }\n  // future migrations can be chained\n}\n```\n**Step 3: Backup before migration**\n```javascript\nconst backup = await AsyncStorage.getItem('user');\nawait AsyncStorage.setItem('user_backup_v1', backup);\n```\n**Prevention:** Avoid direct key collisions by using a prefix per feature, and never assume old keys remain unchanged."
    },
    {
      "id": 16,
      "scenario": "You’re implementing deep links with custom domains. Links work on Android but not on iOS. What might be wrong?",
      "answer": "**Most likely: iOS Universal Links require proper `apple-app-site-association` file and entitlements.**\n\n**Debug checklist for iOS:**\n\n1. **Validate `apple-app-site-association`** – Must be served over HTTPS at `https://yourdomain.com/.well-known/apple-app-site-association` with correct MIME type `application/json`. Test with:\n```bash\ncurl -v https://yourdomain.com/.well-known/apple-app-site-association\n```\n\n2. **File content example:**\n```json\n{\n  \"applinks\": {\n    \"apps\": [],\n    \"details\": [\n      {\n        \"appID\": \"ABCDE12345.com.myapp\",\n        \"paths\": [\"*\", \"!/exclude/*\"]\n      }\n    ]\n  }\n}\n```\nReplace `ABCDE12345` with your Team ID (from Apple Developer).\n\n3. **Xcode entitlements** – Enable **Associated Domains** and add:\n```\napplinks:yourdomain.com\n```\n\n4. **App ID configuration** – In Apple Developer Portal, ensure your App ID has **Associated Domains** capability enabled.\n\n5. **Test using Safari** – Enter a deep link in Safari; if it opens the app, universal link works. If not, check logs on device:\n```bash\nidevicesyslog | grep -i \"swcd\"\n```\n\n6. **HTTPS requirement** – iOS rejects HTTP links; enforce HTTPS on your domain."
    },
    {
      "id": 17,
      "scenario": "You must write tests for a component using camera access. How do you do it?",
      "answer": "**Mock the camera module to avoid native errors in unit tests.**\n\n**Using Jest:**\n```javascript\n// __mocks__/react-native-camera.js\nexport default {\n  RNCamera: {\n    Constants: {\n      Aspect: { fill: 'fill' },\n    },\n  },\n};\n\n// In your test file\njest.mock('react-native-camera', () => ({\n  RNCamera: 'RNCamera',\n  useCameraDevices: () => ({\n    back: { deviceId: 'back-camera' },\n  }),\n}));\n```\n\n**Testing component logic (not actual camera):**\n```javascript\nimport { render, fireEvent } from '@testing-library/react-native';\nimport CameraScreen from '../CameraScreen';\n\ndescribe('CameraScreen', () => {\n  it('calls onCapture when button pressed', () => {\n    const mockOnCapture = jest.fn();\n    const { getByTestId } = render(<CameraScreen onCapture={mockOnCapture} />);\n    fireEvent.press(getByTestId('capture-button'));\n    expect(mockOnCapture).toHaveBeenCalled();\n  });\n});\n```\n\n**E2E testing with Detox:** Mock the camera by using a test build that replaces the camera feed with a static image or skips permission prompts.\n```javascript\n// detox config for CI\nawait device.launchApp({ permissions: { camera: 'YES' } });\n```\nFor real camera testing, use physical devices and tools like `Appium` with image comparison."
    },
    {
      "id": 18,
      "scenario": "You need to support RTL (Right‑to‑Left) languages like Arabic or Hebrew. What changes are needed?",
      "answer": "**1. Enable RTL in React Native:**\n```javascript\nimport { I18nManager } from 'react-native';\n\n// In your root component or after detecting language\nI18nManager.allowRTL(true);\nI18nManager.forceRTL(true);  // if you want to enforce for RTL languages\n```\n\n**2. Update styles – use `start` / `end` instead of `left` / `right`:**\n```javascript\n// Instead of\nconst styles = StyleSheet.create({\n  container: { paddingLeft: 16, marginRight: 8 },\n});\n\n// Use\nconst styles = StyleSheet.create({\n  container: { paddingStart: 16, marginEnd: 8 },\n});\n```\n**For `flexDirection`**, use `row` (default) which respects RTL. Avoid hardcoded `row-reverse`.\n\n**3. Text alignment:**\n```jsx\n<Text style={{ textAlign: I18nManager.isRTL ? 'right' : 'left' }}>\n  {translatedText}\n</Text>\n```\n\n**4. Internationalization (i18n):**\n```javascript\nimport i18n from 'i18n-js';\ni18n.translations = {\n  ar: { welcome: 'مرحبا' },\n  en: { welcome: 'Welcome' },\n};\ni18n.locale = 'ar';  // or detect from device\n```\n\n**5. Handle custom components** (e.g., sliders, icons):\n```jsx\n<Icon name=\"arrow-back\" style={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }} />\n```\n\n**6. Test** with RTL layout in debug menu (Dev Settings → \"Force RTL layout direction\")."
    },
    {
      "id": 19,
      "scenario": "You notice your Redux store is bloated with too much temporary UI state. What’s your plan to refactor?",
      "answer": "**Refactor strategy: Move UI state out of Redux into component state or Context.**\n\n**Identify UI state:** Modal visibility, loading spinners, form input values, dropdown open/close, validation errors.\n\n**Solutions:**\n\n1. **Use `useState` for component‑local UI state:**\n```javascript\nconst [isModalVisible, setModalVisible] = useState(false);\nconst [formData, setFormData] = useState({});\n```\n\n2. **Use Context API for shared UI state across few components:**\n```javascript\nconst UIContext = createContext();\n// Provide state like activeTab, sidebarOpen, etc.\n```\n\n3. **Leverage Redux Toolkit's slices only for business data:**\n```javascript\n// Before: massive store\nstate.ui.loading = true;\nstate.ui.modalOpen = true;\nstate.ui.currentStep = 2;\n\n// After: move to local state; Redux only holds:\nstate.auth = { user, token };\nstate.products = { list, filters, pagination };\nstate.cart = { items, total };\n```\n\n4. **Use selectors to decouple shape:**\n```javascript\nconst selectCartTotal = (state) => state.cart.items.reduce((sum, i) => sum + i.price, 0);\n```\n\n5. **Alternative state management for UI:** Zustand or Recoil, which are simpler for local and shared UI state without boilerplate.\n\n**Example migration from Redux to `useState`:**\n```diff\n- const dispatch = useDispatch();\n- const isSubmitting = useSelector(state => state.ui.isSubmitting);\n+ const [isSubmitting, setIsSubmitting] = useState(false);\n```"
    },
    {
      "id": 20,
      "scenario": "A client wants the app to support code push (OTA updates). What are the challenges and how do you implement it?",
      "answer": "**Implementation using CodePush (Microsoft) or Expo Updates.**\n\n**CodePush setup (React Native CLI):**\n```bash\nnpm install react-native-code-push\ncd ios && pod install\n```\n\n**Wrap root component:**\n```javascript\nimport codePush from 'react-native-code-push';\n\nconst App = () => { /* ... */ };\n\nexport default codePush({\n  checkFrequency: codePush.CheckFrequency.ON_APP_START,\n  installMode: codePush.InstallMode.ON_NEXT_RESUME,\n})(App);\n```\n\n**Deploy update:**\n```bash\nappcenter codepush release-react -a <owner>/<app> -d Production\n```\n\n**Expo Updates (Expo managed workflow):**\n```json\n// app.json\n{\n  \"expo\": {\n    \"updates\": {\n      \"enabled\": true,\n      \"fallbackToCacheTimeout\": 0,\n      \"url\": \"https://u.expo.dev/your-project-id\"\n    }\n  }\n}\n```\n\n**Challenges & mitigations:**\n- **Native changes require store updates** – OTA cannot change native code (iOS/Android specific code, permissions, new libraries). Always include version check in JS to prevent mismatches.\n- **Rollback strategy** – Use deployment history to revert bad updates:\n  ```bash\n  appcenter codepush rollback <app> Production\n  ```\n- **Security** – Never include API keys or secrets in the JS bundle; use environment variables that are replaced at build time (not OTA).\n- **Version conflicts** – Check native app version before applying OTA:\n  ```javascript\n  const nativeVersion = NativeModules.RNDeviceInfo.appVersion;\n  if (nativeVersion !== expectedVersion) {\n    codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });\n  }\n  ```\n- **Analytics** – Track update success/failure with custom events."
    }
  ];

  // Helper function to convert markdown bold/italic and inline code to HTML
  const formatInlineMarkdown = (text: string): string => {
    let result = text;
    // Bold: **text**
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic: *text*
    result = result.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code: `text`
    result = result.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-rose-600 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
    return result;
  };

  const renderAnswerWithCode = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('```')) {
        const codeMatch = part.match(/```(?:\w+)?\n([\s\S]*?)```/);
        if (codeMatch) {
          const code = codeMatch[1];
          return (
            <pre key={idx} className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs my-3">
              <code>{code}</code>
            </pre>
          );
        }
        return null;
      }
      const paragraphs = part.split(/\n\s*\n/);
      return paragraphs.map((para, pIdx) => {
        if (!para.trim()) return null;
        const formattedHtml = formatInlineMarkdown(para);
        const withBreaks = formattedHtml.replace(/\n/g, '<br/>');
        return (
          <p
            key={`${idx}-${pIdx}`}
            className="mb-3 text-gray-600 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: withBreaks }}
          />
        );
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-5xl">⚛️</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            React + React Native Interview Questions
          </h1>
          <p className="text-lg md:text-2xl text-cyan-100 max-w-3xl mx-auto">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">React Fundamentals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reactBasics.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4">
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

        {/* React Hooks Table */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">React Hooks – Complete Reference</h2>
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
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2 text-sm font-mono text-gray-800 border-t">{item.hook}</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-t">{item.purpose}</td>
                    <td className="px-4 py-2 text-sm font-mono text-gray-600 border-t">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional React Concepts */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-12">
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
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-12">
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
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-12">
            <h3 className="font-bold text-gray-800">21-23. Performance & useEffect vs useLayoutEffect</h3>
            <p className="text-gray-600 text-sm mt-1">Optimize with React.memo, useMemo, useCallback, React.lazy. useEffect runs after paint, useLayoutEffect runs before paint (synchronous).</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">React Native Fundamentals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reactNativeBasics.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4">
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

        {/* Core Components Table */}
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
                <tr className="bg-white"><td className="px-3 py-2 border-t">View</td><td className="px-3 py-2 border-t">ViewGroup</td><td className="px-3 py-2 border-t">UIView</td><td className="px-3 py-2 border-t">div</td><td className="px-3 py-2 border-t">Container</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-2 border-t">Text</td><td className="px-3 py-2 border-t">TextView</td><td className="px-3 py-2 border-t">UILabel</td><td className="px-3 py-2 border-t">span</td><td className="px-3 py-2 border-t">Text</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 border-t">Image</td><td className="px-3 py-2 border-t">ImageView</td><td className="px-3 py-2 border-t">UIImageView</td><td className="px-3 py-2 border-t">img</td><td className="px-3 py-2 border-t">Image</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-2 border-t">ScrollView</td><td className="px-3 py-2 border-t">ScrollView</td><td className="px-3 py-2 border-t">UIScrollView</td><td className="px-3 py-2 border-t">div</td><td className="px-3 py-2 border-t">Scrollable container</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 border-t">FlatList</td><td className="px-3 py-2 border-t">RecyclerView</td><td className="px-3 py-2 border-t">UITableView</td><td className="px-3 py-2 border-t">ul</td><td className="px-3 py-2 border-t">Performant list</td></tr>
                <tr className="bg-gray-50"><td className="px-3 py-2 border-t">TouchableOpacity</td><td className="px-3 py-2 border-t">Button</td><td className="px-3 py-2 border-t">UIButton</td><td className="px-3 py-2 border-t">a</td><td className="px-3 py-2 border-t">Touch interactions</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 border-t">TextInput</td><td className="px-3 py-2 border-t">EditText</td><td className="px-3 py-2 border-t">UITextField</td><td className="px-3 py-2 border-t">input</td><td className="px-3 py-2 border-t">Text input</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Threads Image */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Threads in React Native</h3>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <Image src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/163/original/Image-2.png?1615801411" alt="Threads in React Native" width={500} height={300} className="rounded-lg mb-3 w-full h-auto" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Performance & Optimization</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">App Publishing Process</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Debugging Tools</h2>
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

        {/* Advanced Scenario-Based Questions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Advanced Scenario‑Based Questions</h2>
          </div>
          <div className="space-y-6 p-4 md:p-6 bg-gray-50 rounded-xl">
            {scenarios.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-indigo-100 text-indigo-700 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">{item.id}</span>
                  <h3 className="font-bold text-gray-800 text-lg">{item.scenario}</h3>
                </div>
                <div className="prose prose-sm max-w-none">
                  {renderAnswerWithCode(item.answer)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* React Native Core Technologies Table */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">React Native Core Technologies</h2>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Technology</th>
                  <th className="px-3 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-3 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Purpose</th>
                  <th className="px-3 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Where It Works</th>
                  <th className="px-3 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Key Features</th>
                  <th className="px-3 py-3 text-left text-xs md:text-sm font-semibold text-gray-700">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm font-mono text-gray-800 border-t">Fabric</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Rendering System</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Modern rendering layer</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Native (iOS/Android)</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Synchronous rendering, concurrent UI updates</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Replaces bridge-based UI; improves performance</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-3 py-2 text-sm font-mono text-gray-800 border-t">Watchman</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">File System Monitor</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Watches file changes</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Dev environment</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Fast file watching, rebuild triggers</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Speeds up Metro reloads, improves dev experience</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-3 py-2 text-sm font-mono text-gray-800 border-t">Yoga</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Layout Engine</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Cross-platform Flexbox layout</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">C/C++ core (iOS/Android)</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Deterministic layout, Flexbox implementation</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Ensures consistent UI across platforms</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-3 py-2 text-sm font-mono text-gray-800 border-t">Hermes</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">JavaScript Engine</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Runs JS for React Native apps</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">iOS & Android runtime</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Optimized bytecode, low memory, fast startup</td>
                  <td className="px-3 py-2 text-sm text-gray-600 border-t">Improves startup speed & reduces memory</td>
                </tr>
              </tbody>
            </table>
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