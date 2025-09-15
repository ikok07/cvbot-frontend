import {ReactNode} from "react";

type FooterColumnHeadingProps = {
    children: ReactNode
}

export default function FooterColumnHeading({children}: FooterColumnHeadingProps) {
    return <h3 className="text-lg font-bold">{children}</h3>
}