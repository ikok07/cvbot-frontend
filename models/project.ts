import {SupportedTechnologyId, Technology} from "@/models/technology";

export type ProjectType = "web" | "mobile" | "ai" | "embedded" | "pcb_design";

export type Project = {
    type: ProjectType,
    technology_ids: SupportedTechnologyId[],
    image?: string,
    name: string,
    description: string,
    githubURL?: string,
    liveURL?: string,
}