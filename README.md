# karansingh-dev

Portfolio site for Karan Singh: React + Vite + Tailwind, with a Three.js 3D hero and six live local-business demo sites.

## Run locally
    npm install
    npm run dev

## Build
    npm run build      # output in dist/

`dist/` contains `index.html`, `images/` and `demos/`. Upload the whole `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages).

## Live demos
The six trade demos live in `public/demos/` and are served at:

    /demos/index.html#roofing
    /demos/index.html#plumbing
    /demos/index.html#hvac
    /demos/index.html#landscaping
    /demos/index.html#cleaning
    /demos/index.html#detailing

Share these links directly with prospects in each trade.

## Contact form
Submissions go through Web3Forms (key in `src/components/Contact.tsx`). Any "Get details" / "I want a site like this" button scrolls to the form and pre-selects the matching service (see `src/utils/contact.ts`).
