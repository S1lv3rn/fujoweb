// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      //image: reference('images'),
      tags: z.array(z.string())
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      updDate: z.date(),
      miniDesc: z.string(),
      todo: z.array(z.string()),
      tags: z.array(z.string())
    })
});


// Export a single `collections` object to register your collection(s)
export const collections = { blog, projects};