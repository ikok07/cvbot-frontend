import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";

type NavLinkProps = {
    children: ReactNode,
    active: boolean,
    href: string,
    className?: string,
    onClick?: () => void
}

export default function NavLink({children, active, href, className, onClick}: NavLinkProps) {
    return <a href={href} onClick={onClick}>
        <li className={
            cn(
                "cursor-pointer px-3 py-1 rounded-full transition-all duration-200",
                {
                    "bg-primary text-primary-foreground font-bold": active,
                    "hover:bg-secondary/10": !active
                }
            )
        }>{children}</li>
    </a>
}