import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

type SectionLabelProps = {
    children: ReactNode,
    href?: string
    className?: string
}

export default function SectionLabel({children, href, className}: SectionLabelProps) {
    const content = <h4
        className={cn(
            "cursor-pointer bg-primary text-primary-foreground font-bold w-max px-5 py-1 rounded-full hover:-translate-y-1 hover:saturate-150 transition-all duration-200 ease-in-out",
            className
        )}
    >
        {children}
    </h4>

    if (href) return <Link href={href}>{content}</Link>

    return content;
}