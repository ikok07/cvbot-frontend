"use client"

import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";
import {useLocale, useTranslations} from "next-intl";

export default function FooterNavLinks() {
    const locale = useLocale();
    const t = useTranslations("Home.Navigation");
    const {setUserSectionSelectionEnabled} = useHomepageNavigation();

    return <>
        <a className="cursor-pointer hover:text-primary-foreground/90" href={`/${locale === "bg" ? "bg" : ""}#home`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("home")}</a>
        <a className="cursor-pointer hover:text-primary-foreground/90" href={`/${locale === "bg" ? "bg" : ""}#assistant`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("assistant")}</a>
        <a className="cursor-pointer hover:text-primary-foreground/90" href={`/${locale === "bg" ? "bg" : ""}#projects`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("projects")}</a>
    </>
}