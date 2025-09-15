"use client"

import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";

export default function FooterNavLinks() {
    const {setUserSectionSelectionEnabled} = useHomepageNavigation();

    return <>
        <a className="cursor-pointer hover:text-primary-foreground/90" href="/#" onClick={() => setUserSectionSelectionEnabled(true)}>Home</a>
        <a className="cursor-pointer hover:text-primary-foreground/90" href="/#assistant" onClick={() => setUserSectionSelectionEnabled(true)}>Assistant</a>
        <a className="cursor-pointer hover:text-primary-foreground/90" href="/#projects" onClick={() => setUserSectionSelectionEnabled(true)}>Projects</a>
    </>
}