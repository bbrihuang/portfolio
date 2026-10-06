# Brian Huang — Portfolio

My personal portfolio site, built with [Astro](https://astro.build).

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

| What | File |
| --- | --- |
| Name, bio, links, experience, education | `src/data/profile.ts` |
| Projects (one file each) | `src/content/projects/*.md` |
| Colors, fonts, spacing | top of `src/styles/global.css` |
| Nav bar and footer | `src/layouts/BaseLayout.astro` |
| Homepage sections | `src/pages/index.astro` |

## Add a project

1. Copy any file in `src/content/projects/` and rename it, e.g. `my-new-thing.md`.
2. Edit the info between the `---` lines. Set `featured: true` to show it on the homepage.
3. Write the case study below the second `---` in Markdown.

It appears at `/projects/my-new-thing/` automatically.
