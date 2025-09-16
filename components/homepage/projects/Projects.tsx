import SectionLabel from "@/components/homepage/SectionLabel";
import ProjectCategoriesWrapper from "@/components/homepage/projects/ProjectCategoriesWrapper";
import SectionHeader from "@/components/homepage/SectionHeader";
import TechnologiesCarousel from "@/components/homepage/hero/TechnologiesCarousel";
import HomepageSectionClientWrapper from "@/components/homepage/HomepageSectionClientWrapper";
import {getTranslations} from "next-intl/server";

export default async function Projects() {

    const t = await getTranslations("Home.Projects");

    return <HomepageSectionClientWrapper sectionId="projects">
        <section id="projects" className="homepage_section">
            <SectionLabel className="mx-auto mb-5" href="/#projects">{t("label")}</SectionLabel>
            <SectionHeader
                title={t("title")}
                subtitle={t("subtitle")}
            />
            <ProjectCategoriesWrapper />
            <div className="mx-auto text-center mt-14">
                <h3 className="mb-10 text-xl text-secondary">{t("technologiesLabel")}</h3>
                <TechnologiesCarousel />
            </div>
        </section>
    </HomepageSectionClientWrapper>
}