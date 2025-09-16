"use client"

import {ComponentProps, ReactNode} from "react";
import {Message, MessageAvatar, MessageContent} from "@/components/ui/shadcn-io/ai/message";
import {cn} from "@/lib/utils";
import {Source, Sources, SourcesContent, SourcesTrigger} from "@/components/ui/shadcn-io/ai/source";
import {MessageSource} from "@/models/message-source";
import Markdown from "markdown-to-jsx";
import {useTranslations} from "next-intl";

type ChatAssistantMessageProps = {
    children: ReactNode,
    className?: string,
    sources?: MessageSource[]
}

export default function ChatAssistantMessage({children, className, sources}: ChatAssistantMessageProps) {

    const t = useTranslations("Home.Assistant");

    return <>
        <Message from="assistant">
            <MessageContent className={cn(
                "group-[.is-assistant]:bg-border/10 animate-in slide-in-from-left-1 fade-in duration-200",
                className
            )}>
                {children &&
                    <Markdown
                        className="markdown"
                        options={{
                            overrides: {
                                a: (props: ComponentProps<"a">) => <a target="_blank" {...props} />
                            }
                        }}
                    >
                        {children.toString()}
                    </Markdown>
                }
            </MessageContent>
            <MessageAvatar src="/ai.png" name="AI" />
        </Message>
        {sources && sources.length > 0 && <Sources className="text-secondary">
            <SourcesTrigger count={sources.length} className="!text-secondary">{t.rich("usedSources", {count: sources.length})}</SourcesTrigger>
            <SourcesContent>
                {sources.map((s, index) => {
                    if (s.url) return <Source title={s.name} href={s.url} key={index} />
                    else return <Source title={s.name} key={index} />
                })}
            </SourcesContent>
        </Sources>}
    </>
}