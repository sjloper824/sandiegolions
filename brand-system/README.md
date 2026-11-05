# San Diego Lions Brand System

The full brand guide for the San Diego Lions AFC: website, Instagram and Facebook, Mailchimp email, flyers, signage and sponsor material. People and AI tools making anything for the club should follow it.

How this folder is organized:

- `README.md` (this file): the brand book. Read it first.
- `1-website.md` … `6-sponsors.md`: one section per channel.
- `tokens.json` / `tokens.css`: colours, type, spacing, corners and shadow, the single source of truth.
- `components/<Name>/`: each template's rules (`README.md`) and a live example (`preview.html`; open it in a browser).
- `assets/Logos`, `assets/Photos`: the approved logos and club photos.

The San Diego Lions are a social club first, with a proud record on the field. Everything we make should feel like the club: welcoming to first-timers, a bit cheeky, and serious about footy. Visually that means a white-forward layout, maroon as the club colour, charcoal and yellow as small accents, bold condensed headlines, squared buttons inside rounded panels, and real club photos in white frames.

This guide covers the website and everything else the club designs: Instagram and Facebook, Mailchimp emails, flyers, signage, game-day graphics and the sponsor deck. Each has its own section after this one.

## Rules for anyone using this guide (people and AI)

1. Read this page first, then the section for the thing you're making.
2. Use colour, type, spacing and radius tokens by name (`maroon-600`, `section`, `sp-5`, `r-module`). Never introduce a new colour, font or radius.
3. Use real club photos only. No stock photos, no AI-generated images, no illustrations of people.
4. Never invent facts. Dates, scores, opponents, prices, names and quotes come from the club. When something is unknown, write a visible placeholder in square brackets, such as `[OPPONENT]` or `[DATE]`, and say so.
5. Every section, post, email and flyer ends with a next action: join, come to training, see the schedule, RSVP, donate.
6. The social side of the club gets as much visual weight as the sport. Don't make a piece that's all footy or all party unless it's about one event.
7. Check phones. Every web change is checked at 390px wide and on a 13-inch laptop (about 1440×810 and 1280×720 visible).
8. When in doubt, copy an existing piece in this guide rather than designing something new.

## Voice and copy

We sound like a teammate inviting a mate along: plain, warm, a little cheeky, never corporate.

- Write short sentences in the active voice. "Come to a Tuesday or Thursday session and we'll teach you the rules and the skills from scratch."
- Lead with the invitation, not the rules. "Australian football, built for everyone."
- Humour stays friendly and inclusive: "Est. good times, '97", "Come for the footy. Stay for everything else."
- Say "footy", "the club", "the Lions", "training", "socials", "first bounce", "Nationals". Explain footy by comparison only in recruitment copy ("Like soccer if you could use your hands").
- Headlines are set in Anton and always display uppercase. Write them in sentence case in the source text and let the style uppercase them.
- Body copy and buttons are sentence case in the source; button styling uppercases them.
- Scores use the AFL format: goals.behinds (total), for example `8.6 (54)`.
- Times are written `5:30 – 7:30 PM`, days `Tuesdays & Thursdays`, dates `Sat, Apr 12`.
- No emoji on the website, in email headlines, on flyers or on signage. Social captions may use up to two.
- The club email is SanDiegoLionsAFC@gmail.com. The club is a 501(c)3 nonprofit; say so on sponsor and donation material.

## Colour

White carries the layout. Maroon is the club colour. Charcoal and yellow are accents. Navy exists only inside the logo artwork.

| Share | Token | Role |
|---|---|---|
| ~60% | `white` | Page and card backgrounds |
| ~25% | `maroon-600`, `maroon-700` | Rounded panels, eyebrows, headline accent words, maroon buttons |
| ~10% | `charcoal` | Footer, header rule, dark cards, text on yellow |
| ~5% | `yellow-500` | Primary buttons, short rules, badges |
| logo only | `navy-crest` | Inside the crest and lion lockup, nowhere else |

Pairs that pass for text:

- `ink` or `ink-soft` on `white`
- `maroon-600` on `white` (eyebrows, accent words, links)
- `white` or `maroon-100` on `maroon-600` and `maroon-700`
- `yellow-500` on `maroon-700`, `maroon-600` or `charcoal` (eyebrows, badges)
- `charcoal` on `yellow-500` (yellow buttons, badges)
- `white` on `charcoal`

Never:

- yellow text on white (1.7:1)
- tan, cream or gold section backgrounds (the club rejected these)
- gradients, glows or drop shadows, except `shadow-frame` on photo frames
- navy anywhere outside the logo artwork
- other hues

The website has a dark theme that follows the visitor's phone setting. Social, email and print always use the light values.

## Typography

| Face | Family token | Use |
|---|---|---|
| Anton | `display` | Headlines, big numbers, card titles. Always uppercase. |
| Work Sans | `body` | Everything else: paragraphs, labels, buttons, nav |
| Permanent Marker | `marker` | Handwritten accent, at most two per page or piece |

