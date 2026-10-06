# Brian Huang — portfolio site

Personal portfolio built with Astro, deployed on Vercel (pushing to `master` on GitHub deploys automatically).

## About the owner
Brian is a BU Computer Engineering student who is new to coding. Explain changes in plain language, say which files you touched and why, and avoid jargon without a short explanation.

## Where things live
- `src/data/profile.ts` — name, bio, socials, metrics, experience, education, skills
- `src/content/projects/*.md` — one file per project (schema in `src/content.config.ts`)
- `src/styles/global.css` — design tokens (colors, fonts, spacing) at the top
- `src/layouts/BaseLayout.astro` — nav, footer, `<head>`
- `src/components/ProjectCard.astro` — project card
- `src/pages/index.astro` (intro only), `projects/`, `experience.astro`, `education.astro`, `contact.astro` — one page per nav button

## Rules
- Keep content in the data/markdown files, not hardcoded in pages.
- Design: dark, minimal, bold. Near-black background, Outfit / Plus Jakarta Sans / JetBrains Mono (self-hosted via @fontsource). No heavy graphics or animation.
- Never invent achievements, metrics, or certifications. Only use facts Brian provides; leave a TODO comment when something is missing.
- Run `npm run build` to confirm the site builds before committing.
- Commit with clear messages. Ask before pushing, since pushing publishes the live site.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
