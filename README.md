# Wish-Diwali 🪔

A little Diwali surprise for someone special. One page, no build step, works on GitHub Pages.

**How it goes**

1. A dark night sky. She taps the diya and lights it — the whole page warms up.
2. A hand-typed letter.
3. Six unlit diyas. Each one she taps reveals a reason she lights up your life.
4. The big question. The "No" button runs away. "Yes" keeps growing.
5. Fireworks. Tap anywhere for more.

## Make it hers

Open `script.js` and edit the `CONFIG` block at the top:

- `herName`, `yourName`
- `letter` — one line per paragraph, `{her}` becomes her name
- `reasons` — six is the sweet spot
- `question`, `noTexts`, `finalLine1`, `finalLine2`
- `diwaliDate` — for the "Diwali in N days" line
- `music` — optional. Drop an `.mp3` next to `index.html` and set the filename.

You can also override both names from the link without touching code:
`https://<user>.github.io/Wish-Diwali/?to=HerName&from=YourName`

Either one works on its own. Whatever isn't in the link falls back to `CONFIG`.

## Deploy on GitHub Pages

1. Push to `main`.
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main` / `/ (root)`.
3. Wait a minute, then open `https://<user>.github.io/Wish-Diwali/`.

## Files

```
index.html   structure
style.css    looks
script.js    CONFIG + diyas, letter, fireworks
```
