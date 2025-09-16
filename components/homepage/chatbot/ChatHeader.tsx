"use client"

import {Loader} from "@/components/ui/shadcn-io/ai/loader";
import {cn} from "@/lib/utils";
import ShadowButton from "@/components/ui/buttons/ShadowButton";
import {IoReload} from "react-icons/io5";
import {useChatbot} from "@/providers/ChatbotProvider";
import {useViewLoaded} from "@/hooks/useViewLoaded";
import {useTranslations} from "next-intl";

export default function ChatHeader() {
    const t = useTranslations("Home.Assistant");
    const {viewLoaded} = useViewLoaded();
    const {isLoading, isRefetching, isSuccess, handleResetChat} = useChatbot()

    return <div className="px-4 py-3 bg-border/20 border-b border-border flex flex-col md:flex-row items-center justify-between gap-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
                {(isLoading || isRefetching) && viewLoaded ? <Loader size={15}/> : <div className={cn(
                    "bg-green-500 rounded-full w-2 aspect-square",
                    {
                        "bg-red-500": !isSuccess
                    }
                )}/>}
                <h3 className="font-medium">{t("assistantName")}</h3>
            </div>
            <p className="text-xs text-secondary">| {process.env.NEXT_PUBLIC_CHATBOT_MODEL}</p>
        </div>
        <ShadowButton onClick={handleResetChat}>
            <IoReload />
            <p>{t("resetChatBtn")}</p>
        </ShadowButton>
    </div>
}