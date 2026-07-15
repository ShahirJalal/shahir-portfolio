# Shahir Portfolio

![Angular](https://img.shields.io/badge/Angular-20-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4-green)
![Java](https://img.shields.io/badge/Java-17-orange)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Tunnel-F38020)

A modern full-stack portfolio website built with Angular and Spring Boot, self-hosted on my own Ubuntu server with Docker, Jenkins, Cloudflare Tunnel, and PostgreSQL.

---

## Live Website

🌐 https://shahirjalal.com

---

## Tech Stack

### Frontend
- Angular 20
- TypeScript
- HTML5 / CSS3
- Nginx

### Backend
- Spring Boot 4
- Java 17
- Spring Data JPA
- Hibernate

### Database
- PostgreSQL 16

### DevOps
- Docker
- Docker Compose
- Jenkins
- Cloudflare Tunnel
- Ubuntu Server

---

# Architecture

```text
                    GitHub
                       │
                       ▼
              Jenkins Pipeline
                       │
          docker compose up -d --build
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
   Angular + Nginx          Spring Boot API
          │                         │
          └────────────┬────────────┘
                       ▼
                 PostgreSQL 16
                       │
                       ▼
               Cloudflare Tunnel
                       │
                       ▼
             https://shahirjalal.com
```

---

# Repository Structure

```
shahir-portfolio
│
├── frontend
│   ├── Dockerfile
│   ├── nginx.conf
│   └── Angular Application
│
├── backend
│   ├── Dockerfile
│   └── Spring Boot Application
│
├── docker-compose.yml
├── Jenkinsfile
└── README.md
```

---

# Features

- Responsive portfolio website
- Contact form
- Contact messages stored in PostgreSQL
- RESTful Spring Boot API
- Reverse proxy using Nginx
- Dockerized frontend and backend
- Docker Compose deployment
- CI/CD with Jenkins
- Self-hosted on Ubuntu Server
- Cloudflare Tunnel for secure public access
- HTTPS enabled
- Environment variable configuration
- Multi-stage Docker builds

---

# Local Development

Clone the repository

```bash
git clone https://github.com/ShahirJalal/shahir-portfolio.git
cd shahir-portfolio
```

Create your environment file

```bash
cp .env.example .env
```

Start everything

```bash
docker compose up --build
```

Frontend

```
http://localhost:8083
```

Backend

```
http://localhost:8082
```

---

# Deployment

The project is automatically deployed using Jenkins.

Pipeline workflow

```
Checkout Repository
        │
        ▼
docker compose down
        │
        ▼
docker compose up -d --build
        │
        ▼
Verify Deployment
        │
        ▼
Docker Cleanup
```

---

# Docker Containers

The application consists of three containers.

| Container | Purpose |
|------------|----------|
| Frontend | Angular + Nginx |
| Backend | Spring Boot REST API |
| PostgreSQL | Data storage |

---

# Security

- HTTPS via Cloudflare Tunnel
- Reverse proxy with Nginx
- Environment variables for configuration
- Non-root Docker containers
- Persistent PostgreSQL volume

---

# Future Improvements

- Authentication
- Admin Dashboard
- Visitor Analytics
- Email Notifications
- Redis Caching
- Prometheus & Grafana Monitoring
- GitHub Actions
- Automated Database Backups

---

# Author

**Shahir Jalal**

Software Engineer

- LinkedIn: https://linkedin.com/in/shahirjalal
- GitHub: https://github.com/ShahirJalal
