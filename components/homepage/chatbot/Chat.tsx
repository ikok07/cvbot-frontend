"use client"

import {Card} from "@/components/ui/card";
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