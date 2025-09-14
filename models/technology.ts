export type SupportedTechnologyId =
    | "nodejs"
    | "react"
    | "nextjs"
    | "stripe"
    | "clerk"
    | "neondb"
    | "golang"
    | "clang"
    | "stm32"
    | "kicad"
    | "swift"
    | "csharp"
    | "python"
    | "fastapi"
    | "langchain"
    | "chromadb"
    | "figma"
    | "nginx"
    | "docker"

export type Technology = {
    id: SupportedTechnologyId,
    image: string,
    label: string,
    url: string
}