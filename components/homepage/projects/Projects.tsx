import SectionLabel from "@/components/homepage/SectionLabel";
import ProjectCategoriesWrapper from "@/components/homepage/projects/ProjectCategoriesWrapper";
import SectionHeader from "@/components/homepage/SectionHeader";
import TechnologiesCarousel from "@/components/homepage/hero/TechnologiesCarousel";

export default function Projects() {
    return <section id="projects" className="homepage_section">
        <SectionLabel className="mx-auto mb-5" href="/#projects">Past experience</SectionLabel>
        <SectionHeader
            title="Some of my projects"
            subtitle="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ProjectCategoriesWrapper />
        <div className="mx-auto text-center mt-14">
            <h3 className="mb-10 text-xl text-secondary">Technologies I have worked with</h3>
            <TechnologiesCarousel />
        </div>
    </section>
}