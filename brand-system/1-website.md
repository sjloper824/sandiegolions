# Website

sandiegolions.com is plain HTML, CSS and a small script, hosted on Netlify from the GitHub repo `sjloper824/sandiegolions`. There's no framework and no build step. A merged change to `main` goes live in about a minute.

## Pages

| File | Page | Sections, top to bottom |
|---|---|---|
| `index.html` | Home | Hero, Stats panel, What is footy?, Social club panel, Training & Games, 30 years (board and life members), Community panel, Sponsor logos, Footer |
| `schedule.html` | Schedule | Page title, Training card + Where we train card, Games & socials list with filter, Closing panel |
| `board.html` | Board Members | Page title, Board grid (photo, role, name, bio), Closing panel |
| `life-members.html` | Life Members | Page title, Induction timeline (year, names, nicknames), Closing panel |
| `sponsors.html` | Sponsors | Page title with framed photo and "Where your support goes" card, Sponsor cards, Closing panel |
| `contact.html` | Contact | Page title with framed photo, Contact form + Come to training card |
| `thanks.html` | Thanks | Shown after the contact form is sent |

Navigation is the same on every page and in the same order: Schedule, Board Members, Life Members, Sponsors, Contact, then the yellow-on-maroon **Join the Lions** button. The footer repeats the same links plus the club email.

## Files

- `css/tokens.css` holds every colour, spacing step and radius. To change a brand colour, change it here only.
- Each page carries its own page styles in a `<style>` block. Shared parts (header, footer, buttons, modules) are written the same way on every page; when you change one, change it on every page.
- `js/site.js` runs the phone menu and the schedule filter.
- `images/` holds every photo and logo. Use lowercase file names with hyphens, such as `team-lineup.jpg`.

## Modules

Build new content from these. Each is shown in the Components tab.

- **Section heading:** eyebrow, Anton heading, yellow rule.
- **Two-column split:** copy on one side, framed photo on the other. It stacks on phones with the photo second.
- **Rounded panel:** a `maroon-600`, `maroon-700` or `charcoal` panel with `r-module` corners, inset from the page edge. It holds a split, a stat row or a closing call to action.
- **Closing panel:** the last block on every inner page. Copy and buttons sit on the left, a framed photo on the right.
- **Cards:** charcoal explainer cards with a yellow bar; white cards with a 2px charcoal border for links, sponsors and games.
- **Training and game cards:** a charcoal training card and a white outline game card, stacked.
- **Stat band:** four Anton numbers with uppercase labels on a rounded maroon panel.

## Sizing rules

- Content width tops out at 1200px with side padding of 20–40px. On phones the gutter is at least 16px.
- Each module should fit on one screen of a 13-inch laptop (about 1440×810 and 1280×720 visible). No photo is taller than 60% of the screen; the hero photo is capped at 58%.
- Headline sizes: hero `clamp(2.4rem, 4.2vw, 3.6rem)`, page titles `clamp(2.3rem, 4.2vw, 3.4rem)`, section headings `clamp(1.8rem, 3vw, 2.5rem)`.
- Breakpoints: the full nav collapses to a menu button below 1100px; two-column grids stack below about 900px; phone rules apply below 640px; the header Join button hides below 520px.

## Rules for editing the site with AI

- Read this guide and the repo's `DESIGN.md` before changing anything.
- Make the smallest change that does the job. Don't restyle sections you weren't asked to touch.
- Use the tokens in `css/tokens.css` and existing classes. Never add a colour, font, shadow or radius that isn't in this guide.
- Keep nav and footer links identical on every page. When you add or rename a page, update all of them.
- New photos go in `images/`, are resized to at most 1600px on the long side and saved as JPG at about 82% quality, and get alt text.
- Schedule events, the homepage next-game card and life members each have an instruction comment in the HTML (search for `ADD EVENTS HERE`, `NEXT GAME`, `ADD LIFE MEMBERS HERE`). Follow it.
- Never publish placeholder text such as `[OPPONENT]`. If a fact is missing, ask.
- The contact form posts to Netlify Forms (`data-netlify="true"`). Keep its `name="contact"` and hidden `form-name` field.
- Check every change at 390px, 1280×720 and 1440×810 before merging.
