"use client"

import {useEffect, useState} from "react";
import NavLink from "@/components/homepage/nav/NavLink";
import {useViewLoaded} from "@/hooks/useViewLoaded";
import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";

export default function HomepageNavigation() {
    const locale = useLocale()
    const t = useTranslations("Home.Navigation");
    const {viewLoaded} = useViewLoaded();
    const {setUserSectionSelectionEnabled} = useHomepageNavigation();
    const [hash, setHash] = useState<string>("");

    useEffect(() => {
       if (!viewLoaded) return;

        setHash(window.location.hash);

        const listenHashChange = () => {
            setHash(window.location.hash)
        };

        window.addEventListener("hashchange", listenHashChange);

        return () => window.removeEventListener("hashchange", listenHashChange)
    }, [viewLoaded]);

    return <nav className="fixed hidden md:block left-1/2 top-5 -translate-x-1/2 bg-white !w-max py-2 px-5 rounded-full shadow-lg z-20">
        <ul className="text-sm flex items-center gap-7 w-max">
            <NavLink active={["", "#", "#home"].includes(hash)} href={`/${locale == "en" ? "" : locale}#`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("home")}</NavLink>
            <NavLink active={hash === "#assistant"} href={`/${locale == "en" ? "" : locale}#assistant`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("assistant")}</NavLink>
            <NavLink active={hash === "#projects"} href={`/${locale == "en" ? "" : locale}#projects`} onClick={() => setUserSectionSelectionEnabled(true)}>{t("projects")}</NavLink>
        </ul>
    </nav>
}