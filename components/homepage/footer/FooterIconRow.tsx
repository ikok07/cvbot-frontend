import {ReactNode} from "react";
import {IconType} from "@icons-pack/react-simple-icons";

type FooterIconRowProps = {
    Icon: IconType,
    href: string,
    children: ReactNode
}

export default function FooterIconRow({Icon, href, children}: FooterIconRowProps) {
    return <div className="flex items-center gap-3">
        <Icon className="text-lg" />
        <a href={href} target="_blank" className="cursor-pointer hover:text-primary-foreground/90">{children}</a>
    </div>
}