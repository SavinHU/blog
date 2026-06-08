import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		type: z.enum(['blog', 'design', 'product']).default('blog'),
		tags: z.array(z.string()).default([]),
		cover: z.string().optional(),
		summary: z.string().optional(),
	}),
});

const checkins = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/checkins' }),
	schema: z.object({
		title: z.string(),
		startDate: z.coerce.date(),
		current: z.number(),
		target: z.number(),
		unit: z.string().default('天'),
	}),
});

const tools = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
	schema: z.object({
		name: z.string(),
		category: z.string(),
		url: z.string().url(),
		description: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { posts, checkins, tools };
