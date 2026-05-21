// /app/DatabaseQuestions/page.tsx
import React from "react";

export default function DatabaseQuestions() {
    const dbmsBasics = [
        { q: "What is a Database Management System (DBMS)?", a: "A DBMS is software that manages and organizes databases, providing an interface to store, retrieve, and update data while ensuring integrity, security, and concurrency. Examples: MySQL, PostgreSQL, Oracle." },
        { q: "What are ACID properties?", a: "ACID stands for Atomicity (all‑or‑nothing), Consistency (valid state after transactions), Isolation (concurrent transactions don’t interfere), Durability (committed changes persist). They guarantee reliable transaction processing." },
        { q: "Explain normalization and its normal forms (1NF, 2NF, 3NF, BCNF).", a: "Normalization reduces redundancy and anomalies. 1NF: atomic values. 2NF: 1NF + no partial dependency. 3NF: 2NF + no transitive dependency. BCNF: stricter version where every determinant is a candidate key." },
        { q: "What is the difference between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN?", a: "<code>INNER JOIN</code> returns matching rows from both tables. <code>LEFT JOIN</code> returns all rows from the left table, with matches from the right (NULL if none). <code>FULL OUTER JOIN</code> returns all rows from both tables, with matches where available." },
        { q: "What are indexes and why are they important?", a: "Indexes speed up data retrieval by creating efficient data structures (e.g., B‑tree). They reduce the number of rows scanned but add overhead to writes." },
        { q: "Explain the difference between DELETE and TRUNCATE.", a: "<code>DELETE</code> removes rows one by one, logs each deletion, and can be rolled back. <code>TRUNCATE</code> removes all rows instantly, cannot be rolled back, and is faster." },
        { q: "What is a transaction and how do COMMIT/ROLLBACK work?", a: "A transaction is a unit of work. <code>COMMIT</code> saves changes permanently; <code>ROLLBACK</code> undoes changes. They ensure ACID properties." },
        { q: "What is the difference between a primary key and a unique key?", a: "Primary key uniquely identifies rows, cannot be NULL, and only one per table. Unique key also ensures uniqueness but allows NULL and multiple per table." },
        { q: "What is denormalization and when would you use it?", a: "Denormalization adds redundancy (e.g., duplicating columns) to improve read performance at the cost of write overhead. It is used in read‑heavy applications or data warehouses." },
        { q: "Explain foreign key and referential integrity.", a: "A foreign key links a column to the primary key of another table, ensuring that relationships remain consistent (no orphan records)." },
    ];

    const postgresAdvanced = [
        { q: "What is the WAL (Write‑Ahead Logging) in PostgreSQL?", a: "WAL records changes before they are written to the data files. It ensures durability and enables point‑in‑time recovery and replication." },
        { q: "How do you set up replication in PostgreSQL?", a: "Configure <code>wal_level = replica</code>, create a replication user, set up <code>pg_hba.conf</code> for replication connections, and on the standby create a <code>recovery.conf</code> with primary connection info." },
        { q: "What are the different index types in PostgreSQL?", a: "B‑tree (default), Hash, GiST (geometric/ full‑text), SP‑GiST (partitioned), GIN (full‑text, JSONB), BRIN (large ordered tables)." },
        { q: "Explain MVCC (Multi‑Version Concurrency Control) in PostgreSQL.", a: "MVCC allows multiple transactions to see a consistent snapshot without locking. Each transaction sees the database as of its start, using row versions (xmin/xmax)." },
        { q: "How do you optimize a slow query?", a: "Use <code>EXPLAIN ANALYZE</code> to see the query plan. Add appropriate indexes, avoid SELECT *, rewrite subqueries as joins, use partitioning, and ensure up‑to‑date statistics (<code>ANALYZE</code>)." },
        { q: "What is table partitioning and why use it?", a: "Partitioning splits a large table into smaller pieces (e.g., by date), improving query performance and maintenance (e.g., dropping old partitions)." },
        { q: "Explain JSONB vs JSON in PostgreSQL.", a: "<code>json</code> stores text, preserving formatting; <code>jsonb</code> stores binary, supports indexing and faster operations. Use <code>jsonb</code> for most use cases." },
        { q: "What is the purpose of VACUUM?", a: "<code>VACUUM</code> reclaims storage occupied by dead rows (from updates/deletions) and updates statistics. <code>VACUUM FULL</code> compacts the table but locks it." },
        { q: "How do you perform full‑text search in PostgreSQL?", a: "Use <code>tsvector</code> and <code>tsquery</code> types. Create a GIN index on a <code>tsvector</code> column and query with <code>@@ to_tsquery('search terms')</code>." },
        { q: "What are isolation levels in PostgreSQL?", a: "Read Uncommitted (same as Read Committed), Read Committed (default), Repeatable Read, Serializable. They control how transactions see concurrent changes." },
    ];

    const postgresQueries = [
        { q: "Find all employees who logged more than 30 hours on a single task.", code: "SELECT E.Name, T.TaskName, TL.HoursWorked\nFROM Employees E\nJOIN TimeLogs TL ON E.EmployeeID = TL.EmployeeID\nJOIN Tasks T ON TL.TaskID = T.TaskID\nWHERE TL.HoursWorked > 30;" },
        { q: "Calculate total hours worked by each employee.", code: "SELECT E.Name, SUM(TL.HoursWorked) AS TotalHoursWorked\nFROM Employees E\nJOIN TimeLogs TL ON E.EmployeeID = TL.EmployeeID\nGROUP BY E.Name;" },
        { q: "List departments where average salary > 75,000.", code: "SELECT D.DepartmentName, AVG(E.Salary) AS AvgSalary\nFROM Departments D\nJOIN Employees E ON D.DepartmentID = E.DepartmentID\nGROUP BY D.DepartmentName\nHAVING AVG(E.Salary) > 75000;" },
        { q: "Find projects with more than 2 tasks.", code: "SELECT P.ProjectName, COUNT(T.TaskID) AS TaskCount\nFROM Projects P\nJOIN Tasks T ON P.ProjectID = T.ProjectID\nGROUP BY P.ProjectName\nHAVING COUNT(T.TaskID) > 2;" },
        { q: "Employees who have never been assigned a task.", code: "SELECT E.Name\nFROM Employees E\nLEFT JOIN Tasks T ON E.EmployeeID = T.AssignedTo\nWHERE T.AssignedTo IS NULL;" },
    ];

    const mongodbBasics = [
        { q: "How does MongoDB differ from relational databases?", a: "MongoDB stores data in flexible JSON/BSON documents, has a schema‑less design, supports embedding, and scales horizontally via sharding – no joins or fixed schemas." },
        { q: "What are documents and collections?", a: "A document is a JSON‑like object (BSON) containing key‑value pairs. A collection is a group of documents, analogous to a table but without a fixed schema." },
        { q: "Explain indexing in MongoDB.", a: "Indexes improve query speed by creating efficient data structures. Use <code>createIndex(&#123; field: 1 &#125;)</code>. Compound, multikey (arrays), text, geospatial, and TTL indexes are supported." },
        { q: "What is sharding and when is it used?", a: "Sharding distributes data across multiple servers (shards) to handle large datasets and high throughput. It uses a shard key to partition data." },
        { q: "Difference between <code>aggregate()</code> and <code>find()</code>.", a: "<code>find()</code> returns documents matching a query. <code>aggregate()</code> runs a pipeline of stages (<code>$match</code>, <code>$group</code>, etc.) for complex data transformations and analytics." },
        { q: "How do transactions work in MongoDB?", a: "Multi‑document ACID transactions are supported from version 4.0 (replica sets) and 4.2 (sharded clusters). Use a session, <code>startTransaction()</code>, <code>commitTransaction()</code>, <code>abortTransaction()</code>." },
        { q: "What are TTL indexes?", a: "TTL (Time‑To‑Live) indexes automatically delete documents after a specified time. Useful for session data, logs, or temporary data." },
        { q: "Explain Change Streams.", a: "Change Streams allow real‑time notification of changes to data (insert, update, delete). They are used for reactive applications, events, and synchronization." },
        { q: "What is the Aggregation Framework?", a: "A pipeline‑based framework for data processing. Stages include <code>$match</code>, <code>$group</code>, <code>$project</code>, <code>$lookup</code> (similar to JOIN), <code>$unwind</code>, <code>$sort</code>, etc." },
        { q: "How does MongoDB ensure high availability?", a: "Using replica sets – a primary node receives writes, secondaries replicate the data. If the primary fails, an election promotes a new primary automatically." },
    ];

    const mongodbQueries = [
        { q: "Find all employees in the \"Engineering\" department.", code: "db.employees.find({ department: \"Engineering\" });" },
        { q: "Find the employee with the highest salary.", code: "db.employees.find().sort({ salary: -1 }).limit(1);" },
        { q: "Update salary of \"John Doe\" to 90000.", code: "db.employees.updateOne({ name: \"John Doe\" }, { $set: { salary: 90000 } });" },
        { q: "Count employees per department.", code: "db.employees.aggregate([{ $group: { _id: \"$department\", count: { $sum: 1 } } }]);" },
        { q: "Average salary of Engineering department.", code: "db.employees.aggregate([\n  { $match: { department: \"Engineering\" } },\n  { $group: { _id: null, avgSalary: { $avg: \"$salary\" } } }\n]);" },
    ];

    const prismaQuestions = [
        { q: "What is Prisma and how does it differ from other ORMs?", a: "Prisma is a next‑generation ORM with a type‑safe client (Prisma Client), declarative migrations (Prisma Migrate), and a GUI (Prisma Studio). It uses a single schema file and generates a query builder with strong TypeScript support." },
        { q: "Explain the Prisma schema and model definition.", code: "model User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n  posts Post[]\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  Int\n}" },
        { q: "How do you run migrations with Prisma?", a: "Use <code>npx prisma migrate dev --name migration_name</code> to create and apply migrations. For production, <code>npx prisma migrate deploy</code>." },
        { q: "Benefits of Prisma Client.", a: "Type‑safe query builder with auto‑completion, eliminates SQL injection, supports filters, pagination, relations, and transactions. Example: <code>prisma.user.findMany(&#123; include: &#123; posts: true &#125; &#125;);</code>" },
        { q: "How do you handle relations in Prisma?", a: "Use <code>@relation</code> attribute. For many‑to‑many, Prisma automatically creates a junction table (implicit) or you can define an explicit model." },
    ];

    const mongooseQuestions = [
        { q: "What is Mongoose?", a: "Mongoose is an Object Document Mapper (ODM) for MongoDB and Node.js. It provides schema definition, validation, middleware (pre/post hooks), and a rich query API." },
        { q: "How do you define a schema and model?", code: "const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});\nconst User = mongoose.model('User', userSchema);" },
        { q: "What is the purpose of the <code>required</code> validator?", a: "Ensures that a field must be present when creating a document. If missing, Mongoose throws a validation error." },
        { q: "Explain the <code>unique</code> option and how it works.", a: "Creates a unique index in MongoDB, preventing duplicate values for that field. It does not automatically create the index; you must ensure the database has it (Mongoose creates it when the model is compiled)." },
        { q: "How do you add custom validation?", code: "password: {\n  type: String,\n  validate: {\n    validator: function(v) {\n      // At least 8 characters, one letter, one digit\n      return /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/.test(v);\n    },\n    message: props => props.value + ' is not a valid password!'\n  }\n}" },
        { q: "What are middleware/hooks in Mongoose?", a: "Functions that run before or after certain operations (e.g., <code>pre('save')</code>, <code>post('find')</code>). Used for hashing passwords, logging, or data transformation." },
        { q: "How do you implement field‑level encryption with Mongoose?", a: "Use a plugin like <code>mongoose-field-encryption</code> or manually encrypt/decrypt fields using <code>pre('save')</code> and <code>post('find')</code> hooks with a library like <code>crypto</code>." },
    ];

    const ormGeneral = [
        { q: "Why are ORMs used?", a: "ORMs map object‑oriented code to relational databases, abstracting SQL syntax, improving productivity, and reducing boilerplate." },
        { q: "Benefits of using an ORM tool.", a: "Simplifies database operations, improves code maintainability, provides type safety (TypeScript), handles connections, and reduces SQL injection risks." },
        { q: "Difference between code‑first and database‑first approaches.", a: "Code‑first: define models in code, generate database schema. Database‑first: start with an existing database, generate models from it. Prisma supports both (introspect for database‑first)." },
        { q: "What is the difference between ORM and plain SQL queries?", a: "ORM provides a higher level of abstraction, automatic mapping, and often includes query builders. SQL gives full control and may be faster for complex queries, but is more verbose and error‑prone." },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section - Responsive */}
            <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-12 md:py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                        🗄️ Database Interview Questions (NoSQL & Relational)
                    </h1>
                    <p className="text-lg md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                        Comprehensive guide: DBMS, PostgreSQL, MongoDB, Prisma, Mongoose, and ORM concepts
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">DBMS</span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">PostgreSQL</span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">MongoDB</span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm">Prisma</span>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 overflow-hidden">
                {/* Introduction Card - Responsive */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 md:p-6 mb-8 md:mb-10 border border-indigo-100">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl md:text-3xl shrink-0">📊</div>
                        <div>
                            <h2 className="font-bold text-lg md:text-xl text-indigo-800 mb-1 md:mb-2">Master Databases</h2>
                            <p className="text-sm md:text-base text-gray-700">This guide covers everything from fundamental DBMS concepts to advanced PostgreSQL features, MongoDB, NoSQL, Prisma ORM, Mongoose ODM, and general ORM principles.</p>
                        </div>
                    </div>
                </div>

                {/* DBMS BASICS */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">DBMS Basics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dbmsBasics.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 1}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.q }} />
                                        <p className="text-gray-600 text-xs md:text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* POSTGRESQL ADVANCED */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">PostgreSQL – Advanced Concepts</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {postgresAdvanced.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-teal-100 text-teal-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 11}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.q }} />
                                        <p className="text-gray-600 text-xs md:text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* POSTGRESQL QUERY EXAMPLES */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">PostgreSQL Query Examples</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {postgresQueries.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-cyan-100 text-cyan-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 21}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.q}</h3>
                                        <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs md:text-sm mt-2 max-w-full">{item.code}</pre>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MONGODB & NOSQL */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4 8 4 8-4zM4 7v8l8 4 8-4V7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">MongoDB &amp; NoSQL</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mongodbBasics.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-yellow-100 text-yellow-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 26}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.q }} />
                                        <p className="text-gray-600 text-xs md:text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MONGODB QUERY EXAMPLES */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">MongoDB Query Examples</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mongodbQueries.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-orange-100 text-orange-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 36}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.q}</h3>
                                        <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs md:text-sm mt-2 max-w-full">{item.code}</pre>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRISMA ORM */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Prisma ORM</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prismaQuestions.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 41}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.q }} />
                                        {item.a && <p className="text-gray-600 text-xs md:text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />}
                                        {item.code && <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs md:text-sm mt-2 max-w-full">{item.code}</pre>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MONGOOSE ODM */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Mongoose ODM (MongoDB)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mongooseQuestions.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-rose-100 text-rose-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 46}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.q }} />
                                        {item.a && <p className="text-gray-600 text-xs md:text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />}
                                        {item.code && <pre className="bg-gray-900 text-gray-100 p-2 md:p-3 rounded-lg overflow-x-auto text-xs md:text-sm mt-2 max-w-full">{item.code}</pre>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ORM GENERAL */}
                <div className="mb-12 md:mb-14">
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Object‑Relational Mapping (ORM) General</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ormGeneral.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 md:p-5">
                                <div className="flex items-start gap-2 md:gap-3">
                                    <span className="bg-gray-100 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{idx + 53}</span>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.q }} />
                                        <p className="text-gray-600 text-xs md:text-sm mt-1" dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pro Tip */}
                <div className="mt-10 md:mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 md:p-6 border border-indigo-100">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl md:text-3xl">🎯</div>
                        <div>
                            <h3 className="font-bold text-base md:text-lg text-indigo-800">Pro tip for interviews</h3>
                            <p className="text-xs md:text-sm text-gray-700 mt-1">Know when to choose NoSQL vs SQL. MongoDB is great for flexible schemas and horizontal scaling; PostgreSQL excels at complex queries, ACID, and data integrity. Prisma simplifies database access in Node.js/Next.js, while Mongoose is the standard ODM for MongoDB. Understand indexing, normalization, and the strengths of each tool.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}