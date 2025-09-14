import {z} from "zod";
import {baseResponseSchema} from "@/models/actions/base-response";

export const messageRole = z.literal(["user", "assistant", "tool"]);

export const historyMessageSchema = z.object({
    role: messageRole,
    content: z.string()
})

export const fetchHistoryResponseSchema = baseResponseSchema.extend({
    data: z.array(historyMessageSchema)
});

export type MessageRole = z.infer<typeof messageRole>;
export type HistoryMessage = z.infer<typeof historyMessageSchema>;
export type FetchHistoryResponse = z.infer<typeof fetchHistoryResponseSchema>;