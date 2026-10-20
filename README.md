The system for a digital marketer's portfolio covering four disciplines: **website design, social media management, content creation and drone videography**. Its page structure follows the Nino personal-portfolio template (hero, client logos, about with counters, numbered services, project grid, testimonials, stories, contact, a big closing "Let's work"). The work is the hero: the interface stays dark, quiet and precise so photos, reels and aerial footage carry the color.

## Content fundamentals

- **First person, plain verbs.** "I plan, shoot and ship…", not "We leverage synergies". Address the reader as *you* in calls to action: "Have a project in mind?"
- **Lead with the result, then the work.** Every project card states one outcome in numbers when one exists: "+212% reach in 6 weeks", "3.4× ROAS", "1.2k → 9.8k followers". Results go in `MetricBadge` or `StatCounter`, set in `stat` or `label`, colored `signal`.
- **Sentence case** for headings, buttons and titles ("Selected work", "Get in touch"). UPPERCASE only in `label` (eyebrows, tags, service numbers).
- **Numbers are real.** Never publish placeholder stats; if there is no figure, omit the badge.
- **No emoji, no exclamation marks** in interface copy. Client quotes may keep theirs.
- **Spec-sheet voice for aerial work:** drone, resolution, frame rate and altitude in `caption` mono, separated by " · ": "DJI Mavic 3 · 4K 60fps · 120 m AGL".

## Visual foundations

**Color.** Night (`dark`) is the default theme; Day (`light`) is the alternate. Page ground is `surface`; cards are `surface-raised` with a 1px `line` border; media wells and the footer are `surface-sunken`. Text is `ink`, secondary text `ink-muted`. There is one accent, `signal` (lime by night, deep olive by day): use it for the primary button, active navigation, result metrics, eyebrow numbers and the focus ring, and nowhere decorative. Text on a `signal` fill is `on-signal`. `flare` (orange) belongs only to video and aerial content: the play badge (a `flare` disc with an `on-flare` triangle), the REC dot and star ratings, on `flare-soft` when tinted. Text over imagery sits on `scrim` in `on-scrim`.

**Type.** Three Google Fonts families. Headlines in `display` (Bricolage Grotesque): `display-xl` for the hero name and closing CTA, `display` for section titles, `heading` for case-study titles, `title` for card titles, `stat` for counters. Reading text in `sans` (Instrument Sans): `body-lg` for intros and quotes, `body` for everything else, `body-strong` for names and buttons. Meta in `mono` (JetBrains Mono): `label` (uppercase) for eyebrows like "02 — SERVICES" and tags; `caption` for dates, read times and flight specs. Keep body text within `measure`.

**Spacing & layout.** 4px base. Content sits in a `container` (1200px) with `space-6` gutters (`space-4` on phones). Sections are separated by `space-24` (`space-16` on phones); a section title is followed by `space-12`. Cards pad `space-6` (`space-8` when large) and sit in a 12-column grid with `space-6` gaps: projects run 2-up on desktop, 1-up on phones; services 2×2; stories 3-up.

**Radii.** Soft rectangles: `radius-lg` for cards, `radius-xl` for the hero portrait and full-width video, `radius-md` for thumbnails, `radius-sm` for inputs and metric badges, `radius-full` for buttons, tags, avatars and the play badge.

**Borders & shadows.** Borders do the work: `line` for hairlines, `line-strong` for input and secondary-button outlines. Night uses no shadows. In Day, `shadow-lift` appears on hovered project and story cards only.

**States.** Hover: cards lift 4px (Day adds `shadow-lift`), project media zooms to 1.04 over 400ms; links underline. Focus: every interactive element shows a 2px `signal` outline with a 3px offset, which holds 3:1 or better on every surface in both themes. Disabled: 40% opacity, no pointer. Motion: 200–400ms ease-out; respect `prefers-reduced-motion` by removing zoom and lift.

## Imagery and video

- Show real client work in a consistent frame: projects at **4:3**, video and aerial at **16:9**, social posts at **4:5** inside a phone-width card, the hero portrait at **4:5** with `radius-xl`.
- Aerial footage autoplays muted and looped in the hero or a project card only when it is under ~6 MB; otherwise show a still with the `flare` play badge and open the full reel on click.
- Never add color washes or gradient overlays to photography; use `scrim` only where text or a badge sits on an image.
- Credit locations and clients in `caption` beneath media.

## Iconography

No icon set ships with the template files used here. Use **Lucide** (outline, 1.75px stroke, 20px default, 16px in tags) and color icons with `ink`, `ink-muted` or `signal`. The only filled glyphs are the play triangle and rating stars (`flare`). Social links in the contact section use each network's official glyph in `ink-muted`, `ink` on hover.

## Logo

There is no logo yet. Set the name as a wordmark in `display` at 22px, weight 700, `ink`, followed by a 6px `signal` dot. Replace with the real mark when one exists.

## Components

`NavBar`, `Button`, `Tag`, `SectionHeader`, `StatCounter`, `ServiceCard`, `ProjectCard`, `MetricBadge`, `Testimonial`, `StoryCard`, `ContactForm` and `CtaBanner` map one-to-one onto the template's sections. Each card's notes say what content it expects. They are React 18 components exported on `window.Portfolio`; the Tailwind version of the template can use the same tokens via its `theme.extend` (colors as CSS variables, `fontFamily.display/sans/mono`, the spacing and radius scales).
