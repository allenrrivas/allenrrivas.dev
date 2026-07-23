# allenrrivas.dev

My personal portfolio — a single-page site built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

Requires Node.js 22 or newer.

## Structure

- `src/pages/index.tsx` — the entire page (name, projects list, links)
- `src/pages/_app.tsx` — document head + global styles
- `src/styles/globals.css` — Tailwind import + base styles

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). Set the
project's **Node.js Version** to 24.x in Settings → Build & Deployment.
