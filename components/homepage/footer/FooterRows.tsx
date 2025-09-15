import {ReactNode} from "react";

type FooterRowsProps = {
    children: ReactNode
}

export default function FooterRows({children}: FooterRowsProps) {
    return <div className="flex flex-col gap-3">
        {children}
    </div>
}