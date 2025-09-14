
type SectionHeaderProps = {
    title: string,
    subtitle?: string
}

export default function SectionHeader({title, subtitle}: SectionHeaderProps) {
    return <>
        <h1 className="text-center font-bold text-3xl mb-2">{title}</h1>
        <p className="text-center text-secondary">{subtitle}</p>
    </>
}