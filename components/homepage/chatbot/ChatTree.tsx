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

export default function ChatTree() {
    const {isLoading, isRefetching, isSuccess, isReceivingMessageChunks, initialChunkReceived, historyMessages} = useChatbot();
    const {viewLoaded} = useViewLoaded();

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
                title="Something went wrong"
                description="The chatbot could not be loaded!"
            />

    return <Conversation>
        <ConversationContent className="relative h-[30rem] flex flex-col">
            <ChatLoadingCover isLoading={isLoading || isRefetching} />
            {viewLoaded && content}
        </ConversationContent>
        <ConversationScrollButton className="cursor-pointer hover:text-background-foreground"/>
    </Conversation>
}