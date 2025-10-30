/**
 * Configuration des collections de contenu Astro
 * Collections: blog
 */

import { defineCollection, z } from 'astro:content';

/**
 * Collection Blog
 * Articles de blog pour le SEO et l'engagement utilisateur
 */
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('CentrifugeLab'),
    authorRole: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    category: z.enum([
      'guides',
      'actualites',
      'nouveautes',
      'conseils',
      'maintenance',
      'reglementation',
      'cas-pratiques'
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // SEO
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
