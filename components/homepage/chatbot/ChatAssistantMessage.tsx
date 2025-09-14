import {ReactNode} from "react";
import {Message, MessageContent} from "@/components/ui/shadcn-io/ai/message";
import {cn} from "@/lib/utils";

type ChatAssistantMessageProps = {
    children: ReactNode,
    className?: string
}

export default function ChatAssistantMessage({children, className}: ChatAssistantMessageProps) {
    return <Message from="assistant">
        <MessageContent className={cn(
            "group-[.is-assistant]:bg-secondary/10",
            className
        )}>
            {children}
        </MessageContent>
    </Message>
}