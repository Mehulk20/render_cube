# 🎨 Digital Asset Marketplace (MERN Microservices + Turborepo + pnpm)

A full-stack microservices-based platform where creators can upload and sell digital assets like:

- 3D models
- Video templates
- Vectors
- Logos

---

## 🧱 Tech Stack

- **Frontend**: React (apps/client)
- **Backend**: Node.js + Express (microservices in `apps/services/*`)
- **API Gateway**: Express + `http-proxy-middleware` (`apps/gateway`)
- **Database**: MongoDB
- **Package Manager**: pnpm
- **Monorepo Tooling**: Turborepo

---

## 📁 Monorepo Structure

```bash
your-project/
├── apps/
│   ├── client/
|   ├── server/       # React frontend
│       └── gateway/        # API Gateway (proxy for services)
│       └── services/
│           ├── auth/
│           ├── user/
│           └── asset/
├── packages/
│   └── shared/         # Shared middleware, utils, schemas, configs
├── turbo.json          # Turborepo config
├── pnpm-workspace.yaml
├── .gitignore
└── README.md
```
