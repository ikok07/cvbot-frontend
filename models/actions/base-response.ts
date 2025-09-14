import {z} from "zod";

export const baseResponseSchema = z.object({
    status: z.string()
});

export type BaseResponse = z.infer<typeof baseResponseSchema>