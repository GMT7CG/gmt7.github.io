# gmt7.github.io

Brochure site for George Merrick Troop 7 of Coral Gables, Inc., the Florida
not-for-profit corporation that holds the deed to the Troop 7 Cabin at
1107 South Greenway Drive, Coral Gables, administers the long-term lease with
the City of Coral Gables, and pays the property's utilities. The corporation
does not run Scouting programs; see `src/app/page.tsx` for links to the
Scouting units (Troop 7, Pack 7, Crew 7, Troop 719) that meet at the property.

Live at [gmt7.org](https://gmt7.org).

## Requirements

- Node 24 (see `.nvmrc`; run `nvm use` if you use nvm)
- npm

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Script                     | Purpose                                                        |
| -------------------------- | --------------------------------------------------------------|
| `npm run dev`               | Start the dev server (Turbopack)                              |
| `npm run build`             | Static export to `out/`                                       |
| `npm start`                 | Serve the built `out/` directory locally                      |
| `npm run lint`              | Biome check (lint and format)                                 |
| `npm run lint:fix`          | Biome check with `--write`                                     |
| `npm run lint:security`     | ESLint, scoped to security and no-unsanitized plugins          |
| `npm test`                  | Jest (no watch mode)                                          |
| `npm run compile`           | TypeScript type-check only, no emit                            |
| `npm run validate:schemas`  | Validate the site's JSON-LD against `src/lib/schema-definitions.ts` |
| `npm run dupes`             | jscpd copy-paste detection over `src`                          |

## Project structure

```
src/
  app/            # Next.js App Router pages (home, about, board, contact)
  lib/
    site.ts       # Organization facts: name, EIN, address, board, units, sources
    schema.ts     # JSON-LD generators (NGO, WebSite, BreadcrumbList)
    schema-definitions.ts  # JSON Schema defs used to validate schema.ts output
    metadata.ts   # Per-page Metadata (title, description, Open Graph, Twitter)
scripts/
  validate-schemas.ts  # Runs the AJV validation used by npm run validate:schemas
public/
  CNAME           # Custom domain (gmt7.org) for GitHub Pages
```

All organization facts (board members, unit representatives, EIN, address)
live in `src/lib/site.ts`. Update copy there rather than hardcoding facts
directly in a page component, and keep it in sync with the corporation's
actual filings (see `specs/` for the underlying Sunbiz and IRS source
documents).

## Deployment

This repo deploys to GitHub Pages under the GMT7CG organization, with a
custom domain (gmt7.org) configured via `public/CNAME`. Deployment is a
manual, explicit action, not an automatic side effect of merging to main:

- `.github/workflows/ci.yml` runs lint, security lint, tests, type-check,
  schema validation, duplicate-code check, and a build on every PR to `main`
  and every push to `main`.
- `.github/workflows/tag-release.yml` is manual (`workflow_dispatch`): pick a
  major/minor/patch bump from the dropdown in the Actions tab to cut a new
  tag and GitHub release.
- `.github/workflows/deploy.yml` is manual (`workflow_dispatch`): give it a
  branch or tag name and it builds that ref and deploys it to GitHub Pages.

