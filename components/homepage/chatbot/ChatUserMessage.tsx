import {ReactNode} from "react";
import {Message, MessageContent} from "@/components/ui/shadcn-io/ai/message";
import {cn} from "@/lib/utils";

type ChatUserMessageProps = {
    children: ReactNode,
    className?: string
}

export default function ChatUserMessage({children, className}: ChatUserMessageProps) {
    return <Message from="user">
        <MessageContent className={cn(
            "group-[.is-user]:bg-primary/70",
            className
        )}>
            {children}
        </MessageContent>
    </Message>
}