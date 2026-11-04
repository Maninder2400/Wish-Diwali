# Wish-Diwali 🪔

A little Diwali surprise for someone special. One page, no build step, works on GitHub Pages.

**How it goes**

1. A dark night sky. They tap the diya and light it — the whole page warms up.
2. A hand-typed letter.
3. Six unlit diyas. Each one they tap reveals a reason they light up your life.
4. The big question. The "No" button runs away. "Yes" keeps growing.
5. Fireworks. Tap anywhere for more.

## Two modes, one page

The same page works for your partner **and** your best friends. Pick a mode from the link:

| Link | Who it's for |
|---|---|
| `…/Wish-Diwali/?to=Simran` | partner (`love`, the default) |
| `…/Wish-Diwali/?mode=friend&to=Rahul` | a best friend |
| `…/Wish-Diwali/?mode=friend&to=Priya&from=Mani` | a best friend, with your name in the footer |

The friend text has no he/she in it, so one link style works for everyone. Whatever isn't in the link falls back to `CONFIG`.

## Make it yours

Open `script.js` and edit the `CONFIG` block at the top:

- `defaultMode` — `"love"` or `"friend"`, used when the link has no `?mode=`
- `yourName` — shown in the footer
- `diwaliDate` — for the "Diwali in N days" line
- `music` — optional. Drop an `.mp3` next to `index.html` and set the filename.
- `modes.love` and `modes.friend` — each has its own:
  - `defaultName`, `footerHeart`
  - `letter` — one line per paragraph, `{name}` becomes their name
  - `reasonsTitle`, `reasons` (six is the sweet spot), `allLit`
  - `question`, `noTexts`
  - `bigYes`, `finalLine1`, `finalLine2`

Want a third mode (say `sister`)? Copy one of the blocks under `modes`, give it a new key, and use `?mode=sister`.

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
