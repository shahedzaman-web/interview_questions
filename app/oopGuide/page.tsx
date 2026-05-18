import React from "react";

export default function OOPGuide() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        📘 Object‑Oriented Programming in JavaScript
      </h2>
      <p>Object-Oriented Programming (OOP) in JavaScript is a programming paradigm based on objects that contain data (properties) and behavior (methods). It helps organize code in a reusable and modular way.</p>
      <ul className="list-disc list-inside ml-4 my-3">
        <li>Uses objects and prototypes/classes to structure code logically.</li>
        <li>Supports key concepts like encapsulation, inheritance, and polymorphism.</li>
        <li>Improves code reusability, scalability, and maintainability.</li>
      </ul>
      <p><strong>Purpose of OOP:</strong> Before OOP, when code size grows, problems arise: changes break other code, many parameters, difficult maintenance, limited reusability, not scalable.</p>
      <p>OOP solves these by combining data and functions into a single unit called an object.</p>
      <ul className="list-disc list-inside ml-4 my-3">
        <li>Encapsulation ensures one team can change data without breaking other teams' code.</li>
        <li>Inheritance ensures code reuse.</li>
        <li>Polymorphism allows objects to behave differently using the same interface.</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🧱 Core OOP Principles (The "Four Pillars")</h3>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Encapsulation</strong> – bundling data + methods, hiding internal state using private fields (#) or closures.</li>
        <li><strong>Abstraction</strong> – exposing only essential features, hiding complex internals.</li>
        <li><strong>Inheritance</strong> – child classes reuse and extend parent behaviour (<code className="bg-gray-200 px-1 rounded">extends</code>).</li>
        <li><strong>Polymorphism</strong> – same method name, different implementations (overriding).</li>
      </ul>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-3">💡 JavaScript uses <strong>prototypal inheritance</strong> under the hood – ES6 classes are syntactic sugar but make OOP more elegant.</div>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📦 Objects &amp; Classes – Blueprints &amp; Instances</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`// Object literal
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
dog.speak();   // Rex makes a sound`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🏗️ Constructor &amp; super() – Building Objects &amp; Calling Parent</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Vehicle {
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
console.log(yamaha.details());  // Yamaha Motorbike has 2 wheels`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🔒 Encapsulation: Public &amp; Private Fields (ES2022+)</h3>
      <p>Private fields are prefixed with <code className="bg-gray-200 px-1 rounded">#</code> – they are truly hidden, not accessible outside the class.</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class BankAccount {
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
console.log(acc.getBalance());  // Alice balance: $650`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🔧 Getters &amp; Setters – Controlled Access</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Product {
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
console.log(laptop.price);  // $1199.00`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🌳 Inheritance – <code className="bg-gray-200 px-1 rounded">extends</code> &amp; <code className="bg-gray-200 px-1 rounded">super</code> in depth</h3>
      <p>The capability of a class to derive properties and characteristics from another class is called Inheritance.</p>
      <ul className="list-disc list-inside ml-4">
        <li>Subclass: The class that inherits properties from another class is called subclass or derived class.</li>
        <li>Superclass: The class whose properties are inherited by a subclass is called Base Class or superclass.</li>
      </ul>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Parent {
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
console.log(kid.greet());`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🔄 Overriding vs Overloading</h3>
      <h4 className="font-semibold mt-2">✅ Overriding (supported naturally)</h4>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Bird { fly() { return "Flapping wings"; } }
class Ostrich extends Bird { fly() { return "Ostrich cannot fly but runs fast!"; } }
console.log(new Ostrich().fly());`}
      </pre>
      <h4 className="font-semibold mt-2">⚠️ Overloading (not natively supported – workarounds)</h4>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Calculator {
    add(...args) {
        if (args.length === 2) return args[0] + args[1];
        if (args.length === 1) return args[0] + 10;
        return 0;
    }
}
console.log(new Calculator().add(5, 10));    // 15`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🎭 Polymorphism – Same interface, different behavior</h3>
      <p>Polymorphism in JavaScript is an OOP concept where an object or method can take multiple forms and behave differently in different situations.</p>
      <ul className="list-disc list-inside ml-4">
        <li>Polymorphism allows the same method to perform different actions based on the object.</li>
        <li>It improves code reusability, flexibility, and maintainability.</li>
        <li>OOP concepts like classes, inheritance, encapsulation, abstraction, and polymorphism help build structured and scalable applications.</li>
      </ul>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Payment { pay(amount) { throw new Error("Method not implemented"); } }
class CreditCard extends Payment { pay(amount) { console.log(\`Paid $\${amount} using Credit Card\`); } }
class PayPal extends Payment { pay(amount) { console.log(\`Paid $\${amount} via PayPal\`); } }
function checkout(paymentMethod, total) { paymentMethod.pay(total); }
checkout(new CreditCard(), 99);`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">📁 Abstraction – Hide Implementation Details</h3>
      <p>Abstraction is one of the key features of object-oriented programming. It means showing only essential information and hiding unnecessary details from the user.</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class BetterArray {
    #items = [];
    add(item) { this.#items.push(item); }
    get items() { return [...this.#items]; }
    find(item) { return this.#items.includes(item) ? \`\${item} found\` : "Not found"; }
}
const arr = new BetterArray();
arr.add("apple");
console.log(arr.items);      // ['apple']`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">⚡ Static Properties &amp; Methods</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class MathHelper {
    static PI = 3.14159;
    static add(a, b) { return a + b; }
}
console.log(MathHelper.PI);     // 3.14159`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🔗 Prototype Chain – JavaScript’s DNA</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const parentObj = { greet: () => "Hello from parent" };
const childObj = Object.create(parentObj);
console.log(childObj.greet());   // "Hello from parent"`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🎨 Mixins – Composing Behaviors</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`const canFly = { fly() { console.log(\`\${this.name} is flying!\`); } };
class Duck { constructor(name) { this.name = name; } }
Object.assign(Duck.prototype, canFly);
const donald = new Duck("Donald");
donald.fly();`}
      </pre>

      <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-2">🚀 Complete OOP Example: Employee Management System</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-3 text-sm font-mono">
{`class Employee {
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
console.log(mgr.work());`}
      </pre>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-3">🎯 With this guide, you have mastered OOP in JavaScript: from prototypes to modern private fields, inheritance, polymorphism, and all the nuances.</div>
    </section>
  );
}