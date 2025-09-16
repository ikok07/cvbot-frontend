"use client"

import ProjectCategoryButton from "@/components/homepage/projects/ProjectCategoryButton";
import {ProjectType} from "@/models/project";
import {Dispatch, SetStateAction} from "react";
import {useTranslations} from "next-intl";

type ProjectCategorySelectorProps = {
    activeCategory: ProjectType,
    setActiveCategory: Dispatch<SetStateAction<ProjectType>>
}

export default function ProjectCategorySelector({activeCategory, setActiveCategory}: ProjectCategorySelectorProps) {
    const t = useTranslations("Home.Projects");

    return <div className="mx-auto mt-10">
        <h4 className="text-center font-semibold mb-5">{t("chooseCategoryLabel")}</h4>
        <div className="flex items-center justify-center flex-wrap gap-5 w-full">
            <ProjectCategoryButton category="web" activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
                🌎 Web
            </ProjectCategoryButton>
            <ProjectCategoryButton category="mobile" activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
                📱 Mobile
            </ProjectCategoryButton>
            <ProjectCategoryButton category="ai" activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
                🤖 AI
            </ProjectCategoryButton>
            <ProjectCategoryButton category="embedded" activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
                📟 Embedded
            </ProjectCategoryButton>
            <ProjectCategoryButton category="pcb_design" activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
                📐 PCB Design
            </ProjectCategoryButton>
        </div>
    </div>
}