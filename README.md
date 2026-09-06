# Mohamed Samir — LMS homepage

Arabic-first React 19 / Vite site using the existing project dependencies.

## Local development

```sh
npm install
npm run dev
npm run build
npm run lint
```

## Structure

- `src/components/home/`: Hero, AcademicStages, AvailableCourses, Benefits, Contact, shared SectionHeading.
- `src/components/layout/`: shared Header, Brand, and Footer.
- `src/components/auth/AuthForm.jsx`: shared login/registration form with native validation, password visibility, and matching-password checks.
- `src/components/ui/Icon.jsx`: consistent accessible decorative SVG icons.
- `src/layouts/Layout.jsx`: header/footer composition and persistent light/dark preference.
- `src/pages/`: HomePage, LoginPage, RegisterPage.
- `src/routes/Router.jsx`: same-origin history navigation; App handles route selection and browser back/forward.
- `src/data/courses.js`: clearly marked preview courses and stage metadata.
- `src/styles/`: base/layout and section styles, responsive rules, reduced-motion support.

## Routes and interactions

- `/`: homepage, with `#stages`, `#courses`, `#benefits`, and `#contact` sections.
- `/login`: login form.
- `/register` and `/signup`: registration form.
- Unknown paths show a useful 404 page.
- Stage cards filter courses and move to the catalog. Filter buttons reset or change the stage. Course details open in a native modal with Escape support and focus containment.
- Dark mode is stored as a device preference. No account information is stored or transmitted.

## Design

White light-mode background with the requested #60241E, #95271D, #B34A44, and #E77B49 palette. Dark mode uses warm charcoal surfaces and lighter copper text for contrast. The hero has opposing floating code panels and an animated portrait entrance. Stage/course images zoom on hover; benefits change background, text, icon size, and scale. Mobile layouts and reduced-motion preferences are supported.

## Content and launch boundaries

This deliverable is the requested frontend homepage with account routes, not a backend LMS. Sample course names, counts, and syllabuses are visibly marked as preview content. Replace `src/data/courses.js` with verified catalog data or an API before launch. Authentication forms validate inputs but explicitly report that account services are not connected; no account is created and no login is simulated.

The portrait and verified contact number come from the supplied Mohamed Samir reference. Contact actions use WhatsApp and telephone links. Existing parent portal, terms, privacy, and developer-credit destinations are preserved as external links. Google Fonts supplies IBM Plex Sans Arabic and Space Grotesk with system fallbacks. Course/stage photographs are bundled locally from Unsplash.

## Reference review

- https://www.mohamed-elsherief.online/ — Mohamed Samir programming/AI content, portrait, code motifs, contact/footer destinations.
- https://khaled-sakr.com/ — bold instructor introduction and approachable learning benefits.
- https://www.gamal-elshafey.online/ — floating subject elements and six-feature structure.
- https://fakr-edu.online/ — spacious teacher-led hero and straightforward hierarchy.
- https://basmath.online/ — orbiting subject motifs and clear stage/course flow.

All five references were opened and reviewed. Course feeds on the references showed loading states during inspection, so their catalog data was not copied. No separate design.md was present; the supplied design outline guided implementation.

## Hosting

Production output is `dist/`, configured in `.openai/hosting.json`. A static host must provide SPA fallback to `index.html` for direct `/login` and `/register` navigation (Cloudflare static assets supports this SPA pattern when no top-level 404.html is emitted).

## Validation

Production build and ESLint checks pass. The development server returns HTTP 200. Browser visual/interaction QA was not run for the new site; the browser review covered the requested reference sites.
