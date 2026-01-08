"use client"

import {useState} from "react";
import {ProjectType} from "@/models/project";
import ProjectCategorySelector from "@/components/homepage/projects/ProjectCategorySelector";
import ProjectsList from "@/components/homepage/projects/ProjectsList";

export default function ProjectCategoriesWrapper() {
    const [activeCategory, setActiveCategory] = useState<ProjectType>("cli")

    return <div className="space-y-10">
        <ProjectCategorySelector activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ProjectsList activeCategory={activeCategory} />
    </div>
}