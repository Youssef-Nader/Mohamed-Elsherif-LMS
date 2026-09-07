# Styles Structure

CSS is loaded from `src/index.css` in cascade order. Keep new rules in the most specific file below instead of adding broad overrides.

- `site.css`: global tokens, light/dark theme, resets, containers, shared buttons, brand basics, and older shared page foundations.
- `layout.css`: fixed header, reading progress, sidebar drawer, menu controls, WhatsApp button, and back-to-top button.
- `sections.css`: homepage/course/contact/auth component foundations and course detail dialog.
- `refresh.css`: visual refresh layer for the hero artwork, skills ribbons, motion, and small homepage presentation tweaks.
- `polish.css`: final typography, spacing, learning-card styling, auth-page polish, and responsive refinements.
- `catalog.css`: `/levels` and `/courses` catalog pages, filters, empty states, and level metadata.
- `parent.css`: `/parent` dashboard page only.
- `footer.css`: footer layout, footer navigation, footer contact links, and legal bar.

When editing:

- Put layout/navigation changes in `layout.css`.
- Put parent page changes in `parent.css`.
- Put course or level listing changes in `catalog.css`.
- Put footer-only changes in `footer.css`.
- Avoid adding the same selector to multiple files unless the later file is intentionally refining an earlier foundation.
