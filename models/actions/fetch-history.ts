import {z} from "zod";
import {baseResponseSchema} from "@/models/actions/base-response";
import {messageSourceSchema} from "@/models/message-source";

export const messageRole = z.literal(["user", "assistant", "tool"]);

export const historyMessageSchema = z.object({
    role: messageRole,
    content: z.string(),
    sources: z.array(messageSourceSchema)
})

export const fetchHistoryResponseSchema = baseResponseSchema.extend({
    data: z.array(historyMessageSchema)
});

export type MessageRole = z.infer<typeof messageRole>;
export type HistoryMessage = z.infer<typeof historyMessageSchema>;
export type FetchHistoryResponse = z.infer<typeof fetchHistoryResponseSchema>;