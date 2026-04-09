# Article List Monorepo

Monorepo with:

- `apps/api` — Express API
- `apps/web` — React + TypeScript + Vite client

## Stack

- `pnpm` workspace
- `Express`
- `React`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `Zustand`
- `axios`
- `shadcn/ui`
- `ESLint`
- `Prettier`

## Requirements

- `Node.js 22+`
- `pnpm 10+`

## Install

```bash
pnpm install
```

## Environment Variables

### Web

File: `apps/web/.env`

```env
VITE_API_URL=http://localhost:3001
```

### API

File: `apps/api/.env`

```env
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

Examples are available in:

- `apps/web/.env.example`
- `apps/api/.env.example`

## Run Locally

Run both applications:

```bash
pnpm dev
```

Run only API:

```bash
pnpm dev:api
```

Run only Web:

```bash
pnpm dev:web
```

## Local URLs

- Web: `http://localhost:3000`
- API: `http://localhost:3001`
- Articles endpoint: `http://localhost:3001/api/articles`

## Main Commands

Check types:

```bash
pnpm check-types
```

Lint:

```bash
pnpm lint
```

Auto-fix lint:

```bash
pnpm lint:fix
```

Format:

```bash
pnpm format
```

Build all:

```bash
pnpm build
```

Build only API:

```bash
pnpm build:api
```

Build only Web:

```bash
pnpm build:web
```

Run API tests:

```bash
pnpm test
```

Run Web tests:

```bash
pnpm test:web
```

## VS Code

Project includes:

- `.vscode/tasks.json`
- `.vscode/launch.json`
- `.vscode/settings.json`

Available from VS Code:

- dev API
- dev Web
- full dev run
- lint
- tests
- build
- browser launch

## Deploy Notes

Recommended split:

- `web` -> Vercel
- `api` -> separate Node host

Production env example for web:

```env
VITE_API_URL=https://your-api-domain
```

Production env example for api:

```env
PORT=3001
CORS_ORIGIN=https://your-vercel-domain
```
