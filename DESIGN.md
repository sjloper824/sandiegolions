# San Diego Lions — Design Guide

Read this before changing anything on sandiegolions.com or making anything else for the club (social posts, emails, flyers, signage, sponsor material). It applies to people and AI tools alike.

The full brand system, with live examples of every template, is in [`brand-system/`](brand-system/README.md). This file is the short version.

## The feel

A social club first, with a proud record on the field: welcoming to first-timers, a bit cheeky, serious about footy. Visually: white-forward layouts, maroon as the club colour, charcoal and yellow as small accents, bold condensed headlines, squared buttons inside rounded panels, and real club photos in white frames.

## Rules (non-negotiable)

1. **Use the tokens.** Colours, spacing and corners come from `css/tokens.css`. Never type a new hex value, font or radius into a page.
2. **Real photos only.** Use club photos from `images/`. No stock photos, AI images or illustrations of people.
3. **Never invent facts.** Dates, scores, names, prices, sponsors and stats come from the club. If you don't have one, write `[PLACEHOLDER]` and flag it. Never publish a placeholder.
4. **Every piece ends with one clear action** (Join, RSVP, Come to training, See the schedule).
5. **Social equals sport.** Social events get the same billing as games.
6. **Check phones.** Test every change at 375px wide and on a 13" laptop (about 1280–1440px).
7. **Copy what exists.** Build new sections from the existing patterns below before inventing new ones.
8. **Don't touch the logo artwork.** No recolouring (except the all-white knockout), stretching, redrawing or retyping.

## Colour

| Token | Hex | Use |
|---|---|---|
| `--white` | #FFFFFF | Page ground (about 60% of any layout) |
| `--maroon-600` | #7A2A45 | Club colour: panels, accents, headline accent word, header Join button (about 25%) |
| `--maroon-700` | #5F2037 | Deeper panels (social club panel, event posts) |
| `--charcoal` | #17110F | Explainer cards, training card, details blocks, rules (about 10%) |
| `--yellow-500` | #F7BC3C | Primary button, short rules, eyebrows on dark (about 5%) |
| `--ink` | #271B20 | Headings and body text on white |
| `--ink-soft` | #5B4A51 | Secondary text on white |
| `--maroon-100` | #EEDBE1 | Paragraph text on maroon panels |
| `--maroon-50` | #F7ECEF | Photo placeholders, subtle fills |
| `--line` | #E6DCDF | Hairlines and tile borders |
| navy #15488B | — | Inside the logo artwork only. Never anywhere else. |

- Text pairs that pass contrast: ink or ink-soft on white; white or maroon-100 on maroon-600/700 or charcoal; charcoal on yellow; yellow on charcoal or maroon-700.
- Never: yellow text on white, maroon text on charcoal, tan or beige backgrounds, gradients, other hues.
- The website has a dark theme that follows the visitor's phone setting (already in `tokens.css`). Social, email and print always use the light values.

## Type

Loaded from Google Fonts.

| Role | Font | Spec |
|---|---|---|
| Headlines | Anton | Uppercase. Hero 58px, page title 54, section 40, card title 21, stats 37 |
| Body | Work Sans | 16px body, 17px lead, 14px small. Weights 400–800 |
| Eyebrows and labels | Work Sans 800 | 13px uppercase, 0.16em letter spacing |
| Buttons | Work Sans 800 | 14px uppercase, 0.05em letter spacing |
| Accent | Permanent Marker | At most once per page or piece, 2–5 words, never for info someone needs |

Headlines are short statements ending in a full stop ("Nobody gets here alone."). One accent word may be maroon.

## Shape and space

- Spacing scale: `--sp-2` 8 · `--sp-3` 16 · `--sp-4` 24 · `--sp-5` 32 · `--sp-6` 48 · `--sp-7` 64 · `--sp-8` 96.
- Corners: buttons 2px (`--r-btn`), photos 12px, cards 16px (`--r-card`), photo frames 22px, panels 24px (`--r-module`, 16px on phones).
- Photo frame shadow: `0 14px 28px -12px rgba(23,17,15,0.35)`.
- **Squared buttons inside rounded panels.** Never round a button. Panels are inset from the page edge, never full-bleed.

