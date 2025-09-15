"use client"

import {useEffect, useState} from "react";
import NavLink from "@/components/homepage/nav/NavLink";
import {useViewLoaded} from "@/hooks/useViewLoaded";
import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";

export default function HomepageNavigation() {
    const {viewLoaded} = useViewLoaded()
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
            <NavLink active={["", "#", "#home"].includes(hash)} href="/#" onClick={() => setUserSectionSelectionEnabled(true)}>Home</NavLink>
            <NavLink active={hash === "#assistant"} href="/#assistant" onClick={() => setUserSectionSelectionEnabled(true)}>Assistant</NavLink>
            <NavLink active={hash === "#projects"} href="/#projects" onClick={() => setUserSectionSelectionEnabled(true)}>Projects</NavLink>
        </ul>
    </nav>
}