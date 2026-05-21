// /app/OOPGuide/page.tsx
import React from "react";

export default function OOPGuide() {
    const concepts = [
        {
            title: "🧱 Core OOP Principles",
            items: [
                {
                    name: "Encapsulation", desc: "bundling data + methods, hiding internal state using private fields (#) or closures.", p: "Encapsulation means wrapping data (variables) and methods (functions) together inside a single unit called a class and controlling access to the data. It protects the internal state of an object from direct modification.",
                    features: ["Data hiding", "Security", "Controlled access", "Better maintainability"]
                },
                {
                    name: "Abstraction", desc: "exposing only essential features, hiding complex internals.", p: "Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object. It allows developers to work with high-level interfaces without worrying about the underlying complexities.",
                    features: ["Simplicity", "Focus on what an object does rather than how it does it", "Improved code readability"]
                },
                {
                    name: "Inheritance", desc: "child classes reuse and extend parent behaviour (<code>extends</code>).", p: "Inheritance allows a new class (child) to inherit properties and methods from an existing class (parent). This promotes code reusability and establishes a natural hierarchical relationship between classes.",
                    features: ["Code reuse", "Hierarchical classification", "Polymorphic behavior"]
                },
                {
                    name: "Polymorphism", desc: "same method name, different implementations (overriding).", p: "Polymorphism allows objects of different types to be treated as instances of the same type through a common interface. It enables a single interface to be used for a general class of actions.", features: ["Method overriding", "Dynamic dispatch", "Code flexibility"],

                },
            ],
        },
        {
            title: "📦 Objects & Classes",
            code: `// Object literal
const car = { brand: "Tesla", model: "Y", drive() { console.log("vroom"); } };

// Class definition
class Animal {
    constructor(name) {
        this.name = name;   // public field
    }
    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
}
const dog = new Animal("Rex");
dog.speak();   // Rex makes a sound`,
        },
        {
            title: "🏗️ Constructor & super()",
            code: `class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }
    info() {
        return \`\${this.type} has \${this.wheels} wheels\`;
    }
}

class Bike extends Vehicle {
    constructor(brand, type, wheels) {
        super(type, wheels);   // call parent constructor
        this.brand = brand;
    }
    details() {
        return \`\${this.brand} \${this.info()}\`;
    }
}
const yamaha = new Bike("Yamaha", "Motorbike", 2);
console.log(yamaha.details());  // Yamaha Motorbike has 2 wheels`,
        },
        {
            title: "🔒 Encapsulation: Public & Private Fields",
            note: "Private fields are prefixed with <code>#</code> – they are truly hidden, not accessible outside the class.",
            code: `class BankAccount {
    #balance = 0;          // private field
    #accountHolder;        // private

    constructor(holder, initialDeposit) {
        this.#accountHolder = holder;
        this.#balance = initialDeposit;
        this.publicNote = "Basic account";  // public field
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return \`💰 \${this.#accountHolder} balance: $\${this.#balance}\`;
    }
}

const acc = new BankAccount("Alice", 500);
acc.deposit(150);
console.log(acc.getBalance());  // Alice balance: $650`,
        },
        {
            title: "🔧 Getters & Setters – Controlled Access",
            code: `class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
    get price() { return \`$\${this._price.toFixed(2)}\`; }
    set price(newPrice) {
        if (newPrice < 0) throw new Error("Price cannot be negative");
        this._price = newPrice;
    }
}
const laptop = new Product("MacBook", 1299);
laptop.price = 1199;
console.log(laptop.price);  // $1199.00`,
        },
        {
            title: "🌳 Inheritance – extends & super",
            subtext: "Subclass inherits from superclass.",
            code: `class Parent {
    familyName = "Smith";
    constructor(firstName) { this.firstName = firstName; }
    greet() { return \`Hello, I'm \${this.firstName} \${this.familyName}\`; }
}
class Child extends Parent {
    constructor(firstName, age) {
        super(firstName);
        this.age = age;
    }
    greet() {
        return \`\${super.greet()} and I'm \${this.age} years old.\`;
    }
}
const kid = new Child("Emma", 12);
console.log(kid.greet());`,
        },
        {
            title: "🔄 Overriding vs Overloading",
            override: `class Bird { fly() { return "Flapping wings"; } }
class Ostrich extends Bird { fly() { return "Ostrich cannot fly but runs fast!"; } }
console.log(new Ostrich().fly());`,
            overload: `class Calculator {
    add(...args) {
        if (args.length === 2) return args[0] + args[1];
        if (args.length === 1) return args[0] + 10;
        return 0;
    }
}
console.log(new Calculator().add(5, 10));    // 15`,
        },
        {
            title: "🎭 Polymorphism – Same interface, different behavior",
            code: `class Payment { pay(amount) { throw new Error("Method not implemented"); } }
class CreditCard extends Payment { pay(amount) { console.log(\`Paid $\${amount} using Credit Card\`); } }
class PayPal extends Payment { pay(amount) { console.log(\`Paid $\${amount} via PayPal\`); } }
function checkout(paymentMethod, total) { paymentMethod.pay(total); }
checkout(new CreditCard(), 99);`,
        },
        {
            title: "📁 Abstraction – Hide Implementation Details",
            code: `class BetterArray {
    #items = [];
    add(item) { this.#items.push(item); }
    get items() { return [...this.#items]; }
    find(item) { return this.#items.includes(item) ? \`\${item} found\` : "Not found"; }
}
const arr = new BetterArray();
arr.add("apple");
console.log(arr.items);      // ['apple']`,
        },
        {
            title: "⚡ Static Properties & Methods",
            code: `class MathHelper {
    static PI = 3.14159;
    static add(a, b) { return a + b; }
}
console.log(MathHelper.PI);     // 3.14159`,
        },
        {
            title: "🔗 Prototype Chain – JavaScript’s DNA",
            code: `const parentObj = { greet: () => "Hello from parent" };
const childObj = Object.create(parentObj);
console.log(childObj.greet());   // "Hello from parent"`,
        },
        {
            title: "🎨 Mixins – Composing Behaviors",
            code: `const canFly = { fly() { console.log(\`\${this.name} is flying!\`); } };
class Duck { constructor(name) { this.name = name; } }
Object.assign(Duck.prototype, canFly);
const donald = new Duck("Donald");
donald.fly();`,
        },
        {
            title: "🚀 Complete OOP Example: Employee Management System",
            code: `class Employee {
    #salary;
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }
    get salary() { return \`$\${this.#salary}\`; }
    work() { return \`\${this.name} is working\`; }
}

class Manager extends Employee {
    constructor(name, id, salary, teamSize) {
        super(name, id, salary);
        this.teamSize = teamSize;
    }
    work() { return \`\${this.name} is managing \${this.teamSize} people\`; }
}

const mgr = new Manager("Bob", 202, 120000, 8);
console.log(mgr.work());`,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="text-5xl"> 📘 </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                        Object‑Oriented Programming in JavaScript
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Classes, prototypes, encapsulation, inheritance, polymorphism, and more
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Four Pillars</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">ES6 Classes</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Prototypes</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Private Fields</span>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Introduction Card */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10 border border-blue-100">
                    <div className="flex items-start gap-3">
                        <div className="text-3xl">📖</div>
                        <div>
                            <h2 className="font-bold text-xl text-blue-800 mb-2">What is OOP?</h2>
                            <p className="text-gray-700">Object-Oriented Programming (OOP) in JavaScript is a programming paradigm based on objects that contain data (properties) and behavior (methods). It helps organize code in a reusable and modular way.</p>
                            <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                                <li>Uses objects and prototypes/classes to structure code logically.</li>
                                <li>Supports key concepts like encapsulation, inheritance, and polymorphism.</li>
                                <li>Improves code reusability, scalability, and maintainability.</li>
                            </ul>
                            <p className="mt-2 text-gray-700"><strong>Purpose of OOP:</strong> Before OOP, when code size grows, problems arise: changes break other code, many parameters, difficult maintenance, limited reusability, not scalable. OOP solves these by combining data and functions into a single unit called an object.</p>
                        </div>
                    </div>
                </div>

                {/* Four Pillars Quick Reference */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="text-2xl mb-2">🔒</div>
                        <h3 className="font-bold text-blue-700">Encapsulation</h3>
                        <p className="text-sm text-gray-600">Bundle data + methods, hide internal state using private fields (#) or closures.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="text-2xl mb-2">📁</div>
                        <h3 className="font-bold text-blue-700">Abstraction</h3>
                        <p className="text-sm text-gray-600">Expose only essential features, hide complex internals.</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="text-2xl mb-2">🌳</div>
                        <h3 className="font-bold text-blue-700">Inheritance</h3>
                        <p className="text-sm text-gray-600">Child classes reuse and extend parent behaviour (<code>extends</code>).</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div className="text-2xl mb-2">🎭</div>
                        <h3 className="font-bold text-blue-700">Polymorphism</h3>
                        <p className="text-sm text-gray-600">Same method name, different implementations (overriding).</p>
                    </div>
                </div>

                {/* Concepts in Cards */}
                <div className="grid gap-6">
                    {concepts.map((concept, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{concept.title}</h3>

                                {concept.items && (
                                    <>
                                        <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700 mb-4">
                                            {concept.items.map((item, i) => (
                                                <li key={i}>
                                                    <strong>{item.name}</strong> – {item.desc}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Render features for each item that has them */}
                                        {concept.items.map((item, i) =>
                                            item.features && item.features.length > 0 ? (
                                                <div key={`features-${i}`} className="mb-4">
                                                    <h4 className="font-semibold text-lg mb-2">✨ {item.name} Features:</h4>
                                                    <ul className="list-disc list-inside ml-4 space-y-1 text-gray-700">
                                                        {item.features.map((feature, j) => (
                                                            <li key={j}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : null
                                        )}
                                    </>
                                )}

                                {concept.note && <p className="text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: concept.note }} />}
                                {concept.subtext && <p className="text-gray-700 mb-3 italic">{concept.subtext}</p>}
                                {concept.code && (
                                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono my-3">
                                        {concept.code}
                                    </pre>
                                )}

                                {concept.override && (
                                    <>
                                        <h4 className="font-semibold text-lg mt-3 mb-2">
                                            ✅ Overriding (supported naturally) – When a child class redefines a parent class method with the same name and parameters.
                                        </h4>
                                        <p className="text-gray-700 mb-2">
                                            Method overriding happens when a child class provides its own implementation of a method that already exists in the parent class.
                                        </p>
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono my-2">
                                            {concept.override}
                                        </pre>
                                        <h4 className="font-semibold text-lg mt-3 mb-2">
                                            ⚠️ Overloading (not natively supported – workarounds) – When multiple methods have the same name but different parameters.
                                        </h4>
                                        <p className="text-gray-700 mb-2">
                                            Method overloading is when multiple methods have the same name but different parameters. JavaScript does not support this natively, but you can achieve similar behavior using techniques like checking the number of arguments or using rest parameters.
                                        </p>
                                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono my-2">
                                            {concept.overload}
                                        </pre>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Special Note about Prototypal Inheritance */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                        <div className="text-3xl">💡</div>
                        <div>
                            <h3 className="font-bold text-lg text-blue-800">Prototypal Inheritance Under the Hood</h3>
                            <p className="text-gray-700">JavaScript uses <strong>prototypal inheritance</strong> – ES6 classes are syntactic sugar but make OOP more elegant. Every object has an internal <code>[[Prototype]]</code> link to another object (its prototype). Property lookups traverse the prototype chain.</p>
                        </div>
                    </div>
                </div>

                {/* Final Advice */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                        <div className="text-3xl">🎯</div>
                        <div>
                            <h3 className="font-bold text-lg text-blue-800">Master OOP in JavaScript</h3>
                            <p className="text-gray-700">With this guide, you have mastered OOP in JavaScript: from prototypes to modern private fields, inheritance, polymorphism, and all the nuances. Use these patterns to build scalable, maintainable applications.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}