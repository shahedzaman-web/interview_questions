// components/DevOpsQuestions.tsx
import React from "react";

export default function DevOpsQuestions() {
  const questions = [
    {
      q: "1. What is the difference between shared hosting, VPS, and dedicated servers?",
      a: "<strong>Shared hosting</strong>: multiple users share one server, cost effective but limited resources. <strong>VPS (Virtual Private Server)</strong>: virtualised environment with dedicated resources, root access, scalable. <strong>Dedicated server</strong>: entire physical server for one client, maximum performance and control."
    },
    {
      q: "2. How do you deploy a Node.js/Next.js application on a VPS (e.g., DigitalOcean, AWS EC2)?",
      a: "Steps: SSH into server, install Node.js and Git, clone your repo, install dependencies, build the app (e.g., <code>npm run build</code>), run using PM2 (process manager), configure reverse proxy (Nginx), set up SSL (Certbot), and open firewall ports."
    },
    {
      q: "3. What is PM2 and why is it used in production?",
      a: "PM2 is a process manager for Node.js applications. It keeps apps alive forever, restarts on crash, supports clustering (load balancing across CPU cores), and provides logs, monitoring, and zero‑downtime reloads."
    },
    {
      q: "4. Explain how to configure Nginx as a reverse proxy for a Node.js app.",
      a: "Nginx listens on port 80/443 and forwards requests to the internal Node.js port (e.g., 3000). Benefits: load balancing, caching, SSL termination, and serving static files.",
      code: `server {
  listen 80;
  server_name example.com;
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
  }
}`
    },
    {
      q: "5. What is CI/CD? Describe a typical pipeline.",
      a: "CI/CD (Continuous Integration / Continuous Deployment) automates building, testing, and deploying applications. A typical pipeline: code push → run tests → build artifacts → deploy to staging → run integration tests → deploy to production. Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI."
    },
    {
      q: "6. How would you set up a GitHub Actions workflow to deploy a Next.js app to a VPS?",
      a: "Example workflow: on push to main branch, checkout code, install dependencies, build, then use SSH to copy build files to the VPS and restart PM2. You can also use rsync or scp. Secrets are stored in GitHub secrets."
    },
    {
      q: "7. What are containers and how do they differ from virtual machines?",
      a: "Containers (Docker) share the host OS kernel, making them lightweight and fast to start. VMs emulate complete OS with hypervisor, are heavier, but offer stronger isolation. Containers are preferred for microservices and consistent environments."
    },
    {
      q: "8. How do you dockerize a Node.js/Next.js application?",
      a: "Write a Dockerfile with multi‑stage builds: use Node base image, copy package.json, install dependencies, copy source, build the app, then expose port. Use <code>.dockerignore</code> to exclude node_modules etc. Then build and run the container."
    },
    {
      q: "9. What is environment configuration management? How do you handle secrets in production?",
      a: "Use environment variables (.env files) for configuration. For secrets (API keys, DB passwords), use secret management tools like HashiCorp Vault, AWS Secrets Manager, or GitHub secrets. Never commit secrets to version control."
    },
    {
      q: "10. How would you monitor a production Node.js application?",
      a: "Use monitoring tools like Prometheus + Grafana, New Relic, Datadog, or PM2's built‑in monitoring. Log aggregation: Sentry, Logstash, or ELK stack (Elasticsearch, Logstash, Kibana). Set up alerts for CPU usage, memory leaks, error rates, and response times."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-5xl"> ☁️ </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
           Deployment, VPS &amp; CI/CD Interview Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            From VPS deployment to Docker, CI/CD pipelines, and production monitoring
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">VPS</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">CI/CD</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Docker</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Monitoring</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 mb-10 border border-slate-200">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🛠️</div>
            <div>
              <h2 className="font-bold text-xl text-slate-800 mb-2">DevOps & Deployment Essentials</h2>
              <p className="text-gray-700">Master the skills needed to deploy, manage, and monitor applications in production – from VPS setup to CI/CD pipelines and containerization.</p>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid gap-6 mb-12">
          {questions.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <span className="bg-slate-100 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx+1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.q }} />
                    <div className="mt-2 text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.a }} />
                    {item.code && (
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm mt-3">{item.code}</pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interview Tip Card */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-bold text-lg text-blue-800">Interview Tip</h3>
              <p className="text-gray-700">Be ready to explain a real deployment you’ve done. Mention using Nginx, PM2, GitHub Actions, and basic security (SSL, fail2ban). Show that you understand the whole DevOps lifecycle, not just coding.</p>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-6 right-6">
          <a
            href="#"
            className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}