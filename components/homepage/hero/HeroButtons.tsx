"use client"

import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";

export default function HeroButtons() {
    const {setUserSectionSelectionEnabled} = useHomepageNavigation()

    return <div className="flex flex-col sm:flex-row items-center gap-3 mx-auto w-max">
        <PrimaryButton href="/#assistant" onClick={() => setUserSectionSelectionEnabled(true)}>Ask my assistant</PrimaryButton>
        <SecondaryButton className="bg-transparent border border-secondary/10 text-secondary shadow-none hover:bg-secondary/5">Download my CV</SecondaryButton>
    </div>
}