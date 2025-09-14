"use client"

import SectionHeader from "@/components/homepage/SectionHeader";
import SectionLabel from "@/components/homepage/SectionLabel";
import Chat from "@/components/homepage/chatbot/Chat";

export default function Chatbot() {
    return <section id="assistant">
        <SectionLabel href="/#assistant" className="mx-auto mb-5">My assistant</SectionLabel>
        <SectionHeader
            title="All you need to know about me"
            subtitle="Engage with my custom built chatbot, trained specifically to answer questions targeting me"
        />
        <Chat />
    </section>
}