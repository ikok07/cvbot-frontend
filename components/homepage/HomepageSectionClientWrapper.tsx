"use client"

import {ReactNode, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {useHomepageNavigation} from "@/providers/HomepageNavigationProvider";

type HomepageSectionClientWrapperProps = {
    children: ReactNode,
    sectionId: string
}

export default function HomepageSectionClientWrapper({children, sectionId}: HomepageSectionClientWrapperProps) {
    const {userSectionSelectionEnabled} = useHomepageNavigation();
    const {ref, inView} = useInView({threshold: 1});

    useEffect(() => {
        if (window.location.hash != `#${sectionId}` && !userSectionSelectionEnabled) window.location.hash = sectionId
    }, [inView, userSectionSelectionEnabled]);

    return <div ref={ref}>
        {children}
    </div>
}