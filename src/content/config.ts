import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    episode: z.number(), // 1, 2, 3...
    date: z.date(),
    intro: z.string(),
    picks: z.array(
      z.object({
        artist: z.string(),
        release: z.string(),
        note: z.string().optional(),
        platform: z.enum(['bandcamp', 'soundcloud', 'spotify']),
        // bandcamp: "album=1234567890" or "track=1234567890"
        // soundcloud: full track/playlist URL
        // spotify: "album/ID" or "track/ID" (the path from the share link)
        embedId: z.string(),
        link: z.string().url(),
      })
    ),
  }),
});

export const collections = { episodes };
