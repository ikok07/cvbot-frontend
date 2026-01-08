import {SupportedTechnologyId} from "@/models/technology";

export type ProjectType = "web" | "mobile" | "ai" | "cli" | "embedded" | "pcb_design";

export type Project = {
    type: ProjectType,
    technology_ids: SupportedTechnologyId[],
    image?: string,
    name: string,
    description: {
        en: string,
        bg: string
    },
    githubURL?: string,
    liveURL?: string,
}