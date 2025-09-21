"use client"

import {Suggestion, Suggestions} from "@/components/ui/shadcn-io/ai/suggestion";
import {useChatbot} from "@/providers/ChatbotProvider";
import {useTranslations} from "next-intl";

export default function ChatSuggestions() {
    const t = useTranslations("Home.Assistant");
    const {suggestions, handleApplySuggestion} = useChatbot();
    return suggestions.length > 0 && <div className="px-4 py-3">
        <h3 className="text-sm font-bold mb-3 animate-in slide-in-from-bottom-2 ease-in-out fade-in duration-200">{t("suggestions")}:</h3>
        <Suggestions>
            {suggestions.map((s, index) => {
                return <Suggestion
                    key={index}
                    suggestion={s}
                    onClick={() => handleApplySuggestion(s)}
                    className="animate-in slide-in-from-bottom-2 ease-in-out fade-in duration-200 hover:text-background-foreground"
                />
            })}
        </Suggestions>
    </div>
}