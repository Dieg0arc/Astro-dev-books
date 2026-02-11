/** @format */

// Import necessary utilities from the Astro content module
// defineCollection: Used to configure a new content collection
// z: Zod library for schema validation
import { defineCollection, z } from "astro:content";

/**
 * Define the configuration for the 'books' collection.
 * This establishes the expected data structure for any file found in src/content/books.
 */
const books = defineCollection({
  // Define the schema using Zod objects
  // This ensures that all frontmatter data is validated against these rules
  schema: z.object({
    title: z.string(), // Title must be a string
    author: z.string(), // Author name must be a string
    img: z.string(), // Image path must be a string
    readtime: z.number(), // Reading time must be a number (in minutes)
    description: z.string(), // Book description must be a string

    // Nested object for purchase links
    buy: z.object({
      colombia: z.string().optional(), // Colombia link is a string, but optional
      usa: z.string().optional(), // USA link is a string, but optional
    }),

    // Optional slug. If not provided, Astro generates one from the filename.
    slug: z.string().optional(),
  }),
});

// Export the 'collections' object.
// This key 'books' must match the folder name in src/content/books
export const collections = {
  books: books,
};
