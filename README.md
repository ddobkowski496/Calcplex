# Calcplex Game Library

Calcplex now serves the game-only site. The website files are at the top level of this repository: `index.html`, `game-library.js`, `player.html`, and the `games/` folder.

## Put it on Cloudflare Pages

1. Open Cloudflare and choose **Workers & Pages**.
2. Choose **Create application** → **Pages** → **Connect to Git** and select this **Calcplex** repository.
3. Set **Production branch** to `main`, **Framework preset** to **None**, leave the **Build command** blank, and set **Build output directory** to `.`.
4. Click **Save and Deploy**. Cloudflare will publish the site and redeploy it when you push updates to `main`.

## Keep all game files together

The `games/` folder contains the supplied games. The three largest games are saved as numbered pieces in `games/chunks/`; `game-library.js` joins those pieces when you open one of those games. Keep the chunk names and folder structure unchanged.

In the site, enter **0000** on the calculator to open the game library. Games load in the embedded player. Some games may behave differently if their original code depends on browser features restricted inside an embedded frame.
