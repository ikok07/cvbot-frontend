import {ComponentProps} from "react";
import Link from "next/link";
import {Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

type SecondaryButtonProps = {
    href?: string,
    loading?: boolean,
    linkClassName?: string
} & ComponentProps<"button">

export default function SecondaryButton({children, href, onClick, disabled, loading, linkClassName, className, ...props}: SecondaryButtonProps) {
    const button = <Button
        className={
            cn(
                "cursor-pointer font-semibold bg-secondary hover:bg-secondary/70 rounded-full px-5 truncate transition-all duration-200",
                className,
                {
                    "cursor-not-allowed opacity-50": loading || disabled
                }
            )
        }
        onClick={disabled || loading ? () => {} : onClick}
        {...props}
    >
        {loading && <Loader2 className="animate-spin"/>}
        {children}
    </Button>

    if (href) return <Link href={href} className={cn(linkClassName)}>{button}</Link>

    return button;
}