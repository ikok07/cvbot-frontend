import {IconType} from "@icons-pack/react-simple-icons";

type ChatAlertMessageProps = {
    Icon: IconType,
    title: string,
    description: string
}

export default function ChatAlertMessage({Icon, title, description}: ChatAlertMessageProps) {
    return <div className="flex flex-col items-center justify-center h-full">
        <Icon className="text-6xl text-secondary mb-2"/>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-secondary">{description}</p>
    </div>
}