- All three are free Google Fonts. In Canva, use the same three families.
- Headings get `text-wrap: balance`. Keep paragraphs under about 65 characters wide.
- Every section heading has an `eyebrow` above it and a short yellow rule (64×5px) under it or under the intro.
- Permanent Marker is for things like a tilted badge ("Est. good times, '97") or a one-line aside ("We care about our community"). Never a headline, never a paragraph, never more than two per piece.
- The type scale is in the Typography tab. On phones, the hero drops to about 38px and section headings to 32px.

## Logos

Three marks are approved. Find them under Assets › Logos.

- **Lion lockup** (`clean-logo.png`): the everyday logo. Gold lion with "SAN DIEGO LIONS" and "AUSTRALIAN FOOTBALL CLUB". Use it in the site header, footer (knocked out to white), social templates and flyers.
- **Crest** (`crest-logo.png`): the formal shield. Use it for anniversaries, awards, life-member material, the sponsor deck cover and printed signage. It's the only place navy appears.
- **Script wordmark** (`script-wordmark.png`): retro maroon script with yellow speed lines. Use it for merch-style and social-event graphics only, never as the main logo.

Rules:

- Clear space around any logo is at least a quarter of its height.
- Minimum size is 32px tall on screen and 0.6 in tall in print. The crest's small text needs at least 72px or 1 in.
- Place logos on white, or knocked out to all-white on maroon or charcoal. Never on a busy part of a photo.
- Never recolour, stretch, rotate, outline, add effects to or redraw a logo. Never set "San Diego Lions" in a font and present it as the logo.
- We only have PNG versions. Large-format print (tents, banners) needs vector files (SVG, AI, PDF or EPS). Ask the board for the original artwork before ordering anything bigger than a flyer.

## Photography

- Use real club photos only, from the club Google Drive, the club Canva and Nationals galleries.
- Shoot or choose action, huddles, team lines and socials: people together, in kit or in costume. Faces and jerseys beat empty fields.
- Every photo on the website and in social or print layouts sits in a **white frame**: 10–12px of white, `r-frame` corners, `r-photo` inside, `shadow-frame`, tilted 1.2–1.4°. On phones and in email, the tilt comes off.
- Default crop is 4:3. Use 1:1 for small photos and 4:5 for social.
- Don't use filters, duotones or colour overlays. Text never sits directly on a photo; put it on a panel next to or over a solid block.
- Children appear only in photos from events where parents agreed to photography, such as the Big Brothers Big Sisters clinic. Never name a child.
- Sponsor logos showing on jerseys are fine and welcome.

## Shape, space and layout

- **Squared versus rounded is our signature.** Buttons, chips, tags and fields are square (`r-btn`, 2px). Panels and cards are rounded (`r-card` 16px, `r-module` 24px). Don't round a button or square a panel.
- Big coloured panels (`maroon-600`, `maroon-700`, `charcoal`) are rounded and inset from the page edge by 12–32px. They're never full-bleed bands.
- Spacing comes from the scale: `sp-2` 8, `sp-3` 16, `sp-4` 24, `sp-5` 32, `sp-6` 48, `sp-7` 64, `sp-8` 96. Website sections use 56–88px of vertical padding.
- Lay out with a two-column split: text one side, framed photo the other. On phones it stacks.
- Cards in a row share the same padding, baseline and height. Use three to a row on desktop and one on phones.
- Use one primary button (yellow) per section. A second action is a ghost button (maroon outline) or a text link with a yellow underline.

## Iconography

We barely use icons. The website uses three thin-stroke inline icons: menu, close and camera, the last only for photo placeholders. Graphics, flyers and signage use no icons, no emoji and no clip art. If you need to show a thing, use a photo or a word.

## Accessibility

- Text meets 4.5:1 contrast. Large Anton headlines meet at least 3:1.
- Buttons and links are at least 44px tall on phones and have a visible focus outline in yellow or maroon.
- Every photo has alt text that says who is in it and what they're doing.
- Never rely on colour alone. Schedule tags carry a word (Game, Social) as well as a colour.

## Where things live

- **Website code:** GitHub repo `sjloper824/sandiegolions`, hosted on Netlify. Colours are in `css/tokens.css`. AI editing rules are in the repo's `DESIGN.md`.
- **Photos:** club Google Drive (Lions Photos, Lions raw content folders) and club Canva.
- **Templates:** this guide's Components tab shows each template. Rebuild them in Canva using the same tokens.

## Sections in this guide

- **Website:** page structure, modules, breakpoints and rules for editing the site with AI.
- **Social:** Instagram and Facebook sizes, the post templates, game-day graphics and captions.
- **Email:** Mailchimp layout, fonts, buttons and the four email types.
- **Flyers:** print sizes, bleed, print colours and the flyer layout.
- **Signage:** tents, banners, flags and A-frames, with sizes and distance legibility.
- **Sponsors:** logo placement, recognition and the sponsor deck.
