# Portfolio redesign

## Content

The site presents Jubílio Maússe's work under the NexoVibe brand. Project descriptions were checked against the public repository READMEs on 18 September 2026. Edit `src/lib/data.ts` to maintain the curated catalogue, categories and home-page selection (`featured: true`). No public GitHub API request is needed at page-load time.

Selected repositories: SimGeo, GeoClick Capture (`qgis-latlon`), GPX Batch Converter, XLSForm AI Translator, TLS Cert Watcher, Mwanga, Cabo Delgado Vulnerability and `cv_articles`. Mwanga's description now reflects its financial-management focus. The empty WaterWatch repository and unverified numerical claims are not presented as evidence of delivered work.

The profile photo is the public GitHub avatar of `Jubilio`, copied locally on 18 September 2026. Project cover panels are typographic identifiers, not product screenshots. Existing XLSForm documentation, legal URLs and generated add-in icons are retained.

## Contact

The existing `/api/contact` endpoint requires `RESEND_API_KEY` and a verified sender domain for `noreply@nexovibe.co.mz`. Without that configuration, it returns 503 and the form offers the direct email address. A successful status is returned only after the email provider accepts the request. Personal messages are not logged. No database is required.

## Development

```sh
npm ci
npm run dev
npx tsc --noEmit
npm run build
```

The existing Next.js 14 stack and lockfile are retained. No additional application dependencies were introduced. Deploy the PR through the repository's existing hosting workflow after review.

Typography uses a locally hosted Inter variable font (Latin, normal, weights 100–900), sourced from `@fontsource-variable/inter@5.2.8`. The SIL Open Font License is retained in `public/fonts/Inter-LICENSE.txt`. Builds do not need to reach Google Fonts.
