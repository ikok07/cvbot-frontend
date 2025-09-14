import {ReactNode} from "react";
import {Message, MessageAvatar, MessageContent} from "@/components/ui/shadcn-io/ai/message";
import {cn} from "@/lib/utils";
import {Source, Sources, SourcesContent, SourcesTrigger} from "@/components/ui/shadcn-io/ai/source";
import {MessageSource} from "@/models/message-source";

type ChatAssistantMessageProps = {
    children: ReactNode,
    className?: string,
    sources?: MessageSource[]
}

export default function ChatAssistantMessage({children, className, sources}: ChatAssistantMessageProps) {
    return <>
        <Message from="assistant">
            <MessageContent className={cn(
                "group-[.is-assistant]:bg-secondary/10 animate-in slide-in-from-left-1 fade-in duration-200",
                className
            )}>
                {children}
            </MessageContent>
            <MessageAvatar src="/ai.png" name="AI" />
        </Message>
        {sources && sources.length > 0 && <Sources className="text-secondary">
            <SourcesTrigger count={sources.length} className="!text-secondary"></SourcesTrigger>
            <SourcesContent>
                {sources.map(s => {
                    if (s.url) return <Source title={s.name} href={s.url} />
                    else return <Source title={s.name} />
                })}
            </SourcesContent>
        </Sources>}
    </>
}