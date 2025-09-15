"use client"

import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";
import {z} from "zod";

const homepageNavigationStateSchema = z.object({
    userSectionSelectionEnabled: z.boolean(),
    setUserSectionSelectionEnabled: z.custom<Dispatch<SetStateAction<boolean>>>()
});

type HomepageNavigationState = z.infer<typeof homepageNavigationStateSchema>;

const Context = createContext<HomepageNavigationState | null>(null);

type HomepageNavigationProviderProps = {
    children: ReactNode
}

export default function HomepageNavigationProvider({children}: HomepageNavigationProviderProps) {
    const [userSectionSelectionEnabled, setUserSectionSelectionEnabled] = useState(false);

    return <Context.Provider value={{
        userSectionSelectionEnabled,
        setUserSectionSelectionEnabled
    }}>
        {children}
    </Context.Provider>
}

export function useHomepageNavigation() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useHomepageNavigation() must be used inside HomepageNavigationProvider");
    }
    return context;
}