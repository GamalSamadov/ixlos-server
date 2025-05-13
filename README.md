# Ixlos Server App 🚀

An enterprise-grade NestJS GraphQL API that powers the **Ixlos** ecosystem.  
Packed with modern tooling—Prisma ORM, Redis sessions, AWS S3 media storage, Argon2 authentication—and crafted for cloud-native deployments.

[![Stars](https://img.shields.io/github/stars/gamalsamadov/ixlos-server?style=social)](https://github.com/gamalsamadov/ixlos-server/stargazers) [![License](https://img.shields.io/github/license/gamalsamadov/ixlos-server)](https://github.com/gamalsamadov/ixlos-server/blob/main/LICENSE)

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **🚀 Lightning-fast NestJS 10** | Modular architecture with dependency-injected services and GraphQL code-first schema. |
| **📈 GraphQL + Apollo Server 4** | Full-typed schema, IDE-ready Playground, transparent performance metrics. |
| **🗄️ Prisma 6** | Type-safe ORM, zero-downtime migrations, PostgreSQL/MySQL/SQLite support. |
| **🔐 Secure Auth** | Argon2 password hashing, session management via `express-session` + Redis. |
| **🖼️ Media Pipeline** | AWS S3 object storage and on-the-fly image processing with **sharp**. |
| **🌍 Internationalization** | Built-in i18n helpers & country codes via `i18n-iso-countries`. |
| **📊 Device & Geo Insights** | `device-detector-js` and `geoip-lite` for contextual analytics. |
| **🧪 Robust Testing** | Jest unit + e2e suites, automatic coverage reports. |
| **🧹 Code Quality** | ESLint, Prettier, and import sorting baked in. |

---

## 🏗️ Project Structure

├── src/
│ ├── core/ # Global modules (config, graphql, prisma, redis, etc.)
│ ├── modules/ # Domain-driven feature modules
│ ├── shared/ # Shared features
│ └── main.ts # Bootstrap file
├── test/ # e2e & unit tests
└── prisma/
└── migrations/ # Auto-generated DB migrations

---

## 🛠️ Prerequisites

| Tool | Minimum Version | Notes |
|------|-----------------|-------|
| **Node.js** | 18 LTS / 20 LTS | Check `.nvmrc` |
| **npm** | 9.x / 10.x | or **pnpm** / **yarn** |
| **Database** | PostgreSQL 13+ | Configure `DATABASE_URL` |
| **Redis** | 6+ | For session storage |
| **AWS Account** | S3 & IAM | Optional for local dev (see below) |

---

## ⚙️ Environment Variables

Create a `.env` file at the repo root
Tip: A ready-to-use .env.example lives in the repo.

---

## 🚀 Getting Started

# 1. Clone
```
git clone https://github.com/gamalsamadov/ixlos-server.git
cd ixlos-server
```

# 2. Install deps
```
npm install
```

# 3. Docker setup 🐳
```
docker-compose up -d
```

# 4. Prepare database
```
npx run db:push
npm run db:seed-quran
```

# 5. Run on the localhost
```
npm run start:dev
```

---
## 📫 Contact

Feel free to reach out to me if you have any questions or feedback!

- Email: info@samadov.dev
- Instagram: [@samadov.dev](https://www.instagram.com/janob.dev/)
- LinkedIn: [En. Samadov J.](https://linkedin.com/in/gamalsamadov)
