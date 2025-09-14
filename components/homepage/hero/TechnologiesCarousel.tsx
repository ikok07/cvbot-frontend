"use client"

import {TECHNOLOGIES} from "@/config";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useWindowWidth} from "@react-hook/window-size";
import {useViewLoaded} from "@/hooks/useViewLoaded";

type TechnologiesCarouselProps = {
    className?: string
}

export default function TechnologiesCarousel({className}: TechnologiesCarouselProps) {
    const {viewLoaded} = useViewLoaded()
    const width = useWindowWidth()

    if (!viewLoaded) return

    const items = <div className="flex items-center gap-10">
        {
            TECHNOLOGIES.map((technology, index) => {
                return <Tooltip key={index}>
                    <TooltipTrigger className="cursor-pointer w-max saturate-0 opacity-50 hover:saturate-100 hover:opacity-100 transition-all duration-200">
                        <Link href={technology.url} target="_blank"><Image src={technology.image} alt={technology.label} width={width < 700 ? 65 : 100} height={width < 700 ? 65 : 100}/></Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="font-bold">{technology.label}</p>
                    </TooltipContent>
                </Tooltip>
            })
        }
    </div>

    return <div className={
        cn(
            "relative hero_carousel_wrapper flex items-center gap-10 overflow-hidden",
            className
        )
    }>
        <div className="absolute inset-0 grid grid-cols-2 z-20 pointer-events-none">
            <div className="bg-gradient-to-r from-background to-transparent w-[25%]"/>
            <div className="bg-gradient-to-l from-background to-transparent w-[25%] justify-self-end"/>
        </div>
        <div className="flex gap-10 hero_carousel_group">
            {items}
            {items}
        </div>
    </div>
}