import SectionLabel from "@/components/homepage/SectionLabel";
import HomepageSectionClientWrapper from "@/components/homepage/HomepageSectionClientWrapper";
import HeroButtons from "@/components/homepage/hero/HeroButtons";
import {getTranslations} from "next-intl/server";
import LanguageSelector from "@/components/homepage/language-selector/LanguageSelector";

export default async function Hero() {

    const t = await getTranslations("Home.Hero");

    return <HomepageSectionClientWrapper sectionId="home">
        <section id="home" className="homepage_section mt-5">
            <LanguageSelector  className="mx-auto mb-3"/>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">{t.rich("title", {name: chunks => <span className="text-primary">{chunks}</span>})}</h1>
            <p className="text-center max-w-[50rem] mx-auto mb-10 text-sm md:text-lg">{t("subtitle")}</p>
            <HeroButtons />
        </section>
    </HomepageSectionClientWrapper>
}