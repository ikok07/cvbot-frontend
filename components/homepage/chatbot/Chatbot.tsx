"use client"

import SectionHeader from "@/components/homepage/SectionHeader";
import SectionLabel from "@/components/homepage/SectionLabel";
import Chat from "@/components/homepage/chatbot/Chat";
import HomepageSectionClientWrapper from "@/components/homepage/HomepageSectionClientWrapper";

export default function Chatbot() {
    return <HomepageSectionClientWrapper sectionId="assistant">
        <section id="assistant">
            <SectionLabel href="/#assistant" className="mx-auto mb-5">My assistant</SectionLabel>
            <SectionHeader
                title="All you need to know about me"
                subtitle="Chat with my Custom-Built AI Buddy, Designed to Answer All Your Questions About Me!"
            />
            <Chat />
        </section>
    </HomepageSectionClientWrapper>
}