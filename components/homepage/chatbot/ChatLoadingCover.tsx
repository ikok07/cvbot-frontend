"use client"

import {Loader} from "@/components/ui/shadcn-io/ai/loader";
import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "@/lib/utils";
import ChatAssistantMessage from "@/components/homepage/chatbot/ChatAssistantMessage";
import {useViewLoaded} from "@/hooks/useViewLoaded";

type ChatLoadingCoverProps = {
    isLoading: boolean
}

export default function ChatLoadingCover({isLoading}: ChatLoadingCoverProps) {

    const {viewLoaded} = useViewLoaded();

    if (!viewLoaded) return;

    return <div className={cn(
        "absolute inset-0 p-5",
        {
            "bg-white": isLoading,
            "pointer-events-none": !isLoading,
        }
    )}>
        <div className={cn(
            "absolute inset-0 bg-background/5 z-20 flex flex-col items-center justify-center gap-3 transition-all duration-100",
            {
                "invisible backdrop-blur-none": !isLoading,
                "visible backdrop-blur-md": isLoading
            }
        )}>
            <Loader size={30} />
            <p className="font-bold">Loading conversation...</p>
        </div>
        <div className={cn(
            "transition-all duration-100",
            {
                "opacity-0": !isLoading,
                "opacity-100": isLoading
            }
        )}>
            <ChatAssistantMessage className="w-[75%] ">
                <Skeleton className="w-full h-[1rem] mb-2 bg-secondary/10"/>
                <Skeleton className="w-full h-[1rem] mb-2 bg-secondary/10"/>
            </ChatAssistantMessage>
        </div>
    </div>
}