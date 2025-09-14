"use client"

import SectionHeader from "@/components/homepage/SectionHeader";
import SectionLabel from "@/components/homepage/SectionLabel";
import {Conversation, ConversationContent, ConversationScrollButton} from "@/components/ui/shadcn-io/ai/conversation";
import {Message, MessageContent} from "@/components/ui/shadcn-io/ai/message";
import {Card} from "@/components/ui/card";
import {
    PromptInput,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar
} from "@/components/ui/shadcn-io/ai/prompt-input";
import Link from "next/link";
import {useState} from "react";

export default function Chatbot() {

    const [prompt, setPrompt] = useState("")

    return <section id="assistant">
        <SectionLabel href="/#assistant" className="mx-auto mb-5">My assistant</SectionLabel>
        <SectionHeader
            title="All you need to know about me"
            subtitle="Engage with my custom built chatbot, trained specifically to answer questions targeting me"
        />
        <div className="w-[95%] max-w-[50rem] mx-auto mt-10">
            <Card className="p-0 overflow-hidden">
                <div className="px-4 py-3 bg-border/20 border-b border-border">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-500 rounded-full w-2 aspect-square"/>
                        <h3 className="font-medium">Kaloyan's Assistant</h3>
                        <p className="text-xs text-secondary">| {process.env.NEXT_PUBLIC_CHATBOT_MODEL}</p>
                    </div>
                </div>
                <Conversation>
                    <ConversationContent>
                        <Message from="user">
                            <MessageContent>Hello there</MessageContent>
                        </Message>
                        <Message from="assistant">
                            <MessageContent className="group-[.is-assistant]:bg-secondary/10">Hello! I'm your AI assistant. I can help you with coding questions, explain concepts, and provide guidance on web development topics. What would you like to know?</MessageContent>
                        </Message>
                    </ConversationContent>
                    <ConversationScrollButton />
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
    </section>
}