import SectionLabel from "@/components/homepage/SectionLabel";
import ProjectCategoriesWrapper from "@/components/homepage/projects/ProjectCategoriesWrapper";
import SectionHeader from "@/components/homepage/SectionHeader";
import TechnologiesCarousel from "@/components/homepage/hero/TechnologiesCarousel";
import HomepageSectionClientWrapper from "@/components/homepage/HomepageSectionClientWrapper";

export default function Projects() {
    return <HomepageSectionClientWrapper sectionId="projects">
        <section id="projects" className="homepage_section">
            <SectionLabel className="mx-auto mb-5" href="/#projects">Projects</SectionLabel>
            <SectionHeader
                title="Discover my experience"
                subtitle="Explore the projects I've built over the past year"
            />
            <ProjectCategoriesWrapper />
            <div className="mx-auto text-center mt-14">
                <h3 className="mb-10 text-xl text-secondary">Technologies I have worked with</h3>
                <TechnologiesCarousel />
            </div>
        </section>
    </HomepageSectionClientWrapper>
}