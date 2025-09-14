"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProjectDescriptionProps {
    children: React.ReactNode;
}

export default function ProjectDescription({ children }: ProjectDescriptionProps) {
    const [isOpened, setIsOpened] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [children]);

    return (
        <div
            className="relative cursor-pointer hover:opacity-90 transition-all duration-200"
            onClick={() => setIsOpened((v) => !v)}
        >
            <div
                className="text-left text-secondary text-sm transition-all duration-300 overflow-hidden"
                style={{
                    maxHeight: isOpened ? `${contentHeight}px` : "5rem",
                }}
            >
                <p ref={contentRef} className="text-sm">
                    {children}
                </p>
            </div>
            <div className={cn(
                "absolute opacity-0 inset-0 bg-gradient-to-t from-white to-transparent transition-all duration-200 z-20",
                {
                    "opacity-100": !isOpened
                }
            )}/>
        </div>
    );
}