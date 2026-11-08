# Calculator site: easy deployment guide

This folder contains the whole website. It is a small static site, so you do not need to install anything or run a build command.

## What the files do

- `index.html` is the page you open.
- `app.js` makes the calculator, graph, game links, and automatic cloud save work.
- `README.md` is this guide.

Keep all three files together in the top level of the GitHub repository.

## Put it on Cloudflare Pages

1. Sign in to [Cloudflare](https://dash.cloudflare.com/).
2. Open **Workers & Pages**.
3. Click **Create application**, choose **Pages**, then choose **Import an existing Git repository**.
4. Connect GitHub if Cloudflare asks, and select `plain-calculator-games`.
5. Use these settings:
   - **Production branch:** `main`
   - **Framework preset:** `None` (or **No framework**)
   - **Build command:** `exit 0`
   - **Build output directory:** `.`
   - **Root directory:** leave the default / blank
6. Click **Save and Deploy** (or **Deploy**).
7. When deployment finishes, open the `*.pages.dev` address Cloudflare shows.

Cloudflare deploys updates automatically when changes are pushed to `main`. The site needs `index.html` and `app.js` together at the repository root. If you see a 404, check that they are not inside an extra folder.

## Cloud save

The site is configured for the Supabase project and creates an anonymous session automatically. Visitors do not create a website account. Cloud save belongs to that browser, so it will not transfer to a different device or browser.

The Supabase project needs the `calculator_saves` table, row-level security policy, and anonymous sign-ins enabled. Those are configured for this site. The publishable Supabase key in `app.js` is designed to be used in a website; never put a Supabase **service-role** key in this repository.

If the page says cloud save is unavailable, check that the Supabase project is active, anonymous sign-ins are enabled, and the `calculator_saves` table is present. Saves still work in the current browser while cloud sync is unavailable.

## Change the game links

Open the site, fill in a game name, URL, and optional logo image URL in one of the three **Game links** rows. Typing `0000` in the calculator opens the secret games tab. Game settings save in the browser and sync to Supabase.

## Important browser note

The secret tab opens as `about:blank` when `0000` is entered. A website cannot guarantee that browser activity is hidden from history.

## Need help?

Cloudflare's official guide: [Deploy static HTML with Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).
