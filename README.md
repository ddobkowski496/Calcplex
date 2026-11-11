# Game Library package

This download contains a ready-to-deploy game-only site in the `site/` folder. It includes the 43 supplied games, the site JavaScript, the separate player page, and Three.js r149 for NASCAR 27.

## Deploy on Cloudflare Pages

1. Download and extract this ZIP.
2. Put the extracted `README.md` and `site/` folder in the root of your GitHub repository.
3. In Cloudflare Pages, connect that repository. Use **None** as the framework preset, leave the build command blank, and set the build output directory to `site`.
4. Deploy.

Three oversized game files are stored as 20 MiB pieces under `site/games/chunks/`. `site/game-library.js` assembles the pieces when a player opens those games. Keep all pieces together and do not rename them. Every published site asset is below Cloudflare Pages' 25 MiB per-file limit. The collection is about 453 MB overall, so uploading and the first deploy can take time. See [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/).

The game player uses a sandboxed iframe. Games that require storage or other restricted browser features may behave differently.
