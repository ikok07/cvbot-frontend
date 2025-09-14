"use server"


import {createServerAction} from "@/utils/createServerAction";
import axios from "axios";
import {FetchHistoryResponse, fetchHistoryResponseSchema} from "@/models/actions/fetch-history";

export const fetchHistory = createServerAction(async (sessionId: string | undefined) => {

    if (!sessionId) throw new Error("Invalid session id!");

    const params = new URLSearchParams();
    params.set("session_id", sessionId);

    const {data} = await axios.get(`${process.env.BACKEND_URL}/api/v1/chatbot/history?${params.toString()}`);
    console.log(data)
    const {data: response, error} = fetchHistoryResponseSchema.safeParse(data);
    if (error) throw new Error(`Invalid response! ${error}`)

    return response as FetchHistoryResponse;
})