## Website patterns

| Pattern | Spec |
|---|---|
| Section heading | Eyebrow (maroon on white, yellow on dark) → Anton heading → 64×5px yellow rule → optional lead in ink-soft |
| Primary button | Yellow fill, charcoal text, 2px corners, 15×28px padding. One per section |
| Secondary button | 2px maroon border and text (white border at 70% on dark panels) |
| Text link | Maroon uppercase with a 3px yellow underline |
| Panel | Rounded maroon-600/700 or charcoal block: copy on one side, framed photo on the other. Never two same-colour panels in a row |
| Explainer card | Charcoal, 40×5px yellow bar, white Anton title, three to a row |
| Link card | White, 2px charcoal border, small maroon label, Anton title, text link |
| Photo frame | 10–12px white frame, 1.2–1.4° tilt (alternate direction), no tilt on phones. Max height `min(60vh, 480px)` |
| Stat band | Four real club numbers in Anton on a maroon-600 panel |
| Training card | Charcoal, yellow labels (Days, Time, Where) over white Anton values |
| Next game card | White with a 2px charcoal border; "LIONS VS [OPPONENT]"; "Off-season" when there's no game |
| Schedule row | Charcoal date block, a Game (maroon) or Social (yellow) tag, title, time, venue. Games and socials only; training stays in the training card |

## Site structure

- Pages: `index.html`, `schedule.html`, `board.html`, `life-members.html`, `sponsors.html`, `contact.html`, `thanks.html`.
- Nav order: Schedule, Board Members, Life Members, Sponsors, Contact, plus the maroon Join button.
- `css/tokens.css` holds the tokens. `js/site.js` runs the phone menu (below 1100px) and the schedule filter.
- Breakpoints: 1100px (menu collapses), 900px (two columns stack), 640px (phone spacing, full-width buttons), 520px (smallest phones).
- The contact form uses Netlify Forms (`data-netlify="true"`) and sends people to `thanks.html`. Keep the form name and the hidden `form-name` field.
- Images: resize to about 1600px wide max, use descriptive `alt` text, keep files in `images/`.
- Life Members entries need: photo, name, nickname, year (e.g. Michael Ross, "Rossi", 2026).

## When editing with AI

- Change only what was asked. Don't restyle, rename classes or reorder sections on the side.
- Reuse existing classes and patterns. If something new is truly needed, build it from the tokens and add it to this file.
- Keep the site plain HTML, CSS and JS with no build step or framework.
- After a change, check the page at phone and laptop widths and in dark mode.

## Beyond the website

The brand system covers these in full, with templates:

- **Social (Instagram, Facebook):** 1080×1350 by default, 60px margins, Anton headlines, one framed photo, about 25 words max on the graphic. Game-day set: Next game, Team list, Result (AFL score format `8.6 (54)`). Hashtags: #SanDiegoLions #footy #AussieRules #USAFL #SanDiego.
- **Email (Mailchimp):** 600px, lion lockup header, 4px charcoal rule, one photo, Anton headline, one yellow button, maroon footer with "A 501(c)3 nonprofit".
- **Flyers:** Letter by default, 0.125 in bleed, 0.25 in safe zone, 300 dpi. QR codes are black on white, at least 1 in, linked to a specific page.
- **Signage:** vector logos only, 1 in of letter height per 10 ft of viewing distance, one colour field per piece, yellow only as a thin rule.
- **Print colours (confirm with the printer):** maroon-600 ≈ PMS 209 C, maroon-700 ≈ PMS 7421 C, yellow ≈ PMS 136 C.

## Contact

Questions about the brand: SanDiegoLionsAFC@gmail.com.
