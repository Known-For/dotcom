# Known For — dotcom

Next.js 15 rebuild of getknownfor.com, migrated off Framer and deployable to Render as a static site.

## Stack

- Next.js 15 (App Router) with `output: "export"` for static HTML
- Tailwind CSS v4
- TypeScript
- Hosted on Render (see `render.yaml`)

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # exports static site to ./out
```

## Deployment

Render reads `render.yaml` on push. The service is a Static Site:

1. In Render, create a new **Blueprint** pointing at this repo, or create a Static Site and set the build command to `npm ci && npm run build`, publish path to `./out`.
2. Add `getknownfor.com` as a custom domain under the Render service.
3. Update DNS at the registrar:
   - `getknownfor.com` → Render `A` / `ALIAS` record (see Render's dashboard for the exact target)
   - `www.getknownfor.com` → CNAME to the Render service host

Keep Framer live until Render's preview URL looks right, then flip DNS.

## Contact form

`src/components/ContactForm.tsx` submits via [`@formspree/react`](https://github.com/formspree/formspree-js/tree/master/packages/formspree-react) to Formspree form `xreraqbb`. If the form ever needs to move to a different endpoint, update the `useForm("xreraqbb")` call.

## Assets still served from Framer's CDN

The following are still referenced from `framerusercontent.com`:

- Adam Rich headshot (`KRnr7sE4Y9lnCm7ivx9rRrdbXU.jpeg`) — `src/components/FounderNote.tsx`
- Polymath Text font family (Regular / Bold / Italic woff2 files) — `src/app/globals.css`

Before shutting down the Framer site, download these and drop them under `public/` (e.g. `public/fonts/` and `public/images/adam-rich.jpg`) and update the references so we aren't dependent on Framer's CDN.

## Brand assets

The source brand files live under `Final Assets/` (logos, symbols, motifs, patterns in multiple color variants and formats). The PNGs the site actually loads are copied into `public/brand/` and `public/favicon.png`.

## Original Framer export

The scraped HTML from the live Framer site lives in `framer-export/index.html` as reference while we port any remaining details.
