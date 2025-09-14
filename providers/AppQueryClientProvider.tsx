"use client"

import {ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

type AppQueryClientProviderProps = {
    children: ReactNode
}

export default function AppQueryClientProvider({children}: AppQueryClientProviderProps) {
    const [queryClient] = useState(() => new QueryClient())
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}