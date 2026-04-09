# Article List Web

Frontend application for the article list UI.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- axios
- shadcn/ui
- ESLint
- Prettier

## Requirements

- Node.js 22+
- pnpm 10+

## Install

```bash
pnpm install
```

## Environment Variables

File: `.env`

```env
VITE_API_DELAY_MS=400
```

Example:

- `.env.example`

## Run

```bash
pnpm dev
```

Web URL:

- `http://localhost:3000`

## Commands

Build:

```bash
pnpm build
```

Typecheck:

```bash
pnpm check-types
```

Tests:

```bash
pnpm test
```

Lint:

```bash
pnpm lint
```

Lint fix:

```bash
pnpm lint:fix
```

Format:

```bash
pnpm format
```

## Deploy

Deploy this project to Vercel with:

- Root Directory: `.`
- Build Command: `pnpm build`
- Output Directory: `dist`
