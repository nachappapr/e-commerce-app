# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Overview

Turborepo monorepo managed with **pnpm**. All commands should be run from the repo root unless working on a specific service.

- `apps/user-service` — Node.js backend service (TypeScript, ESM, Prisma + PostgreSQL)
- `packages/typescript-config` — Shared `tsconfig` base configs (`base.json`, `nextjs.json`, `react-library.json`)
- `packages/eslint-config` — Shared ESLint configs (`base`, `next-js`, `react-internal`)
- `packages/ui` — Shared React component library

## Commands

### Root (runs across all apps/packages via Turbo)
```bash
pnpm build         # Compile all packages/apps
pnpm dev           # Start all services in watch mode
pnpm lint          # Lint all packages/apps
pnpm format        # Prettier format all TS/TSX/MD files
pnpm check-types   # Type-check all packages/apps
```

### user-service (from `apps/user-service/`)
```bash
pnpm dev           # tsx watch src/server.ts
pnpm build         # tsc → dist/
pnpm start         # node dist/server.js
```

### Prisma (from `apps/user-service/`)
```bash
pnpm prisma migrate dev    # Run migrations (uses prisma.config.ts)
pnpm prisma generate       # Regenerate client after schema changes
pnpm prisma studio         # Open Prisma Studio
```

## Architecture

### Module System
All packages use ESM (`"type": "module"`). TypeScript is configured with `"module": "NodeNext"` and `"moduleResolution": "NodeNext"` — imports must include `.js` extensions for relative imports.

### TypeScript
Apps extend from `@repo/typescript-config/base.json`. Strict mode is on with `noUncheckedIndexedAccess`. Output goes to `dist/`, sources in `src/`.

### Prisma (user-service)
- Schema: `prisma/schema.prisma`
- Generated client output: `src/generated/prisma`
- Config: `prisma.config.ts` (loads `.env` via dotenv, sets schema/migrations paths)
- Database: PostgreSQL (connection string in `.env`)
- Migrations directory: `prisma/migrations/`

### Turborepo Task Graph
- `build` depends on `^build` (dependencies compiled before dependents)
- `lint` and `check-types` also respect dependency order
- `dev` is persistent and uncached
