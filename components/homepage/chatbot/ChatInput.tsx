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
import {useTranslations} from "next-intl";

type ChatInputProps = {
    isSuccess: boolean,
    setHistoryMessages: Dispatch<SetStateAction<HistoryMessage[]>>
    prompt: string,
    setPrompt: Dispatch<SetStateAction<string>>
}

export default function ChatInput() {
    const t = useTranslations("Home.Assistant");
    const {isSuccess, prompt, setPrompt, isReceivingMessageChunks, handlePromptSubmit} = useChatbot();

    return <div className="p-3">
        <PromptInput className="bg-white" onSubmit={(e) => handlePromptSubmit(e)}>
            <PromptInputTextarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder={t("inputPlaceholder")}
                className="text-sm md:text-[1rem]"
            />
            <PromptInputToolbar className="flex items-center justify-between px-2 pb-2">
                <p className="text-[0.7rem] sm:text-xs text-secondary">
                    {t.rich("chatbotNotice", {a: chunks => <Link target="_blank" href={`${process.env.NEXT_PUBLIC_CHATBOT_REPO_URL!}`} className="text-primary hover:opacity-80">{chunks}</Link>})}
                </p>
                <PromptInputSubmit disabled={!prompt || !isSuccess || isReceivingMessageChunks} className="cursor-pointer rounded-full"/>
            </PromptInputToolbar>
        </PromptInput>
    </div>
}