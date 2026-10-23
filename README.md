# San Diego Lions AFC website

Plain HTML/CSS/JS. No build step, no framework. Hosted on Netlify, deployed from this GitHub repo.

## What's in here

| File | Page |
|---|---|
| `index.html` | Homepage |
| `schedule.html` | Full schedule (games & socials) |
| `board.html` | Meet the Board |
| `life-members.html` | Life Members timeline |
| `sponsors.html` | Sponsors |
| `contact.html` | Contact form (Netlify Forms) |
| `thanks.html` | Shown after someone submits the contact form |
| `css/tokens.css` | Brand colors, spacing, corner radii. Change a color here and it changes everywhere |
| `js/site.js` | Phone menu + schedule filter |
| `images/` | Logos and club photos |

## Going live (first time)

1. **GitHub:** create a new repository (e.g. `sandiegolions-site`). Click **Add file > Upload files** and drag in everything *inside* this folder (the html files plus the `css`, `js` and `images` folders), not the folder itself. Commit.
2. **Netlify:** log in with GitHub > **Add new project > Import an existing project > GitHub** > pick the repo. Leave the build command **blank** and the publish directory as the root. Deploy. You'll get a test address like `something.netlify.app`.
3. **Test** the netlify.app address on your phone and computer. Submit the contact form once to confirm it works.
4. **Contact form emails:** in Netlify, open **Forms**. If form detection is off, enable it and redeploy. Then add an email notification for the `contact` form going to SanDiegoLionsAFC@gmail.com.
5. **Domain:** in Netlify go to **Domain management > Add a domain** and enter `sandiegolions.com`. Netlify shows the exact DNS records (or nameservers) to set. Enter those wherever the domain is registered. HTTPS turns on automatically once DNS connects (can take a few hours).
6. **Only after** the site loads on sandiegolions.com, cancel the Squarespace website plan. Keep the domain registration active wherever it lives.

## Making changes later

Edit a file on GitHub (pencil icon) and commit. Netlify redeploys automatically in about a minute.

- **Next game (homepage):** in `index.html`, search for `NEXT GAME`. Follow the comment.
- **Schedule events:** in `schedule.html`, search for `ADD EVENTS HERE`. Copy the example block for each game or social.
- **Life members:** in `life-members.html`, search for `ADD LIFE MEMBERS HERE`.
- **Board photos / sponsor logos:** upload the image to `images/`, then follow the comment above the board list or sponsor list.
- **Colors:** `css/tokens.css`.

## Before launch: still to fill in

- [ ] Confirm training time (site says 5:30–7:30 PM; old site also listed 6–8 PM)
- [ ] PayPal donate link: `sponsors.html`, two buttons currently `href="#"`
- [ ] "Add to your calendar" link: `schedule.html`, currently `href="#"`
- [ ] Life members: only Michael Ross ("Rossi", 2026) is listed; add the rest
- [ ] Sponsor logos (currently text tiles) and board member photos (currently initials)
- [ ] Contact form fields: check against what the club wants to collect
