"use client"

import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";

export default function HeroButtons() {
    const locale = useLocale();
    const t = useTranslations("Home.Hero");
    const {setUserSectionSelectionEnabled} = useHomepageNavigation()

    return <div className="flex flex-col sm:flex-row items-center gap-3 mx-auto w-max">
        <PrimaryButton href={`/${locale === "en" ? "" : locale}#assistant`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("askAssistantBtn")}</PrimaryButton>
        <SecondaryButton className="bg-transparent border border-secondary/10 text-secondary shadow-none hover:bg-secondary/5">{t("downloadCVBtn")}</SecondaryButton>
    </div>
}