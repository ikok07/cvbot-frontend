import SectionLabel from "@/components/homepage/SectionLabel";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import TechnologiesCarousel from "@/components/homepage/hero/TechnologiesCarousel";

export default function Hero() {
    return <section id="home" className="homepage_section mt-5">
        <SectionLabel className="mx-auto mb-3" href="/#home">Hello there!</SectionLabel>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h1>
        <p className="text-center max-w-[50rem] mx-auto mb-10 text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="flex items-center gap-3 mx-auto w-max">
            <PrimaryButton>Option 1</PrimaryButton>
            <SecondaryButton className="bg-transparent text-secondary shadow-none hover:bg-transparent hover:text-secondary/70">Option 2</SecondaryButton>
        </div>
    </section>
}