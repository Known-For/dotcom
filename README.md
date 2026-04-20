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

## Fonts and imagery

All fonts and the Adam Rich headshot are self-hosted:

- `public/fonts/polymath-text-{regular,bold,italic}.woff2` — referenced from `src/app/globals.css`
- `public/images/adam-rich.jpg` — referenced from `src/components/FounderNote.tsx`

Polymath Text is a commercial Pangram Pangram typeface. Keep a valid webfont license on file; Framer's bundled license does not transfer to a self-hosted site.

## Brand assets

The source brand files live under `Final Assets/` (logos, symbols, motifs, patterns in multiple color variants and formats). The PNGs the site actually loads are copied into `public/brand/` and `public/favicon.png`.

## Original Framer export

The scraped HTML from the live Framer site lives in `framer-export/index.html` as reference while we port any remaining details.
