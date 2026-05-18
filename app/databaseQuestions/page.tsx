// databaseQuestions/page.tsx
import React from "react";

export default function DatabaseQuestions() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
                Database Interview Questions (NoSQL &amp; Relational)
            </h2>

            {/* MONGODB / NOSQL SECTION */}
            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">MongoDB &amp; NoSQL</h3>
            <div className="space-y-4">
                <div>
                    <strong>1. What is MongoDB and how is it different from SQL databases?</strong>
                    <p className="mt-1 text-gray-700">MongoDB is a document‑oriented NoSQL database that stores data in flexible, JSON‑like documents (BSON) with dynamic schemas. Unlike SQL databases which use tables with fixed schemas, MongoDB allows embedded documents and arrays, making it ideal for hierarchical data and rapid iteration.</p>
                </div>
                <div>
                    <strong>2. Explain the concept of indexing in MongoDB. Why is it important?</strong>
                    <p className="mt-1 text-gray-700">Indexes in MongoDB improve query performance by reducing the number of documents scanned. They work similarly to indexes in relational databases. Without indexes, MongoDB must scan every document in a collection (collection scan). Proper indexing is crucial for read‑heavy applications.</p>
                </div>
                <div>
                    <strong>3. What is sharding and when would you use it?</strong>
                    <p className="mt-1 text-gray-700">Sharding is a method for distributing data across multiple machines to support horizontal scaling. It’s used when data size exceeds a single server’s capacity or when write throughput cannot be handled by one node. Sharding uses a shard key to partition data.</p>
                </div>
                <div>
                    <strong>4. What are the differences between `aggregate()` and `find()` in MongoDB?</strong>
                    <p className="mt-1 text-gray-700"><code>find()</code> is used for simple queries and returns documents matching criteria. <code>aggregate()</code> performs complex data transformations using a pipeline of stages (e.g., $match, $group, $project) and supports operations like grouping, joins, and reshaping documents.</p>
                </div>
                <div>
                    <strong>5. How do you handle transactions in MongoDB?</strong>
                    <p className="mt-1 text-gray-700">MongoDB supports multi‑document ACID transactions starting from version 4.0 for replica sets and 4.2 for sharded clusters. Use the <code>session</code> object and <code>startTransaction()</code>, <code>commitTransaction()</code>, <code>abortTransaction()</code>.</p>
                </div>
            </div>

            {/* POSTGRESQL / RELATIONAL DB SECTION */}
            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">PostgreSQL &amp; Relational Databases</h3>
            <div className="space-y-4">
                <div>
                    <strong>6. What are the advantages of PostgreSQL over other relational databases?</strong>
                    <p className="mt-1 text-gray-700">PostgreSQL is open‑source, highly extensible, supports advanced data types (JSONB, arrays, hstore), full‑text search, and ACID compliance. It offers powerful indexing (B‑tree, GIN, GiST, BRIN), custom functions, and support for concurrent operations.</p>
                </div>
                <div>
                    <strong>7. Explain ACID properties and why they matter.</strong>
                    <p className="mt-1 text-gray-700">ACID stands for Atomicity (all or nothing), Consistency (valid state after transactions), Isolation (concurrent transactions don’t interfere), Durability (committed changes persist). These properties ensure data integrity, especially in financial or critical applications.</p>
                </div>
                <div>
                    <strong>8. What is a foreign key and when would you use one?</strong>
                    <p className="mt-1 text-gray-700">A foreign key is a column that links to the primary key of another table, enforcing referential integrity. It ensures that relationships between tables remain consistent (e.g., an order must belong to an existing customer).</p>
                </div>
                <div>
                    <strong>9. How do you optimise SQL queries for performance?</strong>
                    <p className="mt-1 text-gray-700">Use indexes on columns used in WHERE, JOIN, and ORDER BY. Avoid SELECT *, use EXPLAIN ANALYZE to understand query plans, normalise data appropriately, and consider denormalisation for read‑heavy scenarios. Also, use connection pooling and caching.</p>
                </div>
                <div>
                    <strong>10. What is the difference between `INNER JOIN`, `LEFT JOIN`, and `FULL OUTER JOIN`?</strong>
                    <p className="mt-1 text-gray-700">`INNER JOIN` returns only matching rows from both tables. `LEFT JOIN` returns all rows from the left table, with matches from the right (null if none). `FULL OUTER JOIN` returns all rows from both tables, with matches where available.</p>
                </div>
            </div>

            {/* PRISMA ORM SECTION */}
            <h3 className="text-xl font-semibold text-teal-700 mt-5 mb-3">Prisma ORM</h3>
            <div className="space-y-4">
                <div>
                    <strong>11. What is Prisma and how does it differ from other ORMs (like Sequelize or TypeORM)?</strong>
                    <p className="mt-1 text-gray-700">Prisma is a next‑generation ORM that consists of Prisma Client (auto‑generated type‑safe query builder), Prisma Migrate (declarative schema migrations), and Prisma Studio (GUI for data). It provides a clean, intuitive API, strong TypeScript support, and works with PostgreSQL, MySQL, MongoDB, and more.</p>
                </div>
                <div>
                    <strong>12. Explain Prisma schema and how to define models.</strong>
                    <p className="mt-1 text-gray-700">The Prisma schema (`schema.prisma`) defines data sources, generators, and models. Example model:</p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">
                        {`model User {
  id        Int     @id @default(autoincrement())
  email     String  @unique
  name      String?
  posts     Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}`}
                    </pre>
                </div>
                <div>
                    <strong>13. How do you perform migrations with Prisma?</strong>
                    <p className="mt-1 text-gray-700">Run <code className="bg-gray-200 px-1 rounded">npx prisma migrate dev --name migration_name</code> to create and apply migrations. This compares the Prisma schema with the database and generates SQL migration files. For production, use <code className="bg-gray-200 px-1 rounded">npx prisma migrate deploy</code>.</p>
                </div>
                <div>
                    <strong>14. What are the benefits of using Prisma Client?</strong>
                    <p className="mt-1 text-gray-700">Prisma Client is a type‑safe query builder that eliminates SQL injection risks and provides autocompletion. It supports filtering, pagination, relations, and transactions. Example: <code className="bg-gray-200 px-1 rounded">const users = await prisma.user.findMany(&#123; include: &#123; posts: true &#125; &#125;);</code></p>
                </div>
                <div>
                    <strong>15. How do you handle relations (one‑to‑many, many‑to‑many) in Prisma?</strong>
                    <p className="mt-1 text-gray-700">Relations are defined by referencing other models. One‑to‑many: a field in the child with `@relation`. Many‑to‑many: implicit relation tables automatically created, or explicit with a junction model. Use `include` or `select` to fetch related data.</p>
                </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
                🎯 <strong>Pro tip:</strong> For interviews, understand when to choose NoSQL vs SQL. MongoDB is great for flexible schemas and horizontal scaling; PostgreSQL excels at complex queries and data integrity. Prisma simplifies database access in Node.js and Next.js projects.
            </div>
        </section>
    );
}