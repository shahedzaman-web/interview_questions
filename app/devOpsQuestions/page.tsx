// components/DevOpsQuestions.tsx
import React from "react";

export default function DevOpsQuestions() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4 mt-8 mb-5">
        Deployment, VPS &amp; CI/CD Interview Questions
      </h2>

      <div className="space-y-4">
        <div>
          <strong>1. What is the difference between shared hosting, VPS, and dedicated servers?</strong>
          <p className="mt-1 text-gray-700"><strong>Shared hosting</strong>: multiple users share one server, cost effective but limited resources. <strong>VPS (Virtual Private Server)</strong>: virtualised environment with dedicated resources, root access, scalable. <strong>Dedicated server</strong>: entire physical server for one client, maximum performance and control.</p>
        </div>
        <div>
          <strong>2. How do you deploy a Node.js/Next.js application on a VPS (e.g., DigitalOcean, AWS EC2)?</strong>
          <p className="mt-1 text-gray-700">Steps: SSH into server, install Node.js and Git, clone your repo, install dependencies, build the app (e.g., `npm run build`), run using PM2 (process manager), configure reverse proxy (Nginx), set up SSL (Certbot), and open firewall ports.</p>
        </div>
        <div>
          <strong>3. What is PM2 and why is it used in production?</strong>
          <p className="mt-1 text-gray-700">PM2 is a process manager for Node.js applications. It keeps apps alive forever, restarts on crash, supports clustering (load balancing across CPU cores), and provides logs, monitoring, and zero‑downtime reloads.</p>
        </div>
        <div>
          <strong>4. Explain how to configure Nginx as a reverse proxy for a Node.js app.</strong>
          <p className="mt-1 text-gray-700">Nginx listens on port 80/443 and forwards requests to the internal Node.js port (e.g., 3000). Benefits: load balancing, caching, SSL termination, and serving static files. Sample config:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">
{`server {
  listen 80;
  server_name example.com;
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
  }
}`}
          </pre>
        </div>
        <div>
          <strong>5. What is CI/CD? Describe a typical pipeline.</strong>
          <p className="mt-1 text-gray-700">CI/CD (Continuous Integration / Continuous Deployment) automates building, testing, and deploying applications. A typical pipeline: code push → run tests → build artifacts → deploy to staging → run integration tests → deploy to production. Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI.</p>
        </div>
        <div>
          <strong>6. How would you set up a GitHub Actions workflow to deploy a Next.js app to a VPS?</strong>
          <p className="mt-1 text-gray-700">Example workflow: on push to main branch, checkout code, install dependencies, build, then use SSH to copy build files to the VPS and restart PM2. You can also use rsync or scp. Secrets are stored in GitHub secrets.</p>
        </div>
        <div>
          <strong>7. What are containers and how do they differ from virtual machines?</strong>
          <p className="mt-1 text-gray-700">Containers (Docker) share the host OS kernel, making them lightweight and fast to start. VMs emulate complete OS with hypervisor, are heavier, but offer stronger isolation. Containers are preferred for microservices and consistent environments.</p>
        </div>
        <div>
          <strong>8. How do you dockerize a Node.js/Next.js application?</strong>
          <p className="mt-1 text-gray-700">Write a Dockerfile with multi‑stage builds: use Node base image, copy package.json, install dependencies, copy source, build the app, then expose port. Use `.dockerignore` to exclude node_modules etc. Then build and run the container.</p>
        </div>
        <div>
          <strong>9. What is environment configuration management? How do you handle secrets in production?</strong>
          <p className="mt-1 text-gray-700">Use environment variables (.env files) for configuration. For secrets (API keys, DB passwords), use secret management tools like HashiCorp Vault, AWS Secrets Manager, or GitHub secrets. Never commit secrets to version control.</p>
        </div>
        <div>
          <strong>10. How would you monitor a production Node.js application?</strong>
          <p className="mt-1 text-gray-700">Use monitoring tools like Prometheus + Grafana, New Relic, Datadog, or PM2's built‑in monitoring. Log aggregation: Sentry, Logstash, or ELK stack (Elasticsearch, Logstash, Kibana). Set up alerts for CPU usage, memory leaks, error rates, and response times.</p>
        </div>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
        🛠️ <strong>Interview tip:</strong> Be ready to explain a real deployment you’ve done. Mention using Nginx, PM2, GitHub Actions, and basic security (SSL, fail2ban). Show that you understand the whole DevOps lifecycle, not just coding.
      </div>
    </section>
  );
}