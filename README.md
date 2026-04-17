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

`src/components/ContactForm.tsx` currently posts to a Formspree placeholder URL. Replace `https://formspree.io/f/your-id` with a real Formspree (or other) endpoint before launch, or wire up a custom `/api/contact` route (requires switching off `output: "export"` and using a Render Web Service instead of Static).

## Assets still served from Framer's CDN

The following are referenced from `framerusercontent.com` for the first cut:

- Adam Rich headshot (`KRnr7sE4Y9lnCm7ivx9rRrdbXU.jpeg`)
- Polymath Text font family (Regular / Bold / Italic woff2 files)

Before shutting down the Framer site, download these and drop them under `public/` so we are not dependent on Framer's CDN. Update `globals.css` and `FounderNote.tsx` to point at the local paths.

## Original Framer export

The scraped HTML from the live Framer site lives in `framer-export/index.html` as reference while we port any remaining details.
