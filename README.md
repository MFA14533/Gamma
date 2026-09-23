# Gamma Productions

Website: https://gammaproductions.net (www.gammaproductions.net redirects to the configured domain).

The repository root contains the pre-rendered static website for the existing GitHub Pages branch deployment. CNAME is preserved. Source code is in `site-source/`.

## Update

```sh
cd site-source
npm ci
npm run build
node scripts/export-pages.mjs
```

Commit the source and generated root assets together. No secret keys are required. The contact form prepares a WhatsApp message; visitors send it themselves.

The drone is restricted to the opening hero, moves at most 12px horizontally and 24px vertically, and is hidden on mobile and reduced-motion settings. Imagery labeled representative is not a client project.
