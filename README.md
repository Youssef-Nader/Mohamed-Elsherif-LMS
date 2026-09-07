# Mohamed Samir - Learning platform

Arabic-first React / Vite frontend with a shared level-based course catalog.

## Development

```sh
npm install
npm run dev
npm run build
npm run lint
npm test
```

## Routes

- `/`: homepage, level preview, three-course preview, benefits, and contact.
- `/levels`: all learning levels.
- `/courses`: complete catalog with level filters.
- `/courses?level=beginner`: beginner courses only.
- `/courses?level=intermediate`: intermediate courses only.
- `/courses?level=advanced`: advanced courses only.
- `/login`: login form.
- `/register` and `/signup`: registration form.
- Other paths render a 404 page.

The query string is the source of truth for catalog filters. Refreshing, sharing a
link, or using browser back/forward preserves the selection. Invalid level values
fall back to all courses. Page navigation scrolls to the top; changing only the
filter keeps the current scroll position.

## Where to make changes

- `src/data/levels.js`: level names, descriptions, images, icons, URL helpers,
  and filtering. This also supplies registration options.
- `src/data/courses.js`: course records. Each `level` must match an ID above.
- `src/components/levels/LevelGrid.jsx`: shared level cards.
- `src/components/courses/CourseCatalog.jsx`: filters, results, and dialog state.
- `src/components/courses/CourseCard.jsx`: one course card.
- `src/components/courses/CourseDialog.jsx`: course details and enrollment link.
- `src/components/home/`: homepage sections and catalog preview wrappers.
- `src/components/auth/AuthForm.jsx`: shared account fields and local validation.
- `src/components/layout/`: brand, fixed header, sidebar, and footer.
- `src/layouts/Layout.jsx`: page shell, theme preference, and floating actions.
- `src/pages/`: route-specific composition.
- `src/routes/Router.jsx`: internal links; `src/App.jsx` selects the page.

To add a level, add its definition in `levels.js`, then assign its ID to course
records. The cards, URL filters, and signup options consume this shared definition.
To add a course, add a record in `courses.js`; the full catalog includes it
immediately. The homepage remains limited to its first three records.

## Styles and formatting

CSS imports in `src/index.css` intentionally retain their existing cascade order:

1. `site.css`: tokens, resets, layout foundations, and common components.
2. `sections.css`: course, benefit, contact, dialog, and account foundations.
3. `refresh.css`: sidebar, hero portrait, ribbons, and floating actions.
4. `polish.css`: typography, fixed header, level cards, and account presentation.
5. `catalog.css`: dedicated catalog pages, filter links, and preview CTAs.

Each declaration is on its own line. Section comments identify related styles,
responsive rules, and motion preferences. Modify existing component rules rather
than appending another override layer. `.prettierrc.json` records the formatting
conventions for editor integrations. Component comments explain responsibility,
state behavior, and major UI sections rather than narrating each line.

The palette is #3368A0, #66A3BF, #C8DFDB, and #F2EFE7. Dark mode uses compatible
surfaces. The page respects reduced-motion settings. Fonts have local fallbacks.

## Preview boundaries and hosting

Courses are sample content. Account forms validate inputs but do not create an
account or authenticate anyone; they clearly report this limitation. No account
information is saved or transmitted. Contact and parent portal links retain their
existing destinations.

The production output is `dist/`, as configured in `.openai/hosting.json`.
The static host must serve `index.html` for application routes including `/levels`
and `/courses`, so direct visits and refreshes work.

## Checks

`npm test` checks that every level URL resolves to only its matching courses,
unknown query values fall back safely, and catalog identifiers are consistent.
Use `npm run build` and `npm run lint` after changing application code.
