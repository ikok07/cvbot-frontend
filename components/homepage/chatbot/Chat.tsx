"use client"

import {useMemo, useState} from "react";
import useErrorQuery from "@/hooks/useErrorQuery";
import {fetchHistory} from "@/app/actions";
import {Card} from "@/components/ui/card";
import {Conversation, ConversationContent, ConversationScrollButton} from "@/components/ui/shadcn-io/ai/conversation";

import {
    PromptInput,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar
} from "@/components/ui/shadcn-io/ai/prompt-input";
import Link from "next/link";
import ChatLoadingCover from "@/components/homepage/chatbot/ChatLoadingCover";
import ChatAlertMessage from "@/components/homepage/chatbot/ChatAlertMessage";
import {Loader} from "@/components/ui/shadcn-io/ai/loader";
import {cn} from "@/lib/utils";
import ShadowButton from "@/components/ui/buttons/ShadowButton";
import {IoChatbubblesOutline, IoCloseCircleOutline, IoReload, IoReloadOutline} from "react-icons/io5";
import ChatUserMessage from "@/components/homepage/chatbot/ChatUserMessage";
import ChatAssistantMessage from "@/components/homepage/chatbot/ChatAssistantMessage";

const threadId = "27"

export default function Chat() {
    const [prompt, setPrompt] = useState("");

    const {data, isLoading, isSuccess} = useErrorQuery({
        queryFn: () => fetchHistory(threadId),
        queryKey: ["chatbot-history"]
    });

    const messageHistory = useMemo(() => {
        if (!data?.success) return []
        return data.value.data;
    }, [isLoading, isSuccess])

    return <div className="w-[95%] max-w-[50rem] mx-auto mt-10">
        <Card className="p-0 overflow-hidden h-[40rem]">
            <div className="px-4 py-3 bg-border/20 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {isLoading ? <Loader size={15}/> : <div className={cn(
                        "bg-green-500 rounded-full w-2 aspect-square",
                        {
                            "bg-red-500": !isSuccess
                        }
                    )}/>}
                    <h3 className="font-medium">Kaloyan's Assistant</h3>
                    <p className="text-xs text-secondary">| {process.env.NEXT_PUBLIC_CHATBOT_MODEL}</p>
                </div>
                <ShadowButton>
                    <IoReload />
                    <p>Reset chat</p>
                </ShadowButton>
            </div>
            <Conversation>
                <ConversationContent className="relative min-h-[20rem] grid">
                    <ChatLoadingCover isLoading={isLoading} />
                    {isSuccess ?
                        messageHistory.length > 0 ?
                            messageHistory.map((msg, index) => {
                                if (msg.role === "user") return <ChatUserMessage key={index}>{msg.content}</ChatUserMessage>
                                else if (msg.role === "assistant") return <ChatAssistantMessage key={index}>{msg.content}</ChatAssistantMessage>
                            })
                            :
                            <ChatAlertMessage
                                // @ts-ignore
                                Icon={IoChatbubblesOutline}
                                title="No messages found"
                                description="You still don't have any conversational messages with the chatbot"
                            />
                        :
                        <ChatAlertMessage
                            // @ts-ignore
                            Icon={IoCloseCircleOutline}
                            title="Something went wrong"
                            description="The chatbot could not be loaded!"
                        />
                    }
                </ConversationContent>
                <ConversationScrollButton className="cursor-pointer hover:text-background-foreground"/>
            </Conversation>
            <div className="p-3">
                <PromptInput className="bg-white">
                    <PromptInputTextarea
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        placeholder="Ask the assistant anything you want to know about me"
                    />
                    <PromptInputToolbar className="flex items-center justify-between px-2 pb-2">
                        <p className="text-xs text-secondary">
                            * The assistant's source code can be found in my <Link target="_blank" href={`${process.env.NEXT_PUBLIC_CHATBOT_REPO_URL!}`} className="text-primary hover:opacity-80">GitHub Account</Link>
                        </p>
                        <PromptInputSubmit disabled={!prompt} className="cursor-pointer rounded-full"/>
                    </PromptInputToolbar>
                </PromptInput>
            </div>
        </Card>
    </div>
}