# Calcplex

Calcplex is a calculator first website. The home page contains regular, scientific, and graphing calculator modes. The keypad has a hidden four digit shortcut that opens the separate library in an `about:blank` tab. The home page does not label or link to that library.

## Put the files on GitHub

1. Open your Calcplex repository on GitHub.
2. Choose **Add file**, then **Upload files**.
3. Upload every file and folder from this package, keeping the same folder names. In particular, keep `games/`, `game-library.html`, `game-library.js`, `player.html`, `app.js`, and `index.html` together.
4. Type `Update Calcplex` in the commit message box and choose **Commit changes**.

## Publish with Cloudflare Pages

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Choose **Create application** → **Pages** → **Connect to Git**.
3. Select the `Calcplex` GitHub repository.
4. Set framework preset to **None**, leave the build command empty, and set the build output directory to `/` (the repository root).
5. Choose **Save and Deploy**. Wait for the deployment to finish, then open its `pages.dev` address.

The calculator saves history automatically in this browser and tries anonymous cloud save through the configured Supabase project. Cloud save needs anonymous sign-in enabled and the `calculator_saves` table and policies created in Supabase. If cloud saving is unavailable, calculator history remains saved on that device.

The `about:blank` tab is only a blank-tab wrapper around the library. It does not guarantee that browser history, network activity, or organization restrictions are hidden or bypassed.
