"use client"

import {Conversation, ConversationContent, ConversationScrollButton} from "@/components/ui/shadcn-io/ai/conversation";
import ChatLoadingCover from "@/components/homepage/chatbot/ChatLoadingCover";
import ChatUserMessage from "@/components/homepage/chatbot/ChatUserMessage";
import ChatAssistantMessage from "@/components/homepage/chatbot/ChatAssistantMessage";
import ChatAlertMessage from "@/components/homepage/chatbot/ChatAlertMessage";
import {IoChatbubblesOutline, IoCloseCircleOutline} from "react-icons/io5";
import {useChatbot} from "@/providers/ChatbotProvider";
import GeneratingResponseMessage from "@/components/homepage/chatbot/GeneratingResponseMessage";
import {useViewLoaded} from "@/hooks/useViewLoaded";
import {useStickToBottomContext} from "use-stick-to-bottom";
import {useEffect} from "react";
import {useTranslations} from "next-intl";

export default function ChatTree() {
    const {isLoading, isRefetching} = useChatbot();

    return <div>
        <Conversation>
            <ConversationContent className="relative h-[30rem] flex flex-col">
                <ChatLoadingCover isLoading={isLoading || isRefetching} />
                <InnerContent />
            </ConversationContent>
            <ConversationScrollButton className="cursor-pointer !bg-primary text-primary-foreground border-none shadow-2xl hover:opacity-80"/>
        </Conversation>
    </div>
}

function InnerContent() {
    const {viewLoaded} = useViewLoaded();
    const t = useTranslations("Home.Assistant");
    const tCommon = useTranslations("Home.Common");
    const {isSuccess, isReceivingMessageChunks, initialChunkReceived, historyMessages} = useChatbot();
    const {scrollToBottom} = useStickToBottomContext()

    const content = isSuccess ?
        (historyMessages.length > 0 || isReceivingMessageChunks ?
                <>
                    {
                        historyMessages.map((msg, index) => {
                            if (msg.role === "user") return <ChatUserMessage key={index}>{msg.content}</ChatUserMessage>
                            else if (msg.role === "assistant") return <ChatAssistantMessage key={index} sources={msg.sources}>{msg.content}</ChatAssistantMessage>
                        })
                    }
                    {isReceivingMessageChunks && !initialChunkReceived && <GeneratingResponseMessage/>}
                </> :
                <ChatAlertMessage
                    // @ts-ignore
                    Icon={IoChatbubblesOutline}
                    title="No messages found"
                    description="You still don't have any conversational messages with the chatbot"
                />
        )
        :
        <ChatAlertMessage
            // @ts-ignore
            Icon={IoCloseCircleOutline}
            title={tCommon("somethingWentWrong")}
            description={t("chatbotCouldNotBeLoaded")}
        />

    useEffect(() => {
        scrollToBottom()
    }, [isReceivingMessageChunks, initialChunkReceived]);

    return viewLoaded && content
}