import {z} from "zod";

export const messageSourceSchema = z.object({
    name: z.string(),
    url: z.url().nullable()
});

export type MessageSource = z.infer<typeof messageSourceSchema>;