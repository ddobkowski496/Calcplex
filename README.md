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

The calculator always keeps a local copy and supports optional email and password accounts for syncing calculation history across devices. In Supabase, enable **Authentication → Providers → Email**. If email confirmation is enabled, new users must click the confirmation link before signing in. The Supabase redirect allowlist includes `https://*.pages.dev/**`, and sign-up returns users to the current deployed site origin; set an additional exact redirect URL if you later use a custom domain.

Create the cloud table and row access policies in **SQL Editor** by running:

```sql
create table if not exists public.calculator_saves (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
alter table public.calculator_saves enable row level security;
drop policy if exists calculator_saves_owner on public.calculator_saves;
create policy calculator_saves_owner on public.calculator_saves
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

The Supabase publishable key in `app.js` is intended for browser use; the row policy limits each account to its own saved row. If cloud sync is unavailable, calculation history remains saved on that device.

The `about:blank` tab is only a blank-tab wrapper around the library. It does not guarantee that browser history, network activity, or organization restrictions are hidden or bypassed.
