import SectionLabel from "@/components/homepage/SectionLabel";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import TechnologiesCarousel from "@/components/homepage/hero/TechnologiesCarousel";
import HomepageSectionClientWrapper from "@/components/homepage/HomepageSectionClientWrapper";
import HeroButtons from "@/components/homepage/hero/HeroButtons";

export default function Hero() {
    return <HomepageSectionClientWrapper sectionId="home">
        <section id="home" className="homepage_section mt-5">
            <SectionLabel className="mx-auto mb-3" href="/#home">Hello there!</SectionLabel>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">I'm <span className="text-primary">Kaloyan</span>, a Full-Stack, AI, and Embedded Systems Developer.</h1>
            <p className="text-center max-w-[50rem] mx-auto mb-10 text-sm md:text-lg">I'm a developer with three years of experience, evolving from web and backend development to exploring Swift for mobile, and now innovating in AI and embedded systems with LangChain, Python, and STM32.</p>
            <HeroButtons />
        </section>
    </HomepageSectionClientWrapper>
}