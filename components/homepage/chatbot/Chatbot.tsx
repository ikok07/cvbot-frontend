"use client"

import SectionHeader from "@/components/homepage/SectionHeader";
import SectionLabel from "@/components/homepage/SectionLabel";
import Chat from "@/components/homepage/chatbot/Chat";
import HomepageSectionClientWrapper from "@/components/homepage/HomepageSectionClientWrapper";
import {useTranslations} from "next-intl";

export default function Chatbot() {
    const t = useTranslations("Home.Assistant");

    return <HomepageSectionClientWrapper sectionId="assistant">
        <section id="assistant">
            <SectionLabel href="/#assistant" className="mx-auto mb-5">{t("label")}</SectionLabel>
            <SectionHeader
                title={t("title")}
                subtitle={t("subtitle")}
            />
            <Chat />
        </section>
    </HomepageSectionClientWrapper>
}