# Build Options — two ways to get HTML/CSS/JS

This repo has **two** static HTML/CSS/JS versions of the portfolio. Use whichever fits the situation.

---

## 1. Next.js static export → `out/` (recommended)

The real site (all React components in [`components/`](components/), driven by [`config/site.ts`](config/site.ts)) compiled to plain static HTML/CSS/JS. Nothing is hand-rewritten, so it **always stays in sync** with the source.

Enabled by `output: "export"` in [`next.config.ts`](next.config.ts).

### Generate / refresh it
```bash
npm run build          # writes the static site into out/
```

### Preview locally
The exported files use absolute asset paths (`/_next/...`), so they must be served over HTTP — opening `out/index.html` with `file://` will show unstyled HTML.
```bash
cd out && python3 -m http.server 4321
# then open http://localhost:4321
```

### Deploy
Upload the `out/` folder to any static host (Netlify, GitHub Pages, Vercel static, S3, Cloudflare Pages, etc.).

### Notes
- `out/` is git-ignored (it's a build artifact, ~150 MB — mostly `public/project/*.png` screenshots). Regenerate with `npm run build`.
- `next dev` still works for local development.
- Because of `output: "export"`, server-only features (API routes, server actions, ISR) are **not** available. This site doesn't use any.

### Use this when
- You want the actual site, with every animation and component.
- You'll keep editing components and want the HTML build to track those changes.
- You're deploying to a static host.

---

## 2. Hand-built standalone → `html-version/`

A dependency-free, single-folder site: [`html-version/index.html`](html-version/index.html) + [`styles.css`](html-version/styles.css) + [`script.js`](html-version/script.js). No build step, no framework — **double-click `index.html` and it runs**.

It mirrors the design and content of the real site, but the content is a manual copy (data lives in the `siteConfig` object at the top of [`html-version/script.js`](html-version/script.js)).

### Use this when
- You need something that runs by just opening a file, with zero tooling/Node.
- You want a tiny, self-contained bundle to hand off or embed.

### Trade-off
It does **not** auto-update when you change the React components — edit `html-version/` directly to keep it current. If you change [`config/site.ts`](config/site.ts), mirror the change in `html-version/script.js`.

---

## Quick comparison

| | `out/` (Next.js export) | `html-version/` (hand-built) |
|---|---|---|
| Source of truth | React components + `config/site.ts` | its own files |
| Stays in sync with the app | ✅ automatic (`npm run build`) | ❌ manual |
| Needs a build step | ✅ `npm run build` | ❌ none |
| Open via `file://` | ❌ needs HTTP server | ✅ works directly |
| Best for | the real deployable site | zero-tooling / portable handoff |
