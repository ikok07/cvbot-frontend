import {z} from "zod";

export const messageChunkTypeSchema = z.literal(["content", "sources", "error"])

export const messageSourceSchema = z.object({
    name: z.string(),
    url: z.url().nullable()
})

export const messageChunkContentSchema = z.object({
    content: z.string(),
    type: z.literal("content")
});

export const messageChunkSourcesSchema = z.object({
    content: z.array(messageSourceSchema),
    type: z.literal("sources")
});

export const messageChunkErrorSchema = z.object({
    content: z.string(),
    type: z.literal("error")
});

export const messageChunkSchema = messageChunkContentSchema
    .or(messageChunkSourcesSchema)
    .or(messageChunkErrorSchema)

export type MessageSource = z.infer<typeof messageSourceSchema>;
export type MessageChunkContent = z.infer<typeof messageChunkContentSchema>;
export type MessageChunkSources = z.infer<typeof messageChunkSourcesSchema>;
export type MessageChunkError = z.infer<typeof messageChunkErrorSchema>;
export type MessageChunkSchema = z.infer<typeof messageChunkSchema>;