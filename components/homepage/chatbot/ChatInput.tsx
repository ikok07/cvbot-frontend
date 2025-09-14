"use client"

import {
    PromptInput,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar
} from "@/components/ui/shadcn-io/ai/prompt-input";
import Link from "next/link";
import {Dispatch, SetStateAction} from "react";
import {HistoryMessage} from "@/models/actions/fetch-history";
import {useChatbot} from "@/providers/ChatbotProvider";

type ChatInputProps = {
    isSuccess: boolean,
    setHistoryMessages: Dispatch<SetStateAction<HistoryMessage[]>>
    prompt: string,
    setPrompt: Dispatch<SetStateAction<string>>
}

export default function ChatInput() {
    const {isSuccess, prompt, setPrompt, isReceivingMessageChunks, handlePromptSubmit} = useChatbot();

    return <div className="p-3">
        <PromptInput className="bg-white" onSubmit={(e) => handlePromptSubmit(e)}>
            <PromptInputTextarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Ask the assistant anything you want to know about me"
            />
            <PromptInputToolbar className="flex items-center justify-between px-2 pb-2">
                <p className="text-xs text-secondary">
                    * The assistant's source code can be found in my <Link target="_blank" href={`${process.env.NEXT_PUBLIC_CHATBOT_REPO_URL!}`} className="text-primary hover:opacity-80">GitHub Account</Link>
                </p>
                <PromptInputSubmit disabled={!prompt || !isSuccess || isReceivingMessageChunks} className="cursor-pointer rounded-full"/>
            </PromptInputToolbar>
        </PromptInput>
    </div>
}