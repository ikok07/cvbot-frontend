"use client"

import {Button} from "@/components/ui/button";
import {Dispatch, ReactNode, SetStateAction} from "react";
import {ProjectType} from "@/models/project";
import {cn} from "@/lib/utils";

type ProjectCategoryButtonProps = {
    children: ReactNode,
    category: ProjectType,
    activeCategory: ProjectType,
    setActiveCategory: Dispatch<SetStateAction<ProjectType>>
}

export default function ProjectCategoryButton({children, category, activeCategory, setActiveCategory}: ProjectCategoryButtonProps) {

    return <Button onClick={() => setActiveCategory(category)} className={
        cn(
            "cursor-pointer rounded-full font-bold bg-transparent shadow text-foreground",
            {
                "cursor-default bg-primary text-primary-foreground hover:bg-primary": activeCategory === category,
                "hover:bg-primary/80 hover:text-primary-foreground": activeCategory !== category
            }
        )
    }>
        {children}
    </Button>
}