"use client"

import {Card} from "@/components/ui/card";
import {Conversation, ConversationContent, ConversationScrollButton} from "@/components/ui/shadcn-io/ai/conversation";

import ChatLoadingCover from "@/components/homepage/chatbot/ChatLoadingCover";
import ChatAlertMessage from "@/components/homepage/chatbot/ChatAlertMessage";
import {IoChatbubblesOutline, IoCloseCircleOutline, IoReload, IoReloadOutline} from "react-icons/io5";
import ChatUserMessage from "@/components/homepage/chatbot/ChatUserMessage";
import ChatAssistantMessage from "@/components/homepage/chatbot/ChatAssistantMessage";
import {useViewLoaded} from "@/hooks/useViewLoaded";
import ChatHeader from "@/components/homepage/chatbot/ChatHeader";
import ChatbotProvider from "@/providers/ChatbotProvider";
import ChatInput from "@/components/homepage/chatbot/ChatInput";
import ChatTree from "@/components/homepage/chatbot/ChatTree";

export default function Chat() {

    return <ChatbotProvider>
        <div className="w-[95%] max-w-[50rem] mx-auto mt-10">
            <Card className="p-0 overflow-hidden gap-0">
                <ChatHeader />
                <ChatTree />
                <ChatInput />
            </Card>
        </div>
    </ChatbotProvider>
}