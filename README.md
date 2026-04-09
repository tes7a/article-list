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

## GitHub Actions

This repo now includes:

- `.github/workflows/ci.yml`
- `.github/workflows/deploy-pages.yml`

### CI

On every push and pull request:

- installs dependencies
- runs lint
- runs typecheck
- runs tests
- builds the app

### GitHub Pages Deploy

On push to `main`, GitHub Actions can deploy the built frontend to GitHub Pages.

The Pages build uses:

```bash
pnpm build:pages
```

That command builds Vite with:

```bash
--base=/article-list/
```

This matches the current repository name `article-list`.

### To enable GitHub Pages

1. Open GitHub repository settings.
2. Go to `Pages`.
3. In `Build and deployment`, choose `GitHub Actions`.
4. Push to `main`.

After that, the site will be published by the `Deploy Pages` workflow.
