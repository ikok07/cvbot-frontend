import {PROJECTS, TECHNOLOGIES} from "@/config";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import ProjectDescription from "@/components/homepage/projects/ProjectDescription";
import Link from "next/link";
import {IoLogoGithub} from "react-icons/io";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import {ProjectType} from "@/models/project";

type ProjectsListProps = {
    activeCategory: ProjectType
}

export default function ProjectsList({activeCategory}: ProjectsListProps) {
    return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.filter(p => p.type === activeCategory).map((project, index) => {
            return <Card key={index} className="grid min-h-[14rem] h-max p-0 overflow-hidden gap-0">
                {project.image && <div className="relative w-full aspect-video"><Image src={project.image} alt={project.name} fill className="object-cover" /></div>}
                <div className="flex flex-col justify-between h-full px-3 py-3">
                    <div>
                        <h5 className="text-lg font-bold mb-2">{project.name}</h5>
                        <ProjectDescription>{project.description}</ProjectDescription>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center flex-wrap gap-3">
                            {TECHNOLOGIES.filter(t => project.technology_ids.includes(t.id)).map((technology, index) => {
                                return <Link key={index} className="hover:opacity-80 transition-all duration-200" target="_blank" href={technology.url}><Image src={technology.image} alt={technology.label} width={17} height={17} /></Link>
                            })}
                        </div>
                        <div className="flex items-center gap-3">
                            {project.githubURL && <Link target="_blank" href={project.githubURL}>
                                {project.liveURL
                                    ?
                                    <IoLogoGithub
                                        className="cursor-pointer text-3xl hover:opacity-70 transition-all duration-200"/>
                                    :
                                    <SecondaryButton>
                                        <IoLogoGithub
                                            className="text-3xl"/>
                                        GitHub
                                    </SecondaryButton>}
                            </Link>}
                            {project.liveURL && <Link target="_blank" href={project.liveURL}><PrimaryButton className="text-sm">Live Version</PrimaryButton></Link>}
                        </div>
                    </div>
                </div>
            </Card>
        })}
    </div>
}