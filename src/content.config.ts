import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The rulebook for project files in src/content/projects/.
// Every .md file there becomes a page at /projects/<file-name>/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // one sentence, shown on cards
    date: z.coerce.date(), // used for sorting, newest first
    tech: z.array(z.string()),

    // Everything below is optional.
    period: z.string().optional(), // shown instead of the year, e.g. "Jan 2026 – Present"
    category: z.string().optional(), // small label, e.g. "Software", "Aerospace"
    role: z.string().optional(),
    organization: z.string().optional(),
    accent: z.string().optional(), // hex color for the small dot, e.g. "#3b82f6"
    featured: z.boolean().default(false), // true = shown on the homepage
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    repo: z.string().optional(),
    live: z.string().optional(),
  }),
});

export const collections = { projects };
